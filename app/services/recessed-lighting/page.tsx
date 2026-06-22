import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Recessed Lighting Installation',
  description: `Recessed lighting installation across ${site.serviceArea} from ${site.name} — clean, even ceiling lighting for kitchens, hallways, living rooms, and basements by licensed electricians.`,
  alternates: { canonical: '/services/recessed-lighting' },
};

const signs = [
  'Dark areas in kitchens, hallways, or living rooms',
  'Rooms that rely heavily on lamps',
  'Uneven lighting across counters or work areas',
  'Outdated ceiling light fixtures',
  'A desire for a cleaner ceiling design',
];

const process = [
  'Reviewing the room layout and ceiling structure',
  'Planning the placement of recessed lights',
  'Selecting the correct recessed light can installation type',
  'Safely connecting electrical wiring',
  'Installing each recessed light fixture',
  'Testing brightness and system safety',
];

const proEnsures = [
  'Safe electrical wiring connections',
  'Proper spacing between recessed lights',
  'Secure recessed light can installation',
  'Compliance with electrical safety codes',
  'Reliable long-term lighting performance',
];

const benefits = [
  'Clean, modern ceiling design',
  'Even light distribution across kitchens and living areas',
  'Improved indoor lighting for cooking, reading, and daily activities',
  'Flexible placement for cabinet lighting or accent lighting',
  'Energy-efficient LED lighting options',
  'Long-lasting fixtures that require fewer bulb replacements',
];

const whyChoose = [
  'Licensed electricians with lighting installation experience',
  'Professional recessed lighting installation services',
  'High-quality light fixture options',
  'Safe and code-compliant electrical work',
  'Reliable scheduling and transparent pricing',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced lighting pros handling every connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Proper spacing, secure cans, and wiring that meets code.' },
  { icon: 'badge' as const, title: 'Quality Fixtures', text: 'Energy-efficient LED cans built to last for years.' },
  { icon: 'house' as const, title: 'Balanced Layout', text: 'Placement planned to spread light evenly and remove shadows.' },
];

const faqs = [
  { q: 'Can recessed lights be used in bathrooms or damp areas?', a: 'Yes. Some recessed lighting fixtures are designed for bathrooms and damp spaces when installed properly.' },
  { q: 'Do I need an electrician or can I DIY?', a: 'Recessed lighting installation involves electrical wiring and ceiling work. Hiring an electrician helps ensure safe installation.' },
  { q: 'How much does recessed lighting installation typically cost?', a: 'Costs depend on the number of fixtures, ceiling access, and the electrical work required.' },
  { q: 'Can recessed lighting increase home value?', a: 'Many homeowners install recessed lighting because it improves brightness and modernizes a room.' },
  { q: 'How long do recessed LED lights last?', a: 'LED recessed lights typically last many years and use less electricity than traditional bulbs.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Recessed Lighting Installation',
  description: 'Recessed lighting installation for kitchens, hallways, living rooms, and basements.',
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
    { '@type': 'ListItem', position: 5, name: 'Recessed Lighting', item: `${site.url}/services/recessed-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function RecessedLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Recessed Lighting Installation in ${site.serviceArea}`}
        description="Clean, even ceiling lighting installed by licensed electricians — recessed fixtures that brighten kitchens, hallways, living rooms, and basements without bulky hardware."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Recessed Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Brighten your rooms with recessed lighting.
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
            style={{ backgroundImage: 'url(/services/recessed-hero.jpg)' }}
            role="img"
            aria-label="Living room with recessed ceiling lighting"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Recessed Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Recessed lighting is an easy way to brighten your home. The fixtures sit inside the ceiling,
            which keeps the room looking clean and modern. They provide strong lighting without large or
            hanging fixtures.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides recessed lighting installation for homeowners across {site.serviceArea}.
            Our expert electricians install lighting systems designed to improve{' '}
            <Link href="/services/indoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              indoor lighting
            </Link>{' '}
            in kitchens, hallways, living rooms, and basements.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Many homeowners upgrade to recessed lighting when replacing older ceiling fixtures. The
            lights spread evenly across the room and help eliminate shadows.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you want to install recessed lights in a new room or replace outdated fixtures, our
            team provides safe and reliable lighting installation.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need recessed lighting (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/recessed-signs.jpg)' }}
            role="img"
            aria-label="Kitchen with recessed ceiling downlights"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Recessed Lighting in Your Home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many homes still rely on older ceiling lights that do not distribute light well. Recessed
              lighting improves brightness and creates more balanced lighting. You may want recessed
              lighting installation if you notice:
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
              Recessed lighting works well in kitchens, bathrooms, basements, and many other rooms in the
              home.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Recessed Lighting Installation Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Recessed Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Installing recessed lighting requires planning and careful electrical work. Proper spacing
              helps distribute light evenly across the room. Our installation process includes:
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
              Professional installation helps ensure each light fixture is secure and properly placed.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning a recessed lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Cost to Install Recessed Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            The cost to install recessed lighting depends on several factors. The number of fixtures,
            ceiling access, and electrical wiring all affect the final price.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Installing recessed lights during a renovation is often easier because ceilings may already
            be open. Adding fixtures to a finished ceiling may require additional electrical work. During
            your consultation, our electricians evaluate the room and recommend the number of fixtures
            needed for balanced lighting.
          </p>

          {/* Pro vs DIY */}
          <h2 className="mt-12 section-title text-brand-700">Why You Need Professional Installation and Not DIY</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Some homeowners attempt to install recessed lights on their own. However, recessed lighting
            requires electrical wiring and changes to the ceiling. Professional electricians understand
            how to install recessed lighting safely. They protect existing wiring and make sure each
            fixture is secure. Working with expert electricians helps ensure:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {proEnsures.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional installation helps prevent uneven lighting and electrical issues.
          </p>

          {/* Benefits */}
          <h2 className="mt-12 section-title text-brand-700">Recessed Lighting Benefits</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Recessed lighting offers several advantages over traditional ceiling fixtures. Because the
            lights sit inside the ceiling, they provide strong lighting without taking up visual space.
            Benefits include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Many homeowners choose recessed lighting because it makes rooms feel brighter and more open.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Recessed Lighting Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable lighting installation
            services. When you work with our team, you receive:
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
            Our goal is to install lighting that improves brightness and enhances the look of your home.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Recessed Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Recessed Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready for cleaner, brighter ceilings? {site.name} installs recessed lighting across{' '}
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
