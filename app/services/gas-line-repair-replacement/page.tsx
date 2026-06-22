import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Gas Line Repair & Replacement',
  description: `Gas line repair and replacement across ${site.serviceArea} from ${site.name} — licensed plumbers diagnose, repair, and install gas lines safely and to code.`,
  alternates: { canonical: '/services/gas-line-repair-replacement' },
};

const signs = [
  { lead: 'Rotten Egg Smell', text: 'Natural gas has a very distinct odor that’s hard to miss. If you catch a whiff, don’t ignore it.' },
  { lead: 'Hissing or Whistling Sounds', text: 'These might come from an appliance or pipe and could point to a leak.' },
  { lead: 'Dead Patches in Your Yard', text: 'If grass or plants start dying in a concentrated spot, a leaking underground gas line might be to blame.' },
  { lead: 'Health Symptoms', text: 'Things like dizziness, headaches, or nausea can happen with gas exposure.' },
  { lead: 'Gas Bill Creeping Up', text: 'If your usage hasn’t changed but your costs have, something may be leaking.' },
];

const process = [
  { lead: 'Initial Assessment', text: 'We review your home layout and appliance requirements.' },
  { lead: 'Material Selection', text: 'We choose the appropriate piping and connectors for the job.' },
  { lead: 'Professional Installation', text: 'We secure the system to code specifications.' },
  { lead: 'Testing & Inspection', text: 'We pressure-test the line and verify there are no leaks.' },
];

const causes = [
  'Corrosion on older lines',
  'Loose or aging connections',
  'Damage from nearby construction or digging',
  'Pressure buildup in the system',
  'Tree root interference underground',
];

const whyChoose = [
  'Licensed and experienced plumbers',
  'Gas line repair and full replacement',
  'Code-compliant, pressure-tested work',
  'Clear communication and upfront pricing',
  'A satisfaction guarantee on every job',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Safety-First Work', text: 'Qualified pros who follow strict gas safety protocols.' },
  { icon: 'check' as const, title: 'Code-Compliant', text: 'Proper sealing, materials, and pressure testing every time.' },
  { icon: 'badge' as const, title: 'Repair or Replace', text: 'Honest guidance on the right fix for your situation.' },
  { icon: 'clock' as const, title: 'Fast Response', text: 'Prompt service when you suspect a gas line problem.' },
];

const faqs = [
  { q: 'How can I identify gas line problems?', a: 'Strong sulfur odors, hissing sounds, dead grass patches, or appliance failures all warrant a professional inspection.' },
  { q: 'What happens during emergency repairs?', a: 'Technicians respond quickly, locate the leak, shut off gas safely if needed, and complete repairs following strict safety protocols.' },
  { q: 'What is the difference between repair and replacement?', a: 'A repair addresses specific damage, while replacement involves removing and installing new piping for more systemic issues.' },
  { q: 'Is natural gas work different from other plumbing?', a: 'Yes. Qualified professionals must ensure proper sealing, safety compliance, and code adherence on every gas line job.' },
  { q: 'What causes gas line leaks?', a: 'Corrosion, loose connections, construction damage, pressure buildup, or tree root interference can all cause leaks.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Gas Line Repair & Replacement',
  description: 'Gas line diagnosis, repair, replacement, and new installation for residential properties.',
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
    { '@type': 'ListItem', position: 4, name: 'Gas Line Repair & Replacement', item: `${site.url}/services/gas-line-repair-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function GasLinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Gas Line Repair & Replacement in ${site.serviceArea}`}
        description="Licensed plumbers diagnose, repair, and install gas lines safely and to code — restoring safety and function with pressure-tested results."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Gas Line Repair & Replacement' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Suspect a gas line problem?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/gasline-hero.jpg)' }} role="img" aria-label="Gas line piping and valve" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Gas Line Repair & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Gas lines power some of your home’s most important appliances — but they leave no room for
            error. A damaged or aging line is a safety issue that needs a qualified professional.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides gas line repair, replacement, and installation across {site.serviceArea}.
            Our licensed plumbers diagnose problems, complete repairs to code, and pressure-test every
            line before we consider the job done.
          </p>
          <div className="mt-5 rounded-2xl border-l-4 border-pink-500 bg-pink-50 p-4">
            <p className="text-sm font-semibold leading-relaxed text-brand-800">
              If you smell a strong gas odor, leave the home right away and call your gas utility or 911
              from a safe distance before calling for repair.
            </p>
          </div>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/gasline-signs.jpg)' }} role="img" aria-label="Plumber working on a gas pipe" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs of a Problem With Your Gas Line
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              When gas lines are working right, they quietly power things like stoves, water heaters, and
              furnaces. But if something goes wrong, the signs can show up in ways that aren’t always
              obvious at first. Here are a few red flags that it’s time for a gas pipe repair:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              If you notice any of these, get to safety first, then call for a professional inspection.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Gas Line Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Schedule Your Gas Line Repair or Replacement Today
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Gas line emergencies require immediate attention. Our emergency gas line repair and
              replacement services are available to address urgent issues promptly. We understand the
              risks associated with gas leaks and act swiftly to protect your household.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Our team is equipped to handle emergency situations, providing fast and effective solutions.
              Don’t hesitate to contact us when you need urgent assistance with your gas lines.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Need help? Call us today — we’re standing by to assist you across {site.serviceArea}.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }} role="img" aria-label="Plumber reviewing a gas line plan" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Our Gas Line Installation Process</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Every gas line job follows a careful, code-driven process:
          </p>
          <ul className="mt-4 space-y-2">
            {process.map((p) => (
              <li key={p.lead} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span><span className="font-bold text-brand-700">{p.lead}:</span> {p.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We focus on thorough diagnostics, reliable repairs, and clear communication at every step.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Repair or Replacement?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A repair addresses a specific point of damage, while a replacement removes and installs new
            piping when the problem is more systemic. After a thorough diagnosis, we explain which option
            fits your situation and why.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Common Causes of Gas Line Leaks</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">Leaks usually trace back to one of these causes:</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {causes.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {c}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Gas Line Service</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable plumbing. When you work
            with our team, you receive:
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

          <h2 className="mt-12 section-title text-brand-700">Gas Line FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Gas Line Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Need a gas line repaired or installed? {site.name} serves {site.serviceArea}. Call now or
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
