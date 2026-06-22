import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Electrical Panel Replacement',
  description: `Electrical panel replacement and repair across ${site.serviceArea} from ${site.name} — breaker panel upgrades and fuse-box replacements by licensed electricians, with minimal disruption.`,
  alternates: { canonical: '/services/electrical-panel-replacement' },
};

const signs = [
  { lead: 'Frequent Circuit Breaker Trips', text: 'If your breakers are constantly tripping, it could be a sign that your panel is struggling to keep up with your home’s power needs.' },
  { lead: 'Flickering or Dimming Lights', text: 'This can indicate poor distribution of electricity or overloaded circuits.' },
  { lead: 'Burning Smells', text: 'If you catch a whiff of something burning near your panel, this could mean there is a serious issue with overheating wires.' },
  { lead: 'Outdated Fuse Boxes', text: 'If your home still uses fuses instead of circuit breakers, it is time for a new electrical panel.' },
  { lead: 'Appliances Not Running at Full Power', text: 'If larger appliances like your fridge or HVAC system are not getting enough power, your panel might be the culprit.' },
];

const related = [
  { lead: 'Home Rewiring', href: '/services/home-rewiring', text: 'If your home’s wiring is outdated or damaged, we replace it to improve safety and reliability.' },
  { lead: 'Surge Protector Installation', href: '/services/surge-protector-installation', text: 'Protect your electronics and appliances from power surges with professional surge protection.' },
  { lead: 'Electrical Inspection', href: '/services/electrical-inspections', text: 'We confirm that your electrical system is up to code and functioning properly.' },
];

const whyChoose = [
  'Licensed and experienced electricians',
  'Breaker panel upgrades with minimal disruption',
  'Correct amperage sizing for your home',
  'Clear, upfront pricing',
  'A satisfaction guarantee on every job',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'High-voltage panel work handled safely by trained pros.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Permitted installs that pass final inspection.' },
  { icon: 'badge' as const, title: 'Right-Sized Amperage', text: 'A panel sized for your home’s real electrical demand.' },
  { icon: 'house' as const, title: 'Minimal Disruption', text: 'A smooth process that respects your home and time.' },
];

const faqs = [
  { q: 'What are the common signs that my electrical panel needs to be replaced?', a: 'Look for frequent breaker trips, flickering or dimming lights, buzzing sounds, burning smells, scorch marks, warm or hot panel surfaces, and an inability to support new high-demand appliances.' },
  { q: 'How long does an electrical panel typically last?', a: 'Most panels last 25–40 years, depending on use and environmental conditions. A panel near or past that range should be evaluated by a licensed electrician, especially if other warning signs are present.' },
  { q: 'Can I replace the electrical panel myself?', a: 'No. Panel replacement involves high-voltage work and must comply with safety codes. It should only be done by a licensed electrician to avoid electrical hazards, code violations, and insurance issues.' },
  { q: 'How much does panel replacement cost?', a: 'Costs vary depending on panel size, amperage, permits, and any required upgrades to the wiring or meter. We provide a clear, upfront quote after assessing your system.' },
  { q: 'Will a new electrical panel help with insurance or resale value?', a: 'Yes. Many insurers require updated panels to maintain coverage, and a modern panel can be a selling point for buyers — especially when it replaces an outdated or unsafe one.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electrical Panel Replacement',
  description: 'Electrical panel replacement, repair, and upgrades, including fuse-box replacement and amperage upgrades.',
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
    { '@type': 'ListItem', position: 4, name: 'Electrical Panel Replacement', item: `${site.url}/services/electrical-panel-replacement` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ElectricalPanelReplacementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Electrical Panel Replacement in ${site.serviceArea}`}
        description="Breaker panel upgrades and fuse-box replacements by licensed electricians — sized for modern demand and completed with minimal disruption to your home."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Electrical Panel Replacement' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Outgrowing your old electrical panel?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/panel-hero.jpg)' }}
            role="img"
            aria-label="Modern electrical panel with breakers"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Electrical Panel Replacement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Your electrical panel is the heart of your home’s electrical system. It distributes power to
            every circuit and protects your home when something goes wrong. When a panel is outdated or
            undersized, it can no longer keep up.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            If you’ve noticed electrical issues in your home, it might be time to think about replacing
            your panel. {site.name} delivers expert solutions with a friendly, family-focused approach for
            homeowners across {site.serviceArea}.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Ignoring a struggling panel can create unsafe conditions or lead to costlier repairs. A proper
            upgrade keeps your system safe, efficient, and ready for the demands of today’s technology.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/panel-signs.jpg)' }} role="img" aria-label="Open electrical breaker panel" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs Your Electrical Panel Needs Replacing
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Your electrical panel isn’t something to ignore when it starts showing wear and tear. Here
              are some clear indicators it’s time to think about an upgrade:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              If you’re seeing any of these signs, don’t wait for things to get worse. Replacing your
              panel sooner rather than later can save you from bigger headaches down the road.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Electrical Panel Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Benefits of an Electrical Panel Upgrade
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              An upgrade comes with real advantages. If your home still relies on an outdated panel or an
              old fuse box, switching to a new electrical panel improves both safety and performance.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              First, an upgrade makes sure your home can safely handle the increased electrical load of
              modern appliances. Many older homes weren’t built to support today’s energy needs. Upgrading
              lets you add new appliances and devices without worrying about tripping breakers or
              overloading circuits.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Second, a new panel can increase the value of your home and is a selling point for buyers.
              When your electrical system is safer, you’ll also experience fewer problems down the line —
              saving you time and money on repairs.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }} role="img" aria-label="Electrician reviewing a panel upgrade plan" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Electrical Panel Replacement in {site.serviceArea}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Living in {site.serviceArea} means you’ve got access to expert electrical services right in
            your area. Whether you need a panel replacement or an upgrade, {site.name} is ready to help.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We specialize in helping homeowners upgrade their breaker panels with minimal disruption to
            daily life. Our technicians are skilled, friendly, and focused on making the process as smooth
            as possible for you and your family.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Electrical Panel Repair</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If a full replacement isn’t necessary, panel repair may be the right option. Often, smaller
            issues can be resolved without replacing the entire panel — replacing individual breakers,
            fixing wiring, or addressing a specific fault might be enough to restore your system.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            When your power is out or your breakers keep tripping, you want things fixed fast. We inspect
            your system, diagnose the problem, and clearly explain your options. If a repair can solve the
            issue, we take care of it quickly so you can get back to your routine.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Unmatched Expertise for Every Need</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We don’t just handle panel installations. We offer a full range of electrical services to meet
            your home’s needs, including:
          </p>
          <ul className="mt-4 space-y-2">
            {related.map((r) => (
              <li key={r.href} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <Link href={r.href} className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
                    {r.lead}
                  </Link>
                  : {r.text}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 section-title text-brand-700">Upgrade Your Electrical Panel Today</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Scheduling a panel upgrade across {site.serviceArea} has never been easier. An upgraded panel
            gives you peace of mind that your electrical system is safe, efficient, and ready for today’s
            technology.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We guide you through the entire process — from the initial consultation to the final
            installation — making sure everything runs smoothly.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Panel Replacement</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We’ve built our reputation on high-quality service and treating every customer like family.
            Homeowners across {site.serviceArea} rely on us because we provide:
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

          <h2 className="mt-12 section-title text-brand-700">Electrical Panel Replacement FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Panel Replacement Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Worried about an aging panel? {site.name} replaces and repairs electrical panels across{' '}
              {site.serviceArea}. Call now or request a free estimate.
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
