import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { servicePages } from '@/content/servicePages';

export const metadata: Metadata = {
  title: 'Electrical Services',
  description: `Licensed electrical services across ${site.serviceArea} from ${site.name} — panel upgrades, rewiring, lighting, EV chargers, surge protection, and inspections. 24/7 emergency service.`,
  alternates: { canonical: '/services/electrical' },
};

const electricalServices = servicePages.filter((s) => s.category === 'Electrical');

const emergencyConcerns = [
  'Sudden power outages',
  'Tripped breakers that will not reset',
  'Overheated outlets or switches',
  'Electrical panel malfunctions',
  'Exposed or damaged wiring',
];

const commonProblems = [
  'Flickering lights',
  'Breaker trips',
  'Warm outlets',
  'Power surges',
  'Exhaust fan installation and repair issues',
  'Ceiling fan installation concerns',
  'Electrical inspection failures',
];

const lighting = [
  'Recessed lighting',
  'LED lighting upgrades',
  'Ceiling fan installation',
  'Landscape lighting',
  'Basement lighting',
  'Garage lighting',
  'Lighting fixture installation',
];

const panelSigns = [
  'Frequent circuit breaker trips',
  'Flickering lights',
  'Limited space for new circuits',
  'Warm or buzzing panel components',
  'Outdated breaker technology',
];

const wiring = [
  'Whole-home rewiring',
  'Targeted wiring upgrades',
  'Dedicated appliance circuits',
  'Code corrections',
  'Electrical system modernization',
];

const inspections = [
  'Electrical panel inspection',
  'Wiring evaluation',
  'Circuit breaker testing',
  'Safety compliance review',
];

const whyChoose = [
  'Licensed and insured electricians',
  'Reliable electrical solutions',
  'Transparent pricing',
  'Prompt service calls',
  'Safe and code-compliant installations',
  'Long-term peace of mind',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Trained, background-checked electricians on every job.' },
  { icon: 'clock' as const, title: '24/7 Emergency Service', text: 'Burning smell, dead power, or a tripping breaker? We respond fast.' },
  { icon: 'badge' as const, title: 'Transparent Pricing', text: 'Clear, upfront quotes you approve before any work begins.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Every install and repair completed to current electrical code.' },
];

