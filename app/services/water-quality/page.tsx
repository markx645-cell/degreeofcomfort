import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Water Quality',
  description: `Water quality services across ${site.serviceArea} from ${site.name} — whole-house filtration, water softeners, and water testing for cleaner, better-tasting water. Upfront pricing.`,
  alternates: { canonical: '/services/water-quality' },
};

const benefits = [
  { lead: 'Protects family health', text: 'keeps out chlorine, heavy metals like lead or mercury, and bacteria that can cause illness.' },
  { lead: 'Better-tasting and -smelling water', text: 'filtering chlorine and organic contaminants makes water taste fresher and smell more natural.' },
  { lead: 'Clearer showers and appliances', text: 'filtration prevents mineral buildup in pipes, water heaters, and fixtures, so showers feel softer and appliances last longer.' },
  { lead: 'Saves money on plumbing repairs', text: 'less mineral scale means fewer leaks and clogs in your pipes.' },
  { lead: 'Improved appliance efficiency', text: 'your dishwasher, coffee maker, and washing machine run more efficiently — sometimes with energy savings.' },
];

const signs = [
  'Unpleasant taste or odor in your tap water',
  'Cloudy, discolored, or rusty-looking water',
  'White mineral buildup on faucets, fixtures, or dishes',
  'Dry skin, irritation, or dull hair after bathing',
  'Soap that does not lather well or leaves residue',
  'Staining on sinks, tubs, or laundry',
];

const whyUs = [
  { icon: 'check' as const, title: 'Whole-House Solutions', text: 'We treat water at the main line so every tap, shower, and appliance benefits.' },
  { icon: 'badge' as const, title: 'Trusted Brands', text: 'Customized system recommendations using proven, reliable equipment.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and careful, code-compliant installation.' },
  { icon: 'star' as const, title: 'Ongoing Support', text: 'We monitor performance over time, not a one-off install with unknown results.' },
];

const faqs = [
  { q: 'What is a whole-house water filtration system?', a: 'It is a system installed at your main water line so every tap, shower, and appliance in the home gets filtered water — not just the kitchen sink. It treats the water before it reaches anything in the house.' },
  { q: 'Are water purification services really necessary?', a: 'It depends on your water. If you notice taste or odor problems, staining, or hard-water buildup, a properly sized, professionally installed system makes a real difference that a pitcher filter cannot match. We test first so you only treat what you actually have.' },
  { q: 'Is hard water harmful to my plumbing system?', a: 'Hard water is not a health hazard, but it is hard on your plumbing — mineral scale builds up inside pipes, water heaters, and fixtures, reducing flow and shortening appliance life. A water softener prevents that buildup.' },
  { q: 'What is the cost of a whole-home water filtration system?', a: 'It varies with the system type and your home’s water, so we test your water and quote a flat rate before installation. Financing is available for larger systems.' },
  { q: 'What are the different types of water filtration systems?', a: 'Common options include sediment filters, carbon filters (for taste and chlorine), reverse-osmosis systems for drinking water, and water softeners or conditioners for hardness. Many homes use a combination, which we tailor to your test results.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Quality & Filtration',
  description: 'Whole-house water filtration, water softeners, and water testing.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Plumbing', item: `${site.url}/services/plumbing` },
    { '@type': 'ListItem', position: 4, name: 'Water Quality', item: `${site.url}/services/water-quality` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WaterQualityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Water Quality Services in ${site.serviceArea}`}
        description="Bad taste, hard-water buildup, or staining? We test your water and install whole-house filtration and softeners for cleaner water at every tap."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Quality' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Water quality concerns in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/wq-hero.jpg)' }}
            role="img"
            aria-label="Clean, clear glass of drinking water"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Why Your Home’s Water Quality Matters
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Clean tap water plays a huge role in keeping your family safe and healthy. Hard minerals,
            chemicals, and contaminants can sneak into your pipes over time, so paying attention to
            the water coming out of your tap makes a real difference. Key benefits of better water
            quality:
          </p>
          <ul className="mt-4 space-y-2.5">
            {benefits.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Signs of poor water quality (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/wq-signs.jpg)' }}
            role="img"
            aria-label="Water running from a kitchen faucet"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Have Poor Water Quality
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Poor water quality can affect your health, your plumbing, and the performance of your
              appliances. Some issues are easy to notice; others need closer attention. Common signs:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              If you notice any of these, water testing and treatment options can help improve your
              water quality and protect your home.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Water filtration system installation (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Water Filtration System Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Installing a whole-house water filtration system is one of the smartest upgrades a
              homeowner can make, and we have helped many families take the leap. These systems do not
              just filter water at the kitchen tap — they treat every drop flowing into your home:
              showers, sinks, washing machines, you name it. We handle whole-house filtration
              installation with precision, using trusted brands and proven methods.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We also install water softeners to tackle hard minerals like calcium and magnesium. Soft
              water preserves your pipes, improves soap lather, and keeps skin feeling better — a
              properly installed filtration or softening system brings clarity to every faucet.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Discover how {site.name} improves home water quality through expert water treatment
              designed for lasting results.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Technician discussing water filtration options with a homeowner"
          />
        </div>
      </section>

      {/* Conditioning + purification + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Water Conditioning Services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If your water leaves your skin dry, soap will not lather well, or your appliances seem to
            struggle, you are probably dealing with hard water. That is where water conditioning comes
            in — these systems break down the minerals that cause buildup and mess with your water’s
            feel and function.
          </p>

          <h2 className="mt-12 section-title text-brand-700">
            The Importance of Professional Water Purification
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            DIY filters look tempting, but professional-grade systems deliver lasting performance.
            Filling a pitcher is not the same as intercepting contaminants at the cold-water main
            before they reach every tap in the house.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our experts help you choose a whole-house filtration system that matches your needs,
            install the treatment system correctly, and monitor performance over time — complete peace
            of mind, not a one-off purchase with unknown results.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Water Quality</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Water conditioning plays an important role in improving water quality, protecting your
            plumbing, and extending the life of household appliances. {site.name} provides
            professional water conditioning and filtration designed to address hard water, mineral
            buildup, and other common water-quality concerns.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced technicians, customized system recommendations, and careful installation,
            we help homeowners achieve cleaner, better-tasting water. Clear communication and
            dependable service make sure your system is set up for long-term performance and reliable
            results.
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
          <h2 className="mt-12 section-title text-brand-700">Water Quality FAQs</h2>
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
              Schedule Your Water Quality Service Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Cleaner water from every tap makes drinking safer, showers nicer, and appliances
              longer-lasting. Ready for a home water filtration system? Call now or request a free
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
