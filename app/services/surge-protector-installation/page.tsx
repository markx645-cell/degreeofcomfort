import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Whole-Home Surge Protector Installation',
  description: `Whole-home surge protector installation across ${site.serviceArea} from ${site.name} — panel-level protection for appliances, HVAC, and electronics. Licensed electricians, financing available.`,
  alternates: { canonical: '/services/surge-protector-installation' },
};

const signs = [
  'Flickering or dimming lights',
  'Electronics that stop working unexpectedly',
  'Breakers tripping without a clear cause',
  'Recently installed HVAC systems or air conditioners',
  'Multiple smart home devices throughout the house',
  'Storm-related electrical concerns',
];

const process = [
  { lead: 'Electrical Panel Inspection', text: 'We evaluate your panel to confirm compatibility and determine proper placement of the surge protection device.' },
  { lead: 'System Review', text: 'We assess the major appliances, HVAC systems, and electronics that could be affected by excess voltage.' },
  { lead: 'Professional Installation', text: 'Our electricians complete the surge protection installation to local code and manufacturer guidelines.' },
  { lead: 'Testing & Verification', text: 'We test the system to ensure the surge protector is functioning properly and securely connected.' },
];

const benefits = [
  'Protecting appliances and electronics from electrical surges',
  'Shielding HVAC systems and air conditioners from excess voltage',
  'Reducing the risk of fire related to power spikes',
  'Extending the lifespan of connected equipment',
  'Supporting smart home systems and advanced electronics',
  'Providing peace of mind during lightning storms',
];

const whyChoose = [
  'Licensed electricians experienced with surge protectors',
  'Code-compliant installation at your electrical panel',
  'Clear pricing and honest recommendations',
  `Reliable service throughout ${site.serviceArea}`,
  'Professional surge protection tailored to your home',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Whole-Panel Protection', text: 'Protection installed at the source, guarding everything connected to your wiring.' },
  { icon: 'check' as const, title: 'Licensed Electricians', text: 'Experienced with surge protection devices and your panel.' },
  { icon: 'badge' as const, title: 'Code-Compliant Install', text: 'Installed to local code and the manufacturer’s guidelines.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible options for qualifying homeowners.' },
];

const faqs = [
  { q: 'What is a whole-home surge protector?', a: 'It is a device installed at your electrical panel that diverts excess voltage safely into the ground before it reaches your circuits, appliances, and connected equipment.' },
  { q: 'Will a whole-home surge protector cover all my electronics?', a: 'It protects everything connected to your home’s wiring at the panel level. Pairing it with point-of-use protectors on your most sensitive devices adds a helpful second layer of defense.' },
  { q: 'Do I still need power strips with surge protection?', a: 'Whole-home protection handles the large surges at the source, while plug-in power strips add point-of-use protection for sensitive electronics. The two work well together.' },
  { q: 'Will surge protection increase the value of my home?', a: 'It can be an attractive feature for buyers and it protects valuable systems, but its main benefit is preventing the costly damage a surge can cause.' },
  { q: 'Can I install a surge protector myself?', a: 'No. A whole-home surge protector wires directly into your electrical panel and should be installed by a licensed electrician for safety and to meet code.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Whole-Home Surge Protector Installation',
  description: 'Panel-level whole-home surge protection installation.',
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
    { '@type': 'ListItem', position: 4, name: 'Whole-Home Surge Protector Installation', item: `${site.url}/services/surge-protector-installation` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SurgeProtectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Whole-Home Surge Protector Installation in ${site.serviceArea}`}
        description="Panel-level protection that stops electrical surges before they reach your appliances, HVAC, and electronics — installed by licensed electricians."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Surge Protector Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Protect your home from power surges in {site.serviceArea}
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
            style={{ backgroundImage: 'url(/services/surge-hero.jpg)' }}
            role="img"
            aria-label="Electrical panel with surge protection"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Whole-Home Surge Protector Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Power surges can happen at any time. Lightning strikes, grid fluctuations, and large
            appliances cycling on and off can send excess voltage through your home’s electrical
            system — and that sudden spike can damage electronics, HVAC systems, air conditioners, and
            smart home devices in seconds.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional whole-home surge protector installation for homeowners
            across {site.serviceArea}. A surge protector installed at your electrical panel diverts
            surges safely into the ground before they reach your appliances and connected equipment —
            our licensed electricians install it to protect your home and deliver lasting peace of
            mind.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need surge protection (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/surge-protector-installation.jpg)' }}
            role="img"
            aria-label="Electrical panel"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Whole-House Surge Protection
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many electrical surges are small and frequent, not just dramatic lightning strikes. Over
              time, repeated surges can weaken or destroy sensitive electronics and major systems. You
              may benefit from whole-home surge protection if you notice:
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
              If your home depends on modern electronics and connected systems, comprehensive
              protection at the electrical panel is one of the most effective ways to prevent damage.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Surge Protector Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A whole-house surge protector connects directly to your electrical panel — it is not a
              plug-in solution, and it must be installed correctly to protect your entire system:
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
              Professional surge protection provides centralized defense against electrical surges
              before they spread through your home.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing surge protection with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Benefits of Surge Protection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Whole-home surge protectors provide comprehensive protection for your home’s electrical
            system. Benefits include:
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
            Surge protection is especially important in homes with multiple electronics and sensitive
            equipment — installing a whole-home surge protector helps prevent damage before it occurs.
          </p>

          {/* Defend */}
          <h2 className="mt-12 section-title text-brand-700">Defend Your Home Against Power Surges</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Your electrical panel distributes power throughout your home. When a surge protection
            device is installed at this central point, it intercepts excess voltage before it reaches
            your branch circuits.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Instead of relying only on outlet surge protectors, whole-home surge protection works at
            the source — protecting everything connected to your system, from kitchen appliances to
            air conditioners. For dependable protection against lightning and everyday voltage
            fluctuations, professional surge protection is a smart investment.
          </p>

          {/* Financing */}
          <h2 className="mt-12 section-title text-brand-700">Financing a Whole-Home Surge Protector</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            The cost depends on your electrical panel configuration and installation requirements.
            {' '}{site.name} offers financing for qualifying homeowners to make installation more
            manageable. Do not wait until a surge causes costly damage — our team can review your
            options and help you move forward with confidence.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Surge Protection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} choose {site.name} because we prioritize safe
            electrical work and long-term reliability. When you work with us, you receive:
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
          <h2 className="mt-12 section-title text-brand-700">Surge Protection FAQs</h2>
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
              Schedule Whole-Home Surge Protection Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Protect your home from electrical surges and excess voltage before they cause costly
              damage. Call now or request a free estimate.
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
