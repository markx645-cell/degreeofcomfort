import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations, getLocation } from '@/content/locations';

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
  const place = `${loc.neighborhood}, ${loc.city}, ${loc.state}`;
  return {
    title: `Emergency Plumber in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `24/7 emergency plumber in ${place}. Burst pipes, sewer backups, and water heater failures — same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/emergency-plumbing/${loc.slug}` },
    openGraph: {
      title: `Emergency Plumbing in ${place} | ${site.name}`,
      description: `Licensed 24/7 emergency plumbers serving ${place} and nearby west-side neighborhoods.`,
    },
  };
}

// Section 5 — emergencies we fix, each linked to its dedicated service page
const fixFast = [
  { label: 'Burst pipes & water line breaks', href: '/services/leak-repair' },
  { label: 'Sewer line backups', href: '/services/sewer-repair-replacement' },
  { label: 'Water heater leaks & failures', href: '/services/water-heater-repair' },
  { label: 'Clogged & overflowing drains', href: '/services/drain-cleaning' },
  { label: 'Hidden & slab leak detection', href: '/services/leak-detection' },
];

// Section 6 — common emergencies (the local intro is unique per page)
const commonSituations = [
  'Burst or leaking pipes that can flood a home in minutes',
  'Sewer backups pushing wastewater into basements and floor drains',
  'Overflowing or constantly running toilets',
  'A sudden loss of water or water pressure',
  'Water heater leaks or a complete loss of hot water',
  'Failed sump pumps during heavy rain',
];

// Section 7 / 8 — reusable, brand voice
const whyUs = [
  { icon: 'clock' as const, title: '24/7 Same-Day Response', text: 'We answer around the clock and reach most homes the same day, often within hours.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend surcharges.' },
  { icon: 'check' as const, title: 'Repairs That Last', text: 'We fix the underlying cause, not just the symptom, so it stays fixed.' },
];

// Section 12 — related services for the internal-linking mesh
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

  const place = `${loc.neighborhood}, ${loc.city}, ${loc.state}`;

  // Section 10 — localized FAQ first, then shared
  const faqs = [
    ...loc.localFaqs,
    { q: 'What counts as a plumbing emergency?', a: 'Any situation that threatens your home, health, or safety due to water or sewer — burst pipes, overflowing water heaters, sewer backups, and major leaks all qualify. If water is spreading and you cannot stop it, call us.' },
    { q: 'What should I do before the plumber arrives?', a: 'Shut off the main water supply to limit flooding, avoid using the affected fixtures, and clear the area so we can work. Then call us and we will talk you through the rest.' },
    { q: 'Do you charge extra for nights or weekends?', a: 'No. Our flat-rate pricing is the same any day or hour, with no overtime surcharges.' },
  ];

  // Schema: Plumber (LocalBusiness) + Service + FAQPage + BreadcrumbList.
  // No aggregateRating — we do not publish a rating until real reviews back it.
  const plumberSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: `${site.name} — Emergency Plumbing, ${loc.neighborhood}`,
    telephone: site.primaryPhone.number,
    url: `${site.url}/services/emergency-plumbing/${loc.slug}`,
    areaServed: { '@type': 'Place', name: place },
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
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

      {/* 1 H1 + 2 intro (unique) */}
      <PageHero
        eyebrow="Emergency Plumbing"
        title={`Emergency Plumbing in ${place}`}
        description={loc.intro}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
          { label: loc.neighborhood },
        ]}
      />

      {/* 3 Primary CTA — above the fold */}
      <section className="bg-blue-section">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Plumbing emergency in {loc.neighborhood}? We answer 24/7.
          </h2>
          <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0 text-base">
            <Icon name="phone" className="h-5 w-5" />
            Call {site.primaryPhone.number}
          </a>
        </div>
      </section>

      <article className="container-page max-w-3xl py-14">
        {/* 4 Local relevance — THE MOAT (unique) */}
        <section>
          <h2 className="section-title text-brand-700">
            Local emergency plumbers who know {loc.neighborhood}
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/80">
            {loc.relevance.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* 5 Emergencies we fix fast (linked) */}
        <section className="mt-12">
          <h2 className="section-title text-brand-700">
            Emergencies we fix fast in {loc.neighborhood}
          </h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {fixFast.map((f) => (
              <li key={f.label}>
                <Link
                  href={f.href}
                  className="flex items-start gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-100 hover:text-pink-600"
                >
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                  {f.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 6 Most common emergencies in [neighborhood] homes */}
        <section className="mt-12 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
          <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
            Most common emergencies in {loc.neighborhood} homes
          </h2>
          <p className="mt-3 text-sm text-white/90">{loc.commonIntro}</p>
          <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
            {commonSituations.map((c) => (
              <li key={c} className="flex gap-2 text-sm font-medium">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 7 What to expect */}
        <section className="mt-12">
          <h2 className="section-title text-brand-700">What to expect when we arrive</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/80">
            A licensed plumber arrives promptly, finds the source, and takes immediate steps to stop
            the leak, backup, or flooding. We explain the recommended repair and the flat-rate price
            before any work begins — you approve it first. We restore safety and basic function right
            away, then complete the permanent repair as efficiently as possible and clean up before we
            leave.
          </p>
        </section>

        {/* 8 Why choose us */}
        <section className="mt-12">
          <h2 className="section-title text-brand-700">Why {loc.neighborhood} homeowners call us</h2>
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
        </section>

        {/* 9 Local proof — strongest E-E-A-T. Honest placeholders only. */}
        <section className="mt-12 rounded-3xl border border-brand-100 bg-white p-7 sm:p-8">
          <h2 className="section-title text-brand-700">Trusted on the west side</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Licensed & insured in Ohio', '24/7 emergency response', 'Upfront flat-rate pricing'].map((chip) => (
              <span key={chip} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-700">
                <Icon name="check" className="h-3.5 w-3.5 text-lime-500" />
                {chip}
              </span>
            ))}
          </div>
          <figure className="mt-5 border-l-4 border-pink-400 pl-4">
            <blockquote className="text-[15px] italic leading-relaxed text-ink/75">
              &ldquo;Called late at night with water coming up the basement drain. They walked me
              through shutting off the water, showed up fast, and had it cleared the same night.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-xs font-semibold text-ink/50">
              Sample review — replace with a real {loc.neighborhood} / west-side customer review
            </figcaption>
          </figure>
          <p className="mt-5 text-sm text-ink/70">
            Also serving nearby:{' '}
            {loc.adjacent.map((a, i) => (
              <span key={a.slug}>
                <Link href={`/services/emergency-plumbing/${a.slug}`} className="font-semibold text-brand-700 underline hover:text-pink-600">
                  {a.name}
                </Link>
                {i < loc.adjacent.length - 1 ? ', ' : ''}
              </span>
            ))}
            .
          </p>
        </section>

        {/* 10 FAQ */}
        <section className="mt-12">
          <h2 className="section-title text-brand-700">
            Emergency plumbing FAQs — {loc.neighborhood}
          </h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>
        </section>

        {/* 11 Closing CTA */}
        <section className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
            Need an emergency plumber in {loc.neighborhood} now?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
            Do not wait for a small leak to become a flooded basement. Call now for fast, licensed
            service in {place}.
          </p>
          <a href={site.primaryPhone.href} className="btn-pink mt-6 text-base">
            <Icon name="phone" className="h-5 w-5" />
            Call {site.primaryPhone.number}
          </a>
        </section>

        {/* 12 Internal-links module */}
        <section className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-brand-500">
              Emergency plumbers in nearby neighborhoods
            </h2>
            <ul className="mt-3 space-y-1.5">
              {loc.adjacent.map((a) => (
                <li key={a.slug}>
                  <Link href={`/services/emergency-plumbing/${a.slug}`} className="text-sm font-semibold text-brand-800 hover:text-pink-600">
                    Emergency plumber in {a.name} &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
        </section>
      </article>
    </>
  );
}
