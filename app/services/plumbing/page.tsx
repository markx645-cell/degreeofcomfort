import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { servicePages } from '@/content/servicePages';

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description: `Licensed plumbing services across ${site.serviceArea} from ${site.name} — drain cleaning, leak repair, water heaters, sewer lines, and more. Upfront pricing and same-day service.`,
  alternates: { canonical: '/services/plumbing' },
};

// Plumbing sub-services for the services grid + internal-link mesh.
const plumbingServices = servicePages.filter((s) => s.category === 'Plumbing');

const warningSigns = [
  'Slow or repeatedly clogging drains',
  'Gurgling sounds or sewage odors',
  'Low or dropping water pressure',
  'Water backing up into sinks, tubs, or floor drains',
  'Visible leaks, damp spots, or water stains',
  'A sudden spike in your water bill',
  'No hot water or a leaking water heater',
  'Rusty or discolored water at the tap',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'We staff for demand so most calls are handled the same day you reach out.' },
  { icon: 'heart' as const, title: 'Locally Owned', text: 'A local company that treats your home and your time with respect.' },
];

const faqs = [
  { q: 'What kind of financing options are available for plumbing services?', a: `We know plumbing repairs and installations can be a big investment, so we offer financing with quick approvals and flexible terms. There is no minimum purchase required, which makes it easier to get the plumbing work your home needs across ${site.serviceArea}.` },
  { q: 'What is one of the most common problems with pipes?', a: 'One of the most common is clogged drains. Hair, grease, and other debris build up over time, slowing the flow and eventually causing a full blockage. If you notice a slow drain or gurgling sounds, it is best to call a plumber before it turns into a bigger issue.' },
  { q: 'What is the life expectancy of plumbing in a house?', a: 'It depends on the material — copper supply lines often last 50 to 80 years, while older galvanized steel lasts far less. Water quality and regular maintenance also affect how long a system lasts. If your home is reaching those age limits, it may be time to consider replacement before problems start.' },
  { q: 'How do you check if a drain pipe is clogged?', a: 'A quick check is to run water through the pipe and watch how it drains. Slow drainage or gurgling sounds are clear signs of a blockage, and foul odors can point to trapped debris. If more than one fixture is affected, the clog is likely deeper in the line — a good time to call a plumber to clear it.' },
  { q: 'Can a plumber help with low water pressure?', a: 'Yes. Low water pressure can be caused by clogged pipes, sediment buildup in your water heater, a failing pressure regulator, or leaks in your plumbing system. We assess the situation and recommend the right solution to restore proper water flow throughout your home.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plumbing',
  description: 'Residential plumbing services including drain cleaning, leak repair, water heaters, and sewer lines.',
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
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function PlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Plumbing Services in ${site.serviceArea}`}
        description="From a dripping faucet to a full repipe, our licensed plumbers handle it all — with upfront pricing and same-day service."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Plumbing' }]}
      />

      {/* Top CTA banner (full width) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Need a plumber in {site.serviceArea}?
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

      <section className="py-16">
        <MainWithSidebar>
          {/* Overview */}
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Trusted Plumbers in {site.serviceArea}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} is a locally owned plumbing company serving homeowners across{' '}
            {site.serviceArea}. Whether you need a quick repair, a new water heater, or help with a
            sewer line, our licensed plumbers show up on time, explain your options in plain terms,
            and quote a flat rate you approve before any work begins.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We handle the full range of residential plumbing — from the small annoyances to the big
            projects — and we treat your home with respect, cleaning up before we leave. No hourly
            surprises, and no overtime fees on nights or weekends.
          </p>

          {/* Services grid */}
          <h2 className="mt-12 section-title text-brand-700">Our Plumbing Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Explore any service below for details, or call us and we will point you to the right fix.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {plumbingServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
                >
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

          {/* Warning signs — pink band */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
            <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              Signs It Is Time to Call a Plumber
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Small plumbing problems rarely fix themselves. Catching these early signs can save you
              from a much bigger repair down the line:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {warningSigns.map((w) => (
                <li key={w} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency banner */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Plumbing emergency? We answer 24/7.
            </h2>
            <Link href="/services/emergency-plumbing" className="btn-pink flex-shrink-0">
              Emergency Plumbing
            </Link>
          </div>

          {/* What to expect — pink band */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
            <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              What to Expect From Our Plumbers
            </h2>
            <p className="mt-3 text-sm text-white/90">
              A licensed plumber arrives on time and starts by understanding the problem — not just
              the symptom. We diagnose the real cause, explain what we found, and give you a clear,
              flat-rate price before any work begins.
            </p>
            <p className="mt-3 text-sm text-white/90">
              Once you approve, we complete the work efficiently, test it, and clean up the area
              before we leave. Every job is backed by our satisfaction guarantee, and we are happy to
              recommend the smaller, less expensive fix when that is genuinely all you need.
            </p>
          </div>

          {/* Installation prose */}
          <h2 className="mt-12 section-title text-brand-700">
            Professional Plumbing Installation at Honest Prices
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When it comes to plumbing installation, you want a team you can trust to get it right the
            first time. {site.name} provides professional installation for homeowners across{' '}
            {site.serviceArea}, handled by licensed plumbers with years of experience — from
            brand-new fixtures and lines to upgrades for an aging system.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Every project is completed efficiently and with attention to detail, so you get reliable
            plumbing without the unexpected problems that come from a rushed or cut-rate job. And
            because we quote a flat rate up front, &ldquo;affordable&rdquo; never turns into surprise
            charges at the end.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Plumbing</h2>
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

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Plumbing FAQs</h2>
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
              Book a Plumber in {site.serviceArea}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Same-day service, upfront pricing, and licensed plumbers who put homeowners first. Call
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
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
