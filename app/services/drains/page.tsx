import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Drain Services',
  description: `Professional drain services across ${site.serviceArea} from ${site.name} — drain cleaning, clog clearing, drain installation, and replacement. Upfront pricing, same-day service.`,
  alternates: { canonical: '/services/drains' },
};

const relatedCards = [
  { slug: 'drain-cleaning', title: 'Drain Cleaning' },
  { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
  { slug: 'sump-pumps', title: 'Sump Pumps' },
  { slug: 'leak-detection', title: 'Leak Detection' },
];

const signs = [
  { lead: 'Frequent clogs or backups', text: 'if your drains keep clogging even after cleaning, the problem may lie deeper in the line.' },
  { lead: 'Slow-draining sinks or tubs', text: 'slow drainage throughout the home often points to a damaged or collapsed main line.' },
  { lead: 'Bad odors', text: 'persistent sewer smells coming from drains can mean a crack or leak in the pipe that lets gases escape.' },
  { lead: 'Water stains or pooling', text: 'water appearing under sinks, around drains, or near walls can signal a hidden leak.' },
  { lead: 'Aging plumbing', text: 'homes with older galvanized or cast-iron pipes are more prone to corrosion and cracks.' },
];

const benefits = [
  { lead: 'A lasting fix, not a patch', text: 'we clear the whole clog instead of punching a hole through it the way store-bought cleaners do.' },
  { lead: 'Fewer recurring clogs', text: 'thorough, routine cleaning keeps your drains flowing freely for longer.' },
  { lead: 'Fewer sewer backups', text: 'catching buildup early helps prevent messy, costly backups into your home.' },
  { lead: 'A protected plumbing system', text: 'no harsh chemicals sitting in your pipes and eating away at them over time.' },
  { lead: 'Lower costs over time', text: 'small problems caught early cost far less than an emergency repair down the line.' },
];

const installTypes = [
  'Bathtub drains',
  'Dishwasher drains & air gaps',
  'Drain tiles',
  'Drainage pipes',
  'Floor drains',
  'Linear drains',
  'Kitchen sink drains',
  'Washing machine hook-ups',
];

const whyUs = [
  { icon: 'badge' as const, title: 'Camera Inspection', text: 'We find the real cause of the clog instead of guessing, so it stays fixed.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'Most drain calls are handled the same day you reach out.' },
];

const faqs = [
  { q: 'What causes frequent drain clogs?', a: 'Most recurring clogs come from grease, soap scum, hair, and food debris building up inside the pipe over time. Routine cleaning clears that buildup before it turns into a full blockage.' },
  { q: 'Is it safe to use chemical drain cleaners?', a: 'We generally advise against them. Harsh chemical cleaners can corrode pipes over time — especially older galvanized or cast-iron lines — and often only punch a hole through the clog rather than clearing it. Professional cleaning is safer and far more thorough.' },
  { q: 'How do I know if I need professional drain cleaning services?', a: 'Watch for slow drains, recurring clogs, bad odors, or gurgling noises. If more than one fixture is affected at once, the problem is likely deeper in the main line and worth a professional look.' },
  { q: 'What is the best way to prevent clogged drains?', a: 'Keep grease and food waste out of the drain, use strainers in sinks and tubs, never flush wipes, and schedule a cleaning about once a year. Those habits prevent most of the clogs we are called out for.' },
  { q: 'What is the difference between hydro jetting and a drain snake?', a: 'A drain snake or auger is great for clearing a single, localized clog. Hydro jetting uses high-pressure water to scour the entire inside of the pipe, which is the better choice for stubborn, recurring, or grease-heavy blockages.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Drain Cleaning & Drain Services',
  description: 'Professional drain cleaning, clog clearing, drain installation, and replacement.',
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
    { '@type': 'ListItem', position: 4, name: 'Drains', item: `${site.url}/services/drains` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function DrainsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Drain Services in ${site.serviceArea}`}
        description="Slow drain, stubborn clog, or a backup? Our licensed plumbers clear it fast and find the real cause — with upfront pricing and same-day service."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Drains' },
        ]}
      />

      {/* Top CTA banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Clogged or slow drain in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/drains-hero.jpg)' }}
            role="img"
            aria-label="Licensed plumber clearing a drain line"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Drain Services
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A store-bought bottle of drain cleaner is a short-term patch — it rarely clears the whole
            clog and can damage your pipes. {site.name} provides professional drain services for
            homeowners across {site.serviceArea}, clearing the blockage completely and using a camera
            inspection to find what caused it. The result is a lasting fix, not a clog that comes back
            in a month.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            From a single slow sink to a main line that keeps backing up, our licensed plumbers handle
            it with upfront, flat-rate pricing you approve before we start — and we clean up before we
            leave.
          </p>

          {/* Benefits */}
          <h2 className="mt-10 section-title text-brand-700">The Benefits of Professional Drain Service</h2>
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

          {/* Related drain services — image cards */}
          <h2 className="mt-10 section-title text-brand-700">Drain &amp; Sewer Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {relatedCards.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                  <span
                    className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(/services/${s.slug}.jpg)` }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-600" />
                  <span className="absolute inset-0 grid place-items-center p-3 text-center">
                    <span className="font-display text-[13px] font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] sm:text-sm">
                      {s.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Signs You Need Drain Replacement (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/drains-signs.jpg)' }}
            role="img"
            aria-label="Plumber inspecting and clearing a drain line"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Drain Replacement
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Recognizing the early warning signs of drain failure can help you prevent water damage
              and costly repairs. Some of the most common indicators include:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{s.lead}</span> — {s.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              If you notice any of these signs, it is worth having a professional inspect your
              plumbing as soon as possible. Our team uses advanced diagnostic tools — including drain
              cameras and leak detection equipment — to pinpoint exactly where the damage is and
              whether a repair or full replacement is the better option. Do not wait for a complete
              drain failure; a timely inspection can save you from larger plumbing emergencies down
              the line.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Drain Installation (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Drain Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A drain installation is not a DIY task — especially if you want peak performance from
              your plumbing, with no leaks or breakdowns, for years to come. Trust our professional
              plumbers to do the job right the first time; the money you spend is well worth the
              stress and inconvenience you save down the line.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">
              We have the training and experience to handle every type of drain installation,
              including:
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {installTypes.map((t) => (
                <li key={t} className="flex gap-2 text-sm font-medium text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Need help with a hook-up for your new washing machine? We have that covered, too.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/drains-install.jpg)' }}
            role="img"
            aria-label="Plumber discussing a drain installation with a homeowner"
          />
        </div>
      </section>

      {/* Cost of Drain Replacement */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Cost of Drain Replacement</h2>
          <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-ink/75">
            <p>
              The cost of drain replacement varies depending on a few key factors — the length of
              pipe that needs replacing, the materials used, and how accessible the affected area is.
              Replacing a short section of drain under a sink costs far less than installing a new main
              line that runs beneath the foundation.
            </p>
            <p>
              While it is impossible to give a one-size-fits-all price, you can expect the cost to
              reflect both the complexity of the job and the quality of the materials. PVC and ABS
              pipe are common for their durability and affordability, while cast iron or copper can
              raise the cost but offer a longer life.
            </p>
            <p>
              Our plumbers always start with a detailed inspection to pinpoint the issue, then give
              you an upfront estimate — no surprises, just honest, transparent pricing. If your drain
              system needs full replacement, we explain every step so you know exactly what you are
              paying for and why.
            </p>
            <p>
              Looking to budget for your next project? We can help you compare drain replacement
              options and choose the most cost-effective solution for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="pb-2">
        <div className="container-page">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Drain backing up right now? We answer 24/7.
            </h2>
            <Link href="/services/emergency-plumbing" className="btn-pink flex-shrink-0">
              Emergency Plumbing
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Why Choose {site.name} for Drains</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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

          {/* Bathroom & Kitchen drains */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-extrabold text-brand-700">
                Bathroom Drain Installations
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Bathrooms pack more drains into one space than anywhere else in the house — sinks,
                showers, tubs, toilets, and floor drains all tie into the same lines. We install and
                replace each of them to code, sizing and venting everything correctly so it drains
                fast and stays clog-free, whether you are updating a single fixture or remodeling the
                whole room.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold text-brand-700">
                Kitchen Sink Repairs &amp; Installations
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Kitchen drains take the most abuse — grease, food scraps, and soap build up faster
                here than anywhere else. We clear slow and clogged kitchen drains, install new sink
                and garbage-disposal lines, and handle the plumbing for a remodel or a new appliance,
                so your kitchen drains cleanly and quietly.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Drain Service FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Clear That Drain for Good</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Same-day service, upfront pricing, and a camera inspection to find the real cause. Call
              now or request a free estimate.
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
