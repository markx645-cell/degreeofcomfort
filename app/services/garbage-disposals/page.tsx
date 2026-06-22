import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Garbage Disposal Repair & Installation',
  description: `Garbage disposal repair and installation across ${site.serviceArea} from ${site.name} — licensed plumbers install, repair, and replace disposals with proper drain and dishwasher connections.`,
  alternates: { canonical: '/services/garbage-disposals' },
};

const signs = [
  { lead: 'Weird Noises', text: 'If it’s rattling or making more noise than usual, something’s off. This could be due to loose parts or trapped debris.' },
  { lead: 'Frequent Jams', text: 'If your disposal is locking up often, the blades might be dull, or the motor could be struggling.' },
  { lead: 'Bad Smells That Won’t Leave', text: 'Stubborn odors usually mean there’s old food or grease stuck in the unit.' },
  { lead: 'Leaks Under the Sink', text: 'Is there water where it shouldn’t be? That might be a cracked gasket, faulty pipe, or worn-out seal.' },
  { lead: 'Humming but Not Spinning', text: 'A humming motor with little action can point to jammed blades or motor issues.' },
];

const whyChoose = [
  'Licensed and insured plumbers',
  'Repair-first approach when it makes sense',
  'Help selecting the right disposal model',
  'Proper drain and dishwasher connections',
  'A satisfaction guarantee on every job',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Experienced plumbers who install and repair disposals safely.' },
  { icon: 'check' as const, title: 'Repair First', text: 'We recommend repair before replacement when it is the better value.' },
  { icon: 'badge' as const, title: 'Right-Sized Models', text: 'Help choosing a disposal that fits your sink and household.' },
  { icon: 'house' as const, title: 'Leak-Tested', text: 'Proper connections, tested before we leave.' },
];

const faqs = [
  { q: 'What causes a garbage disposal to jam so often?', a: 'Jams usually happen because of hard food scraps, bones, silverware, or fibrous materials like celery or corn husks. Over time, these items wear down the motor or get tangled in the blades, which can lead to repairs or replacement.' },
  { q: 'What are the signs I need garbage disposal repair instead of replacement?', a: 'If your disposal turns on but hums without grinding, leaks from the bottom, or resets constantly, repair may be the answer. We inspect the motor, electrical components, gaskets, and pipes to identify the underlying problem.' },
  { q: 'Why does my garbage disposal smell bad even after cleaning?', a: 'Bad odors stick around when food particles build up inside the unit or the drain pipe. Grease and food remnants can collect beneath the blades or within the drainage system even after cleaning attempts.' },
  { q: 'Do I need regular maintenance on my garbage disposal?', a: 'Your garbage disposal might be small, but it works hard every day and deserves the same kind of attention. Regular upkeep helps catch buildup, rust, and early wear before they turn into failures.' },
  { q: 'Can you install a new garbage disposal unit in a home that didn’t have one before?', a: 'Yes, we can. We’ll take care of the plumbing and electrical wiring needed to support a brand-new garbage disposal unit.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Garbage Disposal Repair & Installation',
  description: 'Garbage disposal installation, repair, and replacement, including drain and dishwasher connections.',
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
    { '@type': 'ListItem', position: 4, name: 'Garbage Disposals', item: `${site.url}/services/garbage-disposals` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function GarbageDisposalsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Garbage Disposal Repair & Installation in ${site.serviceArea}`}
        description="Licensed plumbers install, repair, and replace garbage disposals — with proper drain and dishwasher connections and leak-tested results."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Garbage Disposals' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Garbage disposal jammed or leaking?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/disposal-hero.jpg)' }} role="img" aria-label="Garbage disposal under a kitchen sink" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Garbage Disposal Repair & Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A working garbage disposal keeps your kitchen clean and your drains clear. When it jams,
            leaks, or quits, everyday cleanup turns into a hassle.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} repairs, replaces, and installs garbage disposals for homeowners across{' '}
            {site.serviceArea}. Our plumbers show up ready to handle whatever problem’s blocking your sink
            or holding up dinner — your satisfaction isn’t just a goal, it’s the job.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Installing a new unit? We help you choose the right model for your sink and household, then
            test everything before we leave.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/disposal-signs.jpg)' }} role="img" aria-label="Plumbing under a kitchen sink" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs of a Failing Garbage Disposal
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A garbage disposal that’s past its prime won’t stay quiet about it for long. Small issues can
              pop up slowly, but they always turn into bigger kitchen headaches fast. Spotting the warning
              signs early means fewer clogs, less mess, and a faster fix:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Garbage Disposal Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Garbage Disposal Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Nobody wants to fight their kitchen sink after a long day. We know how much smoother daily
              routines go with a new, reliable garbage disposal. We’re known for honest work and attention
              to detail — and it shows in every install we do.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Garbage disposal installation is one of the many plumbing installation services we provide,
              and we treat it with just as much care as the bigger projects we take on. We’ll help you
              choose the right model for your sink, make sure it connects cleanly with your dishwasher or
              drainage line, and test everything before we head out. You’ll be back to rinsing plates
              without a second thought.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }} role="img" aria-label="Plumber reviewing a garbage disposal installation" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Garbage Disposal Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Nothing stalls a busy evening like a garbage disposal that won’t budge. If it’s jammed,
            leaking, or giving off a weird smell, it’s time to call for repair. We know how frustrating it
            is to deal with standing water or that odd hum when the switch flips, and we’re ready to take
            care of it.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            When you call us, we figure out what’s going wrong — whether it’s a worn motor, a blocked pipe,
            or a loose connection. We carry the tools and parts needed to get it back in shape on the spot,
            and we give you the full picture of what to expect moving forward. If a clog is the real
            culprit, our{' '}
            <Link href="/services/drain-cleaning" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              drain cleaning
            </Link>{' '}
            service can help too.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Garbage Disposal Replacement</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Today’s garbage disposals are miles ahead of older models. If your current unit is loud,
            unreliable, or has started tripping your circuit breaker, it’s probably time for an upgrade. A
            replacement can speed up cleanup, minimize mess, and prevent those annoying sink clogs.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We’ll walk you through your options, explain the differences in power and size, and make sure
            everything fits neatly into place. If a quick repair solves the problem, we’ll go that route
            instead. Either way, you’ll be left with a disposal that makes kitchen life easier.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Garbage Disposals</h2>
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

          <h2 className="mt-12 section-title text-brand-700">Garbage Disposal FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Garbage Disposal Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to upgrade your kitchen or fix a stubborn unit? {site.name} serves {site.serviceArea}.
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
