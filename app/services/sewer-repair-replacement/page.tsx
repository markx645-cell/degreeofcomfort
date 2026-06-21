import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Sewer Repair & Replacement',
  description: `Sewer line repair, replacement, and trenchless service across ${site.serviceArea} from ${site.name} — camera inspection, cleanouts, and to-code installation. Same-day and emergency service.`,
  alternates: { canonical: '/services/sewer-repair-replacement' },
};

const problems = [
  { lead: 'Tree root intrusion', text: 'roots grow into the pipe, causing blockages or even breaking the line.' },
  { lead: 'Clogs from debris', text: 'toilet paper, grease, and other debris build up inside the line and block it.' },
  { lead: 'Pipe corrosion', text: 'older metal pipe corrodes and weakens, raising the risk of leaks and breaks.' },
  { lead: 'Shifting soil', text: 'changes in the soil around your home can shift, crack, or misalign the pipe.' },
  { lead: 'Bellied pipes', text: 'a sunken section of pipe collects standing water and causes repeated blockages.' },
  { lead: 'Collapsed sewer lines', text: 'a line that is old or damaged beyond repair can collapse entirely and needs immediate attention.' },
];

const signs = [
  { lead: 'Slow drains', text: 'sinks, showers, or tubs draining slowly can mean a clog or buildup in the sewer line.' },
  { lead: 'Frequent backups', text: 'repeated backups in toilets or sinks point to a deeper blockage in the system.' },
  { lead: 'Unpleasant odors', text: 'foul smells from drains can mean sewage escaping into your yard or basement.' },
  { lead: 'Soggy spots in the yard', text: 'unexplained wet areas can signal a sewer line leaking underground.' },
  { lead: 'Gurgling sounds', text: 'gurgling in drains or toilets often means trapped air from a blockage.' },
  { lead: 'Increased water bills', text: 'a sudden spike can suggest a leak in your sewer line that needs repair.' },
];

const benefits = [
  { lead: 'Prevent property damage', text: 'quick repairs stop sewage backups that damage floors, walls, and belongings.' },
  { lead: 'Maintain health standards', text: 'fixing leaks and blockages reduces exposure to harmful bacteria and odors.' },
  { lead: 'Save money', text: 'early intervention prevents far costlier repairs down the road.' },
  { lead: 'Protect your landscaping', text: 'prompt repairs minimize digging and preserve your yard and garden.' },
  { lead: 'Improve system efficiency', text: 'a well-maintained sewer drains smoothly and clogs far less often.' },
  { lead: 'Increase property value', text: 'a properly functioning sewer system is a real selling point.' },
];

const process = [
  { title: 'Initial Assessment', text: 'We start with a full camera inspection to see what is happening underground — blockages, cracks, roots — for the complete picture.' },
  { title: 'Diagnosis & Strategy', text: 'If there is a clog or buildup, we clear it, then walk through the findings with you and explain the next step — a spot fix or full line work.' },
  { title: 'Repair or Replacement', text: 'Depending on the condition of the pipe, we patch the affected section or move forward with a replacement. Isolated issues usually call for a repair; widespread damage calls for replacement.' },
  { title: 'Final Inspection & Cleanup', text: 'We re-inspect with the camera to confirm the line is clean and flowing, then tidy up and get your system back to normal.' },
];

