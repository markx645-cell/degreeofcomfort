import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Leak Detection',
  description: `Professional leak detection across ${site.serviceArea} from ${site.name} — find hidden water and slab leaks fast with acoustic, thermal, and camera tools, without tearing up your home. Same-day service.`,
  alternates: { canonical: '/services/leak-detection' },
};

const benefits = [
  { lead: 'Stop hidden damage early', text: 'a slow leak rots framing, ruins drywall, and grows mold long before you can see it.' },
  { lead: 'Save water and money', text: 'an unseen leak can waste thousands of gallons a year and quietly inflate your bill.' },
  { lead: 'Avoid a bigger emergency', text: 'catching a leak now keeps it from becoming a burst pipe or a flooded room later.' },
  { lead: 'No needless demolition', text: 'we pinpoint the source first, so we open up only what we actually need to.' },
];

// Band 1 — what leak detection uncovers (bold lead + description)
const uncover = [
  { lead: 'Unexplained water bills', text: 'a sudden spike without any increase in usage can point to a hidden leak.' },
  { lead: 'Damp or discolored walls', text: 'moisture stains or peeling paint can mean water seeping through the walls.' },
  { lead: 'Mold or mildew growth', text: 'persistent dampness gives mold a place to grow — and poses a health risk.' },
  { lead: 'Musty odors', text: 'a constant musty smell often signals hidden moisture somewhere nearby.' },
  { lead: 'Sounds of running water', text: 'hearing water when every tap is off can mean a leak inside the system.' },
];

const expectSteps = [
  {
    title: 'Initial Walkthrough & Listening Session',
    intro: 'Every appointment starts with a detailed walkthrough. Our licensed plumbers listen carefully to what you have noticed, such as:',
    bullets: ['A mysterious sound of running water', 'Unusually high water bills', 'Damp spots in the basement', 'Signs of plumbing or water-heater issues'],
    outro: 'Even a minor toilet leak or a slow kitchen leak can escalate if left unchecked. Talking through your observations helps us build a clear picture of where the leak is hiding and prioritize the most urgent areas first.',
  },
  {
    title: 'Advanced Detection Tools',
    intro: 'Once we understand the situation, we bring in state-of-the-art detection tools, including:',
    bullets: ['Acoustic leak-detection sensors', 'Thermal imaging cameras', 'Moisture meters', 'Tools for locating slab leaks and hidden lines'],
    outro: 'This pinpoints the exact location with minimal disruption — no extensive demolition and no guessing — whether it is a bathroom leak, a slab leak, or a stubborn kitchen leak. For homes with smart systems, we can also help set up water-leak monitors to catch future problems early.',
  },
  {
    title: 'Straight Talk About What We Found',
    intro: 'After locating the leak, we explain in plain terms what it is — from a leaking water line to a faulty toilet fill valve — and the risk of leaving it alone. We walk through every repair option, from a quick patch to replacing a damaged pipe, so you can make an informed decision fast. That transparency matters most during an emergency, when time is critical.',
    bullets: [],
    outro: '',
  },
  {
    title: 'Repair Solutions That Fit Your Home',
    intro: 'Finding the leak is only half the job. For smaller issues — toilet leaks, kitchen leaks, or minor water-line problems — we can often repair them on the same visit. For larger problems like slab or basement leaks, we provide a clear repair plan and schedule the work quickly, so your home gets back to normal with as little water damage and disruption as possible.',
    bullets: [],
    outro: '',
  },
];

const emergencyScenarios = [
  'Unexpected slab leaks',
  'Sudden bathroom or kitchen leaks',
  'Toilet leaks that will not stop running',
  'Major plumbing emergencies',
  'Hidden leaks damaging floors, walls, or foundations',
];

