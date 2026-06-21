import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Furnace Repair',
  description: `24/7 furnace repair across ${site.serviceArea} from ${site.name} — gas and electric, on all major brands. Fast response, upfront pricing, and repairs that fix the root cause.`,
  alternates: { canonical: '/services/furnace-repair' },
};

const signs = [
  'Uneven heating or cold rooms throughout the home',
  'Strange noises such as banging, rattling, or squealing',
  'Furnace turning on and off frequently',
  'Weak airflow from vents',
  'Rising energy bills with no change in usage',
  'Burning smells or unusual odors during operation',
  'The furnace is blowing cool or lukewarm air',
];

const problems = [
  'Dirty or clogged filters reducing airflow and efficiency',
  'Faulty thermostats causing uneven heating',
  'Ignition or pilot control problems in gas furnaces',
  'Blower motor issues affecting warm-air circulation',
  'Unusual noises from loose or broken components',
];

const otherServices = [
  { label: 'Furnace installation and replacement', href: '/services/furnace-installation-replacement' },
  { label: 'Heat pump repair and replacement', href: '/services/heat-pumps' },
  { label: 'Heating tune-ups and maintenance plans', href: '/services/furnace-maintenance' },
];

const whyUs = [
  { icon: 'clock' as const, title: '24/7 Emergency Repair', text: 'When the heat goes out below freezing, our rescue team is on standby day or night.' },
  { icon: 'check' as const, title: 'Gas & Electric', text: 'Certified repair for gas and electric furnaces on all major brands.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and safe, code-compliant work.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'What does a furnace repair service include?', a: 'We start with a full inspection to diagnose the cause, then make the fix — igniter, thermostat, blower motor, control board, gas valve, and so on — and test operation and safety before we leave.' },
  { q: 'How much does furnace repair cost?', a: 'It depends on the issue, the type of furnace, and the parts required. Simple fixes like thermostat calibration cost less, while replacing a motor or igniter costs more. We provide upfront, flat-rate pricing so there are no surprises.' },
  { q: 'Do you service all kinds of furnaces?', a: 'Yes — gas and electric furnaces on all major brands. Our certified technicians handle burners, pilots, igniters, valves, electrical components, and more.' },
  { q: 'How often should you schedule maintenance?', a: 'Once a year, ideally in the fall before heating season. Regular maintenance is the best way to prevent the breakdowns that lead to repairs.' },
  { q: 'Are there financing options available?', a: 'Yes. We offer financing for larger repairs and replacements, with a quick application and flexible terms.' },
  { q: 'How often does a furnace filter need to be changed?', a: 'Every 1–3 months for a standard 1-inch filter — more often with pets or heavy use. A clean filter protects airflow and efficiency.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Furnace Repair',
  description: '24/7 gas and electric furnace repair on all major brands.',
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
    { '@type': 'ListItem', position: 4, name: 'Furnace Repair', item: `${site.url}/services/furnace-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FurnaceRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title={`Furnace Repair in ${site.serviceArea}`}
        description="No heat, weak airflow, or strange noises? Our licensed HVAC technicians respond fast and fix the problem right the first time — gas or electric, 24/7."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Furnace Repair' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            No heat in {site.serviceArea}? Call for immediate service
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
            style={{ backgroundImage: 'url(/services/furnace-repair-hero.jpg)' }}
            role="img"
            aria-label="Technician repairing a furnace"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Furnace Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When cold weather comes to {site.serviceArea}, a broken furnace is not just a problem —
            it is an emergency. {site.name} is your trusted choice for furnace repair, and our
            licensed HVAC technicians respond quickly, fix the problem right the first time, and
            restore comfort to your home.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            From sudden breakdowns to routine repairs, our team delivers fast, reliable service when
            you need it most — with upfront, flat-rate pricing you approve before we start.
          </p>

          {/* Most common problems */}
          <h2 className="mt-10 section-title text-brand-700">Most Common Furnace Problems</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Furnaces can fail for many reasons, especially during the harsh Ohio River Valley winters.
            Some of the most common issues our technicians fix include:
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
            If your heating system is struggling, do not wait — small issues become expensive failures
            fast. Schedule a furnace repair today.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/furnace-repair.jpg)' }}
            role="img"
            aria-label="Technician diagnosing a furnace"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need a Furnace Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Furnace problems often appear gradually, but ignoring the warning signs can lead to
              system failure or safety concerns. Recognizing these issues early helps prevent more
              expensive repairs and unexpected breakdowns:
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
              If you notice any of these signs, professional furnace repair with {site.name} can help
              restore reliable and safe heating.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During a Furnace Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A furnace repair begins with a thorough inspection to identify the cause of the problem.
              The technician evaluates system components, tests performance, and pinpoints any faulty
              parts or safety concerns.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Once the issue is identified, the recommended repair is explained before work begins.
              After the repair, the furnace is tested to confirm it is operating properly and safely,
              and the technician reviews next steps or maintenance recommendations to help prevent
              future issues and keep your system running reliably.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician explaining a furnace repair to a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Gas & electric */}
          <h2 className="section-title text-brand-700">Gas & Electric Furnace Repair</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-base font-extrabold text-brand-700">Gas Furnace Repair</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Gas furnaces are popular for their efficiency and power, but trouble with burners,
                pilot lights, or gas valves can put your comfort at risk. Our certified experts handle
                gas furnace repair — burners, pilots, igniters, and valves — with precision and safety.
              </p>
            </div>
            <div className="card">
              <h3 className="font-display text-base font-extrabold text-brand-700">Electric Furnace Repair</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Electric furnaces are common in many homes, but like any system they can fail. Our HVAC
                technicians find electrical problems, repair heating parts, and make sure your system
                runs safely and efficiently.
              </p>
            </div>
          </div>

          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Most furnaces last 10–15 years with regular maintenance. If your unit is older, breaking
            down often, or driving up your energy bills, replacement may be the smarter choice. Our
            team walks you through the decision and provides options that fit your budget.
          </p>

          {/* Cost */}
          <h2 className="mt-12 section-title text-brand-700">Furnace Repair Cost</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Repair prices depend on the issue, the type of furnace, and the parts required. A simple
            fix like thermostat calibration costs less, while replacing a motor or igniter costs more.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            The good news: {site.name} provides upfront pricing, so there are no surprises — and we
            will always tell you honestly whether a repair or a replacement is the better long-term
            value.
          </p>

          {/* Emergency */}
          <h2 className="mt-12 section-title text-brand-700">Emergency Furnace Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When your furnace fails without warning, every minute without heat matters. When
            temperatures drop below freezing, you need help fast — our rescue team is on standby with
            24/7 service to restore heat quickly so your family stays safe and warm.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h3 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              No heat right now? We answer 24/7.
            </h3>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              <Icon name="phone" className="h-4 w-4" />
              Call {site.primaryPhone.number}
            </a>
          </div>

          {/* Other services */}
          <h2 className="mt-12 section-title text-brand-700">Other Heating Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Beyond repairs, {site.name} offers a full range of heating and cooling solutions:
          </p>
          <ul className="mt-4 space-y-2">
            {otherServices.map((o) => (
              <li key={o.label} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <Link href={o.href} className="hover:text-pink-600">
                  {o.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Furnace Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            As a family-owned and operated business, we put our customers first — if you are not happy,
            we are not happy. Furnace repairs take experience and careful attention to keep your system
            operating safely and efficiently, and {site.name} focuses on restoring reliable heat while
            addressing the root cause of the problem.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With skilled technicians, clear communication, and dependable scheduling, we make furnace
            repair straightforward and stress-free — every repair completed with long-term performance
            and home comfort in mind.
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
          <h2 className="mt-12 section-title text-brand-700">Furnace Repair FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Furnace Repair Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Fast response, honest recommendations, and repairs that fix the root cause. Call now or
              request a free estimate.
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
