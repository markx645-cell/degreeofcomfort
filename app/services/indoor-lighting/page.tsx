import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Indoor Lighting Installation',
  description: `Indoor lighting installation across ${site.serviceArea} from ${site.name} — recessed, LED, basement, and garage lighting installed by licensed electricians for comfort and efficiency.`,
  alternates: { canonical: '/services/indoor-lighting' },
};

const signs = [
  'Rooms that feel dim or unevenly lit',
  'Flickering or unreliable light fixtures',
  'Outdated lighting that no longer fits the space',
  'Limited natural light in key areas of the home',
  'Dark garages or basements that are difficult to navigate',
  'Older fixtures that use inefficient bulbs',
];

const process = [
  'Evaluating room layout and lighting needs',
  'Recommending light fixture styles and placement',
  'Planning safe wiring and electrical connections',
  'Installing lighting fixtures and switches',
  'Testing brightness levels and system performance',
  'Confirming the installation meets electrical code requirements',
];

const whyChoose = [
  'Licensed and experienced lighting professionals',
  'Custom lighting design recommendations',
  'Safe lighting fixture installation',
  'Energy-efficient lighting options',
  'Code-compliant electrical work',
  'Transparent pricing and reliable scheduling',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Professionals', text: 'Experienced lighting pros handling every connection safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Each install meets current electrical safety standards.' },
  { icon: 'badge' as const, title: 'Energy-Efficient Options', text: 'LED upgrades that cut energy use and last longer.' },
  { icon: 'house' as const, title: 'Custom Design', text: 'Lighting layouts tailored to how you use each room.' },
];

const faqs = [
  { q: 'What types of indoor lighting installations do you offer?', a: 'We install recessed lighting, LED lighting, basement lighting, garage lighting, and many types of lighting fixture installations throughout the home.' },
  { q: 'Can I get custom lighting designs for my home?', a: 'Yes. Our electricians can help design lighting layouts that improve brightness and match the style of each room.' },
  { q: 'How do I choose the right lighting for each room?', a: 'Our electricians help you select lighting based on the function of each space. Kitchens may need brighter task lighting, while living rooms often benefit from layered lighting that combines ambient and accent fixtures.' },
  { q: 'Do you offer energy-efficient lighting options?', a: 'Yes. LED lighting installation is one of the most common upgrades because it provides strong illumination while using less energy.' },
  { q: 'Can you install lighting in older homes?', a: 'Yes. Our electricians regularly update lighting in older homes and make sure the wiring meets modern electrical standards.' },
  { q: 'Do you offer lighting for specific rooms like kitchens or bathrooms?', a: 'Yes. We install lighting systems for kitchens, bathrooms, basements, garages, and other indoor spaces.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Indoor Lighting Installation',
  description: 'Indoor residential lighting installation, including recessed, LED, basement, and garage lighting.',
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
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function IndoorLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Indoor Lighting Installation in ${site.serviceArea}`}
        description="Recessed, LED, basement, and garage lighting installed by licensed electricians — brighter, more functional interiors built for comfort, efficiency, and everyday use."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Indoor Lighting' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Brighten every room in your home.
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
            style={{ backgroundImage: 'url(/services/indoor-hero.jpg)' }}
            role="img"
            aria-label="Modern kitchen with recessed ceiling lighting"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Indoor Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Indoor lighting affects how your home looks and how comfortable it feels. Good lighting
            improves visibility, highlights design features, and makes everyday activities easier.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional indoor lighting installation and other{' '}
            <Link href="/services/lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              lighting services
            </Link>{' '}
            across {site.serviceArea}. Our licensed electricians install lighting systems that improve
            comfort, efficiency, and everyday usability.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you want{' '}
            <Link href="/services/recessed-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              recessed lighting installation
            </Link>{' '}
            in a kitchen,{' '}
            <Link href="/services/basement-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              basement lighting
            </Link>{' '}
            for a finished lower level, or brighter{' '}
            <Link href="/services/garage-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              garage lighting
            </Link>
            , our team installs safe and reliable systems designed for long-term performance.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Lighting should support how you live. From kitchens and living spaces to garages and
            basements, our indoor lighting installation services help homeowners create brighter, more
            functional interiors.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need new indoor lights (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/indoor-signs.jpg)' }}
            role="img"
            aria-label="Bright, well-lit living room interior"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need New Indoor Lights
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Lighting problems often appear as homes age or rooms change function. Poor lighting can
              make everyday tasks more difficult and can also affect the comfort of a room. You may
              benefit from professional indoor light installation if you notice:
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
              Upgrading lighting improves visibility and helps your home feel more comfortable and
              functional.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Indoor Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Indoor Lighting Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every indoor lighting installation begins with understanding how you use each room. Our
              electricians review your current lighting, discuss your goals, and recommend lighting
              options that match your space. Our installation process includes:
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
              Professional installation ensures your lighting works reliably and connects safely to your
              home’s electrical system.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning an indoor lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Types of Lights We Install</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homes require different lighting depending on how each room is used. Our electricians install
            a wide range of indoor lighting systems designed to improve comfort and visibility.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">
            <Link href="/services/led-lighting" className="text-pink-600 hover:text-pink-700 hover:underline">
              LED Light Installation
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            LED lighting has become one of the most popular upgrades for modern homes. LED bulbs use less
            electricity and last significantly longer than traditional lighting.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            LED installation can improve brightness while reducing long-term energy costs. These lights
            work well in kitchens, living rooms, bedrooms, and other areas where consistent lighting is
            important.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">
            <Link href="/services/basement-lighting" className="text-pink-600 hover:text-pink-700 hover:underline">
              Basement Lighting for Your Home
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Basement lighting plays an important role in safety and usability. Many basements have
            limited natural light, which can make them feel dark or uninviting.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our basement lighting solutions provide bright, balanced illumination for finished basements,
            storage areas, home gyms, and workshops.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">
            <Link href="/services/garage-lighting" className="text-pink-600 hover:text-pink-700 hover:underline">
              Garage Lighting Installation
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A well-lit garage makes daily tasks easier and improves safety. Many garages have outdated or
            insufficient lighting that leaves shadows and dark corners.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our garage lighting installation services include installing durable fixtures that provide
            bright, even lighting throughout the space.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">
            <Link href="/services/recessed-lighting" className="text-pink-600 hover:text-pink-700 hover:underline">
              Recessed Canister Lights
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Recessed lighting installation is a popular choice for kitchens, hallways, and living rooms.
            These fixtures sit flush with the ceiling and provide clean, modern illumination.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Recessed lights distribute light evenly and help eliminate shadows in open living areas.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Energy-Efficient Lighting Options</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Energy efficiency is an important part of modern lighting design. Many homeowners upgrade to
            LED lighting to reduce electricity use while improving brightness.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Energy-efficient lighting systems provide reliable illumination and help reduce long-term
            maintenance.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Indoor Lighting Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} trust {site.name} for dependable electrical services
            and professional lighting installation. When you work with our electricians, you receive:
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
            Our goal is to install lighting that improves comfort, visibility, and everyday
            functionality.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Indoor Lighting FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Indoor Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready for brighter, more functional interiors? {site.name} installs indoor lighting across{' '}
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
