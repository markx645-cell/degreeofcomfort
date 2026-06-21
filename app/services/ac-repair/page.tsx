import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'AC Repair',
  description: `24/7 AC repair across ${site.serviceArea} from ${site.name} — central air, heat pumps, and mini-splits on all major brands. Fast diagnosis and upfront pricing.`,
  alternates: { canonical: '/services/ac-repair' },
};

const signs = [
  'Warm air coming from vents',
  'Weak or uneven airflow in the home',
  'New noises during operation',
  'Frequent system cycling or shutdowns',
  'Higher energy bills without added usage',
  'Ice on the AC unit or refrigerant lines',
  'Moisture or refrigerant leaking near the equipment',
];

const problems = [
  'Refrigerant leaks or low refrigerant levels',
  'Electrical or thermostat problems',
  'Frozen evaporator coils',
  'Blower motor and fan failures',
  'Restricted airflow caused by dirty air filters',
  'Drainage and moisture issues',
];

const effIssues = [
  'Low refrigerant levels that reduce cooling efficiency',
  'Restricted airflow from dirty filters or blocked components',
  'Worn or failing parts that force the system to run longer',
  'Electrical problems that prevent normal operation',
];

const effHelps = [
  'Improve overall system efficiency',
  'Reduce strain on HVAC equipment',
  'Support more consistent cooling throughout the home',
  'Help keep energy bills more stable',
];

