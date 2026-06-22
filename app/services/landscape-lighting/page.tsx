import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Landscape Lighting Installation',
  description: `Landscape lighting installation across ${site.serviceArea} from ${site.name} — custom, energy-efficient low-voltage systems installed by licensed electricians for safety and curb appeal.`,
  alternates: { canonical: '/services/landscape-lighting' },
};

const benefits = [
  'Improves visibility along paths, driveways, and stairs to reduce trip hazards',
  'Increases security by illuminating entry points and darker areas',
  'Enhances curb appeal by highlighting landscaping and architectural features',
  'Expands how you use patios, decks, and other outdoor spaces after sunset',
  'Provides energy-efficient illumination with modern low-voltage systems',
];

const process = [
  'On-site evaluation and layout planning',
  'Selection of durable, weather-rated light fixtures',
  'Determining low-voltage or line-voltage lighting solutions',
  'Safe electrical connections by a licensed electrician',
  'Secure fixture placement with concealed wiring',
  'Testing brightness levels and system operation',
];

const features = [
  'Timers and automated controls',
  'Smart home integration',
  'Motion activation',
  'Zoned lighting layouts',
  'Dimmable systems',
];

const lights = [
  'Path lights',
  'Spotlights',
  'Flood lights',
  'Well lights',
  'Step lights',
  'Wall-mounted fixtures',
];

const whyChoose = [
  'Licensed electrician oversight',
  'Customized lighting design',
  'Energy-efficient lighting options',
  'Safe and code-compliant installation',
  'High-quality light fixtures',
  'Transparent pricing',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Oversight', text: 'Every system installed and inspected under licensed electrician oversight.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Safe wiring, proper spacing, and balanced design that meets code.' },
  { icon: 'badge' as const, title: 'Durable Fixtures', text: 'Weather-rated, energy-efficient fixtures built for long-term outdoor use.' },
  { icon: 'house' as const, title: 'Custom Design', text: 'Layered layouts tailored to how you use your property.' },
];

const faqs = [
  { q: 'How expensive is it to install landscape lighting?', a: 'Costs depend on property size, fixture quantity, wiring requirements, and system type. Low-voltage systems are often more cost-effective for residential properties.' },
  { q: 'What types of landscape lights are available?', a: 'Options include path lights, spotlights, flood lights, well lights, and step lights. Each serves a specific purpose within a lighting system.' },
  { q: 'Are LED landscape lights worth it?', a: 'Yes. LED lighting is energy efficient, long lasting, and provides consistent brightness.' },
  { q: 'Why hire professional landscape lighting installers?', a: 'Professional installers ensure safe wiring, proper spacing, and balanced design that performs reliably.' },
  { q: 'Is landscape lighting weather-resistant?', a: 'Yes. Outdoor lighting systems use weather-rated components designed to withstand moisture and seasonal conditions.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Landscape Lighting Installation',
  description: 'Custom landscape lighting installation, including low-voltage systems, path, accent, and feature lighting.',
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
    { '@type': 'ListItem', position: 6, name: 'Landscape Lighting', item: `${site.url}/services/landscape-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function LandscapeLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Landscape Lighting Installation in ${site.serviceArea}`}
        description="Custom, energy-efficient landscape lighting installed by licensed electricians — thoughtful placement that improves safety, curb appeal, and how you use your yard after dark."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
          { label: 'Landscape Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Transform your yard after sunset.
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
            style={{ backgroundImage: 'url(/services/landscape-hero.jpg)' }}
            role="img"
            aria-label="Garden path illuminated with landscape lighting at night"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Landscape Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A professionally designed landscape lighting installation transforms your property after
            sunset. It improves safety, enhances curb appeal, and creates a warm, inviting atmosphere
            around your home.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Well-placed lighting highlights trees, defines walkways, and brings architectural details
            into focus. When installed correctly, it adds depth and structure without overwhelming your
            yard.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            At {site.name}, our experienced landscape lighting installers design and install customized{' '}
            <Link href="/services/outdoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              outdoor lighting
            </Link>{' '}
            systems across {site.serviceArea}. We focus on thoughtful placement, energy-efficient
            solutions, and safe electrical connections that deliver long-term reliability.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Benefits (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/landscape-benefits.jpg)' }}
            role="img"
            aria-label="Illuminated garden trees and landscaping"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Benefits of Landscape Lighting for Your Home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Outdoor lighting installation provides both visual and practical advantages.
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
              A well-designed system improves safety and comfort without creating glare or uneven
              brightness.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Landscape Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Landscape Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every lighting installation begins with a consultation to review your property and lighting
              goals. Our process includes:
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
              Our team ensures every system is installed safely, performs reliably, and meets electrical
              code requirements.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning a landscape lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Lighting Solutions Designed for You</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Lighting should reflect how you use your property. Some homeowners prefer subtle accent
            lighting, while others want brighter illumination for entertaining or added security.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We design layered systems that create balance and visual depth. Accent lighting highlights
            trees and architectural features. Path lighting improves navigation. Feature lighting adds
            dimension to stonework and landscaping. Lighting should feel natural, not overwhelming.
          </p>

          {/* Specialized features */}
          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Specialized Features to Suit Your Lifestyle</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">Modern systems can include:</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These features let you adjust brightness and energy use based on season or preference.
          </p>

          {/* Lights we install */}
          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Lights We Install</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We install a wide range of landscape lights, including:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {lights.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Each fixture is selected for durability, brightness, and long-term outdoor performance.
          </p>

          {/* Low vs line voltage */}
          <h2 className="mt-12 section-title text-brand-700">Low Voltage vs. Line Voltage Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Low-voltage systems use a transformer to reduce power levels. They are energy efficient and
            ideal for most residential properties.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Line-voltage lighting operates at standard household voltage. Because it involves more
            complex electrical work, installation should always be handled by a licensed electrician. Our
            team reviews both options and helps you choose the right system for your property.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Landscape Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} choose {site.name} because we combine design
            expertise with safe installation practices. When you work with our installers, you receive:
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
            We focus on long-term performance and professional workmanship.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Landscape Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Landscape Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to light up your landscape? {site.name} designs and installs landscape lighting across{' '}
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
