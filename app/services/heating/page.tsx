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
  title: 'Heating Services',
  description: `Heating services across ${site.serviceArea} from ${site.name} — furnace installation, repair, maintenance, and heat pumps. Upfront pricing, 24/7 no-heat emergency service.`,
  alternates: { canonical: '/services/heating' },
};

const heatingServices = servicePages.filter((s) => s.category === 'Heating');

const signs = [
  'No heat or weak, cool airflow from the vents',
  'Uneven heating from room to room',
  'Banging, rattling, or squealing noises',
  'Short cycling — turning on and off too often',
  'Rising energy bills with no change in use',
  'A yellow or flickering burner flame, or a burning smell',
  'A furnace that is more than 15 years old',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and safe, code-compliant work.' },
  { icon: 'clock' as const, title: '24/7 No-Heat Service', text: 'Lost heat overnight or on the coldest day? We respond around the clock.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'heart' as const, title: 'Locally Owned', text: 'A family-run team that treats your home and your comfort with respect.' },
];

const faqs = [
  { q: 'Do heat pumps work in our climate?', a: 'Yes. Modern heat pumps handle our winters well, and many homes pair one with a furnace (a dual-fuel system) so the furnace takes over on the coldest days for the best of both efficiency and comfort.' },
  { q: 'How do I know if my furnace needs maintenance?', a: 'An annual tune-up is recommended. Tell-tale signs in between: short cycling, new noises, weak or uneven heat, rising bills, or simply not having had it serviced in over a year.' },
  { q: 'How often should I replace my furnace filter?', a: 'Every 1–3 months for a standard 1-inch filter — more often with pets or heavy use. Thicker media filters can last several months. A clean filter is the single easiest way to protect efficiency.' },
  { q: 'Can I install a new heating system myself?', a: 'No — heating installation involves gas, electrical, venting, and permits, and a mistake is a real safety risk. A professional install also keeps your manufacturer warranty intact.' },
  { q: 'What should I do if my heating system stops working at night?', a: 'Check that the thermostat is set to heat and the breaker has not tripped, then give us a call — we offer 24/7 emergency no-heat service and reach most homes the same day.' },
  { q: 'How can I reduce my heating costs?', a: 'Annual maintenance, a programmable thermostat, fresh filters, sealing drafts, and — if your furnace is old and inefficient — upgrading to a high-efficiency system all help bring the bill down.' },
  { q: 'Are there financing options available for new heating systems?', a: 'Yes. We offer financing with a quick application and flexible terms so a new furnace or heat pump does not have to wait.' },
  { q: 'What is the difference between a furnace and a heat pump?', a: 'A furnace burns fuel (usually gas) to create heat. A heat pump moves heat instead of making it — and it cools your home in summer too — which makes it very efficient in milder cold. We help you choose the right fit.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Heating',
  description: 'Furnace installation, repair, maintenance, and heat pump services.',
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
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HeatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title={`Heating Services in ${site.serviceArea}`}
        description="Furnaces and heat pumps installed, repaired, and maintained by licensed technicians — with upfront pricing and 24/7 no-heat emergency service."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Heating' }]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            No heat in {site.serviceArea}? Call for immediate service
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

      <section className="py-16">
        <MainWithSidebar>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/heating-hero.jpg)' }}
            role="img"
            aria-label="Home heating system"
          />
          {/* Overview */}
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Trusted Heating Contractor in {site.serviceArea}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When you need heating service, you want to know you are working with a team you can count
            on. {site.name} is a trusted heating contractor across {site.serviceArea} — homeowners
            rely on us for dependable service, whether it is installing a new heating system or
            repairing an old one.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We provide lasting solutions and a full range of options to suit your home, including
            furnaces and heat pumps. We believe in doing the job right the first time, so you can
            enjoy uninterrupted warmth all winter long.
          </p>

          {/* Services grid */}
          <h2 className="mt-12 section-title text-brand-700">Our Heating Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Explore any service below for details, or call us and we will point you to the right fix.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {heatingServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                  <span
                    className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(/services/${s.slug}.jpg)` }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-600" />
                  <span className="absolute inset-0 grid place-items-center p-3 text-center">
                    <span className="font-display text-[13px] font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] sm:text-sm">
                      {s.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Signs band */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
            <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              Signs Your Heating System Needs Attention
            </h2>
            <p className="mt-3 text-sm text-white/90">
              Catching these early can save you from a no-heat emergency on the coldest night of the
              year:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* No-heat banner */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              No heat right now? We answer 24/7.
            </h2>
            <Link href="/services/furnace-repair" className="btn-pink flex-shrink-0">
              Furnace Repair
            </Link>
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Heating</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
          <h2 className="mt-12 section-title text-brand-700">Heating FAQs</h2>
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
              Stay Warm — Book Heating Service Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Furnace or heat pump, repair or replacement — licensed technicians, upfront pricing, and
              24/7 no-heat service. Call now or request a free estimate.
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
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
