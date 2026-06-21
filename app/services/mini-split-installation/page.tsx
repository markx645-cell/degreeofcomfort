import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Mini-Split Installation',
  description: `Ductless mini-split installation across ${site.serviceArea} from ${site.name} — efficient, properly sized cooling and heating for additions, basements, and homes without ducts. Financing available.`,
  alternates: { canonical: '/services/mini-split-installation' },
};

const signs = [
  'Rooms that no longer cool or heat evenly',
  'Weak airflow or slow temperature changes',
  'Higher energy bills with no change in usage',
  'Ongoing comfort issues',
  'An older system that no longer meets your needs',
];

const process = [
  'A review of your home and comfort goals',
  'Recommendations for system size and placement',
  'Secure installation of indoor and outdoor units',
  'Professional electrical and refrigerant connections',
  'Testing to confirm proper operation',
];

const costFactors = [
  'The number of indoor units needed',
  'Single-zone or multi-zone system design',
  'The size of the space being heated or cooled',
  'Energy efficiency features and system ratings',
  'Electrical or mounting requirements',
];

const professional = [
  'Correct system sizing',
  'Proper refrigerant levels',
  'Safe electrical connections',
  'Reliable airflow and performance',
  'Manufacturer warranty protection',
];

const replaceWhen = [
  'Performance continues to decline',
  'Comfort issues persist',
  'Energy costs increase',
  'The system no longer fits your needs',
];

const fitScenarios = [
  { title: 'You’re Adding On or Renovating a Space', text: 'Mini-splits are a popular choice for additions, remodeled rooms, finished basements, garages, and converted spaces. Because they need no ductwork, they install without major structural changes — practical when extending ductwork is difficult or not cost-effective, and each indoor unit goes exactly where comfort is needed.' },
  { title: 'You Want to Improve Energy Efficiency and Reduce Costs', text: 'Mini-splits heat and cool individual areas rather than the whole home, so you can focus comfort where it is needed instead of wasting energy on unused rooms. Delivering conditioned air directly to each space reduces energy loss and supports more efficient operation than traditional systems.' },
  { title: 'You Struggle With Uneven Temperatures', text: 'Many homes have hot and cold spots from layout, insulation, or duct design. A mini-split provides independent temperature control for different areas, so each space holds a more consistent temperature without overworking the system.' },
];

const whyUs = [
  { icon: 'check' as const, title: 'Right-Sized Zones', text: 'We size the system and indoor heads to your home so it performs efficiently.' },
  { icon: 'badge' as const, title: 'Clean, Tidy Install', text: 'A small line-set penetration — no tearing into walls for ductwork.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and code-compliant, tested installs.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible plans so an efficient upgrade fits your budget.' },
];

