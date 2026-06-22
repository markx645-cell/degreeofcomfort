import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Switches & Outlets',
  description: `Switch and outlet installation across ${site.serviceArea} from ${site.name} — outlet replacement, GFCI and USB upgrades, and switch repair by licensed electricians.`,
  alternates: { canonical: '/services/switches-outlets' },
};

const problems = [
  { lead: 'Broken Outlets', text: 'These often result from wear and tear or accidental damage. We replace damaged outlets with durable, high-quality options.' },
  { lead: 'Light Switch Failures', text: 'Loose or unresponsive switches are frustrating. We handle the light switch wiring to get everything back in working order.' },
  { lead: 'Outdated Electrical Components', text: 'Older outlets might not meet current electrical codes. We install modern options like USB and GFCI outlets for safety and convenience.' },
  { lead: 'Overloaded Circuits', text: 'Plugging too many devices into a single outlet increases the risk of electrical fires. Adding outlets resolves this and keeps your home safe.' },
  { lead: 'Potential Safety Hazards', text: 'Poor wiring or worn components can lead to electrical shock. We offer professional inspections and repairs to eliminate these risks.' },
];

const whatsInvolved = [
  {
    title: 'Assessing Your Needs',
    paras: [
      'Every outlet replacement starts with an in-depth assessment. We take a close look at your current outlets, checking for damage, wear, or outdated components that no longer meet safety standards. Many homes need upgrades like GFCI outlets or additional outlets to handle today’s electronic devices.',
      'Once we understand the condition of your outlets, we talk through your family’s needs. Whether you’re dealing with overloaded circuits, flickering lights, or simply need more outlets for convenience, we recommend the best solutions and build a plan tailored to your home.',
    ],
  },
  {
    title: 'Preparing for the Installation',
    paras: [
      'Before we replace anything, we make sure everything is ready for a seamless installation. That includes testing your electrical panel to confirm it can handle new installations and checking the wiring throughout your home. Proper preparation prevents hazards like shocks or short circuits.',
      'We also flag upgrades that support long-term safety and efficiency — for example, improvements to indoor lighting systems and light switch wiring — so every part of your electrical system stays reliable.',
    ],
  },
  {
    title: 'Installing the New Outlets',
    paras: [
      'With a clear plan in place, our team installs the new outlets. We work carefully to make sure each one is properly wired, secured, and meets all local electrical codes, replacing old components with outlets that fit your home’s needs.',
      'Our technicians work efficiently without cutting corners, minimizing disruption to your daily life while delivering lasting results that improve the safety and usability of your electrical system.',
    ],
  },
  {
    title: 'System Upgrades & Enhancements',
    paras: [
      'When needed, we recommend upgrades that improve your home’s electrical setup. An electrical panel replacement can provide the power capacity a modern home requires.',
      'Home rewiring may also be suggested during an outlet replacement, especially for older properties. Outdated wiring struggles with today’s electronics and appliances and raises the risk of electrical fires — we update it to meet current safety standards.',
    ],
  },
  {
    title: 'Testing & Final Touches',
    paras: [
      'After the electrical work is complete, we thoroughly test each outlet to confirm it’s working as intended — checking for proper grounding, power flow, and stability under load. Testing guarantees your outlets are safe for daily use.',
      'Once everything is double-checked, we clean up the workspace and leave your home exactly as we found it, only better equipped to handle your electrical needs. Our satisfaction guarantee means the job is done right the first time.',
    ],
  },
];

const whyChoose = [
  'Licensed electricians with installation experience',
  'Modern GFCI and USB outlet options',
  'Safe and code-compliant electrical work',
  'High-quality switches and outlets',
  'Reliable scheduling and clear pricing',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Trained pros who wire every device safely and to code.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Proper grounding and stable connections, tested before we leave.' },
  { icon: 'badge' as const, title: 'Modern Upgrades', text: 'USB and GFCI outlets for added convenience and safety.' },
  { icon: 'house' as const, title: 'Tidy Installs', text: 'Minimal disruption and a clean workspace when we finish.' },
];

