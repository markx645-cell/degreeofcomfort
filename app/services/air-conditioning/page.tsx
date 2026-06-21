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
  title: 'Air Conditioning Services',
  description: `Air conditioning services across ${site.serviceArea} from ${site.name} — AC repair, installation, maintenance, and ductless mini-splits. Upfront pricing, 24/7 emergency cooling.`,
  alternates: { canonical: '/services/air-conditioning' },
};

const acCards = servicePages.filter((s) => s.category === 'Cooling' && s.slug !== 'air-filters');

const serviceLines = [
  { label: 'AC repair for sudden breakdowns or performance issues', href: '/services/ac-repair' },
  { label: 'Air conditioning installation and replacement for aging systems', href: '/services/ac-installation-replacement' },
  { label: 'AC tune-ups and maintenance to support efficiency and reliability', href: '/services/ac-maintenance' },
  { label: 'Ductless mini-split services for targeted cooling (and heating)', href: '/services/mini-splits' },
];

const problems = [
  'Warm air coming from vents',
  'Uneven cooling between rooms',
  'Rising energy bills',
  'Frequent system cycling',
  'Unusual noises or odors',
];

const tuneup = [
  'Improve airflow and cooling performance',
  'Reduce strain on system components',
  'Support lower energy bills over time',
  'Extend the life of your air conditioner',
];

const installPoints = [
  'Properly sized for your home',
  'Installed for safe and reliable operation',
  'Designed to deliver consistent cooling',
  'Built to improve efficiency and comfort',
];

const miniUses = [
  'Home additions and renovated spaces',
  'Finished basements and garages',
  'Older homes without existing ducts',
];

const expectations = [
  'High-quality service from trained technicians',
  'Clear explanations and practical recommendations',
  'Respect for your home and your schedule',
  'Reliable solutions for your cooling needs',
];

