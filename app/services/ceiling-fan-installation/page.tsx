import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Ceiling Fan Installation',
  description: `Ceiling fan installation and replacement across ${site.serviceArea} from ${site.name} — fan-rated mounting, safe wiring, and balanced, quiet operation by licensed electricians.`,
  alternates: { canonical: '/services/ceiling-fan-installation' },
};

const signs = [
  'Wobbling or shaking during operation',
  'Grinding, clicking, or humming noises',
  'Inconsistent speed control',
  'Flickering or dimming lights',
  'Poor airflow even at high speed',
  'An outdated style that no longer fits your space',
];

const process = [
  { lead: 'Electrical Box Inspection', text: 'We confirm your ceiling box is rated for a fan — standard lighting boxes are often not designed to support the weight or motion.' },
  { lead: 'Secure Mounting', text: 'We anchor the fan properly to prevent wobbling or vibration.' },
  { lead: 'Wiring & Connections', text: 'Our electricians complete all wiring safely and ensure compatibility with your wall switches and controls.' },
  { lead: 'Testing & Balancing', text: 'We test the fan at all speeds and adjust blade balance for smooth, quiet operation.' },
];

const diyBenefits = [
  'Secure mounting to a fan-rated electrical box',
  'Safe and code-compliant wiring',
  'Proper blade balancing',
  'Reliable speed and lighting controls',
  'Long-term stability',
];

const choosing = [
  { lead: 'Room size', text: 'larger rooms require wider blade spans for proper circulation.' },
  { lead: 'Ceiling height', text: 'vaulted ceilings may require an extension (down) rod.' },
  { lead: 'Outdoor rating', text: 'exterior spaces need weather-rated models.' },
  { lead: 'Lighting features', text: 'integrated lighting can reduce the need for additional fixtures.' },
  { lead: 'Airflow rating', text: 'a higher airflow rating improves circulation.' },
];

const winter = [
  'Reversing the fan direction helps circulate warm air',
  'Improved airflow reduces strain on your HVAC system',
  'Even air distribution enhances overall comfort',
];

const whyChoose = [
  'Licensed electricians with years of experience',
  'Safe, code-compliant installation',
  'Support with lighting fixture installation and recessed lighting',
  'Clear communication and upfront pricing',
  'A commitment to doing a great job every time',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Fan-Rated Mounting', text: 'We anchor to a fan-rated box so your fan stays secure and wobble-free.' },
  { icon: 'check' as const, title: 'Licensed Electricians', text: 'Safe, code-compliant wiring and controls every time.' },
  { icon: 'badge' as const, title: 'Balanced & Quiet', text: 'We balance the blades and test every speed for smooth, quiet operation.' },
  { icon: 'badge' as const, title: 'Upfront Pricing', text: 'Clear quotes you approve before any work begins.' },
];

const faqs = [
  { q: 'Do you offer financing for ceiling fan installation?', a: 'Yes — we offer financing for qualifying homeowners, which is handy when you are combining a fan with other electrical work like lighting or a switch upgrade.' },
  { q: 'Is ceiling fan installation safe on vaulted or high ceilings?', a: 'Yes. We use proper extension (down) rods and fan-rated anchoring suited to the height and the fan’s weight, and we bring the right equipment to install safely on vaulted and high ceilings.' },
  { q: 'How do I choose the right ceiling fan size for my room?', a: 'Match the blade span to the room: larger rooms need wider blades, and ceiling height affects whether you need a down rod or a flush mount. We help you pick the right size and style for the space.' },
  { q: 'What should I do if my ceiling fan starts making noise?', a: 'Noise usually means loose mounting, unbalanced blades, or a worn motor. We can rebalance the blades, resecure the mount, or replace the fan if the motor is failing.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Ceiling Fan Installation',
  description: 'Ceiling fan installation and replacement with fan-rated mounting and safe wiring.',
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
    { '@type': 'ListItem', position: 4, name: 'Ceiling Fan Installation', item: `${site.url}/services/ceiling-fan-installation` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function CeilingFanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Ceiling Fan Installation in ${site.serviceArea}`}
        description="Better airflow and a refreshed room — ceiling fans installed and replaced with fan-rated mounting, safe wiring, and balanced, quiet operation."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Ceiling Fan Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Want a ceiling fan installed in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/ceilingfan-hero.jpg)' }}
            role="img"
            aria-label="Ceiling fan in a living room"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Ceiling Fan Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A professionally installed ceiling fan improves comfort, airflow, and energy efficiency
            throughout your home. Whether you are upgrading an outdated fixture or adding a new fan in
            a bedroom, living room, or outdoor space, proper installation ensures safe wiring and
            secure support.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides trusted ceiling fan installation across {site.serviceArea}. Our
            licensed electricians handle everything from ceiling fan replacement to lighting fixture
            installation and wiring upgrades, completing every project with attention to detail.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Hanging a fan for the first time or replacing an older unit, our ceiling fan installation
            service makes the process simple and stress-free.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a new ceiling fan (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ceiling-fan-installation.jpg)' }}
            role="img"
            aria-label="Ceiling fan"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need a New Ceiling Fan
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Ceiling fans are built for durability, but over time wear and electrical issues can
              affect performance and safety. You may need a ceiling fan replacement if you notice:
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
              A new installation can improve airflow, refresh the appearance of a room, and enhance
              overall comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Ceiling Fan Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Ceiling fan installation requires more than mounting a fixture — the electrical box must
              support movement and weight, and wiring must be connected properly. Our process includes:
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
              Whether you need a new installation or a ceiling fan replacement, we focus on safety and
              long-term performance.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing a ceiling fan installation with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">DIY or Professional Installers?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Some homeowners consider hanging a ceiling fan themselves. It may seem straightforward, but
            installation involves electrical wiring and structural support — mistakes can lead to
            wobbling, noise, or safety hazards. Working with professional installers ensures:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {diyBenefits.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We also assist with{' '}
            <Link href="/services/recessed-lighting" className="font-semibold text-pink-600 underline hover:text-pink-700">
              recessed lighting
            </Link>{' '}
            and{' '}
            <Link href="/services/lighting-fixture-installation" className="font-semibold text-pink-600 underline hover:text-pink-700">
              lighting fixture installation
            </Link>{' '}
            so your space looks cohesive and functions properly.
          </p>

          {/* Choosing */}
          <h2 className="mt-12 section-title text-brand-700">Choosing the Right Ceiling Fan</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Selecting the right fan involves more than design — proper sizing and placement directly
            affect performance. Consider:
          </p>
          <ul className="mt-4 space-y-2.5">
            {choosing.map((c) => (
              <li key={c.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <span className="font-semibold text-brand-800">{c.lead}:</span> {c.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Winter */}
          <h2 className="mt-12 section-title text-brand-700">Ceiling Fans in the Winter Months</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Ceiling fans are useful in every season, not just summer. During colder months:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {winter.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Proper installation ensures the fan operates safely in both heating and cooling seasons.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Ceiling Fan Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} choose {site.name} for reliable electrical services and
            friendly service. When you work with us, you can expect:
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
          <h2 className="mt-12 section-title text-brand-700">Ceiling Fan Installation FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule a Ceiling Fan Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to upgrade your space or replace an outdated unit? Enjoy improved airflow and
              comfort. Call now or request a free estimate.
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
