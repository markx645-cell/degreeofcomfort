import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
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
    title: `Emergency Plumbing in ${place}`,
    description: `24/7 emergency plumbing in ${place} from ${site.name} — burst pipes, sewer backups, and water heater failures, with same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/emergency-plumbing/${loc.slug}` },
    openGraph: {
      title: `Emergency Plumbing in ${place} | ${site.name}`,
      description: `Licensed 24/7 emergency plumbers serving ${place} and the surrounding area.`,
    },
  };
}

const fixFast = [
  'Burst pipes and water line breaks',
  'Leaking or overflowing water heaters',
  'Sewer line backups and clogged drains',
  'Sudden toilet or faucet failures',
  'Emergency installations and general repairs',
];

const commonSituations = [
  'Burst or leaking pipes that can quickly flood your home',
  'Sewer backups pushing wastewater into sinks, tubs, or floor drains',
  'Overflowing toilets that will not stop running or flushing',
  'No water or a sudden loss of water pressure throughout the home',
  'Water heater leaks or a complete loss of hot water',
  'Major drain clogs causing repeated backups in multiple fixtures',
];

const whyUs = [
  { icon: 'clock' as const, title: 'Fast, Same-Day Response', text: 'We answer 24/7 and reach most homes the same day, often within hours.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Pricing', text: 'Flat-rate quotes approved before we start — no overtime or weekend fees.' },
  { icon: 'check' as const, title: 'Repairs That Last', text: 'We fix the real cause, not just the symptom, so it stays fixed.' },
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

  const faqs = [
    { q: `What counts as a plumbing emergency in ${loc.neighborhood}?`, a: 'Any situation that threatens your home, health, or safety due to water or sewer issues — burst pipes, overflowing water heaters, sewer backups, and major leaks all qualify.' },
    { q: `How soon can your emergency plumbers reach ${loc.neighborhood}?`, a: `We prioritize speed. Our emergency plumbers aim to arrive in ${loc.neighborhood} the same day, often within hours of your call.` },
    { q: 'What should I do if a pipe bursts before you arrive?', a: 'Shut off the main water supply immediately to limit flooding, avoid using affected fixtures, and call our team. Our licensed plumbers handle the rest.' },
    { q: 'Do you charge extra for nights or weekends?', a: 'No. Our flat-rate pricing is the same any day or hour, with no overtime surcharges.' },
  ];

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Emergency Plumbing"
        title={`Emergency Plumbing in ${place}`}
        description={`Burst pipe, no water, or a sewer backup in ${loc.neighborhood}? Our licensed plumbers are on call around the clock and reach most homes the same day.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
          { label: loc.neighborhood },
        ]}
      />

      {/* Immediate-call banner */}
      <section className="bg-blue-section">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Plumbing Emergency in {loc.neighborhood}? Call for Immediate Service
          </h2>
          <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0 text-base">
            <Icon name="phone" className="h-5 w-5" />
            Call {site.primaryPhone.number}
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          {/* Local intro — unique per location */}
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Your 24/7 Emergency Plumbers in {loc.neighborhood}
          </h2>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/75">
            {loc.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Can fix fast */}
          <h2 className="mt-12 section-title text-brand-700">
            Plumbing Emergencies We Fix Fast in {loc.neighborhood}
          </h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {fixFast.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-semibold text-pink-600">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {f}
              </li>
            ))}
          </ul>

          {/* Most common situations — band */}
          <div className="mt-10 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
            <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              Most Common Emergencies in {loc.neighborhood} Homes
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Older {loc.city} housing stock means plumbing emergencies often arrive without warning.
              The situations we handle most often include:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {commonSituations.map((c) => (
                <li key={c} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Local & trusted banner */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Your Local &amp; Trusted Emergency Plumbers in {loc.neighborhood}
            </h2>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              Get Peace of Mind Today!
            </a>
          </div>

          {/* Why choose */}
          <h2 className="mt-12 section-title text-brand-700">
            Why {loc.neighborhood} Homeowners Choose {site.name}
          </h2>
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

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">
            Emergency Plumbing FAQs — {loc.neighborhood}
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

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Call Today for Emergency Plumbing in {loc.neighborhood}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Do not wait for a small leak to become a flooded basement. Call now for fast, reliable
              service from licensed plumbers serving {place}.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6 text-base">
              <Icon name="phone" className="h-5 w-5" />
              Call {site.primaryPhone.number}
            </a>
            <p className="mt-4 text-xs text-brand-200">
              See our full{' '}
              <Link href="/services/emergency-plumbing" className="underline hover:text-white">
                emergency plumbing services
              </Link>
              .
            </p>
          </div>
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
