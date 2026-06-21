import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Plumbing Installation',
  description: `Professional plumbing installation across ${site.serviceArea} from ${site.name} — fixtures, water heaters, sump pumps, sewer lines, filtration, and softeners installed leak-free. Upfront pricing.`,
  alternates: { canonical: '/services/plumbing-installation' },
};

const signs = [
  { lead: 'Persistent leaks or drips', text: 'even small leaks cause damage over time — warped floors, ruined cabinets, and mold.' },
  { lead: 'Rust or corrosion', text: 'discolored pipes or rusted fixtures mean your plumbing is deteriorating and may soon fail.' },
  { lead: 'Low water pressure', text: 'reduced flow often signals clogged pipes, corrosion, or outdated plumbing.' },
  { lead: 'Unusual noises', text: 'banging, clanging, or gurgling from your pipes points to issues that need a professional.' },
  { lead: 'Outdated fixtures', text: 'older plumbing may not meet today’s efficiency standards, raising water and energy costs.' },
  { lead: 'Frequent repairs', text: 'if you constantly need fixes, a full installation can be the cheaper choice.' },
];

const fixtures = [
  { title: 'Bathroom Fixtures', text: 'Sinks, faucets, tubs, showers, and toilets installed with proper alignment, secure connections, and leak-free performance.' },
  { title: 'Sump Pumps', text: 'Standard and battery-backup systems to keep your basement dry during heavy rain or a power outage.' },
  { title: 'Sewer Line Installations', text: 'Full replacements and trenchless installs, connected to code with minimal disruption to your property.' },
  { title: 'Traditional Water Heaters', text: 'Reliable tank water heater installation and replacement, sized to your household and built to last.' },
  { title: 'Tankless Water Heaters', text: 'Energy-efficient, space-saving systems that heat water on demand so you never run out.' },
  { title: 'Water Filtration Systems', text: 'Remove chlorine, lead, and other contaminants for cleaner, healthier water throughout your home.' },
  { title: 'Water Softener Systems', text: 'Remove hard-water minerals to protect appliances and extend the life of your plumbing.' },
];

const whyUs = [
  { icon: 'heart' as const, title: 'Family-Run & Local', text: 'A local team that genuinely cares about your home and your time.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers and to-code installations.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'Transparent estimates you approve before any work begins.' },
  { icon: 'check' as const, title: 'Satisfaction Guarantee', text: 'We are not done until your new fixture works exactly as it should.' },
];

const faqs = [
  { q: 'How do I know if I need a new plumbing installation or just repairs?', a: 'If a fixture or pipe is old, corroded, or repeatedly failing, a new installation is often cheaper than paying for the same repair again and again. We assess what you have and tell you honestly which is the better value.' },
  { q: 'Can I finance my plumbing project?', a: 'Yes. For larger projects like water heaters, sewer lines, or whole-home work, we offer financing with a quick application and flexible terms, so a big upgrade does not have to wait.' },
  { q: 'What is the best way to maintain my plumbing fixtures?', a: 'Address small leaks early, keep an eye on water pressure, clean faucet aerators, flush your water heater about once a year, and have aging galvanized or cast-iron lines inspected.' },
  { q: 'Do you offer same-day plumbing installations?', a: 'In many cases, yes. We staff for demand and handle most fixture and water-heater installs the same day you call.' },
  { q: 'Are plumbing installations covered by warranty?', a: 'Fixtures and equipment carry their manufacturer warranties, and our workmanship is guaranteed. We will walk you through the coverage on your specific install before we begin.' },
  { q: 'Can I replace just one plumbing fixture, or do I need a full installation?', a: 'Either works. We are happy to install a single fixture or handle a complete plumbing installation — whatever your home needs.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plumbing Installation',
  description: 'Installation of plumbing fixtures, water heaters, sump pumps, sewer lines, filtration, and softeners.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Plumbing', item: `${site.url}/services/plumbing` },
    { '@type': 'ListItem', position: 4, name: 'Plumbing Installation', item: `${site.url}/services/plumbing-installation` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function PlumbingInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Plumbing Installation in ${site.serviceArea}`}
        description="New fixtures, water heaters, sump pumps, and more — installed properly, securely, and leak-free by licensed plumbers, with upfront pricing."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Plumbing Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Planning a plumbing installation? Call for service
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
            style={{ backgroundImage: 'url(/services/plumbing-install-hero.jpg)' }}
            role="img"
            aria-label="Licensed plumber installing a new fixture"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Plumbing Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            From a single new faucet to a whole-home system, {site.name} installs plumbing fixtures
            the right way for homeowners across {site.serviceArea} — properly aligned, securely
            connected, and leak-free. Our licensed plumbers help you choose fixtures that fit your
            home and budget, then install them to last.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Every installation comes with upfront, flat-rate pricing you approve before we start, and
            same-day service whenever possible.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs it's time to replace fixtures (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/plumbing-install-signs.jpg)' }}
            role="img"
            aria-label="Plumber discussing fixture options with a homeowner"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs It’s Time to Replace Your Plumbing Fixtures
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Even high-quality fixtures eventually wear down. Replacing old or broken fixtures can
              stop water damage and lower your utility bills, making your home more comfortable and
              efficient. Common signs it may be time for a new installation:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{s.lead}:</span> {s.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              {site.name} can check your home, find the problem areas, and recommend the best
              solution — whether that is replacing one fixture or a complete installation — with
              transparent estimates before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Emergency Plumbing Installation Services (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Emergency Plumbing Installation Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Plumbing emergencies can strike at any time. A broken water line, a failed water heater,
              or a sewer backup all call for quick action to help prevent damage to your home.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              {site.name} offers emergency plumbing installation 24 hours a day, seven days a week.
              Our team responds promptly, assesses the situation, and performs the installations or
              repairs that restore your home to safe, working order.
            </p>
            <Link href="/services/emergency-plumbing" className="btn-pink mt-6 inline-flex">
              Emergency Plumbing
            </Link>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber responding to an emergency installation"
          />
        </div>
      </section>

      {/* Fixture types + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Types of Plumbing Fixtures We Install</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We install a wide range of plumbing fixtures and systems, each set up to prevent leaks,
            improve efficiency, and add to the comfort of your home:
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {fixtures.map((f) => (
              <div key={f.title} className="card">
                <h3 className="font-display text-base font-extrabold text-brand-700">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Your Plumbing Installation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We are more than your average plumbing company — a family-run business dedicated to
            exceptional service. When you choose {site.name} for your plumbing installation across{' '}
            {site.serviceArea}, you get a team that genuinely cares about your home.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our plumbers do not just handle kitchen and bathroom fixtures — we are also here for water
            heater installation, plumbing repairs, and drain service. Whether it is a leaky pipe or a
            clogged drain, we bring the same expertise to every job, and our satisfaction guarantee
            means we are not finished until you are happy.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
          <h2 className="mt-12 section-title text-brand-700">Plumbing Installation FAQs</h2>
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
              Schedule Your Plumbing Installation Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              From choosing the right fixture to the final leak check, we handle every detail. Call
              now or request a free estimate — we are happy to answer your questions.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.primaryPhone.href} className="btn-pink text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/free-estimate" className="btn-outline border-white text-white hover:bg-white/10">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
