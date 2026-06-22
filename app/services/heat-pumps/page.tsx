import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations, locationsByGroup } from '@/content/locations';
import { heatPumpsCopy } from '@/content/location-copy/heat-pumps';

export const metadata: Metadata = {
  title: 'Heat Pumps',
  description: `Heat pump repair, installation, and replacement across ${site.serviceArea} from ${site.name} — year-round heating and cooling, mini-split and traditional systems. Financing available.`,
  alternates: { canonical: '/services/heat-pumps' },
};

const signs = [
  'Inconsistent temperatures or rooms that will not heat or cool properly',
  'Reduced airflow from vents',
  'Unusual noises such as grinding, rattling, or buzzing',
  'Heat pump running constantly or short cycling',
  'Rising energy bills with no change in usage',
  'Ice buildup on the outdoor unit',
  'System blowing air that is not warm or cool enough',
];

const repairReplace = [
  { lead: 'Repair', text: 'best for units under 10 years old with minor issues — a thermostat, clogged filters, or small electrical problems.' },
  { lead: 'Replace', text: 'worth considering if the system is 10–15 years old, repair costs are high, or comfort and efficiency have dropped.' },
];

const whyUs = [
  { icon: 'check' as const, title: 'Year-Round Comfort', text: 'One system that heats in winter and cools in summer, serviced for both.' },
  { icon: 'badge' as const, title: 'Mini-Split & Traditional', text: 'We install and repair ductless mini-splits and conventional heat pump systems.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians with the specialized heat pump know-how it takes.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible plans so an energy-efficient upgrade is affordable now.' },
];

