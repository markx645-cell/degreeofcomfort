import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Exhaust Fan Installation & Repair',
  description: `Bathroom and kitchen exhaust fan installation and repair across ${site.serviceArea} from ${site.name} — better airflow, quieter operation, and proper venting for moisture control.`,
  alternates: { canonical: '/services/exhaust-fan-installation-repair' },
};

const repairSigns = [
  'The fan makes buzzing, grinding, or rattling noises',
  'Airflow feels weaker than usual',
  'The fan runs inconsistently',
  'The wall switch works intermittently',
  'The motor hums but does not move much air',
];

const installSigns = [
  'Mirrors remain fogged long after showers',
  'Condensation forms on ceilings or walls',
  'Paint begins to peel near the vent',
  'Musty odors linger in the bathroom',
  'Visible mold appears around fixtures or corners',
  'The room feels humid for hours',
];

const process = [
  { lead: 'Evaluate the Space', text: 'We assess the size of the bathroom and identify current airflow concerns — proper fan capacity is critical for effectively removing moisture.' },
  { lead: 'Select the Right Fan', text: 'Not all fans are equal. Choosing the correct airflow rating ensures the system supports indoor air quality and prevents excess humidity from lingering.' },
  { lead: 'Safe Electrical Installation', text: 'Our licensed electricians complete all wiring to local building codes, with secure connections that are safe for daily use.' },
  { lead: 'Proper Exterior Venting', text: 'Venting matters as much as the fan itself. We confirm ductwork vents outdoors — not into attic spaces — to reduce the risk of mold and mildew.' },
  { lead: 'Testing & Final Inspection', text: 'Before finishing, we test airflow, confirm quiet operation, and check that the system is securely mounted and properly sealed.' },
];

const benefits = [
  'Effectively removing humidity after showers',
  'Improving indoor air quality',
  'Helping prevent mold growth',
  'Reducing mold and mildew buildup',
  'Protecting paint, drywall, and ceilings',
  'Minimizing lingering odors',
  'Improving overall comfort',
];

const whyChoose = [
  'Licensed electricians and code-compliant installation',
  'Honest recommendations on repair versus replacement',
  'Proper venting that removes moisture effectively',
  'Solutions that improve indoor air quality',
  `Reliable service across ${site.serviceArea}`,
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Code-compliant wiring and safe, secure connections.' },
  { icon: 'check' as const, title: 'Vented Outdoors', text: 'We confirm ducts vent outside — not into the attic — for real moisture control.' },
  { icon: 'badge' as const, title: 'Honest Repair vs. Replace', text: 'We evaluate airflow and venting before recommending the right solution.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible options for qualifying homeowners.' },
];

