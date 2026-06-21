import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Furnace Maintenance',
  description: `Furnace tune-ups and maintenance across ${site.serviceArea} from ${site.name} — safety checks, cleaning, and filter service for gas and electric furnaces. Upfront pricing.`,
  alternates: { canonical: '/services/furnace-maintenance' },
};

const benefits = [
  { lead: 'Fewer unexpected breakdowns', text: 'catching small issues early prevents costly emergencies.' },
  { lead: 'Better energy efficiency', text: 'a clean, well-maintained system wastes less energy and lowers monthly bills.' },
  { lead: 'Longer furnace service life', text: 'regular maintenance extends the lifespan of your heating system.' },
  { lead: 'Improved indoor air quality', text: 'replacing filters and cleaning components reduces dust, allergens, and pollutants.' },
  { lead: 'Safer operation', text: 'technicians check for carbon monoxide leaks, cracked heat exchangers, and other hazards.' },
  { lead: 'Consistent comfort', text: 'a properly tuned furnace delivers steady, reliable warmth all winter long.' },
];

const signs = [
  'Rising energy bills without increased usage',
  'Uneven heating or cold spots throughout your home',
  'Unusual noises such as rattling, banging, or squealing',
  'Weak airflow from vents',
  'Furnace cycling on and off frequently',
  'Burning or dusty odors when the system is running',
  'The system has not been serviced in over a year',
];

const tuneup = [
  'Checking and replacing the air filter to improve airflow and indoor air quality',
  'Inspecting the blower motor and fan blades to ensure they run smoothly',
  'Testing thermostat settings and controls for accuracy and efficiency',
  'Examining electrical connections, safety controls, and system startup',
  'Inspecting the combustion chamber, burners, and heat exchanger for cracks or wear',
];

const diy = [
  'Replace your air filter every 1–3 months',
  'Keep vents and registers free of dust and debris',
  'Listen for unusual noises and schedule service if something sounds off',
  'Make sure your thermostat is working correctly',
];

const problems = [
  'Dirty or clogged air filters',
  'Worn blower motors',
  'Cracked heat exchangers',
  'Ignition or pilot light failures',
  'Inconsistent heating performance',
];

