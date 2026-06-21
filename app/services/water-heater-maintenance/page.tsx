import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Water Heater Maintenance',
  description: `Water heater maintenance and tune-ups across ${site.serviceArea} from ${site.name} — flushing, anode-rod checks, and safety inspections for tank and tankless systems. Upfront pricing.`,
  alternates: { canonical: '/services/water-heater-maintenance' },
};

const signs = [
  'Hot water runs out faster than usual',
  'Water temperature is inconsistent or takes longer to heat',
  'Strange noises like popping or rumbling from the tank or unit',
  'Rising energy bills with no clear cause',
  'Sediment buildup causing cloudy or discolored water',
  'A noticeable drop in system efficiency or performance',
  'The water heater has not been professionally serviced in over a year',
];

const inspection = [
  'Heater tank condition',
  'Early signs of corrosion',
  'Water supply line connections',
  'Pressure relief valve operation',
  'Thermostat settings',
  'Discharge pipe placement',
  'Pilot light operation on gas water heaters',
  'Heating element condition on electric water heaters',
];

const helps = [
  'Remove sediment from the heater tank',
  'Improve heating efficiency',
  'Keep water temperature steady',
  'Reduce strain on the heating element or burner',
  'Extend the life of your water heater',
  'Lower the risk of leaks or pressure problems',
];

const process = [
  { title: 'Initial System Inspection', text: 'We check the overall condition of your water heater — system age, current performance, and visible wear — and confirm the safety parts are installed correctly.' },
  { title: 'Drain & Flush the Tank', text: 'Sediment buildup is a common problem. We flush the tank through the drain valve, running cold water through the system to push debris out so the unit heats more efficiently.' },
  { title: 'Anode Rod Check', text: 'The anode rod protects the tank from rust and corrosion. We inspect it and recommend replacement if it is worn — a healthy rod helps extend the life of the tank.' },
  { title: 'Final Testing & Optimization', text: 'After service we test the system: water temperature, pressure-relief valve function, and the burner or heating element — for steady, reliable hot water.' },
];

const whyUs = [
  { icon: 'badge' as const, title: 'Tank & Tankless', text: 'We service both traditional tank and tankless systems.' },
  { icon: 'check' as const, title: 'Manufacturer-Recommended Service', text: 'We follow the service practices that help extend system life and protect your warranty.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and detailed, careful inspections.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'What regular maintenance does a water heater need?', a: 'The essentials are an annual flush to clear sediment, an anode-rod inspection, a test of the temperature-and-pressure relief valve, and a check of the thermostat and burner or heating element.' },
  { q: 'How often should I have my water heater inspected or flushed?', a: 'Once a year is the standard recommendation — more often if you have hard water, which is common across the area and speeds up sediment buildup.' },
  { q: 'What are the benefits of water heater maintenance?', a: 'Better efficiency and steadier temperatures, a longer system life, fewer surprise breakdowns, and lower energy bills — plus the safety check on the relief valve and discharge pipe.' },
  { q: 'How can I tell if my water heater needs servicing?', a: 'Running out of hot water faster, popping or rumbling noises, discolored water, higher bills, or simply not having had it serviced in over a year are all good reasons to book a tune-up.' },
  { q: 'What happens if I skip water heater maintenance?', a: 'Sediment keeps building up, efficiency drops, and the tank wears out faster — raising the risk of leaks and early failure. Skipping service can also void the manufacturer’s warranty.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Heater Maintenance',
  description: 'Water heater tune-ups, flushing, anode-rod checks, and safety inspections.',
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
    { '@type': 'ListItem', position: 4, name: 'Water Heater Maintenance', item: `${site.url}/services/water-heater-maintenance` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WaterHeaterMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Water Heater Maintenance in ${site.serviceArea}`}
        description="A yearly tune-up keeps your water heater efficient, safe, and lasting longer. We flush the tank, check the anode rod, and inspect every safety part."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Heater Maintenance' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Time for a water heater tune-up in {site.serviceArea}?
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
            aria-label="Technician performing a water heater tune-up"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Why Water Heater Maintenance Matters
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Your water heater runs every day, and even when it seems fine, wear is still happening
            inside the system. As the unit heats water, sediment settles at the bottom of the tank.
            That buildup traps heat, so the system has to work harder to keep up — leading to higher
            energy use and faster wear over time.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">Routine maintenance helps:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {helps.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Maintenance also helps ensure safety parts like the temperature-and-pressure relief valve
            and discharge pipe work as they should.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs your water heater needs a tune-up (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/wh-signs.jpg)' }}
            role="img"
            aria-label="Technician inspecting a water heater"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs Your Water Heater Needs a Tune-Up
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Common signs your water heater may need a tune-up:
            </p>
            <ul className="mt-4 space-y-1.5">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Scheduling a tune-up can improve efficiency, extend the life of your water heater, and
              prevent unexpected breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Comprehensive inspections (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Comprehensive Water Heater Inspections
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every tune-up includes a full inspection. Our technicians check the parts that most
              often cause problems. During an inspection, we look at:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {inspection.map((i) => (
                <li key={i} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              These checks help catch issues early and reduce the chance of future repairs.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician reviewing a water heater inspection with a homeowner"
          />
        </div>
      </section>

      {/* Process + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Our Water Heater Tune-Up Process</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We take a detailed, step-by-step approach to keep your water heater operating efficiently.
            Here is how our tune-up process works:
          </p>
          <div className="mt-6 space-y-6">
            {process.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-500 font-display text-sm font-black text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for a Tune-Up</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            {site.name} offers thorough water heater tune-ups designed to keep your system running
            safely and efficiently. Our licensed technicians perform detailed inspections, clean key
            components, and address small issues before they become costly repairs. We work with both
            traditional and tankless water heaters and follow manufacturer-recommended service
            practices to help extend system life — with clear communication and dependable, trusted
            local service.
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
          <h2 className="mt-12 section-title text-brand-700">Water Heater Maintenance FAQs</h2>
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
              Schedule Your Water Heater Maintenance Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Maintenance is one of the easiest ways to protect your hot water system and prevent
              unexpected repairs. Call now or request a free estimate.
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
