import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Faucet Repair & Replacement',
  description: `Faucet repair and replacement across ${site.serviceArea} from ${site.name} — stop drips, fix low pressure, and install new kitchen and bathroom faucets. Upfront pricing, same-day service.`,
  alternates: { canonical: '/services/faucet-repair-replacement' },
};

const benefits = [
  { lead: 'Stop wasting water', text: 'a steady drip can waste thousands of gallons a year — and run up your bill — until it is fixed.' },
  { lead: 'Protect your cabinets and floors', text: 'a slow leak under the sink quietly damages cabinetry and subfloor before you notice it.' },
  { lead: 'Better pressure and flow', text: 'we clear or replace worn parts so your faucet runs the way it should again.' },
  { lead: 'An upgraded look', text: 'a new fixture is one of the easiest, most affordable ways to refresh a kitchen or bath.' },
];

const signs = [
  'A drip or leak that will not stop, even after a new washer',
  'Visible corrosion, rust, or mineral buildup on the fixture',
  'Cracks in the body or base of the faucet',
  'Low or uneven water pressure from the tap',
  'Handles that are stiff, loose, or hard to turn',
  'Water pooling under the sink or around the base',
  'An old, outdated fixture you are ready to upgrade',
];

const faucetCategories = [
  { lead: 'Kitchen faucets', text: 'single-handle, double-handle, pull-down, pull-out, and more.' },
  { lead: 'Bathroom faucets', text: 'vanity, sink, and general bathroom faucet repair and replacement.' },
  { lead: 'Bathtub & shower faucets', text: 'we stop leaky shower faucets and dripping bathtub faucets for good.' },
];

const diyTips = [
  'Turn off the water supply before touching the faucet.',
  'Check and replace worn-out washers or O-rings.',
  'Clean the aerator and remove mineral buildup.',
  'Tighten loose handles and spouts carefully.',
];

const process = [
  { step: '1', title: 'Assessing Your Needs', text: 'We start by inspecting your existing faucet and understanding your goals — whether you need a kitchen faucet repair, a bathroom faucet installation, or an emergency fix.' },
  { step: '2', title: 'Removing the Old Faucet', text: 'The old fixture is carefully removed and the area is prepped to prevent leaks and water damage and to ensure a clean installation.' },
  { step: '3', title: 'Installing Your Faucet', text: 'We install your new or repaired faucet to the manufacturer’s specs, test the water flow, and make sure everything works perfectly — from a kitchen install to a bathtub replacement.' },
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'Most faucet repairs and installs are handled the same day you call.' },
  { icon: 'check' as const, title: 'Clean, Leak-Free Work', text: 'We test every connection and leave the area cleaner than we found it.' },
];

