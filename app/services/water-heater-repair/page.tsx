import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Water Heater Repair',
  description: `Fast water heater repair across ${site.serviceArea} from ${site.name} — no hot water, leaks, noises, and pilot or element issues, on all major brands. 24/7 emergency service.`,
  alternates: { canonical: '/services/water-heater-repair' },
};

const signs = [
  'No hot water or only cold water coming from taps',
  'Inconsistent water temperature during use',
  'A leaking water heater or moisture near the tank',
  'Rusty or discolored water',
  'Unusual noises like popping, banging, or rumbling',
  'The water heater not heating properly',
  'Pilot light issues or frequent system shutdowns',
];

const problems = [
  'Heating element failure in electric water heaters',
  'Gas burner, gas-flow, or ignition problems',
  'Thermostat problems causing uneven or cold water',
  'Pressure relief valve issues that lead to leaks',
  'Sediment buildup reducing heating efficiency',
  'Leaks from corrosion or worn fittings',
  'Tankless issues related to sensors or flow rate',
];

const whyUs = [
  { icon: 'badge' as const, title: 'All Major Brands', text: 'We repair gas, electric, and tankless water heaters from every major brand.' },
  { icon: 'clock' as const, title: '24/7 Emergency Repair', text: 'A leak or no hot water after hours? We respond day or night.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians who diagnose accurately and fix it right.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'Why is my water heater not producing hot water?', a: 'On an electric unit it is usually a failed heating element or thermostat; on a gas unit it is often a pilot, ignition, or gas-supply issue. A tank thick with sediment can also struggle to heat. We diagnose which it is and fix it.' },
  { q: 'What causes a leaking water heater?', a: 'Leaks come from a failing temperature-and-pressure relief valve, loose fittings, or corrosion inside the tank. A valve or fitting leak is usually a quick repair; a tank that is rusted through means it is time to replace.' },
  { q: 'How fast can you repair a water heater?', a: 'Most repairs are handled the same day — we carry common parts — and we are on call 24/7 for emergencies like a leak or a total loss of hot water.' },
  { q: 'Do you repair gas and electric water heaters?', a: 'Yes — gas, electric, and tankless, on all major brands.' },
  { q: 'How do I know if I should repair or replace?', a: 'If the unit is under about 10 years old and the issue is isolated, a repair makes sense. If it is older, leaking from the tank, or failing repeatedly, replacement is usually the better long-term value — and we will tell you honestly which we would do.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Heater Repair',
  description: 'Repair of gas, electric, and tankless water heaters on all major brands.',
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
    { '@type': 'ListItem', position: 4, name: 'Water Heater Repair', item: `${site.url}/services/water-heater-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WaterHeaterRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Water Heater Repair in ${site.serviceArea}`}
        description="No hot water, a leak, or strange noises? Our licensed technicians diagnose the cause and restore reliable hot water fast — gas, electric, or tankless."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Heater Repair' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            No hot water in {site.serviceArea}? Call for immediate service
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
            aria-label="Technician repairing a water heater"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Water Heater Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When your water heater quits, it disrupts the whole house. {site.name} provides fast,
            reliable water heater repair across {site.serviceArea} — from no hot water and leaks to
            noises and pilot-light trouble — on gas, electric, and tankless systems from all major
            brands.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We diagnose the real cause, explain it clearly, and quote a flat rate before any work
            begins — with 24/7 availability when a failure cannot wait.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/wh-signs.jpg)' }}
            role="img"
            aria-label="Technician servicing a water heater"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Water Heater Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Everything {site.name} does is fueled by passion. We are a family-owned company that
              specializes in plumbing, heating, cooling, and electrical.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Water heaters often show warning signs before they stop working completely. Addressing
              problems early helps prevent water damage, higher repair costs, and a sudden loss of hot
              water. Common signs you may need repair:
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
              If you notice sudden temperature changes or run out of hot water faster than normal,
              professional troubleshooting can identify the cause before the issue worsens.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During Water Heater Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              When you schedule water heater repair with {site.name}, you can expect straightforward
              communication and thorough service. Our technicians begin with a detailed inspection and
              diagnostics to identify the root cause of the issue.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We check key components such as the tank, water supply connections, thermostats, heating
              elements, and safety controls. If we find sediment buildup, pressure-relief valve
              issues, or internal wear, we explain how those problems affect performance and safety.
              Before any work begins, you will understand what is causing the issue and what repair
              options are available.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Our goal is to restore reliable hot water while making sure your system operates safely
              and efficiently.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician explaining a water heater repair to a homeowner"
          />
        </div>
      </section>

      {/* Problems + emergency + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Common Water Heater Problems</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Over time, normal use leads to wear and performance issues. Our technicians repair a wide
            range of water heater problems, including:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These problems reduce efficiency and comfort if left unaddressed. Timely repair restores
            hot water and protects your system from further damage.
          </p>

          {/* Emergency */}
          <h2 className="mt-12 section-title text-brand-700">Emergency Water Heater Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Some problems need immediate attention. A leaking water heater, a total loss of hot water,
            or a gas-related concern can quickly become a property or safety risk. {site.name} offers
            emergency water heater repair with 24/7 availability across {site.serviceArea}.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If your water heater fails outside normal business hours, our team is available day or
            night. Whether you wake up to cold water, find a leak late in the evening, or hit a sudden
            shutdown, we are here to stabilize the situation, restore hot water when possible, and
            prevent further damage to your home.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h3 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Water heater emergency? We answer 24/7.
            </h3>
            <Link href="/services/emergency-plumbing" className="btn-pink flex-shrink-0">
              Emergency Plumbing
            </Link>
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Water Heater Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            {site.name} provides fast, reliable water heater repair from licensed technicians who know
            how to diagnose problems accurately and fix them the right way. We service all major
            brands and address issues quickly to restore hot water and prevent further damage. Our
            team explains the problem clearly, offers honest recommendations, and focuses on repairs
            that improve safety and efficiency.
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
          <h2 className="mt-12 section-title text-brand-700">Water Heater Repair FAQs</h2>
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
              Get Fast, Reliable Water Heater Repair Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              When your water heater stops working, you need fast, dependable service backed by
              experience and honest recommendations. Call now or request a free estimate.
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