const faqs = [
  { q: 'What is the difference between a heat pump and a furnace?', a: 'A furnace burns fuel (usually gas) to create heat. A heat pump moves heat instead of making it — and it cools your home in summer too — which makes it very efficient in our milder cold. Many homes pair the two in a dual-fuel setup.' },
  { q: 'How often should I schedule heat pump maintenance?', a: 'Because a heat pump runs year-round, twice a year is ideal — once before heating season and once before cooling season — though at least one annual tune-up keeps it efficient.' },
  { q: 'What are SEER and HSPF ratings, and why do they matter?', a: 'SEER measures cooling efficiency and HSPF measures heating efficiency. Higher numbers mean the system uses less energy to do the same work — which means lower utility bills. We help you weigh efficiency against budget when choosing a system.' },
  { q: 'Why is my heat pump not heating or cooling properly?', a: 'Common causes are low refrigerant, a dirty filter or coils, a stuck reversing valve, a thermostat issue, or an iced-up outdoor unit. Our technicians diagnose the exact cause rather than guessing.' },
  { q: 'What warranty options are available for heat pumps?', a: 'New equipment carries a manufacturer warranty (often 10 years when registered), and our workmanship is guaranteed. We review the specific coverage on your system before installation.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Heat Pump Repair & Installation',
  description: 'Heat pump repair, installation, and replacement for year-round heating and cooling.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Heating', item: `${site.url}/services/heating` },
    { '@type': 'ListItem', position: 4, name: 'Heat Pumps', item: `${site.url}/services/heat-pumps` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HeatPumpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title={`Heat Pumps in ${site.serviceArea}`}
        description="Repair, installation, and replacement for one efficient system that heats and cools your home all year — mini-split or traditional."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Heat Pumps' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Heat pump trouble in {site.serviceArea}? Call for service
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
            style={{ backgroundImage: 'url(/services/heat-pump-hero.jpg)' }}
            role="img"
            aria-label="Heat pump system at a home"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Heat Pump Repair & Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When your heat pump is not keeping your home comfortable, you need expert help fast.{' '}
            {site.name} focuses on heat pump repair and installation for homeowners across{' '}
            {site.serviceArea}.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            If your system blows cool air in winter, struggles to cool in summer, or breaks down
            often, we can help — our certified technicians identify the problem and fix it.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            And if repairs are not cost-effective, we help you with heat pump replacement and
            installation to keep your home energy-efficient all year.
          </p>

          {/* Heat pump installation */}
          <h2 className="mt-10 section-title text-brand-700">Heat Pump Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Heat pumps are one of the most cost-effective heating and cooling solutions available — a
            single system that both heats and cools your home, which makes it a smart year-round
            investment across {site.serviceArea}.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            {site.name} installs mini-split heat pumps, high-efficiency systems, and traditional units
            that fit your home’s needs.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our team handles everything — sizing, installation, and system testing — so you enjoy
            reliable comfort and lower energy bills from day one.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/heat-pumps.jpg)' }}
            role="img"
            aria-label="Outdoor heat pump unit"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need a Heat Pump Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Heat pumps work year-round to provide both heating and cooling, so even small issues can
              affect comfort and efficiency. Recognizing the warning signs early helps prevent larger
              system problems and unexpected breakdowns:
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
              If you notice any of these issues, professional heat pump repair can help restore
              performance and protect your system.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During Your Heat Pump Service
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Heat pump service focuses on keeping your system running efficiently in both heating and
              cooling modes. During the appointment, a technician inspects key components, checks
              refrigerant levels, tests airflow, and makes sure the system is operating safely and
              correctly.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Any issues found are explained along with recommended adjustments or repairs. After
              service is complete, the system is tested to confirm proper performance, and routine
              maintenance tips may be provided to help improve efficiency and extend the life of your
              heat pump.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician reviewing heat pump service with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Repair or replace */}
          <h2 className="section-title text-brand-700">Repair or Replace?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If your heat pump breaks down often or is not keeping your home comfortable, you may wonder
            whether it is time to replace it. A quick guide:
          </p>
          <ul className="mt-4 space-y-2.5">
            {repairReplace.map((r) => (
              <li key={r.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <span className="font-semibold text-brand-800">{r.lead}:</span> {r.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our technicians walk you through the decision with honest advice to help you save money and
            restore peace of mind.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing a New Heat Pump</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A new heat pump is a major investment, so {site.name} offers flexible financing to make
            upgrading affordable. With competitive plans, you can enjoy an energy-efficient system now
            and pay for it over time.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Heat Pump Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Heat pumps require specialized knowledge to operate efficiently year-round. {site.name}{' '}
            provides professional heat pump services designed to support reliable heating and cooling
            performance in every season.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced technicians, thorough system evaluations, and clear communication, we help
            homeowners maintain, repair, or replace heat pump systems with confidence — with the focus
            on energy efficiency, long-term reliability, and consistent comfort throughout your home.
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
          <h2 className="mt-12 section-title text-brand-700">Heat Pump FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule a Heat Pump Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Repair, maintenance, or a high-efficiency upgrade — one call keeps your home comfortable
              all year. Call now or request a free estimate.
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

      {/* Heat pumps by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Heat pumps by neighborhood</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We repair and install heat pumps across {site.serviceArea} —{' '}
            {locations.filter((l) => heatPumpsCopy[l.slug]).length} neighborhoods and counting. For local
            detail on the systems that fit homes in your area, find yours below.
          </p>
          <div className="mt-6 space-y-7">
            {locationsByGroup().map(({ group, items }) => {
              const local = items.filter((l) => heatPumpsCopy[l.slug]);
              if (!local.length) return null;
              return (
                <div key={group}>
                  <h3 className="flex items-center gap-2 font-display text-base font-extrabold text-brand-700">
                    <Icon name="pin" className="h-4 w-4 text-pink-500" />
                    {group}
                  </h3>
                  <ul className="mt-2 columns-1 gap-x-6 sm:columns-2">
                    {local.map((l) => (
                      <li key={l.slug} className="mb-1.5 break-inside-avoid">
                        <Link
                          href={`/services/heat-pumps/${l.slug}`}
                          className="text-sm font-medium text-brand-800 hover:text-pink-600"
                        >
                          Heat pumps in {l.neighborhood}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