const faqs = [
  { q: 'What electrical services do you offer?', a: 'We handle repairs, panel upgrades, whole-home and targeted rewiring, lighting and fixture installation, ceiling and exhaust fans, EV chargers, whole-home surge protection, switches and outlets, and electrical inspections.' },
  { q: 'Are your electricians certified?', a: 'Yes. Our electricians are licensed and insured, and every project is completed to current electrical code.' },
  { q: 'Do you provide emergency electrical services?', a: 'Yes. We offer 24/7 emergency electrical service for urgent safety issues like power loss, breakers that will not reset, overheated outlets, or burning smells.' },
  { q: 'What areas do you serve?', a: `We provide electrical services across ${site.serviceArea}.` },
  { q: 'How often should I schedule an electrical inspection?', a: 'Every few years is reasonable for most homes, and it is smart to inspect when buying a home or after any electrical problem. Older homes benefit from more frequent checks.' },
  { q: 'What financing options are available for electrical projects?', a: 'For larger projects — panel upgrades, rewiring, or EV charger installation — we offer financing with a quick application and flexible terms.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electrical',
  description: 'Residential electrical repair, panel upgrades, rewiring, lighting, and inspections.',
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
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ElectricalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Electrical Services in ${site.serviceArea}`}
        description="Repairs, panel upgrades, rewiring, lighting, EV chargers, and inspections — by licensed electricians, built to code and to last, with 24/7 emergency service."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Electrical' }]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Electrical problem in {site.serviceArea}? Call for immediate service
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
            style={{ backgroundImage: 'url(/services/electrical-hero.jpg)' }}
            role="img"
            aria-label="Licensed electrician working on an electrical panel"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Electrical Services
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Your home depends on reliable power every day — lighting, appliances, HVAC, and EV chargers
            all rely on a properly functioning electrical system. When issues arise, they can disrupt
            comfort and pose serious safety risks.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional electrical services across {site.serviceArea}. Our
            licensed electricians handle repairs, upgrades, inspections, and installations with
            precision and care — from a quick service call to a major electrical upgrade.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We focus on safety, efficiency, and workmanship. Every project is completed to current
            electrical code and tailored to your home’s specific needs.
          </p>

          {/* Services grid */}
          <h2 className="mt-12 section-title text-brand-700">Our Electrical Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {electricalServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                  <span
                    className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(/services/${s.slug}.jpg)` }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-600" />
                  <span className="absolute inset-0 grid place-items-center p-2 text-center">
                    <span className="font-display text-[12px] font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] sm:text-[13px]">
                      {s.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Common electrical problems (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/home-rewiring.jpg)' }}
            role="img"
            aria-label="Electrical wiring work"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Common Electrical Problems We Resolve
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Electrical issues often start small, but over time they can signal larger problems in
              your home’s system. We commonly resolve:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {commonProblems.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Addressing these early helps prevent costly repairs later.
            </p>
          </div>
        </div>
      </section>

      {/* Band: 24/7 emergency (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              24/7 Emergency Electrical Support
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Electrical problems can become dangerous quickly. If you notice flickering lights,
              repeated breaker trips, burning smells, or sudden power loss, it is important to act
              fast. We provide emergency electrical service for urgent concerns such as:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {emergencyConcerns.map((c) => (
                <li key={c} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Ignoring these warning signs can lead to larger issues. If you suspect a serious
              electrical problem, contact us immediately — your safety is our priority.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/electrical-panel-replacement.jpg)' }}
            role="img"
            aria-label="Electrical panel"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Residential Electrical for Modern Homes</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homes today place greater demand on electrical systems than ever — smart devices,
            entertainment systems, kitchen appliances, and electric vehicles all increase the load, and
            older systems were not designed for it. We evaluate your home’s electrical system, identify
            where capacity or safety can be improved, and explain your options clearly.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We also help you plan ahead. Whether you are finishing a basement, remodeling a kitchen, or
            adding new lighting, proper electrical planning ensures your system can safely handle the
            increased demand — and upgrading now prevents future issues and improves long-term
            reliability.
          </p>

          {/* Lighting */}
          <h2 className="mt-12 section-title text-brand-700">Create the Perfect Atmosphere With Custom Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Lighting affects both function and comfort — improving visibility, enhancing design, and
            increasing safety throughout your home. Our lighting services include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {lighting.map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We make sure fixtures are properly supported and safely connected — and thoughtful lighting
            design can also reduce energy use.
          </p>

          {/* Panel */}
          <h2 className="mt-12 section-title text-brand-700">Upgrade Your Electrical Panel for a Safer Home</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Your panel distributes power throughout your home, and many older panels struggle to keep
            up with modern appliances and technology. Signs you may need a panel upgrade:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {panelSigns.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            A panel upgrade increases capacity and supports modern additions — including surge
            protection, generators, and EV chargers — improving both safety and performance.
          </p>

          {/* Wiring */}
          <h2 className="mt-12 section-title text-brand-700">Wiring Your Home With Precision</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Faulty or outdated wiring can create hidden safety hazards. If your home is older or having
            repeated electrical issues, it may be time to evaluate the wiring. Our wiring services
            include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {wiring.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Modern wiring improves reliability, reduces fire risk, and supports higher demand without
            overloading circuits.
          </p>

          {/* Inspections */}
          <h2 className="mt-12 section-title text-brand-700">Detailed & Accurate Electrical Inspections</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A thorough inspection helps identify outdated components, overloaded circuits, and
            potential hazards. Our electrical inspections include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {inspections.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Whether you are purchasing a home or maintaining your current one, inspections provide
            peace of mind and reduce long-term risk.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Your Electrical Needs</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Electrical systems are complex, and DIY repairs can create unsafe conditions and violate
            code. Working with licensed electricians ensures the job is done correctly the first time.
            Homeowners choose {site.name} because we deliver:
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

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Electrical FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Electrical Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Repairs, panel upgrades, lighting, surge protection, inspections, fans, EV chargers, or
              rewiring — our licensed electricians are ready to help. Call now or request a free
              estimate.
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
