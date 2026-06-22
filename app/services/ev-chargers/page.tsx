import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'EV Charger Installation',
  description: `Home EV charger installation across ${site.serviceArea} from ${site.name} — Level 2 chargers installed by licensed electricians, with panel evaluation and code-compliant wiring.`,
  alternates: { canonical: '/services/ev-chargers' },
};

const benefits = [
  { lead: 'Faster Charging Times', text: 'Level 2 chargers charge significantly faster than standard outlets. You gain more miles per charge, reducing downtime and making daily driving easier.' },
  { lead: 'More Cost-Effective Charging', text: 'Home charging is often less expensive than using public stations. Many utility companies offer lower off-peak rates, helping reduce overall charging costs.' },
  { lead: 'Greater Convenience', text: 'Vehicles charged overnight are ready in the morning. There is no need to search for public charging stations or wait in line.' },
  { lead: 'Improved Safety', text: 'Professional installation ensures proper breaker sizing, wiring, and grounding. This prevents overheating and electrical strain.' },
];

const process = [
  { lead: 'Electrical Panel Assessment', text: 'We inspect your electric panel to determine available capacity. If upgrades are needed, we clearly explain your options.' },
  { lead: 'Load Calculation', text: 'We calculate your total electrical demand. This ensures your EV charger operates safely alongside HVAC systems and other major appliances.' },
  { lead: 'Equipment Selection', text: 'We help you choose the right charger based on your vehicle, daily mileage, and charging preferences.' },
  { lead: 'Professional Installation', text: 'Our licensed electricians complete the installation according to electrical code standards.' },
  { lead: 'Testing & Final Verification', text: 'We test the charger to confirm consistent performance and safe operation.' },
];

const level1 = [
  'Plug into a standard 120-volt outlet',
  'Slower charging speeds',
  'Add only a few miles per hour of charge',
  'Best for very low daily driving',
];

const level2 = [
  'Require professional installation',
  'Use a 240-volt circuit',
  'Provide much faster charging',
  'Add significantly more miles per hour',
];

const upgradeReasons = [
  'Avoid crowded public charging stations',
  'Control charging times',
  'Reduce long-term charging costs',
  'Improve daily convenience',
  'Prepare for additional electric vehicles',
];

const panelSigns = [
  'Breakers trip frequently',
  'Limited space for additional circuits',
  'The panel is outdated',
  'Your home already uses significant electrical power',
];

const whyChoose = [
  'Licensed electricians with EV charger experience',
  'Code-compliant installation',
  'Clear explanations of installation cost',
  'Honest recommendations about panel upgrades',
  'Professional service from start to finish',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Pros with EV charger experience who size the circuit correctly.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Every charger is installed to meet current electrical code.' },
  { icon: 'badge' as const, title: 'Clear Pricing & Financing', text: 'Upfront cost explanations and financing options before work begins.' },
  { icon: 'house' as const, title: 'Honest Panel Advice', text: 'Straight answers on whether your panel needs an upgrade.' },
];

