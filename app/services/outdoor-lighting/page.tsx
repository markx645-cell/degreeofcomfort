import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Outdoor Lighting Installation',
  description: `Outdoor lighting installation across ${site.serviceArea} from ${site.name} — landscape, patio, holiday, security, and spa lighting installed by licensed electricians, built for Midwest weather.`,
  alternates: { canonical: '/services/outdoor-lighting' },
};

const benefits = [
  { lead: 'Improved Visibility', text: 'Landscape lighting illuminates stairs, walkways, and driveways to reduce trip hazards.' },
  { lead: 'Increased Security', text: 'Lighting around entry points and darker areas improves visibility and helps deter unwanted activity.' },
  { lead: 'Enhanced Curb Appeal', text: 'A thoughtful outdoor lighting design highlights landscaping and architectural details.' },
  { lead: 'Expanded Outdoor Living', text: 'Custom patio lighting lets you comfortably use decks and patios after sunset.' },
  { lead: 'Added Property Value', text: 'Landscape lighting installation enhances both usability and overall appearance.' },
];

const process = [
  'Property evaluation and consultation',
  'Customized outdoor lighting design and layout planning',
  'Selection of weather-resistant light fixtures',
  'Safe, code-compliant wiring and electrical connections',
  'Secure fixture placement and mounting',
  'System testing and brightness adjustments',
];

const types = [
  'Pathway and walkway lighting',
  'Driveway and entry lighting',
  'Accent lighting for architectural features',
  'Outdoor landscape lighting for trees and garden beds',
  'Deck and patio light installation',
  'Security and motion-activated lighting',
  'Pool and spa lighting',
  'Seasonal and permanent holiday lights installation',
];

const proVsDiy = [
  { lead: 'Code-Compliant Electrical Work', text: 'Outdoor wiring must withstand moisture and temperature shifts.' },
  { lead: 'Strategic Fixture Placement', text: 'Proper outdoor lighting design prevents glare and uneven coverage.' },
  { lead: 'Reliable Load Management', text: 'Incorrect voltage planning can cause performance issues.' },
  { lead: 'Higher-Quality Light Fixtures', text: 'We install durable products rated for outdoor use.' },
  { lead: 'Reduced Maintenance Problems', text: 'Professional landscape lighting installation helps prevent loose connections and premature failure.' },
];

const whyChoose = [
  'Licensed and experienced electricians',
  'Customized outdoor lighting design',
  'High-quality light fixtures',
  'Transparent pricing',
  'Reliable scheduling',
  'Code-compliant electrical work',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced pros handling every outdoor connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Moisture-rated wiring and connections that meet code.' },
  { icon: 'badge' as const, title: 'Durable Fixtures', text: 'High-quality products rated to perform in Midwest weather.' },
  { icon: 'clock' as const, title: 'Reliable Scheduling', text: 'Transparent pricing and dependable timelines.' },
];

