import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Lighting Installation',
  description: `Indoor and outdoor lighting installation across ${site.serviceArea} from ${site.name} — recessed, LED, fixture, landscape, and patio lighting by licensed electricians.`,
  alternates: { canonical: '/services/lighting' },
};

const signs = [
  'Rooms that feel dim or unevenly lit',
  'Outdated lighting fixtures that no longer match your home',
  'Areas where additional task lighting would help',
  'Flickering or unreliable lights',
  'Limited outdoor lighting around walkways or entryways',
];

const process = [
  'Reviewing the layout of the room or outdoor area',
  'Recommending lighting fixtures and placement options',
  'Preparing electrical connections for new fixtures',
  'Installing lighting safely and securely',
  'Testing brightness and switch operation',
  'Confirming the installation meets electrical safety standards',
];

const indoor = [
  { link: 'Recessed lighting installation', href: '/services/recessed-lighting', post: ' for modern ceiling lighting' },
  { link: 'Lighting fixture installation', href: '/services/lighting-fixture-installation', post: ' for kitchens, dining rooms, and living areas' },
  { link: 'LED lighting', href: '/services/led-lighting', post: ' upgrades that improve energy efficiency' },
  { link: 'Basement lighting', href: '/services/basement-lighting', post: ' that improves visibility in finished or unfinished spaces' },
  { link: 'Garage lighting', href: '/services/garage-lighting', post: ' designed for storage areas and workshops' },
] as { pre?: string; link?: string; href?: string; post?: string }[];

const outdoor = [
  { link: 'Landscape lighting', href: '/services/landscape-lighting', post: ' for gardens and walkways' },
  { pre: 'Exterior lighting for garages and entryways' },
  { pre: 'Deck and ', link: 'patio lighting', href: '/services/patio-lighting', post: ' for outdoor living areas' },
  { link: 'Holiday lighting installation', href: '/services/holiday-lighting', post: ' for seasonal roofline, tree, and walkway displays' },
  { link: 'Hot tub wiring', href: '/services/hot-tub-wiring', post: ' for safe spa electrical connections and dedicated circuit installation' },
] as { pre?: string; link?: string; href?: string; post?: string }[];

const whyChoose = [
  'Licensed electricians with installation experience',
  'Safe and code-compliant electrical work',
  'High-quality lighting fixtures and LED lighting options',
  'Reliable scheduling and clear communication',
  'Lighting solutions designed for long-term performance',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced pros handling every connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Each install meets current electrical safety standards.' },
  { icon: 'badge' as const, title: 'Quality Fixtures', text: 'High-quality fixtures and energy-efficient LED options.' },
  { icon: 'clock' as const, title: 'Reliable Scheduling', text: 'Clear communication and dependable timelines.' },
];

