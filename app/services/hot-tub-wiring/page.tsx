import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Hot Tub Wiring',
  description: `Professional hot tub wiring across ${site.serviceArea} from ${site.name} — dedicated 240V circuits, GFCI protection, and code-compliant spa electrical installation by licensed electricians.`,
  alternates: { canonical: '/services/hot-tub-wiring' },
};

const signs = [
  'Your breaker panel does not have space for a dedicated spa circuit',
  'You are installing a 240V hot tub',
  'Existing wiring does not meet NEC standards',
  'The spa repeatedly trips the breaker',
  'Lights dim or flicker when the hot tub runs',
  'You are unsure about proper amp rating or wiring requirements',
];

const process = [
  'Inspect breaker panel capacity and service load',
  'Confirm manufacturer electrical requirements',
  'Install a dedicated circuit with GFCI protection',
  'Perform secure wire pulling through approved conduit',
  'Connect hot wires, neutral wire, and ground wire properly',
  'Verify bonding and grounding connections',
  'Test the hot tub’s control system',
  'Confirm safe startup and stable operation',
];

const proEnsures = [
  'Correct breaker sizing',
  'Accurate load calculations',
  'Secure ground fault circuit interrupter installation',
  'Proper bonding and grounding',
  'Long-term electrical system stability',
];

const safety = [
  'Verified GFCI protection',
  'Correct separation of hot wires and neutral wire',
  'Secure ground wire connections',
  'Code-compliant conduit protection',
  'Safe breaker panel integration',
];

const whyChoose = [
  'Licensed and experienced electricians',
  'Dedicated hot tub wiring technicians',
  'Expertise in hot tub and jacuzzi electrical wiring',
  'Full compliance with NEC standards',
  'Thorough breaker panel evaluation',
  'Clear communication and upfront pricing',
  'Clean, professional workmanship',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Safety-First Approach', text: 'Every spa install treated as a safety priority, not just another service call.' },
  { icon: 'check' as const, title: 'NEC-Compliant Work', text: 'GFCI protection, proper bonding, and a code-required disconnect within sight.' },
  { icon: 'badge' as const, title: 'Experienced Electricians', text: 'Licensed pros who specialize in hot tub and jacuzzi wiring.' },
  { icon: 'house' as const, title: 'Honest Panel Advice', text: 'A thorough panel evaluation and upfront answers on any upgrade.' },
];

const faqs = [
  { q: 'How do I know if I need professional hot tub electrical installation?', a: 'If your spa requires a 240V circuit, GFCI protection, or breaker panel upgrades, professional installation is recommended.' },
  { q: 'Can I handle a hot tub electrical hook up myself?', a: 'Because hot tubs combine water and electricity, hiring a licensed electrician ensures safety and code compliance.' },
  { q: 'How long does the installation take?', a: 'Most hot tub electrical wiring projects are completed within one day, depending on panel capacity and installation distance.' },
  { q: 'What safety measures do you follow during installation?', a: 'We follow NEC standards, install GFCI protection, verify proper grounding, confirm correct wire gauge, and test system performance.' },
  { q: 'Is hot tub electrical wiring worth it?', a: 'Yes. Professional installation protects your equipment, prevents electrical hazards, and ensures reliable spa operation.' },
  { q: 'Will I need to upgrade my breaker panel for a hot tub?', a: 'In some cases, yes. If your existing breaker panel does not have enough capacity for a dedicated circuit, an upgrade may be required. We inspect your electrical system and explain your options before work begins.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hot Tub Wiring',
  description: 'Hot tub and spa electrical wiring, including dedicated 240V circuits, GFCI protection, and code-compliant installation.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Electrical', item: `${site.url}/services/electrical` },
    { '@type': 'ListItem', position: 4, name: 'Lighting', item: `${site.url}/services/lighting` },
    { '@type': 'ListItem', position: 5, name: 'Outdoor Lighting', item: `${site.url}/services/outdoor-lighting` },
    { '@type': 'ListItem', position: 6, name: 'Hot Tub Wiring', item: `${site.url}/services/hot-tub-wiring` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HotTubWiringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Hot Tub Wiring in ${site.serviceArea}`}
        description="Safe, code-compliant hot tub and spa wiring by licensed electricians — dedicated 240V circuits, GFCI protection, and proper bonding built for reliable operation."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
          { label: 'Hot Tub Wiring' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Wiring a new spa? Do it safely.
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
            style={{ backgroundImage: 'url(/services/hottub-hero.jpg)' }}
            role="img"
            aria-label="Hot tub on a backyard patio"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Hot Tub Wiring
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Installing a hot tub adds comfort and value to your home. Safe, code-compliant hot tub wiring
            ensures it operates properly and without risk.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Hot tubs combine water, heat, and high-voltage electricity. That means the electrical work
            must be done carefully. {site.name} provides professional hot tub electrical wiring and other{' '}
            <Link href="/services/electrical" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              electrical services
            </Link>{' '}
            across {site.serviceArea}. Our licensed electricians complete every hot tub electrical
            installation according to current safety standards and manufacturer requirements.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            From breaker panel upgrades to complete tub wiring, we manage the entire process. Your spa
            will operate safely, consistently, and efficiently from the start.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need expert hot tub wiring (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/hottub-signs.jpg)' }}
            role="img"
            aria-label="Electrical breaker panel and wiring"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Expert Hot Tub Wiring
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Professional installation is strongly recommended in the following situations:
            </p>
            <ul className="mt-4 grid gap-1.5">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Electrical mistakes can damage pumps, heaters, and control boards. More importantly,
              improper installation increases safety risks.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Wiring process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Hot Tub Electrical Wiring Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We follow a clear, step-by-step process to ensure safe and reliable hot tub wiring.
            </p>
            <ul className="mt-4 grid gap-1.5">
              {process.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We also install the required disconnect within sight of the spa, as outlined by the
              National Electrical Code. Jacuzzi electrical wiring includes weather-rated fittings that
              protect the system from moisture and outdoor exposure year-round.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing hot tub wiring requirements"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">DIY or Professional Wiring?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Some homeowners consider handling hot tub electrical installation themselves. However, spa
            wiring involves modifications to the breaker panel, grounding procedures, and strict safety
            standards.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Mistakes in electrical work can cause equipment failure or serious injury. Because hot tubs
            combine water and electricity, careful installation is critical. Professional hot tub wiring
            ensures:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {proEnsures.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Hiring a licensed electrician protects your home and helps prevent future problems.
          </p>

          {/* Safety benefits */}
          <h2 className="mt-12 section-title text-brand-700">Safety Benefits of Hot Tub Wiring</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Water increases electrical risk. Proper installation reduces that risk significantly.
            Professional service provides:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {safety.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Safe tub wiring prevents dangerous situations before they occur.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Hot Tub Wiring</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} choose {site.name} because we combine experience
            with a strong focus on safety. When you work with our team, you receive:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {w}
              </li>
            ))}
          </ul>
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
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            We treat every installation as a safety priority, not just another service call.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Hot Tub Wiring FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Hot Tub Wiring Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Adding a spa? {site.name} provides professional hot tub wiring across {site.serviceArea}.
              Call now or request a free estimate.
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