const faqs = [
  { q: 'What is landscape lighting?', a: 'Landscape lighting refers to exterior lighting designed to highlight landscaping features and improve safety around your property.' },
  { q: 'What is the benefit of an outdoor lighting installation?', a: 'Outdoor lighting installation improves visibility, enhances security, increases curb appeal, and expands usable outdoor space.' },
  { q: 'How long does an exterior lighting installation take?', a: 'Most projects are completed within one day. Larger exterior lighting installation systems may require additional time.' },
  { q: 'Is a professional outdoor lighting installation better than DIY?', a: 'Yes. Professional installation ensures proper wiring, safe electrical connections, and reliable system performance.' },
  { q: 'What kind of outdoor lights do you install?', a: 'We install pathway lighting, accent lighting, patio lighting, outdoor landscape lighting systems, security lighting, and holiday lighting.' },
  { q: 'Can outdoor lights increase energy efficiency?', a: 'Yes. Modern LED light fixtures use less electricity and last longer than traditional bulbs.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Outdoor Lighting Installation',
  description: 'Outdoor lighting installation including landscape, patio, holiday, security, and spa lighting.',
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
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function OutdoorLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Outdoor Lighting Installation in ${site.serviceArea}`}
        description="Landscape, patio, holiday, security, and spa lighting installed by licensed electricians — durable fixtures and balanced layouts built to perform in Midwest weather."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Outdoor Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Light up your yard the right way.
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
            style={{ backgroundImage: 'url(/services/outdoor-lighting-hero.jpg)' }}
            role="img"
            aria-label="Home exterior with landscape lighting at dusk"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Outdoor Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A professionally designed outdoor lighting installation enhances visibility, improves
            safety, and highlights the features that make your home stand out. The right lighting
            transforms your property after dark, improving both comfort and security.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides complete outdoor light installation services across {site.serviceArea}.
            From detailed outdoor lighting design and{' '}
            <Link href="/services/landscape-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              landscape lighting installation
            </Link>{' '}
            to{' '}
            <Link href="/services/patio-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              patio light installation
            </Link>
            ,{' '}
            <Link href="/services/holiday-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              holiday lights installation
            </Link>
            , and{' '}
            <Link href="/services/hot-tub-wiring" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              hot tub wiring
            </Link>
            , our licensed electricians deliver safe, long-lasting results.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We focus on durable light fixtures, balanced layouts, and electrical systems built to
            perform in Midwest weather.
          </p>

          <h3 className="mt-8 font-display text-2xl font-black uppercase leading-tight text-brand-600">
            Types of Outdoor Lights We Install
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Every home and yard is different. Your lighting should reflect how you use your outdoor
            space. We install:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {types.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Our experienced landscape lighting installers carefully place each fixture to ensure even
            brightness without glare or harsh shadows.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Benefits (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/outdoor-lighting-benefits.jpg)' }}
            role="img"
            aria-label="Patio with warm outdoor lighting in the evening"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Benefits of Outdoor Lighting for Your Home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Outdoor lighting installation provides real, practical advantages for homeowners.
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
              Your Local &amp; Trusted Outdoor Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Professional Outdoor Lighting Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A successful outdoor lighting installation starts with proper planning and safe electrical
              execution. We follow a structured process to ensure reliable performance. Our installation
              process includes:
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
              Proper voltage distribution is critical. Our landscape lighting installers calculate load
              carefully to prevent flickering, uneven brightness, or early component failure. We also
              offer energy-efficient LED systems that provide long-term savings.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning an outdoor lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Pro vs DIY */}
          <h2 className="mt-12 section-title text-brand-700">Benefits of Professional Installation over DIY Efforts</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            While DIY kits may seem convenient, professional outdoor lighting installation delivers
            better results and greater protection.
          </p>
          <ul className="mt-4 space-y-2">
            {proVsDiy.map((p) => (
              <li key={p.lead} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <span className="font-bold text-brand-700">{p.lead}:</span> {p.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional installation protects both your home and your investment.
          </p>

          {/* Holiday */}
          <h2 className="mt-12 section-title text-brand-700">Holiday Lighting Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            <Link href="/services/holiday-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Holiday lights installation
            </Link>{' '}
            should be safe and stress-free. Our team designs custom seasonal displays that complement
            your home’s architecture and landscaping.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We handle secure mounting, proper electrical load balancing, and safe removal after the
            season ends. You get a polished look without ladder work or wiring concerns.
          </p>

          {/* Hot tub */}
          <h2 className="mt-12 section-title text-brand-700">Hot Tub Wiring and Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Adding a spa requires proper{' '}
            <Link href="/services/hot-tub-wiring" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              hot tub wiring
            </Link>{' '}
            and electrical planning. We provide complete hot tub electrical installation services to
            ensure safe operation and code compliance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Dedicated circuits, GFCI protection, and outdoor-rated wiring are essential for long-term
            performance. When paired with surrounding outdoor lighting, your spa area becomes a fully
            illuminated and relaxing extension of your home.
          </p>

          {/* Landscape */}
          <h2 className="mt-12 section-title text-brand-700">Landscape Lighting Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            <Link href="/services/landscape-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Landscape lighting
            </Link>{' '}
            adds depth and structure to your property. It highlights trees, shrubs, retaining walls, and
            water features while improving nighttime safety.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional landscape lighting installation enhances visibility along paths and elevation
            changes. Outdoor landscape lighting also creates dimension and visual interest across your
            yard.
          </p>

          {/* Patio */}
          <h2 className="mt-12 section-title text-brand-700">Custom Patio Lighting Solutions</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            <Link href="/services/patio-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Custom patio lighting
            </Link>{' '}
            improves comfort and functionality in outdoor living areas. Patio light installation lets you
            control the brightness and atmosphere based on how you use the space.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            From recessed deck lighting and under-rail illumination to café lighting and outdoor kitchen
            accents, we design systems that feel intentional and balanced.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Outdoor Lighting Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} choose {site.name} for our dependable service and
            professional workmanship. When you work with us, you receive:
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
            Every outdoor lighting installation is carefully planned and professionally installed to
            ensure long-term performance.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Outdoor Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Outdoor Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to transform your property after dark? {site.name} installs outdoor lighting across{' '}
              {site.serviceArea}. Call now or request a free estimate.
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