const whyUs = [
  { icon: 'clock' as const, title: '24/7 Emergency Cooling', text: 'Lost AC in the heat? We respond around the clock to restore cooling fast.' },
  { icon: 'badge' as const, title: 'All AC Systems', text: 'Central air, ductless mini-splits, and heat pumps on all major brands.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and safe, code-compliant work.' },
  { icon: 'check' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
];

const faqs = [
  { q: 'Do you offer emergency AC services?', a: 'Yes. We provide 24/7 emergency air conditioning service to restore cooling as quickly as possible when your system fails during the heat.' },
  { q: 'What kinds of AC systems do you service?', a: 'We service central air conditioners, ductless mini-splits, and heat pumps from all major brands — repair, maintenance, and installation.' },
  { q: 'What air conditioning services do you offer?', a: 'AC repair, installation and replacement, tune-ups and maintenance, and ductless mini-split services for targeted cooling and heating.' },
  { q: 'Can you help finance a new AC system?', a: 'Yes. We offer financing with a quick application and flexible terms so a new system does not have to wait for the budget.' },
  { q: 'How do I know if my AC needs repair or replacement?', a: 'If the unit is relatively new and the issue is isolated, a repair makes sense. If it is 10–15+ years old, breaking down often, running up your bills, or uses old R-22 refrigerant, replacement is usually the better value — and we will tell you honestly which we would do.' },
  { q: 'How often should air conditioning systems be serviced?', a: 'Once a year, ideally in the spring before summer demand — regular service is the best way to prevent mid-summer breakdowns.' },
  { q: 'Can regular AC service help lower energy bills?', a: 'Yes. A clean, well-tuned system does not have to work as hard to cool your home, which lowers energy use and your monthly bill.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Air Conditioning',
  description: 'AC repair, installation, maintenance, and ductless mini-split services.',
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
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function AirConditioningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning"
        title={`Air Conditioning Services in ${site.serviceArea}`}
        description="Repair, installation, maintenance, and ductless mini-splits — keeping your home cool, efficient, and reliable all cooling season, with 24/7 emergency service."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Air Conditioning' }]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            AC trouble in {site.serviceArea}? Call for immediate service
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
            style={{ backgroundImage: 'url(/services/ac-hero.jpg)' }}
            role="img"
            aria-label="Home air conditioning unit"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Air Conditioning Services
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            AC problems tend to show up at the worst times. A system that struggles to keep up, rooms
            that never feel comfortable, or climbing energy bills can all signal that something is not
            working the way it should — and it can be hard to know whether you need a simple service
            visit or something more.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides complete air conditioning services for homes across{' '}
            {site.serviceArea}. We help you understand what your system needs — routine maintenance,
            timely repair, or planning ahead for replacement — with a straightforward approach focused
            on long-term comfort, not quick fixes.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether your AC is old or you are facing a specific issue, our goal is to keep your home
            comfortable, efficient, and reliable throughout the cooling season.
          </p>

          {/* Services grid */}
          <h2 className="mt-12 section-title text-brand-700">Our Air Conditioning Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {acCards.map((s) => (
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
          <ul className="mt-5 space-y-2">
            {serviceLines.map((s) => (
              <li key={s.label} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <Link href={s.href} className="hover:text-pink-600">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Common AC problems (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ac-repair.jpg)' }}
            role="img"
            aria-label="Air conditioner being serviced"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Do You Have One of These Common AC Problems?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many homeowners notice small changes before a major AC issue develops. Catching the
              early signs can help prevent bigger repairs. Common concerns include:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {problems.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              If you notice these issues, call {site.name} to restore comfort and prevent further
              damage.
            </p>
          </div>
        </div>
      </section>

      {/* Band: 24/7 emergency (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              24/7 Emergency AC Support Is Available
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Air conditioning problems do not wait for business hours. A loss of cooling during
              extreme heat can affect comfort and safety — especially for families, pets, and older
              adults.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              {site.name} offers 24/7 emergency AC service to restore cooling as quickly as possible.
              Our technicians respond to urgent issues with a focus on safe operation and dependable
              results, helping prevent further damage and reduce stress during high-heat situations.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician on an emergency AC call"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Get an AC Tune-Up to Keep Cool</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Regular maintenance helps your system run more smoothly and efficiently — many breakdowns
            start as small issues that routine service catches early. An{' '}
            <Link href="/services/ac-maintenance" className="font-semibold text-pink-600 underline hover:text-pink-700">
              AC tune-up
            </Link>{' '}
            helps:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {tuneup.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Scheduling maintenance before peak summer heat keeps your home comfortable and your system
            reliable.
          </p>

          {/* Repair */}
          <h2 className="mt-12 section-title text-brand-700">AC Repair That Restores Comfort</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When an AC unit stops working properly, comfort changes quickly — rooms may feel uneven,
            airflow may weaken, or the system may run without cooling. Professional{' '}
            <Link href="/services/ac-repair" className="font-semibold text-pink-600 underline hover:text-pink-700">
              AC repair
            </Link>{' '}
            identifies the cause and restores proper operation. Addressing issues early prevents
            emergencies and protects your system from further wear.
          </p>

          {/* Install */}
          <h2 className="mt-12 section-title text-brand-700">AC Installation & Replacement Made Simple</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            When a system reaches the end of its lifespan, replacement becomes a consideration — older
            systems struggle to keep up and cost more to operate. Professional{' '}
            <Link href="/services/ac-installation-replacement" className="font-semibold text-pink-600 underline hover:text-pink-700">
              AC installation
            </Link>{' '}
            ensures your new system is:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {installPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Replacing an outdated air conditioner improves performance, reduces energy costs, and
            provides long-term reliability.
          </p>

          {/* Mini-split */}
          <h2 className="mt-12 section-title text-brand-700">Ductless Mini-Split Cooling & Heating</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Not every home suits traditional central air.{' '}
            <Link href="/services/mini-splits" className="font-semibold text-pink-600 underline hover:text-pink-700">
              Ductless mini-split systems
            </Link>{' '}
            offer flexible cooling and heating where ductwork is limited or comfort is uneven. They are
            often used in:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {miniUses.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These systems deliver targeted comfort, quiet operation, and efficient cooling and heating
            without a central duct system.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Air Conditioning</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable cooling. Our team
            focuses on honest communication, careful workmanship, and solutions that support long-term
            comfort. When you choose us, you can expect:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {expectations.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {e}
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
          <h2 className="mt-12 section-title text-brand-700">Air Conditioning FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your AC Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Repair, maintenance, or help planning an upgrade — we support comfort, efficiency, and
              reliable performance all cooling season. Call now or request a free estimate.
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
