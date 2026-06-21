import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'AC Installation & Replacement',
  description: `AC installation and replacement across ${site.serviceArea} from ${site.name} — properly sized, energy-efficient systems with free estimates and financing. Reliable cooling from day one.`,
  alternates: { canonical: '/services/ac-installation-replacement' },
};

const signs = [
  'Uneven temperatures from room to room',
  'Reduced cooling during hot weather',
  'Higher energy bills over time',
  'Increased humidity or poor comfort indoors',
  'An aging system that no longer performs consistently',
];

const services = [
  'New AC installation for new homes or home additions',
  'Replacement of existing air conditioning systems',
  'System sizing based on home layout and cooling needs',
  'Installation of energy-efficient AC units',
  'Testing to confirm proper airflow and operation',
];

const benefits = [
  'More consistent cooling throughout the home',
  'Improved energy efficiency',
  'Lower monthly energy bills',
  'Better airflow and indoor air quality',
  'Quieter system operation',
  'Reduced risk of unexpected breakdowns',
];

const choosing = [
  'Home size and layout',
  'Energy efficiency goals',
  'Existing ductwork and equipment',
  'Cooling preferences and comfort needs',
  'Heat pump options when appropriate',
];

const costFactors = [
  'Home size and cooling capacity needed',
  'Type of air conditioning system',
  'Energy efficiency features',
  'Ductwork or electrical updates',
  'Replacement versus new installation',
];

const whyUs = [
  { icon: 'check' as const, title: 'Proper Sizing', text: 'We size every system to your home so it cools evenly without wasting energy.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Certified technicians and careful, code-compliant installation and testing.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible plans to spread the cost of an energy-efficient upgrade over time.' },
  { icon: 'badge' as const, title: 'Free Estimates', text: 'Clear recommendations and a free estimate before you decide anything.' },
];

const faqs = [
  { q: 'How long does AC installation take?', a: 'A standard system replacement usually takes most of a day — roughly 4–8 hours. New installations that involve ductwork or electrical upgrades take longer, and we will give you a clear time estimate up front.' },
  { q: 'How often should AC systems be replaced?', a: 'Most air conditioners last about 12–15 years. It is worth replacing sooner if your unit uses old R-22 refrigerant, needs frequent repairs, or is driving up your energy bills.' },
  { q: 'Will a new air conditioner lower energy bills?', a: 'Usually, yes. Modern high-efficiency systems use significantly less energy than older units, so a properly sized replacement often pays back part of its cost in lower monthly bills.' },
  { q: 'Are heat pumps a good option for my home?', a: 'Often, yes — a heat pump cools in summer and heats in winter efficiently, and it can pair with a furnace for the coldest days. We help you decide based on your home and goals.' },
  { q: 'Do you offer free estimates for AC installation?', a: 'Yes. We provide free estimates and clear recommendations so you understand your options before moving forward.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AC Installation & Replacement',
  description: 'Air conditioning installation and replacement with proper sizing and testing.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Air Conditioning', item: `${site.url}/services/air-conditioning` },
    { '@type': 'ListItem', position: 4, name: 'AC Installation & Replacement', item: `${site.url}/services/ac-installation-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ACInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning"
        title={`AC Installation & Replacement in ${site.serviceArea}`}
        description="A new, properly sized AC system means more consistent cooling, lower bills, and reliable comfort from day one — with free estimates and financing."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'AC Installation & Replacement' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need a new AC system in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/ac-install-hero.jpg)' }}
            role="img"
            aria-label="New air conditioning system installed at a home"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            AC Installation & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            If your air conditioner no longer keeps your home comfortable, it may be time for a new
            system. {site.name} provides professional AC installation and replacement for homeowners
            across {site.serviceArea}.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A new system improves comfort, reduces energy use, and delivers more reliable cooling.
            Whether you are installing in a new home or replacing an older unit, proper installation
            plays a major role in long-term performance.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            As part of our complete air conditioning services, our team installs cooling systems
            designed to meet your home’s needs and support consistent comfort season after season.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs it may be time to replace (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ac-installation-replacement.jpg)' }}
            role="img"
            aria-label="Technician working on an air conditioner"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs It May Be Time to Replace Your Air Conditioner
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Some air conditioning systems show changes as they age. These changes are often
              noticeable during normal use and can affect comfort inside the home. Common signs an AC
              system may be nearing the end of its lifespan include:
            </p>
            <ul className="mt-4 space-y-1.5">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              These signs reflect how the system operates during everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During AC Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Knowing what to expect makes the process feel more straightforward. During AC
              installation or replacement, technicians begin by reviewing your home and existing
              cooling system to understand layout, airflow, and cooling needs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Based on that evaluation, the team recommends the proper system size and configuration.
              If the project involves replacement, technicians remove the old equipment safely before
              installing the new unit, with secure connections and careful setup.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Once installation is complete, the system is tested to confirm airflow, cooling
              performance, and safe operation — so it is ready to deliver reliable comfort from day
              one.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician discussing AC installation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Professional AC Installation & Replacement</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing a new air conditioning system is an important investment, and the quality of
            the installation affects how efficiently the system runs and how well it cools your home.
            Our complete installation and replacement service covers both new homes and existing
            systems, including:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional installation helps ensure the system operates correctly from the start and
            continues to perform as expected.
          </p>

          {/* Benefits */}
          <h2 className="mt-12 section-title text-brand-700">Benefits of Installing a New AC System</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A new air conditioning system offers several benefits for homeowners, including:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Modern cooling systems are designed to deliver reliable comfort while using less energy
            than older units.
          </p>

          {/* Choosing */}
          <h2 className="mt-12 section-title text-brand-700">Choosing the Right AC System for Your Home</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Selecting the right system involves more than choosing a brand — size, efficiency ratings,
            and compatibility with your existing equipment all affect performance. We help homeowners
            choose based on:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {choosing.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {c}
              </li>
            ))}
          </ul>

          {/* Repair vs replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair vs. Replace</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When a system shows signs of decline, the next step is deciding whether repair or
            replacement makes more sense. Repair may be appropriate when the system is newer, the issue
            is isolated, and overall performance is still reliable. Replacement is often the better
            option when repairs become frequent, efficiency keeps dropping, or performance no longer
            meets your home’s needs — in which case a new system provides more reliable cooling and
            fewer ongoing repair concerns.
          </p>

          {/* Cost */}
          <h2 className="mt-12 section-title text-brand-700">What Affects the Cost of AC Installation?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installation costs vary based on the home and system requirements — no two homes have the
            same cooling needs. Factors that influence cost include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {costFactors.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            {site.name} provides free estimates and clear recommendations to help you understand your
            options before moving forward.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Flexible Financing Options</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing a new air conditioning system is a major investment, and flexible financing can
            make it more manageable. {site.name} offers financing that lets you spread the cost of an
            energy-efficient upgrade over time — our team reviews the options and helps find a payment
            plan that fits your budget.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for AC Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} choose {site.name} for professional cooling services.
            Certified technicians complete each installation with attention to detail and clear
            communication, and proper system sizing, careful installation, and thorough testing help
            ensure dependable performance — with the focus on safety, comfort, and long-term
            reliability.
          </p>
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
          <h2 className="mt-12 section-title text-brand-700">AC Installation FAQs</h2>
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
              Schedule Your AC Installation Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              If your current system no longer meets your cooling needs, we are ready to help — with a
              free estimate, proper sizing, and financing options. Call now or request your estimate.
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