const faqs = [
  { q: 'How do I know if I need faucet repair in my home?', a: 'If a faucet drips, leaks, has low pressure, or is hard to turn, it likely needs attention. A new washer or cartridge fixes many issues; we will tell you honestly whether a simple repair will hold or a replacement is the better value.' },
  { q: 'What causes a dripping faucet?', a: 'Most drips come from worn-out washers, O-rings, or cartridges inside the faucet, or from corrosion and mineral buildup on the valve seat. These wear out with normal use and are usually a quick fix.' },
  { q: 'What should I do if my faucet has low water pressure?', a: 'Start by unscrewing the aerator at the tip and clearing any sediment. If pressure is still low, the cause may be a clogged cartridge, a partially closed shutoff, or a larger supply issue — we can diagnose it quickly.' },
  { q: 'Is faucet replacement a good investment for my home?', a: 'Often, yes. If a faucet is old, corroded, or repeatedly failing, a new fixture stops the repeated repairs, saves water, and refreshes the look of the room — usually for a modest cost.' },
  { q: 'What types of faucets do you install?', a: 'We install all common types — kitchen faucets with pull-down sprayers, bathroom sink faucets, tub and shower fixtures, and touchless or single-handle models — in just about any finish or brand.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Faucet Repair & Replacement',
  description: 'Faucet repair, replacement, and installation for kitchen and bathroom fixtures.',
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
    { '@type': 'ListItem', position: 4, name: 'Faucet Repair & Replacement', item: `${site.url}/services/faucet-repair-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FaucetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Faucet Repair & Replacement in ${site.serviceArea}`}
        description="Dripping, low pressure, or ready for an upgrade? Our licensed plumbers repair and replace kitchen and bathroom faucets — fast, clean, and leak-free."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Faucet Repair & Replacement' },
        ]}
      />

      {/* Top CTA banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Dripping or broken faucet in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/faucet-hero.jpg)' }}
            role="img"
            aria-label="Modern kitchen faucet installed by a licensed plumber"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Faucet Repair & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A faulty faucet is more than an annoyance — a steady drip wastes water and money, and a
            slow leak under the sink can quietly damage your cabinets and floor. {site.name} repairs
            and replaces kitchen and bathroom faucets for homeowners across {site.serviceArea}, and we
            tell you honestly whether a quick repair will hold or a new fixture is the better value.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            From a worn cartridge to a full fixture upgrade, our licensed plumbers handle it with
            upfront, flat-rate pricing you approve before we start — and we test every connection and
            clean up before we leave.
          </p>

          {/* Benefits */}
          <h2 className="mt-10 section-title text-brand-700">Why Fix or Replace a Failing Faucet</h2>
          <ul className="mt-4 space-y-2.5">
            {benefits.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}</span> — {b.text}
                </span>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Signs You Need Faucet Replacement (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/faucet-signs.jpg)' }}
            role="img"
            aria-label="A dripping, worn faucet"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Faucet Replacement
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Sometimes a repair is all it takes — but these signs usually mean a faucet is past its
              prime and a replacement will save you money in the long run:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Band: What to Expect (text left, photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During Your Faucet Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A professional faucet installation makes sure your new fixture works properly and stays
              leak-free. During the appointment, the existing faucet is carefully removed and the
              plumbing connections are inspected to confirm everything is in good condition before the
              new faucet goes in.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Once the new fixture is in place, all connections are securely tightened and tested for
              leaks. Water flow and operation are checked to confirm proper performance, and the work
              area is cleaned before the service is complete — protecting your plumbing system and
              making sure your faucet is ready for everyday use.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber reviewing a faucet installation with a homeowner"
          />
        </div>
      </section>

      {/* Types + DIY + process + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Types of faucets */}
          <h2 className="section-title text-brand-700">Types of Faucets We Repair and Install</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We work on nearly every type of faucet you can imagine:
          </p>
          <ul className="mt-4 space-y-2.5">
            {faucetCategories.map((c) => (
              <li key={c.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{c.lead}:</span> {c.text}
                </span>
              </li>
            ))}
          </ul>

          {/* DIY tips */}
          <h2 className="mt-12 section-title text-brand-700">DIY Faucet Tips and Tricks</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            For small issues, homeowners can try a few basic fixes:
          </p>
          <ul className="mt-4 space-y-2">
            {diyTips.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Even with these tips, many homeowners call us when a repair needs specialized tools or
            plumbing know-how. Our licensed plumbers handle everything safely and efficiently.
          </p>

          {/* Process */}
          <h2 className="mt-12 section-title text-brand-700">Our Efficient Faucet Installation Process</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {process.map((p) => (
              <div key={p.step} className="card">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-pink-500 font-display text-sm font-black text-white">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-base font-extrabold uppercase text-brand-700">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Your Faucet Replacement
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Replacing a faucet may seem simple, but proper installation is the key to preventing
            leaks, water damage, and future plumbing issues. {site.name} provides professional faucet
            replacement so your new fixture is installed correctly and works exactly as it should.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced plumbers, careful workmanship, and clear communication throughout, we
            make faucet replacement easy and stress-free. From removing the old fixture to testing the
            new installation, every detail is handled with your home’s plumbing system in mind.
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
          <h2 className="mt-12 section-title text-brand-700">Faucet Repair & Replacement FAQs</h2>
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
              Schedule Your Faucet Repair or Install
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Same-day service, upfront pricing, and clean, leak-free work. Call now or request a free
              estimate.
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