const whyUs = [
  { icon: 'clock' as const, title: '24/7 Emergency Repair', text: 'Available nights, weekends, and holidays to restore cooling fast.' },
  { icon: 'badge' as const, title: 'All Cooling Systems', text: 'Central air, heat pumps, and ductless mini-splits on all major brands.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and safe, certified refrigerant handling.' },
  { icon: 'check' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'What are common AC problems you repair?', a: 'Refrigerant leaks, electrical and thermostat issues, frozen evaporator coils, blower-motor and fan failures, restricted airflow from dirty filters, and drainage or moisture problems are the ones we see most.' },
  { q: 'Do you work with all AC brands?', a: 'Yes — central air conditioners, heat pumps, and ductless mini-splits from all major brands.' },
  { q: 'What causes an AC unit to stop cooling?', a: 'The usual causes are low refrigerant, a frozen coil, a failed compressor or capacitor, a thermostat problem, or a dirty filter choking airflow. We diagnose the exact cause rather than guessing.' },
  { q: 'How can I tell if my AC has a refrigerant leak?', a: 'Weak cooling, ice on the refrigerant lines, a hissing sound, or rising energy bills can all point to a leak. Refrigerant is regulated, so a licensed technician should confirm and repair it.' },
  { q: 'Why is my AC making strange sounds?', a: 'Buzzing or clicking often means an electrical issue; grinding or squealing points to a motor or bearing; rattling usually means a loose part or debris. Any new noise is worth a look before it becomes a bigger repair.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AC Repair',
  description: '24/7 air conditioning repair for central air, heat pumps, and mini-splits.',
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
    { '@type': 'ListItem', position: 4, name: 'AC Repair', item: `${site.url}/services/ac-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ACRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning"
        title={`AC Repair in ${site.serviceArea}`}
        description="Warm air, weak airflow, or a system that quit? Our licensed technicians find the cause and restore cooling fast — central air, heat pumps, and mini-splits, 24/7."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'AC Repair' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            AC not cooling in {site.serviceArea}? Call for immediate service
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
            style={{ backgroundImage: 'url(/services/ac-repair-hero.jpg)' }}
            role="img"
            aria-label="Technician repairing an air conditioner"
          />
          <div className="mb-5 rounded-2xl bg-lime-500 px-5 py-3 text-center font-display text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
            Save $75 on same-day AC repairs — book now, offer ends soon!
          </div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            AC Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When an air conditioning system stops working, comfort changes quickly — and during hot
            weather, a broken AC can create real safety concerns inside the home. {site.name} provides
            professional AC repair for homeowners across {site.serviceArea}.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Homeowners call us for many reasons — a unit that stops producing cool air, strange
            sounds, or a system that shuts down without warning. Our technicians take the time to
            identify the root cause and complete the repair to restore cooling and ensure safe
            operation, focusing on solutions that get your system running properly again.
          </p>

          {/* Expert AC repair */}
          <h2 className="mt-10 section-title text-brand-700">Expert AC Repair for Today’s Home Cooling Systems</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Modern HVAC systems are built for efficiency, but even minor issues can affect performance.
            Trouble with airflow, electrical parts, or refrigerant levels reduces comfort and strains
            the system. Our technicians are trained to repair central air conditioners, heat pumps, and
            mini-split systems commonly used in today’s homes.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our AC repair covers the entire cooling system — we inspect airflow, check electrical
            connections, and confirm the refrigerant level. That approach helps us fix the problem
            correctly and reduce the chance it comes back.
          </p>

          {/* 24/7 Emergency */}
          <h2 className="mt-10 section-title text-brand-700">24/7 Emergency AC Repair Available</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Air conditioning problems do not follow a schedule. {site.name} offers 24/7 emergency AC
            repair for urgent issues affecting comfort or safety, with technicians available nights,
            weekends, and holidays.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Emergency service focuses on restoring cooling as quickly as possible while protecting the
            AC unit from further damage. Fast repairs reduce safety risks and help bring your home back
            to a comfortable temperature.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs your AC needs a repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ac-repair.jpg)' }}
            role="img"
            aria-label="Air conditioner being repaired"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs Your AC Needs a Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many air conditioning problems start small and become worse over time. Paying attention
              to early signs can help prevent larger repairs later. Common signs your AC may need
              repair include:
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
              If these issues are ignored, they place stress on the cooling system. Prompt AC repair
              helps restore normal operation and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our AC repair process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our AC Repair Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              {site.name} follows a clear process for every AC repair. First, a technician inspects the
              AC unit and related HVAC components — the air filter, electrical system, and refrigerant
              level. Once the issue is identified, we explain what is causing the problem and discuss
              repair options.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              After approval, the repair is completed using proper tools and parts. The system is then
              tested to confirm safe operation and to ensure steady, cool air throughout the home.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician explaining an AC repair to a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Common problems */}
          <h2 className="section-title text-brand-700">Common AC Problems We Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our technicians repair many common air conditioning issues, including:
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
            These problems affect comfort, energy use, and indoor air quality. Repairing them early
            keeps the cooling system working as intended.
          </p>

          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace Your AC System?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            In many cases, repair is the right place to start. When an issue is limited and the system
            is otherwise in good condition, a repair restores reliable cooling and helps extend the
            equipment’s lifespan — most common problems can be corrected without replacing the whole
            system.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If a system keeps having problems or no longer cools the home effectively, replacement may
            be worth considering. When that happens, our team explains the system’s condition and
            reviews your options so you can make an informed decision.
          </p>

          {/* Efficiency */}
          <h2 className="mt-12 section-title text-brand-700">How AC Repair Lowers Energy Bills</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When an AC system is not working properly, it often uses more energy than necessary.
            Professional repair corrects the issues that drive up energy use, including:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {effIssues.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">By fixing these issues, AC repair can help:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {effHelps.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {e}
              </li>
            ))}
          </ul>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for AC Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for cooling services. Our AC repair
            is performed by trained technicians focused on clear communication and reliable results.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We take the time to diagnose problems correctly, and repairs are completed with care and
            attention to safety. The goal is simple: restore cooling and help your system operate
            reliably.
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
          <h2 className="mt-12 section-title text-brand-700">AC Repair FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your AC Repair Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              If your air conditioner is not cooling properly or has stopped working, professional
              repair can help. Call now or request a free estimate.
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