const faqs = [
  { q: 'Do I need a professional electrician to install an EV charger?', a: 'Yes. Installing a Level 2 EV charger requires proper circuit sizing and panel evaluation. A licensed electrician makes sure the installation meets safety standards.' },
  { q: 'How long does it take to install a home EV charging station?', a: 'Most installations take several hours. If panel upgrades are required, the project may take longer — we explain the timeline before we begin.' },
  { q: 'Do I need a special electrical system for an EV charger?', a: 'Your home needs sufficient capacity to support electric vehicle charging. We evaluate your electric panel before installation so there are no surprises.' },
  { q: 'Can I install an EV charger outside?', a: 'Yes. Many charging units are rated for outdoor installation. Proper mounting and weather protection are essential, and we handle both.' },
  { q: `Does ${site.name} offer financing options in ${site.serviceArea}?`, a: `Yes. We offer financing options to help make EV charger installation more affordable for homeowners across ${site.serviceArea}.` },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'EV Charger Installation',
  description: 'Home Level 2 EV charger installation, including panel evaluation and code-compliant wiring.',
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
    { '@type': 'ListItem', position: 4, name: 'EV Charger Installation', item: `${site.url}/services/ev-chargers` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function EvChargersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`EV Charger Installation in ${site.serviceArea}`}
        description="Home Level 2 EV charger installation by licensed electricians — with panel evaluation, proper load calculation, and code-compliant wiring built for daily charging."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'EV Charger Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Ready to charge your EV at home?
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
            style={{ backgroundImage: 'url(/services/ev-hero.jpg)' }}
            role="img"
            aria-label="Electric vehicle charging at a home charging station"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Home EV Charger Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A home EV charging station puts charging on your schedule instead of a public station’s.
            Plug in overnight and start each day with a full battery — no detours, no waiting in line.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            But an EV charger adds real load to your electrical system. Done right, it needs the correct
            circuit, proper grounding, and a panel that can handle the demand. Done wrong, it risks
            overheating and electrical strain.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} installs home EV chargers across {site.serviceArea}. Our licensed electricians
            evaluate your panel, size the circuit correctly, and complete a clean, code-compliant
            installation built for long-term performance.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Benefits (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ev-benefits.jpg)' }}
            role="img"
            aria-label="Electric vehicle charger connected to a car"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Benefits of a Home EV Charging Station
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Installing a home EV charging station offers convenience, efficiency, and long-term value.
              Instead of relying on public charging stations, you gain control over your schedule and
              energy costs. A professionally installed home EV charger provides:
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
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              <span className="font-bold text-white">Future-Ready Home Value:</span> as electric
              vehicles gain popularity, a home charging station is becoming a desirable feature for
              future buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our EV Charger Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Installing an EV charger requires proper planning and electrical evaluation. Our process
              includes:
            </p>
            <ul className="mt-4 space-y-2">
              {process.map((p) => (
                <li key={p.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{p.lead}:</span> {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing an EV charger installation plan"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Level 1 vs. Level 2 EV Chargers: What’s the Difference?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Not all EV chargers work the same way. Understanding the difference helps you choose the
            right setup.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="card">
              <h3 className="font-display text-lg font-extrabold text-brand-700">Level 1 Chargers</h3>
              <ul className="mt-3 space-y-2">
                {level1.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                    <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Level 1 charging can work for some drivers, but charging times are long.
              </p>
            </div>
            <div className="card">
              <h3 className="font-display text-lg font-extrabold text-brand-700">Level 2 Chargers</h3>
              <ul className="mt-3 space-y-2">
                {level2.map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                    <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                    {l}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Most homeowners choose Level 2 because it cuts charging time and improves convenience.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            If you drive daily or rely heavily on your vehicle, Level 2 EV charging is typically the
            better option.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing an EV Charger Station</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            EV charger installation cost depends on several factors. These include the type of charger,
            wiring distance, and whether your electric panel needs upgrading.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We offer financing options to make home EV charger installation more manageable. Our team
            provides clear pricing and explains all available options before work begins.
          </p>

          {/* Upgrade your home */}
          <h2 className="mt-12 section-title text-brand-700">Upgrade Your Home With an EV Charging Station</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing an EV charger at home is a practical upgrade. It simplifies daily routines and
            prepares your property for future electric vehicles. With a home EV charging station, you
            can:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {upgradeReasons.map((u) => (
              <li key={u} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {u}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            As more vehicles are charged at home, installing an EV charger becomes an important
            improvement for modern households.
          </p>

          {/* Panel upgrade */}
          <h2 className="mt-12 section-title text-brand-700">Does Your Electrical Panel Need an Upgrade?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing an EV charger increases demand on your home’s electrical system. Some older
            panels may not have sufficient capacity to safely support a Level 2 EV charger. Your panel
            may need upgrading if:
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
            Upgrading your panel ensures stable power distribution and long-term safety. It also
            prepares your home for future electrical improvements. Our electricians evaluate your panel
            before installation so there are no surprises.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for EV Charger Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} trust {site.name} for reliable electrical services.
            When you choose us, you receive:
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
            We focus on safe, efficient home EV charger installation built for long-term performance.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">EV Charger Installation FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule EV Charger Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to install an EV charger at home? {site.name} provides professional EV charger
              installation across {site.serviceArea}. Call now or request a free estimate.
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
