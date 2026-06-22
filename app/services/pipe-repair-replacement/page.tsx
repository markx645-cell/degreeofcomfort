import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Pipe Repair & Replacement',
  description: `Pipe repair and replacement across ${site.serviceArea} from ${site.name} — licensed plumbers fix leaks, clear damaged drain lines, and replace failing pipes, including trenchless options.`,
  alternates: { canonical: '/services/pipe-repair-replacement' },
};

const dangers = [
  { lead: 'Water Damage to Your Home’s Structure', text: 'Water can warp hardwood floors, weaken drywall, and leave permanent stains. Left alone, it damages the integrity of your home’s construction.' },
  { lead: 'Mold and Mildew Growth', text: 'Damp areas create the perfect environment for mold. It spreads quickly and can affect your indoor air quality.' },
  { lead: 'Increased Utility Bills', text: 'A small leak might seem insignificant, but over time, it wastes gallons of water.' },
  { lead: 'Compromised Foundation or Flooring', text: 'Water that leaks into a basement or underneath concrete slabs can weaken foundations.' },
  { lead: 'Health Concerns', text: 'Mold spores, bacteria in standing water, and unpleasant odors can all create an uncomfortable and potentially unsafe living environment.' },
];

const whyChoose = [
  'Licensed and experienced plumbers',
  'Camera inspection and advanced leak detection',
  'Trenchless replacement where it fits',
  'Customer-first communication',
  'A satisfaction guarantee on every job',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Plumbers', text: 'Experienced pros who diagnose the real cause before they dig.' },
  { icon: 'check' as const, title: 'Minimally Invasive', text: 'Camera inspection and trenchless methods protect your property.' },
  { icon: 'badge' as const, title: 'Repair or Replace', text: 'Honest guidance on the most cost-effective fix.' },
  { icon: 'clock' as const, title: 'Emergency Service', text: 'Fast help when a leak or burst pipe can’t wait.' },
];

const faqs = [
  { q: 'How do I know if I need drain pipe repair or full pipe replacement?', a: 'If you’re noticing frequent clogs, slow drainage, or standing water, it may point to a damaged or aging drain line. Minor issues like buildup can be repaired, while broken, sagging, or heavily corroded pipes typically need full replacement. A professional inspection determines the best approach.' },
  { q: 'What’s involved in leaky pipe repair?', a: 'We start by locating the leak with specialized detection tools, then either repair the faulty connection, replace a damaged section of pipe, or reseal the area using quality materials built for long-term safety.' },
  { q: 'Can drain cleaner damage my plumbing?', a: 'Yes. Store-bought drain cleaners contain harsh chemicals that can eat away at old or weakened pipes, sometimes causing more damage than the original clog. Professional drain cleaning is safer and more effective for your plumbing system.' },
  { q: 'How often should pipes be replaced in an older home?', a: 'Cast iron pipes often last around 50 to 100 years, while copper and PVC can go longer with proper maintenance. Homes that are several decades old should have their plumbing inspected and potentially updated.' },
  { q: 'Are your services available for emergencies?', a: 'Yes. We provide emergency plumbing for situations like burst pipes and major leaks, responding quickly to get things under control when the problem can’t wait.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Pipe Repair & Replacement',
  description: 'Pipe repair and replacement, including drain pipe repair, leak repair, and trenchless replacement.',
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
    { '@type': 'ListItem', position: 4, name: 'Pipe Repair & Replacement', item: `${site.url}/services/pipe-repair-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function PipeRepairReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Pipe Repair & Replacement in ${site.serviceArea}`}
        description="Licensed plumbers fix leaks, clear damaged drain lines, and replace failing pipes — including trenchless options that protect your property."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Pipe Repair & Replacement' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Dealing with a leak or damaged pipe?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/pipe-hero.jpg)' }} role="img" aria-label="Plumber repairing a pipe" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Pipe Repair & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A small leak rarely stays small. Damaged pipes waste water, harm your home, and only get more
            expensive the longer they wait.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides pipe repair and replacement across {site.serviceArea}. Our licensed
            plumbers handle everything from emergency leaks to full-scale replacements, using camera
            inspection and advanced leak detection to find the real problem.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether a section can be repaired or the line needs replacing, we recommend the most
            cost-effective fix and complete it with minimal disruption.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/pipe-signs.jpg)' }} role="img" aria-label="Leaking water pipe" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              The Dangers of Ignoring Leaky Pipes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Here are some common problems caused by neglected pipe leaks:
            </p>
            <ul className="mt-4 space-y-2">
              {dangers.map((d) => (
                <li key={d.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{d.lead}:</span> {d.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Pipe Repair Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Drain Pipe Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A clogged or damaged drain pipe interrupts day-to-day life faster than a broken furnace in
              winter. Our drain pipe repair tackles issues ranging from tree root infiltration to old
              cast-iron corrosion. We inspect with camera technology to verify the problem, then patch,
              replace, or reseal as needed.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              We use solutions that hold up under pressure, help prevent future clogs, and keep sewage
              moving where it belongs. You get hassle-free service, less worry, and a drain system that
              works without interruption.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }} role="img" aria-label="Plumber reviewing a drain pipe repair" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Leaky Pipe Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A leak may start small, but it never stays that way for long. Water that seeps into walls,
            ceilings, or floors can create mold, rot, and expensive repairs. Our team is trained to find
            and fix these leaks quickly and effectively.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Using advanced leak detection equipment, we trace the source of the issue. Whether you’re
            facing a worn valve under the kitchen sink, a hidden joint in the wall, or a corroded pipe in
            the basement, we repair or replace the problem area without unnecessary disruption. This is
            about more than patching a hole — it’s about protecting your home and giving you peace of mind.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Pipe Replacement Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Sometimes a pipe is beyond repair. If it’s cracked, collapsed, or corroded beyond use,
            replacing it is the best option. This type of installation can sound intimidating, but we make
            it straightforward and walk you through every step so you understand what’s happening and why.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our team uses techniques like trenchless technology, which let us remove old pipelines and
            install new ones with minimal disruption to your property. Whether the pipe runs through a slab
            foundation, under your lawn, or along your basement floor, we handle it with care and
            precision — giving you back a system that works properly again. For homes with widespread
            failure, a full{' '}
            <Link href="/services/whole-house-repiping" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              whole-house repiping
            </Link>{' '}
            may be the better long-term value, and we also offer dedicated{' '}
            <Link href="/services/leak-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              leak repair
            </Link>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Pipe Repair</h2>
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

          <h2 className="mt-12 section-title text-brand-700">Pipe Repair & Replacement FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Pipe Repair or Replacement Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Clogs, leaks, or signs a pipe is giving out don’t get better on their own — the sooner we
              take a look, the easier it is to fix. {site.name} serves {site.serviceArea}. Call now or
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