const whyUs = [
  { icon: 'badge' as const, title: 'Thorough Tune-Ups', text: 'Detailed multi-point inspections that catch small issues before they become repairs.' },
  { icon: 'check' as const, title: 'Gas & Electric', text: 'We maintain both gas and electric furnaces with the right care for each.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and a real safety check every visit.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'Affordable, transparent pricing and maintenance plans available.' },
];

const faqs = [
  { q: 'What does furnace maintenance include?', a: 'A full tune-up covers a filter check and replacement, blower and fan inspection, thermostat and controls testing, an electrical and safety-control check, and an inspection of the combustion chamber, burners, and heat exchanger.' },
  { q: 'How often should I schedule furnace maintenance?', a: 'Once a year — ideally in the fall, before heating season — keeps your system efficient and catches problems before the cold sets in.' },
  { q: 'What is the cost of furnace maintenance service?', a: 'Maintenance is modest and far cheaper than an emergency repair or early replacement. We provide upfront, flat-rate pricing and affordable plans to keep your system running reliably year after year.' },
  { q: 'What is the difference between furnace maintenance and repair?', a: 'Maintenance is preventive — it keeps the furnace running efficiently and catches small issues early. Repair fixes something that has already failed. Regular maintenance is what reduces how often you need repairs.' },
  { q: 'How long does a furnace tune-up take?', a: 'A standard tune-up usually takes about an hour, depending on the system and what we find during the inspection.' },
  { q: 'How often should I change a furnace filter?', a: 'Every 1–3 months for a standard 1-inch filter — more often with pets or heavy use. Thicker media filters can last several months.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Furnace Maintenance',
  description: 'Furnace tune-ups, safety inspections, and cleaning for gas and electric furnaces.',
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
    { '@type': 'ListItem', position: 4, name: 'Furnace Maintenance', item: `${site.url}/services/furnace-maintenance` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FurnaceMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title={`Furnace Maintenance in ${site.serviceArea}`}
        description="A yearly tune-up keeps your furnace efficient, safe, and reliable — and helps it avoid a breakdown on the coldest night of the year."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Furnace Maintenance' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Due for a furnace tune-up in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/furnace-maint-hero.jpg)' }}
            role="img"
            aria-label="Technician performing a furnace tune-up"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Furnace Tune-Up Services
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A reliable furnace is the heart of a comfortable home across the Greater Cincinnati and
            Northern Kentucky area. That is why {site.name} offers professional furnace tune-up
            services throughout {site.serviceArea}.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            With years of experience, our certified technicians keep your gas or electric furnace
            running safely and efficiently — helping you avoid costly surprises.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Our maintenance focuses on fixing small issues before they turn into costly repairs and
            getting your system ready for the upcoming heating season. With {site.name}, you get more
            than a service visit — you get peace of mind knowing your furnace will perform when you
            need it most.
          </p>

          <h2 className="mt-10 section-title text-brand-700">Benefits of Yearly Furnace Maintenance</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Scheduling an annual furnace tune-up is one of the smartest decisions a homeowner can
            make. Routine maintenance provides:
          </p>
          <ul className="mt-4 space-y-2.5">
            {benefits.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A yearly tune-up from {site.name} helps homeowners across {site.serviceArea} enjoy
            comfort, savings, and peace of mind.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a tune-up (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/furnace-maint-signs.jpg)' }}
            role="img"
            aria-label="Technician inspecting a furnace"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need a Furnace Tune-Up
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Regular maintenance keeps your system running efficiently and reduces the risk of
              unexpected breakdowns. These warning signs can mean it is time for a professional
              tune-up:
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
              Scheduling a tune-up with {site.name} can improve performance, extend system lifespan,
              and help ensure reliable heating through the colder months.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect From a Furnace Tune-Up
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              During your furnace tune-up, our certified technicians perform a thorough check of your
              system, including:
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
              Every step keeps your heating system safe, efficient, and ready for the heating season.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician reviewing a furnace tune-up with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">DIY Furnace Maintenance Tips</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A professional tune-up is essential, but homeowners can take simple steps between visits:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {diy.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These small actions support your furnace’s performance until your next professional
            service.
          </p>

          {/* Common problems */}
          <h2 className="mt-12 section-title text-brand-700">Common Furnace Problems</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Routine maintenance helps prevent many of the most common furnace issues, including:
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
            Scheduling yearly maintenance helps you avoid these problems and keeps reliable heat ready
            when winter arrives.
          </p>

          {/* Gas & electric */}
          <h2 className="mt-12 section-title text-brand-700">Gas & Electric Furnace Maintenance</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-base font-extrabold text-brand-700">Gas Furnace Maintenance</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Gas furnaces are common across the area but need expert attention to stay safe and
                efficient. We inspect gas lines, burners, and the heat exchanger to keep your unit
                running smoothly — reducing risks like carbon monoxide leaks and maintaining reliable
                comfort all winter.
              </p>
            </div>
            <div className="card">
              <h3 className="font-display text-base font-extrabold text-brand-700">Electric Furnace Maintenance</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Electric furnaces are dependable but still need regular maintenance to perform their
                best. Our tune-up checks heating elements, electrical connections, and airflow to
                improve efficiency and prevent extra strain on the system.
              </p>
            </div>
          </div>

          {/* Cost */}
          <h2 className="mt-12 section-title text-brand-700">Furnace Maintenance Cost</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            The cost of a maintenance visit is small compared to the price of an emergency repair or a
            premature replacement. {site.name} provides upfront pricing and affordable plans to keep
            your heating system running reliably year after year. Preventative maintenance lowers
            energy bills, reduces repair costs, and extends the life of your furnace.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Your Furnace Tune-Up</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A furnace tune-up is one of the best ways to improve performance and avoid unexpected
            heating issues. {site.name} provides thorough tune-ups designed to keep your equipment
            running efficiently, safely, and reliably.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced technicians, detailed inspections, and clear recommendations, we help
            identify small issues before they turn into costly repairs — supporting better energy
            efficiency, a longer system lifespan, and consistent comfort throughout your home.
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
          <h2 className="mt-12 section-title text-brand-700">Furnace Maintenance FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Furnace Tune-Up Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Do not wait for your furnace to break down. Staying on top of annual maintenance keeps
              your system running smoothly, saves on energy, and helps avoid expensive repairs. Call
              now or request a free estimate.
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