const faqs = [
  { q: 'How long does a ductless mini-split installation take?', a: 'A single-zone installation often takes a few hours to most of a day. Multi-zone systems with several indoor heads take longer — we will give you a clear time estimate up front.' },
  { q: 'What is a good SEER rating for a mini-split system?', a: 'Many quality mini-splits land in the 18–22+ SEER range, and higher numbers mean greater efficiency and lower bills. We help you balance efficiency against budget when choosing a system.' },
  { q: 'Does a ductless mini-split installation require major home changes?', a: 'No. A mini-split only needs a small (roughly three-inch) hole for the line set that connects the indoor and outdoor units, so it is far less invasive than adding or extending ductwork.' },
  { q: 'What are the signs I need a new ductless mini-split system?', a: 'Rooms that no longer cool or heat evenly, weak airflow, rising energy bills, ongoing comfort issues, and an aging system that no longer meets your needs are all signs it may be time for a new system.' },
  { q: 'Will a new ductless mini-split system improve efficiency?', a: 'Yes. Inverter-driven compressors adjust output to demand and there are no duct losses, so a new mini-split typically uses noticeably less energy than older equipment.' },
  { q: 'Are ductless mini-split systems quiet?', a: 'Very. The indoor heads run quietly — far quieter than a window unit — which makes them a great fit for bedrooms, offices, and living spaces.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mini-Split Installation',
  description: 'Ductless mini-split installation for efficient, zoned cooling and heating.',
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
    { '@type': 'ListItem', position: 4, name: 'Mini-Splits', item: `${site.url}/services/mini-splits` },
    { '@type': 'ListItem', position: 5, name: 'Mini-Split Installation', item: `${site.url}/services/mini-split-installation` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MiniSplitInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning · Mini-Splits"
        title={`Ductless Mini-Split Installation in ${site.serviceArea}`}
        description="Flexible, efficient cooling and heating without ductwork — properly sized, cleanly installed, and tested, with financing and free estimates."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Mini-Splits', href: '/services/mini-splits' },
          { label: 'Mini-Split Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Want a mini-split installed in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/minisplit-install-hero.jpg)' }}
            role="img"
            aria-label="Technician installing a ductless mini-split"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Ductless Mini-Split Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Ductless mini-split systems give homeowners flexible cooling and heating without ductwork.
            {' '}{site.name} provides professional ductless mini-split installation for homes across{' '}
            {site.serviceArea}.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Mini-splits work well in spaces where traditional systems fall short — older homes,
            additions, garages, and finished basements. With proper installation, a ductless system
            delivers quiet operation, steady comfort, and strong energy efficiency.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Homeowners choose mini-splits for better control and reliable performance. Each system
            cools or heats specific areas, improving comfort and reducing wasted energy.
          </p>

          {/* Cost */}
          <h2 className="mt-10 section-title text-brand-700">Cost of a New Ductless Mini-Split System</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            The cost of a ductless mini-split depends on several factors — every home has different
            needs, and pricing varies with layout and system size. Factors that affect installation
            cost include:
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
            {site.name} provides clear recommendations and upfront estimates, so you understand the
            cost before installation begins.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs it's time for a new mini-split (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/mini-split-installation.jpg)' }}
            role="img"
            aria-label="Ductless mini-split indoor unit"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs It’s Time for a New Mini-Split System
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Ductless mini-splits can last for many years, but over time performance may decline,
              especially as components wear. Signs it may be time to replace a mini-split include:
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
              Replacing an aging mini-split system can restore comfort and improve efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Mini-Split Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Proper installation plays a major role in a mini-split system’s performance. Our process
              focuses on accuracy, safety, and comfort. During a mini-split install, you can expect:
            </p>
            <ul className="mt-4 space-y-1.5">
              {process.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Once installation is complete, the system is ready to deliver dependable cooling and
              heating.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician reviewing a mini-split installation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Why professional */}
          <h2 className="section-title text-brand-700">Why Professional Mini-Split Installation Is a Must</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Mini-split systems require precise setup — improper installation can reduce efficiency and
            shorten the system’s lifespan. Professional installation helps ensure:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {professional.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Choosing professional installation protects your investment and improves system
            reliability.
          </p>

          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Some mini-split problems can be repaired, especially when the system is newer and has been
            running well overall — a{' '}
            <Link href="/services/mini-split-repair" className="font-semibold text-pink-600 underline hover:text-pink-700">
              mini-split repair
            </Link>{' '}
            may be a good option when the issue is limited. Replacement often makes more sense when:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {replaceWhen.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            A new mini-split system can provide better comfort and improved efficiency.
          </p>

          {/* Is it right */}
          <h2 className="mt-12 section-title text-brand-700">Is a Ductless Mini-Split Right for Your Home?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Ductless mini-splits are a flexible option for homeowners who want greater control over
            cooling and heating, and they work especially well where traditional systems struggle to
            deliver consistent comfort — when you want targeted comfort, improved efficiency, or a
            solution that does not rely on existing ductwork.
          </p>
          <div className="mt-5 space-y-5">
            {fitScenarios.map((f) => (
              <div key={f.title} className="card">
                <h3 className="font-display text-base font-extrabold text-brand-700">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing a System</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A ductless mini-split is an investment in home comfort. {site.name} offers flexible
            financing to make installation more manageable — our team explains the available options
            and helps you choose a payment plan that fits your budget.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Mini-Split Install</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for professional cooling and heating
            services. Our mini-split installations are completed by trained technicians who focus on
            quality and clear communication — we take the time to recommend the right system and ensure
            proper installation from start to finish.
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
          <h2 className="mt-12 section-title text-brand-700">Mini-Split Installation FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Get a Mini-Split Installed Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Considering a ductless mini-split installation or replacement? We are ready to help —
              with the right system, a clean install, and financing options. Call now or request a free
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
