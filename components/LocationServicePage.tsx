import Link from 'next/link';
import Icon, { type IconName } from './Icon';
import PageHero from './PageHero';
import PageSections from './PageSections';
import MainWithSidebar from './Sidebar';
import Accordion from './Accordion';
import { site } from '@/content/site';
import type { Location, Adjacent } from '@/content/locations';

// Unique, per-neighborhood copy authored for one specific service.
// (Sections that must be unique: intro, the local-relevance moat, the
// common-problems lead-in, and at least one localized FAQ.)
export type LocationServiceCopy = {
  intro: string;
  relevance: string[];
  commonIntro: string;
  localFaqs: { q: string; a: string }[];
};

// Reusable, write-once-per-service config — mirrors that service's MASTER page
// so location pages carry the full experience (banners, sidebar, photo bands,
// prose, PageSections), just tailored to the neighborhood. Strings may contain
// {neighborhood} / {place} / {brand} / {area} tokens.
export type ServiceLocationConfig = {
  slug: string;
  serviceName: string;
  eyebrow: string;
  hubLabel: string;
  parentCrumb?: { label: string; href: string };
  businessType: string; // schema @type: 'HVACBusiness' | 'Plumber' | 'Electrician'
  schemaServiceType: string;
  ctaLine: string; // orange top banner heading
  heroImage: string; // sidebar hero photo
  promo?: string; // optional lime promo callout
  introHeading: string; // sidebar H2
  introParagraphs: string[];
  sidebarSections?: { title: string; body: string[] }[]; // extra prose in the main column
  relatedCards: { slug: string; title: string }[]; // image cards
  band1Image: string;
  band1Heading: string; // uses copy.commonIntro + commonSituations
  commonSituations: string[];
  trustedBanner: string;
  band2Image: string;
  band2Heading: string;
  band2Paragraphs: string[];
  proseSections: { title: string; body: string }[];
  whyTitle: string;
  whyUs: { icon: IconName; title: string; text: string }[];
  proofQuote: string;
  sharedFaqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export default function LocationServicePage({
  config,
  loc,
  copy,
  nearby,
}: {
  config: ServiceLocationConfig;
  loc: Location;
  copy: LocationServiceCopy;
  nearby: Adjacent[];
}) {
  const place = loc.city
    ? `${loc.neighborhood}, ${loc.city}, ${loc.state}`
    : `${loc.neighborhood}, ${loc.state}`;
  const fill = (s: string) =>
    s
      .split('{neighborhood}').join(loc.neighborhood)
      .split('{place}').join(place)
      .split('{brand}').join(site.name)
      .split('{area}').join(site.serviceArea);

  const faqs = [...copy.localFaqs, ...config.sharedFaqs];

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': config.businessType,
    name: `${site.name} — ${config.serviceName}, ${loc.neighborhood}`,
    telephone: site.primaryPhone.number,
    url: `${site.url}/services/${config.slug}/${loc.slug}`,
    areaServed: { '@type': 'Place', name: place },
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city ?? loc.neighborhood,
      addressRegion: loc.state,
      ...(loc.zip ? { postalCode: loc.zip } : {}),
      addressCountry: 'US',
    },
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: config.schemaServiceType,
    description: `${config.serviceName} in ${place}.`,
    provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
    areaServed: { '@type': 'Place', name: place },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      ...(config.parentCrumb
        ? [{ '@type': 'ListItem', position: 3, name: config.parentCrumb.label, item: `${site.url}${config.parentCrumb.href}` }]
        : []),
      { '@type': 'ListItem', position: config.parentCrumb ? 4 : 3, name: config.hubLabel, item: `${site.url}/services/${config.slug}` },
      { '@type': 'ListItem', position: config.parentCrumb ? 5 : 4, name: loc.neighborhood, item: `${site.url}/services/${config.slug}/${loc.slug}` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    ...(config.parentCrumb ? [config.parentCrumb] : []),
    { label: config.hubLabel, href: `/services/${config.slug}` },
    { label: loc.neighborhood },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero + intro (unique) */}
      <PageHero eyebrow={config.eyebrow} title={`${config.serviceName} in ${place}`} description={copy.intro} crumbs={crumbs} />

      {/* Orange call banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">{fill(config.ctaLine)}</h2>
          <a
            href={site.primaryPhone.href}
            className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: `url(${config.heroImage})` }}
            role="img"
            aria-label={`${config.serviceName} in ${loc.neighborhood}`}
          />
          {config.promo && (
            <div className="mb-5 rounded-2xl bg-lime-500 px-5 py-3 text-center font-display text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
              {fill(config.promo)}
            </div>
          )}
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            {fill(config.introHeading)}
          </h2>
          {config.introParagraphs.map((p, i) => (
            <p key={i} className="mt-4 text-[17px] leading-relaxed text-ink/75">{fill(p)}</p>
          ))}

          {/* Local relevance — THE MOAT (unique) */}
          <h2 className="mt-10 section-title text-brand-700">
            Local {config.serviceName.toLowerCase()} pros who know {loc.neighborhood}
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/80">
            {copy.relevance.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {config.sidebarSections?.map((sec) => (
            <div key={sec.title}>
              <h2 className="mt-10 section-title text-brand-700">{fill(sec.title)}</h2>
              {sec.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-ink/75">{fill(p)}</p>
              ))}
            </div>
          ))}

          {/* Related services — image cards */}
          {config.relatedCards.length > 0 && (
            <>
              <h2 className="mt-10 section-title text-brand-700">Related Services</h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {config.relatedCards.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                      <span className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105" style={{ backgroundImage: `url(/services/${s.slug}.jpg)` }} />
                      <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-600" />
                      <span className="absolute inset-0 grid place-items-center p-3 text-center">
                        <span className="font-display text-[13px] font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] sm:text-sm">
                          {s.title}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </MainWithSidebar>
      </section>

      {/* Band 1: common problems (photo left) — localized lead */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: `url(${config.band1Image})` }} role="img" aria-label={`${config.serviceName} in ${loc.neighborhood}`} />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">{fill(config.band1Heading)}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">{copy.commonIntro}</p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {config.commonSituations.map((c) => (
                <li key={c} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trusted banner */}
      <section className="py-12">
        <div className="container-page">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">{fill(config.trustedBanner)}</h2>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              Get Peace of Mind Today
            </a>
          </div>
        </div>
      </section>

      {/* Band 2: what to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">{fill(config.band2Heading)}</h2>
            {config.band2Paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-sm leading-relaxed text-white/90">{fill(p)}</p>
            ))}
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: `url(${config.band2Image})` }} role="img" aria-label={`${config.serviceName} service in ${loc.neighborhood}`} />
        </div>
      </section>

      {/* Lower prose + why us + proof + FAQ + mesh + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <div className="space-y-8">
            {config.proseSections.map((sec) => (
              <div key={sec.title}>
                <h2 className="section-title text-brand-700">{fill(sec.title)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{fill(sec.body)}</p>
              </div>
            ))}
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">{fill(config.whyTitle)}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {config.whyUs.map((w) => (
              <div key={w.title} className="card flex gap-3.5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{w.title}</h3>
                  <p className="text-sm text-ink/70">{w.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Local proof */}
          <div className="mt-12 rounded-3xl border border-brand-100 bg-white p-7 sm:p-8">
            <h2 className="section-title text-brand-700">Trusted across {site.serviceArea}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Licensed & insured', 'Upfront flat-rate pricing', 'Same-day service'].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700">
                  <Icon name="check" className="h-3.5 w-3.5 text-lime-500" />
                  {chip}
                </span>
              ))}
            </div>
            <figure className="mt-5 border-l-4 border-pink-400 pl-4">
              <blockquote className="text-[15px] italic leading-relaxed text-ink/75">&ldquo;{config.proofQuote}&rdquo;</blockquote>
              <figcaption className="mt-2 text-xs font-semibold text-ink/50">
                Sample review — replace with a real {loc.neighborhood} customer review
              </figcaption>
            </figure>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">{config.serviceName} FAQs — {loc.neighborhood}</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))}
              defaultOpen={0}
            />
          </div>

          {/* Internal-links module */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {nearby.length > 0 && (
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">{config.hubLabel} in nearby areas</h2>
                <ul className="mt-3 space-y-1.5">
                  {nearby.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/services/${config.slug}/${a.slug}`} className="text-sm font-semibold text-brand-800 hover:text-pink-600">
                        {config.serviceName} in {a.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">Related services</h2>
              <ul className="mt-3 space-y-1.5">
                {config.related.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm font-semibold text-brand-800 hover:text-pink-600">
                      {s.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Need {config.serviceName} in {loc.neighborhood}?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Call now for fast, licensed service in {place}, or request a free estimate.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6 text-base">
              <Icon name="phone" className="h-5 w-5" />
              Call {site.primaryPhone.number}
            </a>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
