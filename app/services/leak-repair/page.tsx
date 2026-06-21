import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Leak Repair',
  description: `Professional leak repair across ${site.serviceArea} from ${site.name} — pipe, slab, toilet, kitchen, and bathroom leaks fixed at the source. Upfront pricing, same-day and emergency service.`,
  alternates: { canonical: '/services/leak-repair' },
};

const signs = [
  'Sudden or unexplained increases in your water bill',
  'Water stains, bubbling paint, or discoloration on walls and ceilings',
  'Damp spots, warped flooring, or soft areas around fixtures',
  'Musty odors or visible mold and mildew growth',
  'Sounds of running or dripping water when no plumbing is in use',
  'Ongoing loss of water pressure',
];

const process = [
  { title: 'Initial Assessment', text: 'Every repair begins with a thorough assessment. We check your plumbing for visible signs of leaks and review your home for hidden problems — including spots that are easy to overlook, like crawl spaces, basement walls, and behind appliances.' },
  { title: 'Leak Detection', text: 'Using state-of-the-art equipment, we detect leaks in walls, ceilings, basements, and even under slabs. Accurate detection prevents unnecessary damage and points to the right fix — without intrusive demolition, which saves time and cost.' },
  { title: 'Repair Plan', text: 'Once the leak is located, we create a detailed repair plan and explain the process, timeline, and cost so you can make an informed decision. Each plan is tailored to the situation in your home for lasting results.' },
  { title: 'Execution', text: 'Our licensed plumbers carry out the repair efficiently and carefully — whether it is a water pipe leak, a toilet leak, or a slab leak — with quality workmanship so your plumbing keeps working long after we leave.' },
  { title: 'Follow-Up', text: 'After the repair, we inspect our work and confirm the leak is fully resolved. We also share tips to help prevent future leaks, and we are available for questions even after the job is done.' },
];

const kinds = [
  'Water leaking into the basement',
  'Slab leaks',
  'Kitchen leaks',
  'Bathroom leaks',
  'Toilet leaks',
  'Water-line & supply pipe leaks',
];

const whyUs = [
  { icon: 'check' as const, title: 'We Fix the Source', text: 'We repair the actual cause of the leak, not just the visible damage, so it does not return.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day & Emergency', text: 'We respond fast and reach most homes the same day you call.' },
];

const faqs = [
  { q: 'What should I do if I suspect a water leak in my home?', a: 'If the leak is active, shut off the main water supply and avoid using the affected fixtures, then call us. The sooner we locate the source, the less damage it can do — and the smaller the repair tends to be.' },
  { q: 'What does a pipe leak repair involve?', a: 'We locate the leak, then repair or replace the damaged section of pipe or the failed joint, pressure-test the line, and confirm everything is sealed and flowing properly before we finish.' },
  { q: 'How do I prevent future leaks in my home?', a: 'Keep an eye on your water pressure, insulate exposed pipes before winter, address small drips early, and have aging galvanized or cast-iron lines inspected. We are happy to point out anything worth watching while we are there.' },
  { q: 'How can I tell if a leak is coming from inside my walls or from the roof?', a: 'Roof leaks usually appear after rain and show up high on ceilings or upper walls, while plumbing leaks persist regardless of the weather and often track back to a fixture or supply line. Our moisture and acoustic tools confirm the source quickly.' },
  { q: 'What are the most common causes of pipe leaks in older homes?', a: 'Corroded galvanized or cast-iron pipe, worn joints and fittings, water pressure that is set too high, and ground shifting around the line. Older homes in the area are especially prone to corrosion-related leaks.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Leak Repair',
  description: 'Pipe, slab, toilet, kitchen, and bathroom leak repair fixed at the source.',
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
    { '@type': 'ListItem', position: 4, name: 'Leak Repair', item: `${site.url}/services/leak-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function LeakRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Leak Repair in ${site.serviceArea}`}
        description="Pipe, slab, toilet, or fixture leak? Our licensed plumbers find it and fix it at the source — fast, clean, and built to last."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Leak Repair' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Have a leak? Call for immediate service
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
            style={{ backgroundImage: 'url(/services/leakrepair-hero.jpg)' }}
            role="img"
            aria-label="Plumber repairing a pipe leak"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Leak Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A leak rarely fixes itself — it spreads, rots framing, and runs up your water bill until
            it is repaired. {site.name} fixes leaks at the source for homeowners across{' '}
            {site.serviceArea}, from a small pipe drip to a slab leak under the foundation. We locate
            the real problem, repair it correctly the first time, and confirm it is gone before we
            leave.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Every repair comes with upfront, flat-rate pricing you approve before we start — and
            same-day and emergency service when a leak cannot wait.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">
            Avoiding Water Damage with Prompt Leak Repair
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Even small leaks can turn into big problems if left unchecked. Water escaping from pipes
            or fixtures can damage your walls, flooring, and foundation — sometimes costing thousands
            to repair. The EPA estimates the average household&rsquo;s leaks waste nearly 10,000
            gallons of water a year, which drives up your bill and can weaken your foundation over
            time. Prompt leak repair prevents that damage and helps protect the safety and value of
            your home. Catching a leak early also saves money on your water bill and heads off mold
            growth that can affect your family&rsquo;s health.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs You Have a Leak (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/leakrepair-signs.jpg)' }}
            role="img"
            aria-label="Water stains on a ceiling from a leak"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Have a Leak
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Leaks can cause serious damage if they are not repaired quickly. Some are easy to spot,
              while others hide behind walls, floors, or ceilings. Common signs that may mean you need
              professional leak repair include:
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
              If you notice any of these, timely leak repair can help prevent structural damage and
              more expensive plumbing problems down the line.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Emergency Repair Services Are Available (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Emergency Repair Services Are Available
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Leaks do not wait for a convenient time, and neither do we. Our emergency leak repair
              gives you access to professional help when you need it most. We understand the stress
              and potential damage an unexpected leak causes, which is why we make it a priority to
              arrive promptly and complete the repair efficiently.
            </p>
            <Link href="/services/emergency-plumbing" className="btn-pink mt-6 inline-flex">
              Emergency Plumbing
            </Link>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber reviewing a leak repair with a homeowner"
          />
        </div>
      </section>

      {/* Process + kinds + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">The Process Behind Our Pipe Leak Repairs</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We follow a proven process to locate the source quickly and fix it correctly the first
            time, combining advanced technology with hands-on expertise to minimize damage and keep
            your repair as stress-free as possible. Each step is designed to give you clear answers
            and reliable solutions, so you always know what is happening and why.
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

          {/* Kinds of leaks */}
          <h2 className="mt-12 section-title text-brand-700">Kinds of Leaks We Repair</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {kinds.map((k) => (
              <li key={k} className="flex items-start gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {k}
              </li>
            ))}
          </ul>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Leak Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Leak repair takes accuracy, experience, and the right approach to prevent repeat issues.
            {' '}{site.name} provides professional leak repair that fixes the source of the problem —
            not just the visible damage.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With skilled technicians, clear communication, and dependable scheduling, we make sure
            repairs are completed efficiently and correctly. From minor pipe leaks to more complex
            jobs, every service is designed to protect your home and restore your plumbing with
            long-term results in mind.
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
          <h2 className="mt-12 section-title text-brand-700">Leak Repair FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Leak Repair Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Fix the leak at the source before it becomes a bigger problem. Same-day and emergency
              service, upfront pricing. Call now or request a free estimate.
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
