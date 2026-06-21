import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Furnace Installation & Replacement',
  description: `Furnace installation and replacement across ${site.serviceArea} from ${site.name} — gas and electric, properly sized and to code, with financing and same-day installs.`,
  alternates: { canonical: '/services/furnace-installation-replacement' },
};

const signs = [
  'Frequent breakdowns or rising repair costs',
  'Uneven heating throughout your home',
  'Higher energy bills despite regular maintenance',
  'A furnace that is 15–20 years old',
  'Strange noises or poor indoor air quality',
];

const fuelTypes = [
  { lead: 'Gas furnace installation', text: 'natural gas furnaces are popular across the area for their efficiency and power — a reliable choice for long-term heating. We handle the install safely, including all gas lines and connections.' },
  { lead: 'Electric furnace installation', text: 'a great choice for homes without natural gas — durable, easy to maintain, and effective at keeping your home warm.' },
];

const advantages = [
  'Better indoor air quality with advanced filtration',
  'Lower monthly energy bills thanks to efficient technology',
  'Consistent heating across every room',
  'Quieter operation than older models',
  'Improved safety features and reliable performance',
];

const whyUs = [
  { icon: 'check' as const, title: 'Proper Sizing', text: 'We load-size every install so your furnace heats evenly without wasting energy.' },
  { icon: 'shield' as const, title: 'Licensed & To Code', text: 'Background-checked technicians and safe, code-compliant gas and electrical work.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Low rates and fast approval so an unexpected replacement is not a crisis.' },
  { icon: 'clock' as const, title: 'Same-Day Installs', text: 'Furnace failed in a cold snap? Our team can install and test a new unit fast.' },
];

const faqs = [
  { q: 'What does a professional furnace installation include?', a: 'We size the system to your home, safely remove the old unit, install the new furnace with proper gas, electrical, and venting connections, test airflow and operation, then clean up and walk you through how it runs.' },
  { q: 'How long does a new furnace installation take?', a: 'A standard replacement usually takes about 4–8 hours. It can take longer if we are adding ductwork, switching fuel types, or correcting older work.' },
  { q: 'Do you offer financing for furnace installation?', a: 'Yes — we offer financing with low rates and fast approval, so you can get a reliable system now and spread the payments over time.' },
  { q: 'Can I schedule emergency furnace installation during winter?', a: 'Absolutely. When a furnace fails during a cold snap, our rescue team offers same-day installation to restore heat without delay.' },
  { q: 'How far in advance should I book a furnace install?', a: 'For a planned upgrade, a few days is usually plenty. For a no-heat emergency, we handle installs the same day whenever possible.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Furnace Installation & Replacement',
  description: 'Gas and electric furnace installation and replacement with proper sizing.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Heating', item: `${site.url}/services/heating` },
    { '@type': 'ListItem', position: 4, name: 'Furnace Installation & Replacement', item: `${site.url}/services/furnace-installation-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FurnaceInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title={`Furnace Installation & Replacement in ${site.serviceArea}`}
        description="Gas or electric, planned upgrade or emergency replacement — we size it right and install it to code, with financing and same-day installs available."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Furnace Installation & Replacement' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need a new furnace in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/furnace-install-hero.jpg)' }}
            role="img"
            aria-label="Technician installing a new furnace"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Furnace Installation & Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When winter cold hits {site.serviceArea}, the last thing you want is a furnace that breaks
            down. {site.name} installs and replaces furnaces the right way the first time — giving you
            peace of mind and day-one comfort you can count on.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Our certified technicians make the process easy and help your family enjoy lasting
            comfort, better efficiency, and lower energy bills. Whether your old unit has failed or
            constant repairs are driving up costs, we are here to install a system you can trust.
          </p>

          {/* Advantages */}
          <h2 className="mt-10 section-title text-brand-700">Advantages of Modern Furnaces</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Today’s high-efficiency furnaces do more than provide heat — they add comfort, save money,
            and improve your home’s air quality. Benefits include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {advantages.map((a) => (
              <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Upgrading to a modern furnace is not just about comfort — it is an investment in your home
            and your peace of mind. We also handle{' '}
            <Link href="/services/furnace-repair" className="font-semibold text-pink-600 underline hover:text-pink-700">
              furnace repair
            </Link>
            ,{' '}
            <Link href="/services/furnace-maintenance" className="font-semibold text-pink-600 underline hover:text-pink-700">
              maintenance
            </Link>
            , and{' '}
            <Link href="/services/air-conditioning" className="font-semibold text-pink-600 underline hover:text-pink-700">
              air conditioning
            </Link>{' '}
            to keep your home comfortable year-round.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs it's time for a new furnace (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/furnace-install-signs.jpg)' }}
            role="img"
            aria-label="Technician inspecting a furnace with a homeowner"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs It’s Time for a New Furnace
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Not sure whether to repair or replace? Here are clear signs it is time to schedule a new
              furnace install:
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
              If you have noticed these issues, it may be time to stop spending on temporary fixes and
              invest in a lasting solution.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What to Expect During a New Furnace Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A new furnace installation begins with evaluating your home and confirming the correct
              system size and setup for your heating needs. On installation day, the existing furnace
              is carefully removed and the area is prepared for a safe, efficient installation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              The new furnace is then installed, connected, and tested to confirm proper operation and
              airflow. Once it is running, the technician reviews basic operation and maintenance tips,
              answers your questions, and cleans the work area — so your home is left comfortable and
              ready for reliable heating.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician reviewing a new furnace with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Same-Day Furnace Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When your furnace fails during a cold snap, waiting is not an option. {site.name} offers
            same-day furnace installation for urgent situations — our rescue team is ready to install
            and test your new unit quickly, restoring warmth to your home without delay.
          </p>

          {/* Gas and electric */}
          <h2 className="mt-12 section-title text-brand-700">Gas & Electric Furnace Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Every home has different heating needs, and our team is equipped to handle all types of
            furnace installation:
          </p>
          <ul className="mt-4 space-y-2.5">
            {fuelTypes.map((f) => (
              <li key={f.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <span className="font-semibold text-brand-800">{f.lead}:</span> {f.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Whether you choose a natural gas or electric furnace, our certified technicians make sure
            your unit is installed properly, tested for performance, and ready to deliver comfort
            right away.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing a New Furnace</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A new furnace can be a big investment, especially if your current unit failed unexpectedly.
            {' '}{site.name} offers flexible financing to make the purchase stress-free — with low
            rates and fast approval, you can enjoy a reliable heating system now and spread the
            payments out over time.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Furnace Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Installing a new furnace is a significant investment, and proper installation is the key to
            long-term performance and efficiency. {site.name} provides professional furnace
            installation designed to keep your system operating safely and reliably from day one. With
            experienced technicians, careful attention to detail, and clear communication throughout,
            we help you choose the right furnace and handle everything from system selection to final
            testing — for dependable comfort, energy efficiency, and lasting results.
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
          <h2 className="mt-12 section-title text-brand-700">Furnace Installation FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Install a New Furnace Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Do not let an old or unreliable heating system compromise your comfort. We will help you
              find the perfect furnace. Call now or request a free estimate.
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
