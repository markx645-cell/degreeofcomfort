import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Basement Lighting Installation',
  description: `Basement lighting installation across ${site.serviceArea} from ${site.name} — recessed and LED basement lighting installed by licensed electricians to brighten finished and unfinished spaces.`,
  alternates: { canonical: '/services/basement-lighting' },
};

const signs = [
  'Dark corners or uneven lighting',
  'Outdated lighting fixtures with limited brightness',
  'Flickering lights or unreliable switches',
  'A finished basement that still feels dim',
  'Spaces used as home offices, gyms, or entertainment areas that need stronger illumination',
  'Older fixtures that use inefficient bulbs',
];

const process = [
  'Evaluating the basement layout and ceiling height',
  'Recommending light fixture placement',
  'Planning safe wiring and electrical connections',
  'Installing recessed lighting, LED fixtures, or additional lights',
  'Testing brightness levels and system performance',
  'Confirming the installation meets electrical safety codes',
];

const layouts = [
  'Recessed lighting across the ceiling for even brightness',
  'Accent lighting around entertainment or media areas',
  'Task lighting for desks, hobby areas, or workbenches',
  'LED lighting along shelving or walls for added visibility',
];

const proBenefits = [
  'Safe electrical work and code-compliant wiring',
  'Proper placement of lighting fixtures for balanced brightness',
  'Reliable fixture installation that prevents loose connections',
  'Energy-efficient lighting options such as LED basement lights',
  'Lighting systems designed for basement layouts',
];

const whyChoose = [
  'Licensed electricians with indoor lighting experience',
  'High-quality lighting fixtures',
  'Safe and code-compliant electrical work',
  'Clear pricing and reliable scheduling',
  'Lighting solutions designed for long-term performance',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced indoor-lighting pros handling every connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Wiring and fixtures installed to current electrical code.' },
  { icon: 'badge' as const, title: 'Quality Fixtures', text: 'Durable fixtures and energy-efficient LED basement lights.' },
  { icon: 'house' as const, title: 'Layout-Specific Design', text: 'Lighting planned around how you actually use the basement.' },
];

const faqs = [
  { q: 'What types of basement lighting options do you offer?', a: 'We install recessed lighting, LED basement lights, ceiling fixtures, and other lighting solutions designed for basement spaces.' },
  { q: 'Can I install basement lights myself?', a: 'Some lighting upgrades may appear simple, but professional installation ensures safe wiring and proper electrical connections.' },
  { q: 'Will upgrading my basement lighting increase my home’s value?', a: 'Better lighting can make finished basements more functional and appealing, which may improve overall home value.' },
  { q: 'Do you handle wiring and electrical work as part of the installation?', a: 'Yes. Our electricians complete all required electrical work, including wiring and fixture installation.' },
  { q: 'How long does basement lighting installation typically take?', a: 'Installation time depends on your basement’s size and specific requirements.' },
  { q: 'How long will the installation take?', a: 'Most basement lighting installations can be completed within one day, depending on the number of fixtures and the layout of the space.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Basement Lighting Installation',
  description: 'Basement lighting installation, including recessed and LED basement lighting for finished and unfinished spaces.',
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
    { '@type': 'ListItem', position: 6, name: 'Basement Lighting', item: `${site.url}/services/basement-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function BasementLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Basement Lighting Installation in ${site.serviceArea}`}
        description="Recessed and LED basement lighting installed by licensed electricians — brighter, more usable finished basements, work areas, and storage spaces, all wired safely."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
          { label: 'Basement Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Turn a dim basement into usable space.
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
            style={{ backgroundImage: 'url(/services/basement-hero.jpg)' }}
            role="img"
            aria-label="Finished basement with recessed ceiling lighting"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Basement Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Basements often have limited natural light, which can make them feel dark or underused. The
            right lighting improves visibility and helps turn the space into a more functional part of
            your home.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides basement lighting installation and other{' '}
            <Link href="/services/lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              lighting services
            </Link>{' '}
            across {site.serviceArea}. Our licensed electricians install lighting systems designed to
            brighten finished basements, work areas, and storage spaces while making sure all electrical
            work is completed safely.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you want basement recessed lighting for a finished living area or LED basement lights
            for improved visibility, our team installs lighting designed for reliable performance.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs it's time to upgrade (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/basement-signs.jpg)' }}
            role="img"
            aria-label="Modern finished basement living area"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs It’s Time to Upgrade Your Basement Lighting
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many basements rely on outdated fixtures or minimal overhead lighting. As basements become
              more functional living areas, better lighting is often needed. You may want to upgrade your
              basement lighting if you notice:
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
              Upgrading your lighting improves visibility and makes the basement easier to use.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Basement Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              The Basement Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every basement lighting project begins with reviewing how the space will be used. Some
              basements function as entertainment rooms, while others are used for storage, home offices,
              or hobby areas. Our installation process includes:
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
              Professional installation ensures lighting fixtures are spaced correctly and connected
              safely to your home’s electrical system.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning a basement lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Recessed Basement Lighting for a Modern Look</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            <Link href="/services/recessed-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Recessed lighting
            </Link>{' '}
            is one of the most common upgrades for finished basements. These fixtures sit inside the
            ceiling, creating a clean and modern appearance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Basement recessed lighting distributes brightness evenly without bulky fixtures that can make
            ceilings feel lower. This style works well in media rooms, living areas, and home offices.
            Proper placement helps eliminate shadows and keeps the entire basement well lit.
          </p>

          {/* LED */}
          <h2 className="mt-12 section-title text-brand-700">LED Basement Lights to Illuminate Every Corner</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            <Link href="/services/led-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              LED basement lights
            </Link>{' '}
            provide bright and energy-efficient illumination. Compared to traditional bulbs, LED lighting
            uses less electricity and lasts significantly longer.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Many homeowners choose LED lighting because it delivers consistent brightness while helping
            reduce energy costs. LEDs also produce less heat, which makes them well suited for enclosed
            spaces like basements. LED lights work well with recessed lighting layouts and other modern
            lighting designs.
          </p>

          {/* Layout ideas */}
          <h2 className="mt-12 section-title text-brand-700">Lighting Layout Ideas for Finished Basements</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Finished basements often serve multiple purposes. Some homeowners create entertainment rooms,
            while others use the space as a home office or workout area. Lighting should match how the
            space is used, and a layered lighting layout usually provides the best results. Common
            basement lighting layouts include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {layouts.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Proper fixture placement helps eliminate dark areas and keeps the entire basement comfortable
            to use.
          </p>

          {/* Pro benefits */}
          <h2 className="mt-12 section-title text-brand-700">Benefits of a Professional Basement Light Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Working with a licensed electrician ensures your basement lighting system is installed safely
            and performs reliably. Professional installation provides:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {proBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional installation helps prevent uneven lighting, overloaded circuits, and other
            electrical problems.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Basement Lights</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable electrical services and
            professional lighting installation. When you work with our team, you receive:
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
            Our goal is to install basement lighting systems that improve visibility, comfort, and
            everyday usability.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Basement Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Basement Light Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to brighten your basement? {site.name} installs basement lighting across{' '}
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
