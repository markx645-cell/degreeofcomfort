import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Tankless Water Heaters',
  description: `Tankless water heater installation, repair, and maintenance across ${site.serviceArea} from ${site.name} — endless hot water, all major brands, properly sized. Upfront pricing.`,
  alternates: { canonical: '/services/tankless-water-heater' },
};

const signs = [
  'Inconsistent or fluctuating hot water, even after repairs',
  'Water that never gets fully hot or runs cold during use',
  'Error codes that keep returning or frequent system shutdowns',
  'Rising energy bills caused by declining efficiency',
  'Mineral buildup or scale issues that continue despite regular descaling',
  'Leaks coming from the unit or visible corrosion',
  'Repairs becoming more frequent or costly as the system ages',
  'The unit is over 15–20 years old and no longer meets your hot water needs',
];

const services = [
  'Tankless water heater installation',
  'Tankless water heater repair',
  'Water heater maintenance and tune-ups',
  'Replacement of tank water heaters with tankless systems',
];

const benefits = [
  'Endless hot water for showers, laundry, and dishes',
  'More energy-efficient operation that can help save money',
  'No stored water sitting in a tank all day',
  'Longer lifespan than a standard tank water heater',
  'Compact size that frees up space',
  'Lower risk of leaks from a tank failure',
];

const repairIssues = [
  'Scale buildup in the heat exchanger',
  'Sensor or ignition problems',
  'Electrical issues in electric units',
  'Gas supply or gas line concerns',
  'Reduced flow rate affecting heating performance',
];

const repairIf = [
  'The system is under 10 years old',
  'The issue is limited and repairable',
  'Hot water output is still consistent',
  'Maintenance has been routine',
];

const replaceIf = [
  'Repairs are happening more often',
  'Hot water demand has increased',
  'Efficiency has declined over time',
  'Repair costs are close to the cost of replacement',
  'You want to upgrade to a more energy-efficient model',
];

const tuneUp = [
  'Flushing the system to remove scale',
  'Inspecting the heat exchanger',
  'Testing sensors and safety controls',
  'Verifying flow rate and temperature output',
];

const whyUs = [
  { icon: 'badge' as const, title: 'All Major Brands', text: 'Our licensed technicians work with every major tankless brand, gas or electric.' },
  { icon: 'check' as const, title: 'Properly Sized', text: 'We evaluate flow rate, demand, and utility access so the system heats without strain.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked plumbers and installations done to code.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'What is a tankless water heater, and how does it work?', a: 'Instead of storing hot water in a tank, a tankless unit heats water on demand as it flows through a heat exchanger. That means endless hot water and none of the standby energy loss that comes from keeping a tank hot all day.' },
  { q: 'How long does a tankless water heater last?', a: 'With routine maintenance, a tankless system often lasts 15–20 years — roughly double the lifespan of a standard tank water heater.' },
  { q: 'Do tankless water heaters need regular maintenance?', a: 'Yes. An annual flush to remove scale keeps the unit efficient and protects its warranty — and it matters even more in hard-water areas, which is much of the region.' },
  { q: 'How much space does a tankless water heater require?', a: 'Very little. The unit mounts on a wall and is roughly the size of a small suitcase, freeing up the floor space a bulky tank used to take.' },
  { q: 'What is involved in installing a tankless water heater?', a: 'We size the unit to your household’s demand, handle any gas, electrical, or venting upgrades it needs, mount and connect it, then test for proper flow and temperature before we finish.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Tankless Water Heater Services',
  description: 'Tankless water heater installation, repair, replacement, and maintenance.',
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
    { '@type': 'ListItem', position: 4, name: 'Tankless Water Heaters', item: `${site.url}/services/tankless-water-heater` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
          <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function TanklessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Tankless Water Heaters in ${site.serviceArea}`}
        description="Endless hot water, lower bills, and a smaller footprint. We install, repair, and maintain tankless systems from every major brand."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Tankless Water Heaters' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Tankless water heater service in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/tankless-hero.jpg)' }}
            role="img"
            aria-label="Tankless water heater mounted on a wall"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Tankless Water Heaters
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A tankless water heater heats water on demand instead of storing it, giving your home
            endless hot water and lower energy bills. {site.name} installs, repairs, and maintains
            tankless systems across {site.serviceArea}, working with every major brand and sizing each
            system to your home’s real demand.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you are upgrading from a tank, fixing an error code, or keeping a healthy unit
            running with a tune-up, every job comes with upfront, flat-rate pricing you approve before
            we start.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a new tankless (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/tankless-unit.jpg)' }}
            role="img"
            aria-label="Tankless water heater unit"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need a New Tankless Water Heater
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Common signs it may be time for a new tankless water heater:
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
              If several of these are happening at once, replacement is often more cost-effective than
              continued repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Comprehensive services (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Comprehensive Tankless Water Heater Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Tankless water heaters require specialized installation and care. {site.name} provides
              full-service support to keep your system operating safely and efficiently. Our services
              include:
            </p>
            <ul className="mt-4 space-y-1.5">
              {services.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Each service focuses on performance, safety, and long-term reliability.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber discussing tankless water heater options with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Benefits of Switching to a Tankless Water Heater</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Traditional tank water heaters store a limited amount of hot water — once it runs out, you
            wait for the tank to refill and reheat. Tankless models work differently: water flows
            through a heat exchanger and the system heats it instantly. That design delivers endless
            hot water and avoids the energy loss that happens when stored water cools between uses.
          </p>
          <BulletList items={benefits} />
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Both gas and electric tankless models perform well when properly sized. Our technicians
            evaluate flow rate, household demand, and utility access so the system heats water
            efficiently without strain.
          </p>

          {/* Repair */}
          <h2 className="mt-12 section-title text-brand-700">Tankless Water Heater Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When a water heater has an issue, it affects your entire home. Temperature changes, error
            codes, or reduced hot water output are signs the system needs attention. Common repair
            issues include:
          </p>
          <BulletList items={repairIssues} />
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Prompt repairs protect energy efficiency and help prevent larger system failures.
          </p>

          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Deciding whether to repair or replace your system depends on its age, performance, and
            repair history.
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
              <h3 className="font-display text-base font-extrabold text-brand-700">Replacement may be better if…</h3>
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
            Replacing an aging system before it fails reduces downtime and unexpected expenses. We
            help you understand the cost, the long-term savings, and your financing options.
          </p>

          {/* Tune-ups */}
          <h2 className="mt-12 section-title text-brand-700">Tankless Water Heater Tune-Ups</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Regular maintenance keeps a tankless system running efficiently. Without routine service,
            mineral buildup can restrict flow and reduce heating performance. A professional tune-up
            includes:
          </p>
          <BulletList items={tuneUp} />
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Routine tune-ups help extend system life and maintain your warranty coverage.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Tankless Water Heater Services
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            {site.name} brings trusted experience and local expertise to every tankless water heater
            service. Our licensed technicians work with all major brands and focus on accurate
            diagnostics, efficient repairs, and proper installation so your system performs at its
            best. We take the time to explain your options, recommend solutions that fit your home and
            budget, and complete work to high professional standards — with prompt scheduling and a
            commitment to long-term performance.
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
          <h2 className="mt-12 section-title text-brand-700">Tankless Water Heater FAQs</h2>
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
              Schedule Tankless Water Heater Service Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Installation, repair, or maintenance — we provide clear guidance, dependable service,
              and financing options. Call now or request a free estimate.
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