const whyUs = [
  { icon: 'badge' as const, title: 'Camera-Diagnosed', text: 'We inspect the line first so the fix matches the actual problem.' },
  { icon: 'check' as const, title: 'Trenchless Available', text: 'We replace lines without tearing up your yard whenever possible.' },
  { icon: 'shield' as const, title: 'Licensed & To Code', text: 'Background-checked plumbers and installations that meet local code.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'Can I get financing for my sewer line repair or replacement?', a: 'Yes. Sewer work is a bigger investment, so we offer financing with a quick application and flexible terms — your home does not have to wait for a repair it needs now.' },
  { q: 'What is the life expectancy of a sewer line?', a: 'It depends on the material: clay lines often last 50–60 years, cast iron 75–100, and modern PVC can last 100+. If your home still has an original older line, it is worth a camera inspection.' },
  { q: 'How do I know if my main sewer line is clogged?', a: 'The tell-tale sign is several fixtures backing up at once — a toilet that gurgles when the washer drains, water at a basement floor drain, or multiple slow drains. Those point to the main line, not a single fixture.' },
  { q: 'Can tree roots damage my sewer line?', a: 'Yes — it is one of the most common causes of sewer trouble. Roots are drawn to the moisture in the line and work into joints and small cracks, causing blockages and eventually breaks. A camera inspection confirms it.' },
  { q: 'How often should I have my sewer pipe inspected?', a: 'Every couple of years is reasonable for an older home, and it is smart to inspect before buying a house or after any recurring backup.' },
  { q: 'What causes sewer lines to crack or break?', a: 'Age and corrosion, tree-root intrusion, shifting or settling soil, ground pressure, and bellied (sunken) sections of pipe are the usual culprits.' },
  { q: 'Can I avoid sewer line problems?', a: 'Largely, yes — with regular cleanouts, mindful flushing (no wipes or grease), and periodic camera inspections to catch small issues before they become breaks.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sewer Line Repair & Replacement',
  description: 'Sewer line repair, trenchless replacement, cleanouts, and installation with camera inspection.',
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
    { '@type': 'ListItem', position: 4, name: 'Sewer Repair & Replacement', item: `${site.url}/services/sewer-repair-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SewerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Sewer Line Repair & Replacement in ${site.serviceArea}`}
        description="Backups, root intrusion, or a collapsed line? We diagnose with a camera and fix it — including trenchless replacement that keeps your yard intact."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Sewer Repair & Replacement' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Sewer backup in {site.serviceArea}? Call for immediate service
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
            style={{ backgroundImage: 'url(/services/sewer-hero.jpg)' }}
            role="img"
            aria-label="Sewer line repair work"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Sewer Line Repair & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When repairs are not enough, a sewer line replacement may be necessary. Sewer lines —
            especially older ones — wear out over time, leading to leaks, corrosion, or even full
            collapses. {site.name} provides expert sewer line repair and replacement across{' '}
            {site.serviceArea}, helping homeowners replace aging or damaged pipe with minimal
            disruption to their property.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Our approach prioritizes speed and precision. We assess the condition of your current
            system, recommend the best solution, and use advanced methods like trenchless replacement
            to limit the impact on your yard. Replacing a failing line now can save you from bigger,
            costlier problems later.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Common sewer problems (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/sewer-problems.jpg)' }}
            role="img"
            aria-label="Underground sewer pipes"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Most Common Types of Sewer Line Problems
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Sewer lines can develop a wide range of issues over time, many of which cause serious
              damage if not addressed quickly. Homeowners across {site.serviceArea} most often run
              into:
            </p>
            <ul className="mt-4 space-y-2">
              {problems.map((p) => (
                <li key={p.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{p.lead}:</span> {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Band: Sewer line installation (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Sewer Line Installation in {site.serviceArea}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Building a new home or renovating an older one? Sewer line installation is a critical
              part of the process — a properly installed system saves you from future clogs, leaks,
              and line breaks. {site.name} specializes in sewer line installation across{' '}
              {site.serviceArea}, and your new system is built to be durable and to last.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Our team uses high-quality materials and proven techniques to lay pipe that handles the
              daily demands of your home. Everything is done to code, with a focus on efficiency and
              reliability — so your plumbing keeps running smoothly, without surprises down the road.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber discussing a sewer line installation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Fast & Effective Sewer Line Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Not every sewer issue needs a full replacement. In many cases we can fix the problem with
            a targeted repair — whether it is a minor leak, a stubborn clog, or damage from tree roots
            — and restore your system quickly. Our licensed technicians use the latest equipment to
            locate the issue and make precise repairs, so you do not have to worry about recurring
            problems or future breakdowns.
          </p>

          {/* Signs */}
          <h2 className="mt-12 section-title text-brand-700">Signs You Need a Sewer System Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Sewer problems are not always obvious, but these warning signs usually mean it is time to
            have your line checked:
          </p>
          <ul className="mt-4 space-y-2">
            {signs.map((s) => (
              <li key={s.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <span className="font-semibold text-brand-800">{s.lead}:</span> {s.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Process */}
          <h2 className="mt-12 section-title text-brand-700">What to Expect During a Sewer Pipe Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Sewer problems do not always come with a warning — sometimes it is a slow drain, a strange
            smell, or a gurgling toilet; other times it is a full backup in the basement. However it
            shows up, our goal is to fix it fast and fix it right. Here is what the process looks like:
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

          {/* Trenchless highlight */}
          <div className="mt-12 rounded-3xl border border-brand-100 bg-brand-50 p-7 sm:p-8">
            <h2 className="section-title text-brand-700">Trenchless Sewer Line Replacement</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Nobody likes the idea of their yard getting torn up just to replace a pipe. That is why
              we offer trenchless sewer line replacement — fast, clean, and without leaving your
              property looking like a construction site.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              We use advanced trenchless technology to pull a new pipe through your existing line. No
              major digging and no destroyed lawn — just a reliable, long-lasting solution that keeps
              your outdoor space intact.
            </p>
          </div>

          {/* Benefits */}
          <h2 className="mt-12 section-title text-brand-700">Benefits of Timely Sewer Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Addressing sewer issues without delay saves you from substantial headaches. The biggest
            benefits of booking timely sewer repair:
          </p>
          <ul className="mt-4 space-y-2">
            {benefits.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Cleanout */}
          <h2 className="mt-12 section-title text-brand-700">Sewer Line Cleanout Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Keeping your sewer lines clean is one of the best ways to prevent blockages and backups.
            Over time, grease, soap, and debris build up inside the pipe, restricting flow and raising
            the chance of a clog. Our cleanout service clears that buildup so your pipes flow freely
            again.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Regular cleanouts extend the life of your sewer system and keep your plumbing in good
            shape. We use powerful equipment to break up and remove blockages, keeping your system
            clog-free and running efficiently.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Sewer Line Service</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Sewer line work is a major project that takes proper planning, precise workmanship, and
            experienced pros. {site.name} provides reliable repair, replacement, and installation
            designed to keep your system running efficiently and meeting local code.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With trained technicians, careful workmanship, and clear communication throughout, we help
            homeowners avoid future sewer issues and costly repairs. From the initial evaluation to
            final testing, the focus is on long-term performance and dependable results.
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
          <h2 className="mt-12 section-title text-brand-700">Sewer Line FAQs</h2>
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
              Schedule Your Sewer Line Service Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              From a quick repair to a full trenchless replacement, we handle it with camera
              diagnosis and upfront pricing. Call now or request a free estimate.
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
