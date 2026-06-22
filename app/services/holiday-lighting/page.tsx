import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Holiday Lighting Installation',
  description: `Professional holiday lighting installation across ${site.serviceArea} from ${site.name} — custom Christmas light displays, commercial-grade materials, safe install and scheduled removal.`,
  alternates: { canonical: '/services/holiday-lighting' },
};

const benefits = [
  { lead: 'Safety First', text: 'Professional holiday light installation eliminates the risks of climbing ladders, walking roofs, and handling electrical connections in cold weather.' },
  { lead: 'Custom Lighting Design', text: 'Our team creates a custom design that complements your home or business and reflects your holiday style.' },
  { lead: 'High-Quality Materials', text: 'We use commercial-grade lighting built to withstand winter weather.' },
  { lead: 'Time Savings', text: 'Skip the hassle of installation and removal. We handle everything so you can enjoy the holiday season.' },
  { lead: 'Clean, Polished Appearance', text: 'Professional Christmas light installation ensures straight lines, balanced spacing, and a cohesive holiday light display.' },
];

const process = [
  'On-site consultation and free estimate',
  'Custom lighting design planning',
  'Professional holiday lighting installation',
  'Secure attachment and safe electrical connections',
  'In-season maintenance if needed',
  'Scheduled removal after the holidays',
];

const options = [
  'Roofline Christmas light installation',
  'Tree and shrub lighting',
  'Wreaths and garland with lighting',
  'Walkway and driveway lighting',
  'Multi-color or classic white displays',
];

const whyChoose = [
  'Experienced Christmas light installers',
  'High-quality commercial-grade lighting',
  'Custom design options',
  'Safe and secure installation',
  'Clear pricing and a free estimate',
  'Scheduled removal after the season',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Experienced Installers', text: 'Trained Christmas light installers who handle every detail safely.' },
  { icon: 'badge' as const, title: 'Commercial-Grade Lighting', text: 'High-quality materials built to withstand winter weather.' },
  { icon: 'check' as const, title: 'Custom Design Options', text: 'Layouts tailored to your home, landscaping, and style.' },
  { icon: 'clock' as const, title: 'Install & Removal', text: 'We handle setup and scheduled takedown after the season.' },
];

const faqs = [
  { q: 'What is the benefit of professional holiday lighting installation?', a: 'Professional installation ensures safety, high-quality results, and a polished holiday light display without the risks of DIY decorating.' },
  { q: 'How do custom holiday lights work?', a: 'We create a lighting design tailored to your home or business, install commercial-grade lights, and remove them after the holiday season.' },
  { q: 'Can I choose the design for my lights?', a: 'Yes. You can select color schemes, layout preferences, and specific areas you want highlighted.' },
  { q: 'How long does the installation process take?', a: 'Most holiday light installation projects are completed in one day, depending on property size and design complexity.' },
  { q: 'How much will holiday lighting cost me?', a: 'The cost to have holiday lights installed depends on home size, design complexity, and materials. We provide a free estimate to give you clear pricing upfront.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Holiday Lighting Installation',
  description: 'Professional holiday and Christmas light installation, including custom design, install, and scheduled removal.',
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
    { '@type': 'ListItem', position: 6, name: 'Holiday Lighting', item: `${site.url}/services/holiday-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HolidayLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Holiday Lighting Installation in ${site.serviceArea}`}
        description="Custom holiday and Christmas light displays installed by experienced pros — commercial-grade materials, safe install, and scheduled removal after the season."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
          { label: 'Holiday Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Skip the ladder this holiday season.
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
            style={{ backgroundImage: 'url(/services/holiday-lighting-hero.jpg)' }}
            role="img"
            aria-label="Home decorated with holiday lights"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Holiday Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Make your home stand out this holiday season with professional holiday lighting installation
            from {site.name}. Instead of climbing ladders or untangling cords, let our experienced team
            handle every detail safely and efficiently.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We provide complete holiday lights installation across {site.serviceArea}. From rooflines and
            trees to walkways and entryways, our{' '}
            <Link href="/services/outdoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              outdoor holiday light installation services
            </Link>{' '}
            enhance curb appeal and spread holiday spirit.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you’re looking for a classic Christmas light installation or a fully customized
            holiday light display, our team delivers high-quality results built for safety and
            durability.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Benefits (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/holiday-lighting-benefits.jpg)' }}
            role="img"
            aria-label="Roofline decorated with holiday lights"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Benefits of Professional Holiday Lighting Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Hiring professionals for your holiday light installation offers clear advantages over DIY
              decorating.
            </p>
            <ul className="mt-4 space-y-2">
              {benefits.map((b) => (
                <li key={b.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{b.lead}:</span> {b.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Holiday Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Holiday Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Our process is simple and designed for convenience.
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
              Our experienced Christmas light installers ensure every installation is neat, secure, and
              built to last throughout the season.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Holiday lighting consultation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Our Approach to Custom Holiday Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Every home is different. Your lighting should be too. We create custom lighting design plans
            that match your architecture, landscaping, and personal style. Whether you prefer clean white
            lights or multi-color displays, we tailor the layout to your vision.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our team installs lighting along rooflines, windows, trees, columns, and walkways to create a
            balanced and visually appealing holiday light display. We work with both residential and
            commercial properties to deliver professional results for any home or business.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Custom Holiday Lighting Options</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {options.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our professional Christmas light installation services let you choose the look you want while
            we handle the technical details.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Holiday Lighting Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} trust {site.name} for dependable service and
            professional results. When you choose us, you receive:
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
            We focus on delivering stress-free holiday lighting services so you can enjoy the season
            without the hassle.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Holiday Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Holiday Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Let our team bring your holiday lighting vision to life. {site.name} installs custom holiday
              displays across {site.serviceArea}. Call now or request a free estimate.
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
