import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Mini-Splits',
  description: `Ductless mini-split installation and repair across ${site.serviceArea} from ${site.name} — flexible, efficient cooling and heating without ductwork. Upfront pricing.`,
  alternates: { canonical: '/services/mini-splits' },
};

const cards = [
  { slug: 'mini-split-installation', title: 'Mini-Split Installation' },
  { slug: 'mini-split-repair', title: 'Mini-Split Repair' },
];

const signs = [
  'Uneven cooling or heating between rooms',
  'Weak airflow from an indoor unit',
  'Unusual noises during operation',
  'Water leaking near the indoor unit',
  'Odors coming from the system',
  'Rising energy bills with no change in usage',
  'The system shutting down or responding slowly',
];

const benefits = [
  'Zoned cooling and heating for individual rooms',
  'Improved energy efficiency compared to central air conditioning',
  'Quiet operation',
  'No need for ductwork',
  'Greater control over home comfort',
];

const goodFit = [
  'A home addition or renovated space',
  'Rooms that are difficult to heat or cool',
  'An older home without existing ductwork',
  'Uneven temperatures throughout the house',
];

const whyUs = [
  { icon: 'check' as const, title: 'Cooling & Heating', text: 'One efficient ductless system that keeps your space comfortable all year.' },
  { icon: 'badge' as const, title: 'Right-Sized Zones', text: 'We size the system and indoor heads to your home and how you use it.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and clean, code-compliant work.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible plans so an efficient upgrade fits your budget.' },
];

const faqs = [
  { q: 'What is a ductless mini-split system?', a: 'A mini-split pairs an outdoor compressor with one or more indoor units (heads) that mount on a wall or ceiling. It cools and heats your home without any ductwork — perfect for spaces a central system cannot reach well.' },
  { q: 'Do mini-splits heat as well as cool?', a: 'Yes. Most mini-splits are heat pumps, so the same system cools in summer and heats in winter — efficiently, and with independent control for each zone.' },
  { q: 'How many indoor units do I need?', a: 'It depends on the rooms or zones you want to condition. A single head works for one room; a multi-zone system runs several heads off one outdoor unit. We size it to your home.' },
  { q: 'Are ductless mini-splits energy efficient?', a: 'Very. With no duct losses and inverter-driven compressors that adjust output to demand, mini-splits often cut energy use compared with older window units or extending central air.' },
  { q: 'Where do mini-splits make the most sense?', a: 'Additions and renovations, finished basements and garages, older homes without ducts, and any room with stubborn uneven temperatures are all great fits.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ductless Mini-Splits',
  description: 'Ductless mini-split installation and repair for efficient cooling and heating.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Air Conditioning', item: `${site.url}/services/air-conditioning` },
    { '@type': 'ListItem', position: 4, name: 'Mini-Splits', item: `${site.url}/services/mini-splits` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MiniSplitsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning"
        title={`Ductless Mini-Splits in ${site.serviceArea}`}
        description="Flexible, efficient cooling and heating without ductwork — installation and repair for additions, basements, and homes that need targeted comfort."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Mini-Splits' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Considering a mini-split in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/minisplit-hero.jpg)' }}
            role="img"
            aria-label="Ductless mini-split indoor unit"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Ductless Mini-Split Systems
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Ductless mini-split systems provide flexible cooling and heating without ductwork. They
            are a popular option for homeowners who want targeted comfort, improved efficiency, and
            reliable performance in specific areas of the home.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} offers professional air conditioning and ductless mini-split services across{' '}
            {site.serviceArea}, supporting both new systems and existing equipment so homeowners keep
            dependable comfort year-round.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Because ductless systems work differently from traditional central air, proper service
            takes specialized knowledge — our technicians understand how mini-splits function and how
            to service them correctly.
          </p>

          {/* Our services */}
          <h2 className="mt-10 section-title text-brand-700">Our Ductless Mini-Split Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {cards.map((s) => (
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
          <div className="mt-5 space-y-4">
            <div>
              <h3 className="font-display text-base font-extrabold text-brand-700">
                <Link href="/services/mini-split-installation" className="hover:text-pink-600">
                  Ductless Mini-Split Installation
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                We install ductless systems in homes, additions, renovations, and spaces where
                ductwork is impractical. Proper sizing, placement, and setup help ensure consistent
                comfort and efficient operation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-extrabold text-brand-700">
                <Link href="/services/mini-split-repair" className="hover:text-pink-600">
                  Ductless Mini-Split Repair
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
                When a mini-split stops working properly, comfort can change quickly. Our technicians
                diagnose and fix the common issues that affect airflow, temperature control, and
                overall reliability.
              </p>
            </div>
          </div>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a ductless mini-split (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/mini-splits.jpg)' }}
            role="img"
            aria-label="Ductless mini-split outdoor unit"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need a Ductless Mini-Split
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Changes in comfort often signal that a ductless mini-split system needs attention.
              Addressing issues early can help prevent discomfort and system strain. Common signs
              include:
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
              If your system is no longer delivering consistent comfort, professional service can help
              identify the cause.
            </p>
          </div>
        </div>
      </section>

      {/* Band: How a ductless mini-split works (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              How a Ductless Mini-Split System Works
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A ductless mini-split heats and cools a home without ductwork. Instead of pushing air
              through vents, it delivers conditioned air directly into individual rooms or zones.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Each system includes an outdoor unit and one or more indoor units. The outdoor unit
              houses the compressor, while the indoor units mount inside the home and distribute heated
              or cooled air.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Refrigerant lines and electrical connections link the indoor and outdoor units through a
              small wall opening, letting the system transfer heat efficiently while minimizing energy
              loss.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Because each indoor unit operates independently, you can control temperatures in
              specific areas — a zoned design that improves comfort and reduces energy waste.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician explaining how a mini-split works to a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Benefits of Ductless Mini-Split Systems</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Many homeowners choose ductless systems for their flexibility and performance advantages.
            Ductless mini-splits offer:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These benefits make ductless systems a strong option for a wide range of homes and
            layouts.
          </p>

          {/* Is it right */}
          <h2 className="mt-12 section-title text-brand-700">Is a Ductless Mini-Split Right for Your Home?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Ductless systems are well-suited for homes where traditional HVAC struggles to deliver
            consistent comfort. A ductless system may be a good fit if you have:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {goodFit.map((g) => (
              <li key={g} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {g}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our team helps you evaluate whether a ductless mini-split is a good fit based on your
            layout, comfort goals, and energy needs.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Mini-Splits</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for professional cooling and heating
            services. Our team focuses on clear communication, accurate recommendations, and dependable
            workmanship — helping you understand your options and delivering service built for
            long-term comfort and reliability.
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
          <h2 className="mt-12 section-title text-brand-700">Mini-Split FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule a Mini-Split Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Considering a new ductless system or need service for an existing one? We are ready to
              help. Call now or request a free estimate.
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
