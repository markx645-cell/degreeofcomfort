import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Patio Lighting Installation',
  description: `Patio lighting installation across ${site.serviceArea} from ${site.name} — custom, outdoor-rated lighting for decks and patios installed by licensed electricians for safety and atmosphere.`,
  alternates: { canonical: '/services/patio-lighting' },
};

const benefits = [
  'Improves visibility around seating areas, steps, and walkways',
  'Creates a warm environment for relaxing or entertaining',
  'Enhances the look of patios and nearby landscaping',
  'Helps reduce dark areas around your property',
  'Makes outdoor spaces more usable in the evening',
];

const process = [
  'Evaluating the patio layout and lighting goals',
  'Recommending fixture types and placement',
  'Designing a balanced lighting plan',
  'Installing outdoor-rated light fixtures',
  'Connecting the lighting system safely to electrical power',
  'Testing brightness and system performance',
];

const options = [
  'Hanging and string patio lights',
  'Recessed deck lighting',
  'Step and pathway lighting',
  'Under-rail lighting',
  'Accent lights for nearby features',
];

const whyChoose = [
  'Licensed electricians with outdoor lighting experience',
  'Custom patio lighting design',
  'High-quality outdoor fixtures',
  'Safe and code-compliant electrical work',
  'Clear pricing and reliable scheduling',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced pros who handle every outdoor connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Outdoor-rated wiring tested for safe, reliable operation.' },
  { icon: 'badge' as const, title: 'Quality Fixtures', text: 'Durable, weather-ready fixtures built for outdoor use.' },
  { icon: 'house' as const, title: 'Custom Design', text: 'Balanced layouts tailored to how you use your patio.' },
];

const faqs = [
  { q: 'How long does the patio lighting installation take?', a: 'Most patio lighting installations are completed in a single day, depending on the size of the space and the number of fixtures.' },
  { q: 'Is the installation process disruptive?', a: 'No. Our team works efficiently and keeps disruption minimal while installing the lighting system.' },
  { q: 'Why should I hire a patio lighting professional?', a: 'A professional ensures proper wiring, safe electrical connections, and balanced lighting placement.' },
  { q: 'Do you install hanging patio lights?', a: 'Yes. We install string lights, hanging fixtures, and other decorative patio lighting designed for outdoor use.' },
  { q: 'How do you ensure the lighting system connects to electrical power safely?', a: 'Our licensed electricians install outdoor-rated wiring and test the system to ensure safe operation.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Patio Lighting Installation',
  description: 'Custom patio and deck lighting installation, including string, recessed, step, and under-rail lighting.',
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
    { '@type': 'ListItem', position: 6, name: 'Patio Lighting', item: `${site.url}/services/patio-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function PatioLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Patio Lighting Installation in ${site.serviceArea}`}
        description="Custom, outdoor-rated patio and deck lighting installed by licensed electricians — improving visibility, comfort, and atmosphere for your outdoor space after dark."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
          { label: 'Patio Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Enjoy your patio after sunset.
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
            style={{ backgroundImage: 'url(/services/patio-hero.jpg)' }}
            role="img"
            aria-label="Patio with string lights in the evening"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Patio Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A professional patio light installation helps you enjoy your outdoor space after sunset. The
            right lighting improves visibility, adds comfort, and creates a welcoming atmosphere for
            family and guests.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides expert patio lighting services across {site.serviceArea}. Our
            electricians design and install lighting systems that are safe, durable, and built for
            outdoor conditions.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you want simple patio lights or a custom patio lighting layout, we install lighting
            that enhances both the look and function of your{' '}
            <Link href="/services/outdoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              outdoor space
            </Link>
            .
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Benefits (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/patio-benefits.jpg)' }}
            role="img"
            aria-label="Backyard patio with warm evening lighting"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Benefits of Custom Patio Lighting
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Adding patio lighting improves both safety and usability around your home.
            </p>
            <ul className="mt-4 grid gap-1.5">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many homeowners pair patio lighting with{' '}
              <Link href="/services/landscape-lighting" className="font-semibold text-white underline hover:text-white/80">
                landscape lighting
              </Link>{' '}
              to create a balanced outdoor lighting system that highlights both the patio and surrounding
              yard.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Patio Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Patio Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every patio light installation begins with a review of your outdoor space. We discuss how
              you use the area and recommend lighting that fits your layout. Our process includes:
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
              Our electricians ensure the system is installed safely and meets electrical code
              requirements.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning a patio lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Custom Patio Lighting Solutions</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Every patio is different, so lighting should match how you use the space. Some homeowners
            prefer soft accent lighting. Others want brighter patio lights for cooking, dining, or
            entertaining.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We design custom patio lighting that highlights seating areas, outdoor kitchens, and entry
            points while keeping the space comfortable and easy to navigate. Common lighting options
            include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {options.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These fixtures work together to create a balanced outdoor lighting system.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Patio Lighting Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for professional outdoor lighting
            installation. When you work with our team, you receive:
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
            Our goal is to install lighting that looks great and performs reliably for years.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Patio Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Patio Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to light up your patio? {site.name} designs and installs patio lighting across{' '}
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
