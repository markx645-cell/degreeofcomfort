import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations, getLocation, getNearby } from '@/content/locations';

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};
  const place = loc.city
    ? `${loc.neighborhood}, ${loc.city}, ${loc.state}`
    : `${loc.neighborhood}, ${loc.state}`;
  return {
    title: `Emergency Plumber in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `24/7 emergency plumber in ${place}. Burst pipes, sewer backups, and water heater failures — same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/emergency-plumbing/${loc.slug}` },
    openGraph: {
      title: `Emergency Plumbing in ${place} | ${site.name}`,
      description: `Licensed 24/7 emergency plumbers serving ${place} and nearby neighborhoods.`,
    },
  };
}

// Reusable, from the master page — the "fix fast" bullets in the intro.
const fixFast = [
  'Burst pipes and water line breaks',
  'Leaking or overflowing water heaters',
  'Sewer line backups and clogged drains',
  'Sudden toilet or faucet failures',
  'Emergency installations and general repairs',
];

// Reusable image cards (link to related service pages).
const relatedCards = [
  { slug: 'leak-repair', title: 'Leak Repair' },
  { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
  { slug: 'water-heater-repair', title: 'Water Heater Repair' },
  { slug: 'drain-cleaning', title: 'Drain Cleaning' },
];

const commonSituations = [
  'Burst or leaking pipes that can quickly flood your home',
  'Sewer backups causing wastewater to back up into sinks, tubs, or floor drains',
  'Overflowing toilets that will not stop running or flushing',
  'No water or a sudden loss of water pressure throughout the home',
  'Water heater leaks or a complete loss of hot water',
  'Major drain clogs causing repeated backups in multiple fixtures',
  'Failed sump pumps during heavy rain',
];

const whyUs = [
  { icon: 'clock' as const, title: 'Fast, Same-Day Response', text: 'We answer 24/7 and reach most homes the same day, often within hours.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Pricing', text: 'Flat-rate quotes approved before we start — no overtime or weekend fees.' },
  { icon: 'check' as const, title: 'Repairs That Last', text: 'We fix the real cause, not just the symptom, so it stays fixed.' },
];

const relatedServices = [
  { label: 'Emergency Plumbing (overview)', href: '/services/emergency-plumbing' },
  { label: 'Leak Repair', href: '/services/leak-repair' },
  { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
  { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
  { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
];

export default async function LocationEmergencyPlumbingPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  const place = loc.city
    ? `${loc.neighborhood}, ${loc.city}, ${loc.state}`
    : `${loc.neighborhood}, ${loc.state}`;
  const nearby = getNearby(loc);

  // Localized FAQ first, then the shared set.
  const faqs = [
    ...loc.localFaqs,
    { q: 'What is a plumbing emergency?', a: 'Any situation that threatens your home, health, or safety due to water or sewer issues — burst pipes, overflowing water heaters, sewer backups, and major leaks all qualify. If water is spreading and you cannot stop it, call us.' },
    { q: 'What should I do before the plumber arrives?', a: 'Shut off the main water supply to limit flooding, avoid using the affected fixtures, and clear the area so we can work. Then call us and we will talk you through the rest.' },
    { q: 'Do you charge extra for nights or weekends?', a: 'No. Our flat-rate pricing is the same any day or hour, with no overtime surcharges.' },
  ];

  // Schema: Plumber (LocalBusiness) + Service + FAQPage + BreadcrumbList.
  const plumberSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: `${site.name} — Emergency Plumbing, ${loc.neighborhood}`,
    telephone: site.primaryPhone.number,
    url: `${site.url}/services/emergency-plumbing/${loc.slug}`,
    areaServed: { '@type': 'Place', name: place },
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city ?? loc.neighborhood,
      addressRegion: loc.state,
      ...(loc.zip ? { postalCode: loc.zip } : {}),
      addressCountry: 'US',
    },
    openingHours: 'Mo-Su 00:00-23:59',
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Emergency Plumbing',
    description: `24/7 emergency plumbing repair in ${place}.`,
    provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
    areaServed: { '@type': 'Place', name: place },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      { '@type': 'ListItem', position: 3, name: 'Emergency Plumbing', item: `${site.url}/services/emergency-plumbing` },
      { '@type': 'ListItem', position: 4, name: loc.neighborhood, item: `${site.url}/services/emergency-plumbing/${loc.slug}` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* H1 + intro (unique per neighborhood) */}
      <PageHero
        eyebrow="Emergency Plumbing"
        title={`24/7 Emergency Plumbing in ${place}`}
        description={loc.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
          { label: loc.neighborhood },
        ]}
      />

      {/* Immediate-call banner (full width) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Plumbing emergency in {loc.neighborhood}? Call for immediate service
          </h2>
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
            style={{ backgroundImage: 'url(/services/emergency-hero.jpg)' }}
            role="img"
            aria-label={`Licensed plumber responding to a plumbing emergency in ${loc.neighborhood}`}
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Plumbing Emergencies We Fix Fast in {loc.neighborhood}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When a plumbing emergency strikes in {loc.neighborhood}, every minute counts — and problems
            rarely happen on a convenient schedule. That is why {site.name} offers 24/7 service for every
            emergency across {place}. From a minor leak to a major water line failure, our licensed
            plumbers handle each situation with speed and precision. Common emergencies we fix include:
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {fixFast.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-semibold text-pink-600">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A burst pipe or sewer backup can cause thousands of dollars in damage in just a few hours, so
            getting help quickly is key to minimizing loss. Our team arrives quickly, assesses the
            problem, and completes the repair efficiently — protecting your home and delivering
            long-lasting results.
          </p>

          {/* Local relevance — THE MOAT (unique per neighborhood) */}
          <h2 className="mt-10 section-title text-brand-700">
            Local emergency plumbers who know {loc.neighborhood}
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/80">
            {loc.relevance.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Related services — image cards (from master) */}
          <h2 className="mt-10 section-title text-brand-700">Related Plumbing Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {relatedCards.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                  <span
                    className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(/services/${s.slug}.jpg)` }}
                  />
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
        </MainWithSidebar>
      </section>

      {/* Band: Most Common Situations (photo left) — tailored intro */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/emergency-situations.jpg)' }}
            role="img"
            aria-label={`Burst pipe and water damage in ${loc.neighborhood}`}
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Most Common Emergencies in {loc.neighborhood} Homes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">{loc.commonIntro}</p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {commonSituations.map((c) => (
                <li key={c} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local & trusted banner */}
      <section className="py-12">
        <div className="container-page">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Your Local &amp; Trusted Emergency Plumbers in {loc.neighborhood}
            </h2>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              Get Peace of Mind Today
            </a>
          </div>
        </div>
      </section>

      {/* Band: What to Expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect When We Arrive in {loc.neighborhood}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              When you call for emergency plumbing service, the priority is to respond quickly and limit
              damage to your home. A licensed plumber arrives promptly, assesses the situation, and takes
              immediate steps to stop active leaks, backups, or flooding.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              After identifying the cause, the plumber explains the recommended repair and the flat-rate
              price before any work begins — you approve it first. We restore safety and basic function
              right away, then complete the permanent repair as efficiently as possible and clean up before
              we leave.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/emergency-expect.jpg)' }}
            role="img"
            aria-label="Plumber reviewing the repair with a homeowner"
          />
        </div>
      </section>

      {/* Prose + why us + FAQ + mesh + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-brand-700">Emergency Plumbing Services in {place}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Plumbing emergencies call for fast action, and our team is always ready to help {loc.neighborhood}
                {' '}homeowners. Whether you are facing a water leak, a blocked pipe, or a sewer-line issue, we
                deliver professional solutions and focus on restoring your home as quickly as possible. A
                serious plumbing problem is stressful, so we are here to take the weight off your shoulders —
                we approach every emergency with genuine care and a focus on your well-being.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">Burst Pipes and Our Process</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                A burst pipe can release hundreds of gallons of water a day, so a fast response prevents
                structural damage, electrical hazards, and mold growth. We respond immediately, shut off the
                water supply to stop the damage, and make the repair efficiently. We inspect the affected
                area, repair or replace the damaged piping, and confirm your system is fully operational
                before we leave — plus tips to help you prevent future bursts.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">24-Hour Plumber in {loc.neighborhood}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Plumbing disasters do not wait for business hours, which is why we are available around the
                clock. As your trusted 24-hour plumber in {place}, we respond promptly to minimize damage and
                restore comfort to your home. We arrive with the tools, expertise, and dedication to fix the
                issue quickly.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">Same-Day Plumbing to Get Your Home Back in Shape</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                From a leaky faucet to the emergency installation of a new water heater, we provide same-day
                service whenever possible. Our goal is to restore your home quickly, reduce disruption, and
                prevent further damage. Every job is completed with care, attention to detail, and an emphasis
                on durability, so your plumbing keeps working reliably long after the emergency is over.
              </p>
            </div>
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why {loc.neighborhood} Homeowners Call Us</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
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

          {/* Local proof — honest sample review + nearby links */}
          <div className="mt-12 rounded-3xl border border-brand-100 bg-white p-7 sm:p-8">
            <h2 className="section-title text-brand-700">Trusted across {site.serviceArea}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Licensed & insured', '24/7 emergency response', 'Upfront flat-rate pricing'].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700">
                  <Icon name="check" className="h-3.5 w-3.5 text-lime-500" />
                  {chip}
                </span>
              ))}
            </div>
            <figure className="mt-5 border-l-4 border-pink-400 pl-4">
              <blockquote className="text-[15px] italic leading-relaxed text-ink/75">
                &ldquo;Called late at night with water coming up the basement drain. They walked me through
                shutting off the water, showed up fast, and had it cleared the same night.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-xs font-semibold text-ink/50">
                Sample review — replace with a real {loc.neighborhood} customer review
              </figcaption>
            </figure>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Emergency Plumbing FAQs — {loc.neighborhood}</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          {/* Internal-links module — nearby neighborhoods + related services */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {nearby.length > 0 && (
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
                  Emergency plumbers in nearby areas
                </h2>
                <ul className="mt-3 space-y-1.5">
                  {nearby.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/services/emergency-plumbing/${a.slug}`} className="text-sm font-semibold text-brand-800 hover:text-pink-600">
                        Emergency plumber in {a.name} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
                Related plumbing services
              </h2>
              <ul className="mt-3 space-y-1.5">
                {relatedServices.map((s) => (
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Need an Emergency Plumber in {loc.neighborhood} Now?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Do not wait for a small leak to become a flooded basement. Call now for fast, licensed service
              in {place}.
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