const whyUs = [
  { icon: 'badge' as const, title: 'Non-Invasive Tools', text: 'Acoustic, thermal, and camera equipment finds the leak without guesswork or demolition.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'Most leak calls are handled the same day you reach out.' },
];

const faqs = [
  { q: 'How does a leak detection service work?', a: 'We use non-invasive tools — acoustic listening devices, thermal imaging, moisture meters, pressure tests, and pipe cameras — to pinpoint a leak’s exact location before opening anything up, so the repair is targeted and the mess is minimal.' },
  { q: 'What are the signs I might need water leak detection?', a: 'Watch for an unexplained jump in your water bill, stains or discoloration, mold or a musty smell, the sound of running water when nothing is on, low pressure, or warm and damp spots on the floor.' },
  { q: 'Can small leaks really cause big damage?', a: 'Yes. A slow, hidden leak can rot framing, ruin drywall and flooring, and grow mold over weeks or months — while wasting thousands of gallons of water. Finding it early is far cheaper than the repairs that follow.' },
  { q: 'Do you offer emergency leak detection services?', a: 'Yes. We are on call 24/7 for active leaks, flooding, and suspected slab leaks, and we reach most homes the same day.' },
  { q: 'What areas of my home are most susceptible to leaks?', a: 'The most common spots are under slabs, behind walls, under sinks and toilets, at the water heater, along supply lines, and in outdoor or irrigation lines. We check them all.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Leak Detection',
  description: 'Non-invasive water and slab leak detection using acoustic, thermal, and camera tools.',
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
    { '@type': 'ListItem', position: 4, name: 'Leak Detection', item: `${site.url}/services/leak-detection` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function LeakDetectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Leak Detection in ${site.serviceArea}`}
        description="Higher water bill, a stain, or the sound of running water? We find hidden water and slab leaks fast with acoustic, thermal, and camera tools — without tearing up your home."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Leak Detection' },
        ]}
      />

      {/* Top CTA banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Think you have a hidden leak in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/leak-hero.jpg)' }}
            role="img"
            aria-label="Plumber locating a hidden water leak"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Leak Detection
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            The hardest leaks to deal with are the ones you cannot see — behind a wall, under the
            slab, or inside a ceiling — quietly causing damage for weeks before you notice. {site.name}{' '}
            finds them fast for homeowners across {site.serviceArea}, using acoustic, thermal, and
            camera tools that pinpoint the exact source without tearing up your home.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Once we know where the leak is, we explain what we found in plain terms and recommend the
            smallest effective fix — with upfront, flat-rate pricing you approve before we start.
          </p>

          {/* Benefits */}
          <h2 className="mt-10 section-title text-brand-700">Why Early Leak Detection Matters</h2>
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

      {/* Band: What Professional Leak Detection Can Uncover (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/leak-signs.jpg)' }}
            role="img"
            aria-label="Water damage from a hidden leak"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What Professional Leak Detection Can Uncover
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Water leaks can be sneaky, often hiding behind walls or under floors until they cause
              real damage. Professional leak detection uncovers these hidden issues before they
              escalate:
            </p>
            <ul className="mt-4 space-y-2">
              {uncover.map((u) => (
                <li key={u.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{u.lead}:</span> {u.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Band: Water Leak Detection Experts (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Water Leak Detection Experts
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Leaks do not just waste water — they eat away at your floors, ruin drywall, and create
              the perfect conditions for mold. That is why our team takes water leak detection
              seriously. Every technician is trained to look past the obvious and find the source of
              the issue before it gets worse.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              That reputation does not happen by accident. It comes from paying attention to the small
              stuff, showing up on time, and keeping our word — and homeowners across {site.serviceArea}{' '}
              tell us again and again that the way we care is what sets us apart.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber reviewing leak detection findings with a homeowner"
          />
        </div>
      </section>

      {/* What to Expect + emergency + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What to Expect During Professional Leak Detection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Hidden leaks can do serious damage — warped wood, cracked concrete, mold, and higher water
            bills. Whether it is a dripping faucet, a toilet leak, a kitchen leak, or a slab leak,
            finding the source quickly is critical. Our leak detection across {site.serviceArea} is
            built around speed, accuracy, and reliable results, with same-day and emergency service so
            your home stays protected.
          </p>
          <div className="mt-6 space-y-6">
            {expectSteps.map((s, i) => (
              <div key={s.title} className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-500 font-display text-sm font-black text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{s.intro}</p>
                  {s.bullets.length > 0 && (
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-ink/75">
                          <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-pink-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.outro && <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.outro}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency */}
          <h2 className="mt-12 section-title text-brand-700">Same-Day & Emergency Leak Detection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Water leaks do not follow a schedule, so our same-day and emergency leak detection across{' '}
            {site.serviceArea} is built to respond fast. Call us right away for:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {emergencyScenarios.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="clock" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h3 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Active leak right now? We answer 24/7.
            </h3>
            <Link href="/services/emergency-plumbing" className="btn-pink flex-shrink-0">
              Emergency Plumbing
            </Link>
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Leak Detection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Undetected leaks lead to water damage, higher utility bills, and costly repairs.{' '}
            {site.name} provides professional leak detection designed to locate hidden leaks quickly
            and accurately — even behind walls, under floors, or below concrete slabs.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced technicians and proven detection methods, we identify the source without
            unnecessary disruption to your home. Clear communication, reliable scheduling, and a focus
            on long-term solutions mean leak issues are handled efficiently and correctly the first
            time.
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
          <h2 className="mt-12 section-title text-brand-700">Leak Detection FAQs</h2>
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
              Schedule Your Leak Detection Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Find the leak before it finds your floors. Same-day service, upfront pricing, and no
              needless demolition. Call now or request a free estimate.
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
