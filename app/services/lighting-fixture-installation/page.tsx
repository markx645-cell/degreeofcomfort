import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Light Fixture Installation',
  description: `Light fixture installation across ${site.serviceArea} from ${site.name} — kitchen, bathroom, dining, pendant, and ceiling fixtures installed and replaced by licensed electricians.`,
  alternates: { canonical: '/services/lighting-fixture-installation' },
};

const types = [
  'Bathroom light fixtures designed for mirrors and vanity areas',
  'Kitchen light fixtures that provide strong task lighting',
  'Dining room light fixtures that highlight tables and gathering spaces',
  'Ceiling-mounted lighting fixtures for bedrooms and living rooms',
  'Pendant lights for kitchen islands and counters',
  'Wall-mounted fixtures for hallways and entryways',
];

const process = [
  'Reviewing the room layout and lighting needs',
  'Safely removing existing fixtures when needed',
  'Preparing electrical connections for the new fixture',
  'Installing the light fixture securely',
  'Testing brightness and switch operation',
  'Confirming the installation meets electrical safety standards',
];

const ledBenefits = [
  'Lower energy consumption',
  'Longer bulb lifespan',
  'Consistent brightness',
  'Reduced heat output',
  'Fewer bulb replacements over time',
];

const designSpaces = [
  'Kitchens that require strong task lighting',
  'Dining rooms where lighting highlights the table area',
  'Living rooms that benefit from layered lighting',
  'Hallways and entryways that need improved visibility',
];

const whyChoose = [
  'Licensed electricians with installation experience',
  'Professional light fixture installation services',
  'Safe and code-compliant electrical work',
  'High-quality lighting fixture options',
  'Reliable scheduling and clear pricing',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced pros who wire and mount every fixture safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Secure mounting and connections that meet electrical code.' },
  { icon: 'badge' as const, title: 'Quality Fixtures', text: 'High-quality, energy-efficient fixture and LED options.' },
  { icon: 'house' as const, title: 'Financing Available', text: 'Flexible financing to upgrade lighting across multiple rooms.' },
];

const faqs = [
  { q: 'What types of lighting fixtures do you install?', a: 'We install many types of fixtures including bathroom light fixtures, kitchen light fixtures, dining room light fixtures, ceiling lights, and wall-mounted lighting.' },
  { q: 'Can you replace existing lighting fixtures?', a: 'Yes. Our electricians provide light fixture replacement services for outdated or damaged fixtures.' },
  { q: 'Do you offer energy-efficient lighting options?', a: 'Yes. Many modern lighting fixtures support LED bulbs that provide strong brightness while using less electricity.' },
  { q: 'How long will light fixture installation take?', a: 'Most installations can be completed during a single service visit, depending on the number of fixtures and electrical connections involved.' },
  { q: 'Should you DIY or hire a professional to install light fixtures?', a: 'Professional installation ensures wiring is handled safely and the fixture is mounted securely. This reduces the risk of electrical issues and ensures proper performance.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Light Fixture Installation',
  description: 'Light fixture installation and replacement, including kitchen, bathroom, dining, pendant, and ceiling fixtures.',
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
    { '@type': 'ListItem', position: 5, name: 'Light Fixture Installation', item: `${site.url}/services/lighting-fixture-installation` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function LightingFixtureInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Light Fixture Installation in ${site.serviceArea}`}
        description="Kitchen, bathroom, dining, pendant, and ceiling fixtures installed and replaced by licensed electricians — connected safely and mounted to last."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Light Fixture Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Installing or replacing a light fixture?
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
            style={{ backgroundImage: 'url(/services/fixture-hero.jpg)' }}
            role="img"
            aria-label="Pendant light fixtures over a kitchen island"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Light Fixture Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Lighting affects how every room in your home looks and feels. The right fixture improves
            visibility, highlights design features, and makes everyday activities easier.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides light fixture installation for homeowners across {site.serviceArea}. Our
            electricians install a wide range of{' '}
            <Link href="/services/lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              lighting
            </Link>{' '}
            designed for kitchens, bathrooms, dining rooms, hallways, and living areas.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Many homeowners upgrade their{' '}
            <Link href="/services/indoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              indoor lighting
            </Link>{' '}
            when replacing outdated fixtures or renovating a room. Modern lighting options provide better
            brightness, improved energy efficiency, and more flexible design choices.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you are installing a new fixture or replacing an older one, our electricians make sure
            the installation is completed safely and connected properly to your electrical system.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Types of light fixtures (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/fixture-types.jpg)' }}
            role="img"
            aria-label="Dining room with a decorative light fixture"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Types of Light Fixtures We Install
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Different rooms require different types of lighting. Some fixtures provide general room
              lighting, while others focus light on specific areas. Our electricians install a variety of
              lighting fixtures designed to improve both function and appearance. Common installations
              include:
            </p>
            <ul className="mt-4 grid gap-1.5">
              {types.map((t) => (
                <li key={t} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many homeowners combine multiple fixture types in the same room — a kitchen may include
              overhead lighting along with pendant fixtures above the island. This layered approach
              improves visibility and adds visual interest.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Lighting Fixture Installation Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Light Fixture Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Installing a lighting fixture involves more than attaching it to the ceiling. Proper wiring
              and secure mounting are essential for safe operation. Our electricians follow a simple
              process to ensure every installation is completed correctly. Our process includes:
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
              Careful installation helps ensure your new lighting works reliably and distributes light
              evenly throughout the room.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning a light fixture installation"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Energy-Efficient Light Fixture Options</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Many homeowners are upgrading to fixtures designed for better energy efficiency. Modern
            lighting often uses{' '}
            <Link href="/services/led-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              LED bulbs
            </Link>{' '}
            that produce bright illumination while using less electricity.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            LED lighting also lasts significantly longer than traditional bulbs, which means fewer
            replacements and lower long-term lighting costs. Energy-efficient fixtures also produce less
            heat, so they can make indoor spaces more comfortable while still providing strong light.
            Benefits of LED lighting include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {ledBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Upgrading lighting fixtures is one of the simplest ways to improve your home’s lighting
            efficiency.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Light Fixture Financing Options</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Lighting upgrades can improve several rooms at once. Financing options make larger lighting
            projects easier to manage.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            {site.name} offers financing options that let homeowners upgrade lighting fixtures without
            paying the full cost upfront. Our team can explain available financing options and help you
            choose a plan that fits your budget.
          </p>

          {/* Design services */}
          <h2 className="mt-12 section-title text-brand-700">Light Fixture Design Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Lighting design plays an important role in creating balanced illumination throughout a home.
            Proper fixture placement helps eliminate dark areas and improves visibility in everyday
            spaces. Our electricians help homeowners choose lighting fixtures that match the style of
            their home while providing practical illumination. Lighting design is especially helpful for
            spaces such as:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {designSpaces.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Thoughtful lighting design helps your home feel brighter and more welcoming.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Light Fixture Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} trust {site.name} for reliable electrical services
            and lighting installation. When you work with our electricians, you receive:
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
            Our goal is simple. We install lighting fixtures that improve both the appearance and function
            of your home.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Light Fixture Installation FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Light Fixture Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to install or replace a fixture? {site.name} installs light fixtures across{' '}
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
