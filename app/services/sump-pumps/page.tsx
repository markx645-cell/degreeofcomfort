import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Sump Pumps',
  description: `Sump pump installation, repair, and replacement across ${site.serviceArea} from ${site.name} — including battery backup systems to keep your basement dry. Upfront pricing, same-day service.`,
  alternates: { canonical: '/services/sump-pumps' },
};

const signs = [
  'Water pooling in the basement or crawl space after rain',
  'Frequent basement flooding or recurring moisture issues',
  'Damp or musty odors coming from lower levels of the home',
  'Visible mold or mildew on walls, floors, or stored items',
  'Foundation cracks or signs of water seepage',
  'A history of water intrusion in your neighborhood',
];

const benefits = [
  { lead: 'Flood prevention', text: 'a sump pump actively removes water that collects in your basement, cutting flood risk during heavy rain.' },
  { lead: 'Mold and mildew control', text: 'keeping lower levels dry prevents mold growth that hurts your indoor air quality.' },
  { lead: 'Foundation protection', text: 'managing water levels helps maintain your home’s structural integrity.' },
  { lead: 'Increased property value', text: 'effective water management is a real draw for buyers.' },
  { lead: 'Peace of mind', text: 'knowing your home is protected lets you rest easy, even in severe weather.' },
];

const whyUs = [
  { icon: 'shield' as const, title: 'Battery Backup Options', text: 'We install backup systems so your pump keeps working during a storm-time power outage.' },
  { icon: 'check' as const, title: 'Licensed & Insured', text: 'Background-checked plumbers and installations sized correctly for your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'A failed pump before a storm cannot wait — we reach most homes the same day.' },
];

const faqs = [
  { q: 'How long does a sump pump last before needing replacement?', a: 'Most sump pumps last about 7–10 years. If yours is older than that, runs constantly, makes new noises, or is not keeping up with the water, it is worth having it checked before the next big storm.' },
  { q: 'What is involved in a sump pump installation?', a: 'We assess the pit and your drainage, set the pump, connect the discharge line and a check valve, test the float switch, and — where it makes sense — add a battery backup so you are covered during a power outage.' },
  { q: 'What is included in your sump pump repair service?', a: 'We diagnose the problem, then fix the common culprits — a failed check valve, a clogged discharge line, or a stuck float switch — and fully test the system. We handle both submersible and pedestal models.' },
  { q: 'What causes sump pumps to fail?', a: 'The usual causes are a stuck float switch, a clogged or frozen discharge line, power loss during a storm, an undersized pump, or simple age and wear. A battery backup protects against the power-loss failures.' },
  { q: 'How much water can a sump pump handle?', a: 'It depends on the pump’s horsepower and how high it has to push the water. We size the pump to your home’s water volume, and a backup pump adds capacity for the heaviest storms.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sump Pump Installation & Repair',
  description: 'Sump pump installation, repair, and replacement, including battery backup systems.',
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
    { '@type': 'ListItem', position: 4, name: 'Sump Pumps', item: `${site.url}/services/sump-pumps` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SumpPumpsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Sump Pumps in ${site.serviceArea}`}
        description="Installation, repair, and replacement — including battery-backup systems — to keep your basement dry through every storm."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Sump Pumps' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Sump pump trouble in {site.serviceArea}? Call for service
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
            style={{ backgroundImage: 'url(/services/sump-hero.jpg)' }}
            role="img"
            aria-label="Sump pump installed in a basement"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Sump Pump Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A solid sump pump installation can be the difference between a dry basement and thousands
            of dollars in water damage. {site.name} installs pumps with precision — backed by years of
            experience, attention to detail, and the kind of service you only get from people who
            genuinely care about their work.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Our plumbing installation covers more than just sump pumps — we handle all kinds of setups
            to keep your home protected and efficient. If you have noticed damp spots, pooling water,
            or strange noises from your current unit, let us take a look. We will walk you through
            your options and handle the installation correctly.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs your home needs a sump pump (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/sump-signs.jpg)' }}
            role="img"
            aria-label="Water in a basement"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs Your Home Needs a Sump Pump
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A sump pump plays a critical role in protecting your home from water damage, especially
              in areas prone to heavy rain or high groundwater. If your home does not already have
              one, these warning signs may mean it is time to install:
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
              Installing a sump pump can help manage excess water, protect your foundation, and reduce
              the risk of costly water damage.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Sump pump replacement (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Sump Pump Replacement
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Over time, even the best sump pumps wear out. When yours starts making strange noises,
              runs constantly, or just is not keeping up with rising water levels, it might be time for
              a replacement. Our team will help you sort through the signs and figure out the next
              step.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We install high-quality sump pumps that hold up through storms, rising groundwater, and
              day-to-day operation. We will guide you through your options and install a system that
              works with your home’s layout, pipe system, and drainage setup — so you do not have to
              worry about leaks, clogs, or switch failures.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Plumber discussing a sump pump replacement with a homeowner"
          />
        </div>
      </section>

      {/* Repair + benefits + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Sump Pump Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Dealing with a broken check valve, a clogged discharge pipe, or a float switch that is not
            working properly? That is where our sump pump repair comes in. We diagnose the issue
            quickly, make the fix, and test everything before we go — for all types of units,
            including submersible and pedestal models.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our plumbing team has seen just about every repair situation there is. We do not rush
            through the job or rely on guesswork; we get to the source of the issue and make repairs
            that actually last.
          </p>

          {/* Benefits */}
          <h2 className="mt-12 section-title text-brand-700">Benefits of Adding a Sump Pump to Your Home</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing a sump pump offers real advantages, especially in areas prone to heavy rain or
            flooding. Some of the key benefits:
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

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Your Sump Pump
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A properly working sump pump is essential for protecting your home from water damage and
            flooding. {site.name} provides professional sump pump installation and repair to make sure
            your system is reliable when you need it most.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced technicians, careful workmanship, and clear communication, we help
            homeowners choose the right sump pump and keep it running efficiently. Whether we are
            installing a new system or repairing an existing one, the focus is on dependable
            performance, long-term protection, and peace of mind.
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
          <h2 className="mt-12 section-title text-brand-700">Sump Pump FAQs</h2>
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
              Schedule Your Sump Pump Service Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Keeping your basement dry is not optional — it is as important as heat in the winter. A
              well-installed sump pump protects your space, your belongings, and your peace of mind.
              Whether your unit needs a fix or it is time for a new one, we will help you get there
              without added stress.
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
