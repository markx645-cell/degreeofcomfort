import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'AC Maintenance',
  description: `AC tune-ups and maintenance across ${site.serviceArea} from ${site.name} — cleaning, inspection, and testing to keep your cooling system efficient and reliable all summer. Upfront pricing.`,
  alternates: { canonical: '/services/ac-maintenance' },
};

const signs = [
  'Weak airflow coming from vents',
  'Rooms cooling unevenly or taking longer to cool',
  'Higher energy bills without increased usage',
  'The system running longer than usual on warm days',
  'New or unusual noises during operation',
];

const tuneup = [
  'Inspect the air conditioning system and major components',
  'Check and replace air filters if needed',
  'Inspect the condenser coils and evaporator coil',
  'Test electrical connections and system controls',
  'Review refrigerant levels and overall system operation',
];

const protects = [
  'Keeping important components clean and free of buildup',
  'Helping moving parts operate as designed',
  'Reducing strain on the AC system',
  'Identifying small issues before they grow into larger problems',
  'Supporting reliable operation throughout the cooling season',
];

const longTerm = [
  'Improving airflow through clean coils and air filters',
  'Helping the system reach set temperatures faster',
  'Supporting consistent energy efficiency',
  'Reducing stress on electrical and mechanical parts',
  'Keeping the cooling system operating as intended',
];

const whyUs = [
  { icon: 'badge' as const, title: 'Thorough Inspections', text: 'Detailed multi-point tune-ups that catch small issues before they become repairs.' },
  { icon: 'clock' as const, title: 'Pre-Season Ready', text: 'Spring tune-ups get your system prepared before the summer heat arrives.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Experienced HVAC technicians and clear communication every visit.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'Affordable, transparent pricing and maintenance plans available.' },
];

const faqs = [
  { q: 'How long does an AC maintenance appointment take?', a: 'Most AC maintenance visits take about one hour, depending on system condition and accessibility.' },
  { q: 'Is AC maintenance necessary if my system is working fine?', a: 'Yes. Routine maintenance helps improve performance, protect energy efficiency, and extend the system’s life.' },
  { q: 'What happens if I skip AC maintenance?', a: 'Skipping maintenance can lead to reduced performance, higher energy use, and an increased risk of breakdowns.' },
  { q: 'How often should air conditioners be serviced?', a: 'Most systems benefit from annual maintenance, especially before the cooling season.' },
  { q: 'Can AC maintenance improve indoor air quality?', a: 'Yes. Maintenance includes checking airflow and air filters, which can help reduce dust buildup and improve indoor air quality.' },
  { q: 'Is AC maintenance required to keep my warranty valid?', a: 'Many manufacturers require regular professional maintenance to maintain warranty coverage. An annual tune-up helps document proper system care.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AC Maintenance',
  description: 'Air conditioning tune-ups and maintenance — cleaning, inspection, and testing.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Air Conditioning', item: `${site.url}/services/air-conditioning` },
    { '@type': 'ListItem', position: 4, name: 'AC Maintenance', item: `${site.url}/services/ac-maintenance` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ACMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning"
        title={`AC Maintenance in ${site.serviceArea}`}
        description="A yearly AC tune-up keeps your system efficient, reliable, and ready for summer — cleaning, inspection, and testing before the heat hits."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'AC Maintenance' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Time for an AC tune-up in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/ac-maint-hero.jpg)' }}
            role="img"
            aria-label="Technician performing an AC tune-up"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            AC Maintenance & Tune-Ups
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Air conditioning systems work hard during the summer. Without regular care, even a
            reliable system can lose efficiency and struggle to keep your home comfortable. {site.name}{' '}
            provides professional AC maintenance and tune-ups for homeowners across {site.serviceArea}
            {' '}to keep systems reliable throughout the cooling season.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Routine maintenance keeps your system running smoothly and reduces the chance of
            unexpected problems. A professional tune-up lets technicians inspect the system, clean key
            components, and confirm proper operation — so you enjoy steady cooling, better efficiency,
            and fewer disruptions during hot weather.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a tune-up (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ac-maintenance.jpg)' }}
            role="img"
            aria-label="Technician checking an air conditioner"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need an AC Tune-Up
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many air conditioning systems show early warning signs before performance drops. Paying
              attention to these changes can help prevent bigger issues later. Common signs your AC may
              need a tune-up include:
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
              Scheduling routine maintenance when these signs appear can help restore normal operation
              and improve comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During Your AC Tune-Up
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              An AC tune-up focuses on system performance, cleanliness, and safe operation. During the
              visit, an HVAC technician inspects and tests key parts of the cooling system. In a
              typical tune-up, the technician will:
            </p>
            <ul className="mt-4 space-y-1.5">
              {tuneup.map((t) => (
                <li key={t} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Once the tune-up is complete, the technician confirms the system is running properly and
              ready for the cooling season.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician reviewing an AC tune-up with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How Regular Maintenance Protects Your System</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Over time, dirt, dust, and normal wear affect an air conditioner’s performance — when parts
            get dirty or worn, the system has to work harder to cool the home. Regular maintenance
            protects the system by:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {protects.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Routine maintenance keeps the system in better condition and supports long-term
            performance.
          </p>

          {/* When to schedule */}
          <h2 className="mt-12 section-title text-brand-700">When to Schedule an AC Tune-Up</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Most homeowners benefit from annual maintenance, often scheduled before the cooling season
            begins. Spring is a common time for an annual tune-up, but maintenance can be performed any
            time the system is in use. Scheduling before peak summer heat helps ensure your air
            conditioner is ready for higher demand and reduces the risk of mid-season issues.
          </p>

          {/* Long-term */}
          <h2 className="mt-12 section-title text-brand-700">How Maintenance Supports Long-Term Performance</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Routine maintenance helps the system operate efficiently year after year — clean components
            and proper airflow let it cool your home efficiently. Over time, regular maintenance helps
            by:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {longTerm.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {l}
              </li>
            ))}
          </ul>

          {/* DIY vs pro */}
          <h2 className="mt-12 section-title text-brand-700">DIY vs. Professional AC Maintenance</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners can handle a few basic tasks — replacing air filters and keeping the outdoor
            unit clear of debris — which support airflow and help the system run more efficiently.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Professional maintenance goes further. A trained HVAC technician inspects internal
            components, tests system performance, and identifies issues that are not visible during
            everyday use — helping ensure the system operates safely and reliably.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Your AC Tune-Up</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable cooling services. Our
            AC maintenance is performed by experienced HVAC technicians who focus on thorough
            inspections and clear communication. Each tune-up supports system performance, energy
            efficiency, and long-term reliability — so you can head into the cooling season with
            confidence.
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
          <h2 className="mt-12 section-title text-brand-700">AC Maintenance FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your AC Tune-Up Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Routine maintenance protects your cooling system and supports dependable comfort all
              summer. Call now or request a free estimate.
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
