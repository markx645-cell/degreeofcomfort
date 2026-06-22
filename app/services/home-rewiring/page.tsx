import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Home Rewiring',
  description: `Professional home rewiring across ${site.serviceArea} from ${site.name} — partial and whole-home electrical rewiring by licensed electricians, code-compliant and built for modern demand.`,
  alternates: { canonical: '/services/home-rewiring' },
};

const benefits = [
  'Reduce fire risk from faulty wiring',
  'Improve system stability',
  'Support modern HVAC systems and appliances',
  'Replace aging aluminum wire',
  'Meet current code standards',
  'Increase resale value',
];

const signs = [
  'Flickering lights',
  'Frequent breaker trips',
  'Burning smells',
  'Warm outlets or switches',
  'Two-prong outlets',
  'Aluminum wire',
  'Old fuse panels',
];

const process = [
  { lead: 'System Review', text: 'We check your electrical system and identify weak spots.' },
  { lead: 'Clear Plan', text: 'We explain the scope and timeline.' },
  { lead: 'Safe Installation', text: 'We replace outdated wiring with modern materials.' },
  { lead: 'Panel Updates', text: 'If needed, we update breakers and balance circuits.' },
  { lead: 'Testing', text: 'We test the full system before completion.' },
];

const proRisks = [
  'Fire hazards',
  'Electrical shocks',
  'Failed inspections',
  'Insurance issues',
];

const projectTypes = [
  'Complete whole-home electrical rewiring',
  'Partial room updates',
  'Circuit upgrades',
  'Aluminum wire replacement',
  'Panel upgrades',
];

const safetyPoints = [
  'Removing damaged wiring',
  'Increasing circuit capacity',
  'Preventing overheating',
  'Meeting modern code standards',
];

const olderHomes = ['Capacity', 'Efficiency', 'Safety', 'Overall performance'];

const whyChoose = [
  'Licensed electricians',
  'Clear estimates for electrical rewiring cost',
  'Code-compliant installation',
  'Professional service',
  'Reliable scheduling',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Trained pros who understand grounding and load balance.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Every rewire is installed to meet current safety code.' },
  { icon: 'badge' as const, title: 'Clear Estimates', text: 'Upfront pricing on your rewiring cost before work begins.' },
  { icon: 'clock' as const, title: 'Reliable Scheduling', text: 'Dependable timelines and tidy, professional service.' },
];

const faqs = [
  { q: 'What is involved in electrical rewiring?', a: 'Rewiring replaces outdated electrical wiring and updates circuits to meet code. Projects may involve partial home rewiring or full whole-home rewiring, depending on your home’s condition.' },
  { q: 'Is it safe to live in a home while it’s being rewired?', a: 'In many cases, yes. We plan each project carefully and explain any temporary power interruptions ahead of time so you know what to expect.' },
  { q: `What's the cost of electrical rewiring in ${site.serviceArea}?`, a: `Electrical rewiring cost depends on your home’s size and the scope of the work. We provide a detailed estimate after evaluating your system, so homeowners across ${site.serviceArea} know the price before we begin.` },
  { q: 'Can outdated wiring cause electrical shocks?', a: 'Yes. Damaged or poorly grounded wiring increases the risk of both shock and fire, which is one of the main reasons to replace it.' },
  { q: 'Can I just rewire one part of my home?', a: 'Yes. Partial rewiring may be possible if the rest of the system is in good condition. We tailor each project to what your home actually needs.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Home Rewiring',
  description: 'Partial and whole-home electrical rewiring services for residential properties.',
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
    { '@type': 'ListItem', position: 4, name: 'Home Rewiring', item: `${site.url}/services/home-rewiring` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function HomeRewiringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Home Rewiring in ${site.serviceArea}`}
        description="Partial and whole-home rewiring by licensed electricians — replacing old, unsafe wiring with modern materials built to meet code and handle today’s demand."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Home Rewiring' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Worried about old wiring in your home?
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
            style={{ backgroundImage: 'url(/services/rewiring-hero.jpg)' }}
            role="img"
            aria-label="Licensed electrician rewiring a home"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Home Rewiring
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Old wiring can put your home at risk. Insulation breaks down over time. Connections loosen.
            Circuits struggle to handle modern demand.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            You may see flickering lights. Breakers may trip often. Outlets can feel warm. These are
            early warning signs.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides expert electrical rewiring and other electrical services across{' '}
            {site.serviceArea}. Whether you need partial home rewiring or full whole-home rewiring, our
            licensed electricians make sure your system is safe and up to code. Upgrading wiring
            improves safety — it also improves performance and reliability.
          </p>

          <h3 className="mt-8 font-display text-2xl font-black uppercase leading-tight text-brand-600">
            Benefits of Home Rewiring Services
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Replacing old wiring strengthens your entire home electrical system. It prepares your home
            for future upgrades. Rewiring can:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whole-home electrical rewiring ensures your home can handle smart devices, new lighting, and
            larger appliances without strain.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need rewiring (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/rewiring-signs.jpg)' }}
            role="img"
            aria-label="Aging electrical wiring and panel"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Electrical Rewiring
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many older homes still rely on original wiring. Over time, materials wear out. Circuits
              become overloaded. Electrical problems become more common. You may need rewiring services
              if you notice:
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
              Aluminum wire expands more than copper. That movement can create loose connections and
              heat buildup. If your home is more than 30 years old, a system review is a smart next step.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our rewiring process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Electrical Rewiring Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Rewiring requires planning and careful work. Our process includes:
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
              Our focus is simple. Improve safety. Improve reliability.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing a rewiring plan with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Why Rewiring Should Be Done by a Professional</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Home rewiring is not a small repair. It involves live wiring and strict safety rules.
            Improper work can cause:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {proRisks.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional residential electrical rewiring ensures the job meets code. Licensed
            electricians understand grounding and load balance.
          </p>

          {/* Project types */}
          <h2 className="mt-12 section-title text-brand-700">Types of Electrical Rewiring Projects</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Not every home needs full whole-home rewiring. Common projects include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {projectTypes.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            We tailor each project to your home’s condition.
          </p>

          {/* Safety */}
          <h2 className="mt-12 section-title text-brand-700">Electrical Rewiring and Home Safety</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Faulty wiring is a leading cause of house fires. Overloaded circuits and worn insulation
            increase risk. Rewiring improves safety by:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {safetyPoints.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            A modern system protects your home and family.
          </p>

          {/* Older homes */}
          <h2 className="mt-12 section-title text-brand-700">Rewiring Older Homes</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Many homes in {site.serviceArea} still contain outdated wiring. Knob-and-tube systems and
            aluminum wire were common years ago. Today, these systems often cannot support modern
            demand. Whole-home rewiring improves:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {olderHomes.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Updating older wiring strengthens your home from the inside out.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Electrical Rewiring</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable rewiring services.
            When you work with us, you receive:
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
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            We focus on safe results and long-term performance.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Home Rewiring FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Electrical Rewiring Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              If you suspect faulty wiring, do not wait. {site.name} provides professional electrical
              rewiring across {site.serviceArea}. Call now or request a free estimate.
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