const faqs = [
  { q: 'What is involved in a switch installation?', a: 'Switch installation includes evaluating home wiring, confirming code compliance, and connecting the switch to the appropriate circuit for reliable operation.' },
  { q: 'What are the benefits of GFCI outlets?', a: 'GFCI outlets reduce the risk of electrical shock by shutting off power when moisture is detected, making them essential in kitchens and bathrooms.' },
  { q: 'How can I tell if my light switches are faulty?', a: 'Signs include flickering lights, unusual sounds, or no response when toggled. We can diagnose and repair the issue.' },
  { q: 'How do I know if I need outlet installation services?', a: 'Consider installation if your home lacks sufficient outlets or you experience issues like tripped breakers and over-reliance on extension cords.' },
  { q: 'Why is outlet installation important?', a: 'Proper installation ensures safe, efficient power distribution while protecting your home and devices from electrical issues.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Switch & Outlet Installation',
  description: 'Switch and outlet installation, replacement, and repair, including GFCI and USB outlet upgrades.',
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
    { '@type': 'ListItem', position: 4, name: 'Switches & Outlets', item: `${site.url}/services/switches-outlets` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function SwitchesOutletsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Switches & Outlets in ${site.serviceArea}`}
        description="Outlet replacement, GFCI and USB upgrades, and switch repair by licensed electricians — safe, code-compliant power right where you need it."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Switches & Outlets' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need outlets or switches fixed or added?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/outlets-hero.jpg)' }} role="img" aria-label="Electrician installing a wall outlet" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Switch & Outlet Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Outlets and switches are the parts of your electrical system you touch every day. They don’t
            get much attention until they stop working — and even minor issues can cause big headaches or
            pose safety risks.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides expert switch and outlet installation across {site.serviceArea}. Our
            goal is simple: keep your home safe and functional with reliable installations. Whether it’s a
            small upgrade or a major overhaul, we bring care and attention to every project.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            From replacing broken outlets and repairing faulty switches to adding modern GFCI and USB
            outlets, our licensed electricians wire everything safely and to code.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/outlets-signs.jpg)' }} role="img" aria-label="Light switch on a wall" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Common Problems With Outlets & Switches
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Outlets and switches don’t get much attention until they stop working. Here are the issues
              homeowners run into most — and how we help:
            </p>
            <ul className="mt-4 space-y-2">
              {problems.map((p) => (
                <li key={p.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{p.lead}:</span> {p.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Switch &amp; Outlet Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Reliable Outlet & Switch Installation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Your home’s electrical system needs to be safe and dependable. Our outlet installation is
              designed to enhance convenience and safety, with every detail handled so your outlets meet
              modern electrical codes and your family’s needs.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Switches may seem simple, but they play a big role in how your home functions. Whether you’re
              upgrading old switches or installing new ones, our team focuses on precision and care —
              connecting each switch to the correct circuit for dependable, everyday operation.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }} role="img" aria-label="Electrician reviewing outlet work with a homeowner" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What’s Involved in Electrical Outlet Replacement</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Replacing outlets involves more than swapping out old components. We follow a thorough process
            to make sure your outlets are safe, functional, and suited to your family’s needs.
          </p>
          {whatsInvolved.map((step) => (
            <div key={step.title} className="mt-8">
              <h3 className="font-display text-xl font-extrabold text-brand-700">{step.title}</h3>
              {step.paras.map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-ink/75">
                  {para}
                </p>
              ))}
            </div>
          ))}
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            For larger projects, a{' '}
            <Link href="/services/electrical-panel-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              panel replacement
            </Link>{' '}
            or{' '}
            <Link href="/services/home-rewiring" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              home rewiring
            </Link>{' '}
            may be recommended to support modern power demands.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Switches & Outlets</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable electrical work. When you
            work with our team, you receive:
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

          <h2 className="mt-12 section-title text-brand-700">Switch & Outlet FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Switch & Outlet Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Need outlets added or switches repaired? {site.name} serves {site.serviceArea}. Call now or
              request a free estimate.
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