const faqs = [
  { q: 'Can you repair noisy exhaust fans?', a: 'Yes. Fan noise usually comes from a worn motor, a loose mount, or built-up debris. We diagnose the source and either repair it or recommend a replacement if the motor is failing.' },
  { q: 'Do you offer financing for exhaust fan installation and repair?', a: 'Yes — we offer financing for qualifying homeowners and explain pricing clearly so you understand the scope of work before the project begins.' },
  { q: 'Can I install a bathroom exhaust fan myself?', a: 'We do not recommend it. Installation involves electrical wiring and proper exterior venting, and a licensed electrician ensures the fan is safe, to code, and actually vented outdoors rather than into the attic.' },
  { q: 'Why isn’t my bathroom exhaust fan removing moisture?', a: 'The most common reasons are a fan that is undersized for the room, ductwork that vents into the attic instead of outdoors, a clogged duct, or a weak or worn motor. We check all of these.' },
  { q: 'How long does exhaust fan installation take?', a: 'A standard replacement usually takes a couple of hours. A brand-new installation that requires running new ductwork and exterior venting takes longer — we will give you a clear estimate up front.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Exhaust Fan Installation & Repair',
  description: 'Bathroom and kitchen exhaust fan installation, repair, and replacement.',
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
    { '@type': 'ListItem', position: 4, name: 'Exhaust Fan Installation & Repair', item: `${site.url}/services/exhaust-fan-installation-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ExhaustFanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Exhaust Fan Installation & Repair in ${site.serviceArea}`}
        description="Stronger airflow, quieter operation, and proper venting — bathroom and kitchen exhaust fans installed, repaired, and replaced to protect your home from moisture."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Exhaust Fan Installation & Repair' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Bathroom staying humid in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/exhaust-hero.jpg)' }}
            role="img"
            aria-label="Bathroom ceiling exhaust fan"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Exhaust Fan Installation & Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Bathrooms and kitchens create moisture every day. Hot showers, baths, and cooking release
            steam into the air, and if that moisture has no clear path out, it collects on ceilings,
            walls, and in insulation — leading to mold and mildew, peeling paint, musty odors, and even
            structural damage.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional exhaust fan installation, repair, and replacement across
            {' '}{site.serviceArea}. We work with homeowners who want stronger airflow, quieter
            operation, and better moisture control — whether you are adding a bathroom exhaust fan for
            the first time or replacing an older unit.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A properly functioning exhaust fan does more than clear fog from mirrors — it plays a key
            role in preventing mold growth and keeping your home comfortable.
          </p>

          {/* Repair or replace */}
          <h2 className="mt-10 section-title text-brand-700">Repair or Replace Your Exhaust Fan?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When an exhaust fan is not performing properly, it is not always clear whether repair or
            replacement is the better option. The answer depends on age, airflow strength, and how the
            system is vented.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Repair is often the right solution when the unit is newer and the problem is limited to a
            worn motor, loose connection, or faulty switch. If the housing is secure and the ductwork
            vents outdoors properly, restoring the internal components can improve airflow and reduce
            noise without a full replacement.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Replacement becomes the smarter choice when the fan is older, undersized, or installed
            incorrectly. Many homes have small units that cannot dehumidify larger bathrooms, or fans
            that vent into the attic where moisture collects. Upgrading to a properly sized system
            improves airflow, helps prevent mold and mildew, and can reduce long-term maintenance and
            improve efficiency.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our electricians evaluate airflow performance, venting, safety, and overall cost before
            recommending the best solution for your home.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs install vs repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-start gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:sticky lg:top-28"
            style={{ backgroundImage: 'url(/services/exhaust-fan-installation-repair.jpg)' }}
            role="img"
            aria-label="Exhaust fan service"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Installation vs. Repair
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Homeowners often notice warning signs before they know which service they need. Paying
              attention to these symptoms can help you act before moisture causes damage.
            </p>
            <h3 className="mt-5 font-display text-base font-extrabold uppercase">Signs you may need repair</h3>
            <ul className="mt-2 space-y-1.5">
              {repairSigns.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              These usually indicate mechanical wear or minor electrical issues — in many cases,
              professional repair can restore normal performance.
            </p>
            <h3 className="mt-5 font-display text-base font-extrabold uppercase">Signs you may need installation</h3>
            <ul className="mt-2 space-y-1.5">
              {installSigns.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              These often mean the fan is undersized or no longer removing moisture effectively. A new
              installation may be needed to improve airflow and protect surrounding materials.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Exhaust Fan Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              When you schedule exhaust fan installation, we focus on proper sizing, safe wiring, and
              lasting results:
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
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Professional installation helps protect drywall, ceilings, insulation, and nearby
              finishes from moisture damage.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing an exhaust fan installation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Benefits */}
          <h2 className="section-title text-brand-700">Benefits of a Properly Installed Exhaust Fan</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Bathrooms and kitchens are high-moisture areas, and ventilation is one of the most
            effective tools for moisture control. A professionally installed exhaust fan helps with:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {b}
              </li>
            ))}
          </ul>

          {/* Kitchen */}
          <h2 className="mt-12 section-title text-brand-700">Kitchen Exhaust Fan Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Moisture is not limited to bathrooms — cooking produces steam, heat, and airborne grease
            that can circulate through your home and settle on cabinets and surfaces. Kitchen exhaust
            fan installation pulls that air out efficiently.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If your kitchen fan is outdated or underperforming, we offer both repair and replacement.
            Improving kitchen ventilation enhances comfort and helps keep your surfaces cleaner.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing an Exhaust Fan</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installation cost can vary based on electrical access, ductwork requirements, and fan
            selection — and replacement cost may depend on whether adjustments are needed to improve
            exterior venting. {site.name} offers financing for qualifying homeowners and explains
            pricing clearly so you understand the scope of work before the project begins.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners choose {site.name} because we focus on proper electrical work and real
            ventilation performance — we do not simply swap out equipment, we look at airflow, venting,
            and long-term moisture control. When you work with our team, you can expect:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
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
          <h2 className="mt-12 section-title text-brand-700">Exhaust Fan FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Schedule Your Exhaust Fan Service Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              If your bathroom stays humid long after showers or your ventilation is underperforming,
              it may be time for service. Call now or request a free estimate.
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