const faqs = [
  { q: 'Do you offer home lighting for specific rooms like kitchens or bathrooms?', a: 'Yes. We install lighting for kitchens, bathrooms, basements, garages, and other living spaces.' },
  { q: 'How do I choose the right outdoor lighting for my home?', a: 'Outdoor lighting should illuminate entryways, walkways, and outdoor living areas. Our electricians can recommend lighting that improves both safety and appearance.' },
  { q: 'How long does it take to install new lighting?', a: 'Many lighting installations can be completed in one visit, depending on the number of fixtures and electrical connections involved.' },
  { q: 'What indoor lighting solutions do you offer?', a: 'We install recessed lighting, lighting fixtures, LED lighting, and other indoor lighting options for modern homes.' },
  { q: 'Do you offer LED light installation?', a: 'Yes. LED lighting provides strong brightness while using less energy than traditional bulbs.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Lighting Installation',
  description: 'Indoor and outdoor residential lighting installation, including recessed, LED, fixture, landscape, and patio lighting.',
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
    { '@type': 'ListItem', position: 4, name: 'Lighting Installation', item: `${site.url}/services/lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function LightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Lighting Installation in ${site.serviceArea}`}
        description="Indoor and outdoor lighting installed by licensed electricians — recessed, LED, fixtures, landscape, and patio lighting designed to improve brightness, safety, and efficiency."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Want brighter, better lighting at home?
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
            style={{ backgroundImage: 'url(/services/lighting-hero.jpg)' }}
            role="img"
            aria-label="Modern home interior with recessed lighting"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Lighting helps determine how your home looks and feels. The right lighting improves
            visibility and makes everyday spaces easier to use.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides lighting installation for homeowners across {site.serviceArea}. Our
            electricians install indoor and outdoor lighting designed to improve brightness, safety, and
            energy efficiency.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you need recessed lighting, LED lighting, or lighting fixture installation, our team
            delivers lighting solutions that help every room work better.
          </p>

          <h3 className="mt-8 font-display text-2xl font-black uppercase leading-tight text-brand-600">
            Our Lighting Services
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Our electricians install lighting designed to improve both indoor and outdoor spaces. Good
            lighting makes rooms easier to use and improves how your home looks.
          </p>

          <h4 className="mt-6 font-display text-xl font-extrabold text-brand-700">Indoor Lighting Solutions</h4>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Indoor lighting should provide steady brightness throughout the home. Our{' '}
            <Link href="/services/indoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              indoor lighting installation services
            </Link>{' '}
            support kitchens, bathrooms, basements, garages, and living areas, and include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {indoor.map((i) => (
              <li key={i.link ?? i.pre} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  {i.pre}
                  {i.link && i.href && (
                    <Link href={i.href} className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
                      {i.link}
                    </Link>
                  )}
                  {i.post}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Many homes benefit from layered lighting. Overhead lights combined with task lighting help
            remove dark areas and improve comfort.
          </p>

          <h4 className="mt-6 font-display text-xl font-extrabold text-brand-700">Outdoor Lighting Services</h4>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Outdoor lighting improves both safety and curb appeal. Exterior lighting helps illuminate
            walkways, entry points, and outdoor living spaces. Our{' '}
            <Link href="/services/outdoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              outdoor lighting installation services
            </Link>{' '}
            include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {outdoor.map((o) => (
              <li key={o.link ?? o.pre} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  {o.pre}
                  {o.link && o.href && (
                    <Link href={o.href} className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
                      {o.link}
                    </Link>
                  )}
                  {o.post}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Outdoor lighting design helps homeowners move safely around their property after dark.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need lighting installation (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/lighting-signs.jpg)' }}
            role="img"
            aria-label="Outdoor landscape lighting around a home"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Professional Lighting Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Lighting systems can become outdated over time. Older fixtures often do not provide enough
              brightness for modern homes. You may need professional lighting installation services if
              you notice:
            </p>
            <ul className="mt-4 grid gap-1.5">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Upgrading lighting can greatly improve how each room looks and functions.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our lighting installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every lighting installation begins with evaluating the space. This helps determine fixture
              placement and lighting needs. Our process typically includes:
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
              Professional installation helps ensure lighting works properly and lasts for years.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing a lighting plan with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Custom designs */}
          <h2 className="mt-12 section-title text-brand-700">Custom Lighting Designs</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Lighting design helps create balanced brightness throughout the home. Proper fixture
            placement prevents dark areas and improves visibility.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our electricians help homeowners choose lighting solutions that match the layout of their
            space. Combining recessed lighting, LED lighting, and decorative fixtures creates
            comfortable, functional rooms. Thoughtful lighting design can brighten kitchens, improve
            hallway visibility, and highlight important areas of your home.
          </p>

          {/* Cost */}
          <h2 className="mt-12 section-title text-brand-700">Cost of Our Lighting Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Lighting installation costs depend on the number of fixtures and the complexity of the
            project. Some lighting fixture installations can be completed quickly, while larger lighting
            upgrades may require more planning.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Our electricians review your lighting needs and recommend solutions that fit your home and
            budget.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Lighting Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable electrical services.
            When you work with our team, you receive:
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
            Our goal is simple. We install lighting that helps your home function better every day.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Lighting Installation FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to brighten your home inside and out? {site.name} installs indoor and outdoor lighting
              across {site.serviceArea}. Call now or request a free estimate.
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
