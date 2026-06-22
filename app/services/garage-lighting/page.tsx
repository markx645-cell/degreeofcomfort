import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Garage Lighting Installation',
  description: `Garage lighting installation across ${site.serviceArea} from ${site.name} — durable LED garage lights and exterior fixtures installed by licensed electricians for bright, usable space.`,
  alternates: { canonical: '/services/garage-lighting' },
};

const signs = [
  'Dark areas around shelving or storage spaces',
  'One ceiling light that does not illuminate the entire garage',
  'Flickering or outdated garage light fixtures',
  'Poor visibility when working on projects or tools',
  'Exterior garage lights that no longer brighten the driveway',
  'Lighting that makes it hard to see near walls or corners',
];

const process = [
  'Evaluating the garage layout and existing electrical setup',
  'Recommending lighting placement for even coverage',
  'Selecting durable garage light fixtures',
  'Installing LED garage lights or other lighting solutions',
  'Connecting wiring safely and testing system performance',
  'Confirming the installation meets electrical safety standards',
];

const fixtures = [
  'Ceiling-mounted garage lights',
  'LED panel lighting',
  'Shop-style lighting fixtures',
  'Utility lighting for work areas',
  'Motion-activated garage lights',
  'Exterior garage lights for driveways and entry points',
];

const whyChoose = [
  'Licensed electricians with lighting installation experience',
  'High-quality garage light fixtures',
  'Energy-efficient LED lighting options',
  'Safe and code-compliant electrical work',
  'Reliable scheduling and clear pricing',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced lighting pros handling every connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Wiring and fixtures installed to electrical safety standards.' },
  { icon: 'badge' as const, title: 'Durable Fixtures', text: 'High-quality, energy-efficient LED garage lighting.' },
  { icon: 'house' as const, title: 'Even Coverage', text: 'Placement planned to eliminate shadows and dark corners.' },
];

const faqs = [
  { q: 'Why should I upgrade my garage lighting?', a: 'Upgrading garage lighting improves visibility, helps you use the space more comfortably, and makes it easier to see tools, storage items, and vehicles.' },
  { q: 'What are the best lighting options for garages?', a: 'LED garage lights are one of the most popular options because they provide strong brightness and energy efficiency.' },
  { q: 'Can garage lighting make the garage safer?', a: 'Yes. Proper lighting helps reduce shadows and improves visibility around tools, equipment, and entry areas.' },
  { q: 'How long does a typical garage lighting installation take?', a: 'Most garage lighting installations can be completed within a few hours, depending on the number of fixtures and wiring needed.' },
  { q: 'How can I maintain my garage lighting after installation?', a: 'Keeping fixtures clean and replacing bulbs when needed helps maintain strong brightness and reliable performance.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Garage Lighting Installation',
  description: 'Garage lighting installation, including LED garage lights, shop-style fixtures, and exterior garage lighting.',
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
    { '@type': 'ListItem', position: 5, name: 'Indoor Lighting', item: `${site.url}/services/indoor-lighting` },
    { '@type': 'ListItem', position: 6, name: 'Garage Lighting', item: `${site.url}/services/garage-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function GarageLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Garage Lighting Installation in ${site.serviceArea}`}
        description="Durable LED garage lights and exterior fixtures installed by licensed electricians — bright, even lighting for parking areas, workbenches, and storage."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
          { label: 'Garage Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Brighten every corner of your garage.
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
            style={{ backgroundImage: 'url(/services/garage-hero.jpg)' }}
            role="img"
            aria-label="Brightly lit garage workshop interior"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Garage Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Many garages rely on a single ceiling bulb. That light often leaves corners and work areas
            dim. Better garage lighting improves visibility and helps the space function better.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} installs garage lighting for homeowners across {site.serviceArea}. Our
            electricians install durable garage light fixtures designed to brighten parking areas,
            workbenches, and storage spaces.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Many homeowners upgrade lighting when the garage becomes more than a place to park. Garages
            are often used for hobbies, tool storage, home gyms, or workshop areas. Strong lighting makes
            these activities easier and safer.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you need{' '}
            <Link href="/services/led-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              LED garage lights
            </Link>{' '}
            inside the space or exterior garage lighting around the driveway, our team installs systems
            designed for reliable performance.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need new garage lighting (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/garage-signs.jpg)' }}
            role="img"
            aria-label="LED shop lighting on a garage ceiling"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Are in Need of New Garage Lighting
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many homes still use older garage lights that do not provide enough brightness. When
              lighting is weak or uneven, everyday tasks in the garage become more difficult. You may
              want to upgrade your garage lighting if you notice:
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
              Upgrading your lighting helps create a brighter and more usable garage.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Garage Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Garage Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every garage lighting installation starts with reviewing how the garage is used. Some
              homeowners mainly park vehicles there. Others use the space for storage, projects, or
              equipment. Our installation process includes:
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
              Proper fixture placement helps eliminate shadows and ensures the lighting reaches the
              entire space.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning a garage lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">LED Garage Light Options</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            <Link href="/services/led-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              LED garage lights
            </Link>{' '}
            are one of the most popular upgrades for garages today. They produce strong brightness while
            using less electricity than older bulbs.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            LED lighting is especially useful in garages used as workspaces. Clear, bright lighting helps
            improve visibility when using tools, organizing storage, or completing projects. Another
            advantage of LED garage lights is their lifespan — these fixtures typically last much longer
            than traditional bulbs, which means fewer replacements over time. Many homeowners choose LED
            lighting because it combines brightness, durability, and energy efficiency.
          </p>

          {/* Exterior */}
          <h2 className="mt-12 section-title text-brand-700">Exterior Garage Lighting Is Available</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Exterior garage lighting helps illuminate areas around the garage door, driveway, and
            walkways. These fixtures make it easier to move around your property after dark.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Exterior garage lights can also improve visibility when parking vehicles at night. A well-lit
            driveway reduces shadows and makes entry points easier to see. Our electricians install
            exterior garage lighting designed to withstand weather conditions while providing dependable
            illumination.
          </p>

          {/* Fixtures */}
          <h2 className="mt-12 section-title text-brand-700">Garage Light Fixtures We Install</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Garages require lighting that is bright, durable, and reliable. Our electricians install a
            variety of garage light fixtures designed to handle garage environments. Common fixtures
            include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {fixtures.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Each lighting fixture is selected based on the size of the garage and how the space is used.
          </p>

          {/* Safety */}
          <h2 className="mt-12 section-title text-brand-700">The Safety Benefits of Garage Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Proper garage lighting helps improve safety both inside and outside the space. Bright lighting
            makes it easier to see tools, equipment, and storage items, which reduces the risk of trips or
            accidents when moving around the garage.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Exterior garage lighting also improves visibility near driveways and entry doors. When these
            areas are well lit, it becomes easier to walk safely around the property at night. A
            well-planned lighting layout helps eliminate dark areas and keeps the garage safer to use.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Garage Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for professional electrical services
            and lighting installation. When you work with our team, you receive:
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
            Our goal is to install garage lighting that improves visibility and provides dependable
            performance.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Garage Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Garage Light Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready for a brighter garage? {site.name} installs garage lighting across {site.serviceArea}.
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
