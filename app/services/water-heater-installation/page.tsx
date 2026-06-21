import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Water Heater Installation',
  description: `Water heater installation and replacement across ${site.serviceArea} from ${site.name} — proper sizing, code-compliant install, and financing. Tank and tankless. Same-day service.`,
  alternates: { canonical: '/services/water-heater-installation' },
};

const signs = [
  'Inconsistent or lukewarm hot water',
  'Rust-colored water from faucets',
  'Leaks around the tank or base',
  'Popping or rumbling noises',
  'Water temperature that changes unexpectedly',
  'A unit that is 10 to 15 years old',
];

const installSteps = [
  'Evaluating household hot water usage',
  'Selecting the correct water heater size',
  'Removing the existing unit safely',
  'Installing new connections and valves',
  'Setting the proper water temperature',
  'Testing the system before completion',
];

const benefits = [
  'Faster hot water recovery',
  'More consistent water temperature',
  'Improved energy efficiency',
  'Lower risk of leaks or water damage',
  'Updated safety features and valves',
  'Better performance for today’s household demands',
];

const repairIf = [
  'The unit is relatively new',
  'The issue is minor or isolated',
  'Hot water performance has been reliable',
];

const replaceIf = [
  'The unit is nearing the end of its lifespan',
  'Repairs are becoming more frequent',
  'The tank shows signs of corrosion or leaks',
  'Hot water demand has increased',
  'Safety concerns are present',
];

const whyUs = [
  { icon: 'check' as const, title: 'Proper Sizing', text: 'We match the system to your household so you get enough hot water without strain.' },
  { icon: 'shield' as const, title: 'Licensed & To Code', text: 'Background-checked plumbers and code-compliant installation from day one.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Move forward with installation now without a large upfront cost.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'What shortens the life of a water heater?', a: 'The biggest factors are sediment and scale buildup from hard water, water pressure that is set too high, skipped annual flushes, and corrosion once the anode rod wears out. Routine maintenance addresses most of them.' },
  { q: 'How long does it take to remove and install a hot water heater?', a: 'A standard tank-for-tank swap usually takes a few hours. Switching to tankless, relocating the unit, or upgrading gas or venting takes longer — we will give you a clear time estimate up front.' },
  { q: 'What size water heater do I need for my home?', a: 'It depends on your household size and peak demand. As a rough guide, many families do well with a 40–50 gallon tank, but we size it to your actual usage — or recommend a tankless unit for endless hot water.' },
  { q: 'How often should I flush my water heater?', a: 'About once a year to clear sediment and keep it efficient — more often if you have hard water, which is common across the area.' },
  { q: 'Do electric water heaters last longer than gas water heaters?', a: 'Electric units often last a little longer because they have fewer combustion components, but water quality and regular maintenance affect lifespan far more than fuel type.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Heater Installation & Replacement',
  description: 'Tank and tankless water heater installation and replacement with proper sizing.',
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
    { '@type': 'ListItem', position: 4, name: 'Water Heater Installation', item: `${site.url}/services/water-heater-installation` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WaterHeaterInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Water Heater Installation in ${site.serviceArea}`}
        description="Replacing a failing unit or upgrading for more hot water? We size it right and install it to code — tank or tankless — with financing available."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Heater Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need a new water heater in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/wh-hero.jpg)' }}
            role="img"
            aria-label="New water heater installed by a licensed plumber"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Water Heater Installation & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When your home needs dependable hot water, {site.name} installs and replaces water heaters
            across {site.serviceArea} — tank or tankless — sized to your household and installed to
            code. We help you choose the right system and manage every step from start to finish.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Every installation comes with upfront, flat-rate pricing you approve before we start, plus
            financing options so a new water heater does not have to wait.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need to replace (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/wh-signs.jpg)' }}
            role="img"
            aria-label="Plumber inspecting a water heater"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need to Replace Your Water Heater
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Most water heaters show warning signs before they fail completely. Recognizing them
              early can help you avoid an emergency replacement and potential water damage. Common
              signs you may need a replacement:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              If your tank water heater no longer meets your household needs, replacing it before a
              full failure can save you a lot of trouble.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Water Heater Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Professional installation plays a key role in performance and lifespan. Our team follows
              a proven process to make sure every system is installed correctly. Our process includes:
            </p>
            <ul className="mt-4 space-y-1.5">
              {installSteps.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              This careful approach helps ensure reliable hot water and long-term performance.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber discussing water heater installation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Benefits of a New Water Heater</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing a new water heater does more than bring hot water back to your home — modern
            systems run more efficiently and more reliably than older units. Benefits of a new
            installation include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Choosing the correct size helps ensure your home has enough hot water for showers,
            laundry, and dishes without putting extra strain on the system.
          </p>

          {/* Replacing your old water heater */}
          <h2 className="mt-12 section-title text-brand-700">Replacing Your Old Water Heater</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Replacing an old water heater is often about preventing future problems, not just fixing a
            current one. Over time, internal corrosion, sediment buildup, and worn components reduce
            reliability — even if the unit still produces hot water.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Upgrading to a new system restores confidence in your home’s hot water supply. Homeowners
            often notice steadier temperatures and fewer worries about unexpected breakdowns, and
            replacing an aging unit before it fails helps avoid water damage and emergency service
            calls.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our team helps you determine when replacement makes sense based on the system’s condition,
            your household’s needs, and long-term reliability.
          </p>

          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Not every water heater issue requires full replacement. Sometimes a repair restores
            performance; other times replacement is the safer, more cost-effective long-term option.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-base font-extrabold text-brand-700">Repair may make sense if…</h3>
              <ul className="mt-3 space-y-1.5">
                {repairIf.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-ink/75">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-lime-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-display text-base font-extrabold text-brand-700">Replacement is often better if…</h3>
              <ul className="mt-3 space-y-1.5">
                {replaceIf.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-ink/75">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            The right choice comes down to reliability and risk — continuing to repair an aging system
            can mean repeated service calls and higher long-term costs. Our technicians help you weigh
            your immediate needs against future replacement so you can decide with confidence.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing a New Water Heater</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A new water heater is an important investment, but it does not have to delay service.{' '}
            {site.name} offers financing options that let homeowners move forward with a replacement
            or installation without a large upfront cost — so you can restore hot water when timing
            matters most.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Water Heater Installation
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            {site.name} delivers dependable water heater installation backed by skilled workmanship
            and local expertise. Our licensed technicians help you choose the right system, handle
            proper sizing and code-compliant installation, and make sure everything is set up for
            safe, efficient operation from day one — with clear communication, upfront
            recommendations, and clean, professional work, plus reliable scheduling and support after
            the install.
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
          <h2 className="mt-12 section-title text-brand-700">Water Heater Installation FAQs</h2>
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
              Schedule Your Water Heater Installation Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Dependable installation and replacement backed by experience, clear communication, and
              financing options. Call now or request a free estimate.
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
