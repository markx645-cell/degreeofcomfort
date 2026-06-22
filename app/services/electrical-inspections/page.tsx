import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Electrical Inspections',
  description: `Professional electrical inspections across ${site.serviceArea} from ${site.name} — panel, wiring, grounding, and safety-device checks with a detailed report. Licensed electricians.`,
  alternates: { canonical: '/services/electrical-inspections' },
};

const signs = [
  'Lights that flicker or dim',
  'Breakers that trip often',
  'Burning smells near outlets or switches',
  'Warm or discolored wall plates',
  'Buzzing sounds from the electrical panel',
  'Recent renovations or major upgrades',
];

const process = [
  { lead: 'Electrical Panel Inspection', text: 'We examine breaker condition, grounding, labeling, and signs of overheating.' },
  { lead: 'Wiring & Circuit Review', text: 'We check visible wiring and evaluate load balance across circuits.' },
  { lead: 'Outlet & Switch Testing', text: 'We test outlets and switches to confirm proper operation.' },
  { lead: 'Safety Device Verification', text: 'We confirm GFCI and AFCI protection where required.' },
  { lead: 'Code & Permit Review', text: 'If recent upgrades were completed, we verify compliance with building permits and safety standards.' },
];

const benefits = [
  'Identify aging or outdated wiring',
  'Find loose or overheated connections',
  'Ensure your electrical panel is working safely',
  'Confirm circuits are not overloaded',
  'Verify proper grounding',
  'Stay compliant with local code requirements',
];

const diyMisses = [
  'Loose connections inside the panel',
  'Double-tapped breakers',
  'Improper grounding',
  'Overloaded circuits',
  'Outdated equipment',
];

const diyRisks = [
  'Contact with live wiring',
  'Shock or burn injuries',
  'Arc flash exposure',
  'Misdiagnosed problems',
];

const commonIssues = [
  'Loose or deteriorating wiring',
  'Corroded breakers',
  'Aging panels',
  'Inadequate grounding',
  'Circuits carrying too much load',
  'Work completed without proper permits',
];

const whenToSchedule = [
  'Before buying or selling a home',
  'After major renovations',
  'When adding HVAC systems or large appliances',
  'After severe storms or lightning strikes',
  'If your home is more than 25 years old',
  'When upgrading your electrical panel',
];

const whyChoose = [
  'Licensed electricians with years of experience',
  'Detailed reports that explain system condition',
  'Code-compliant recommendations',
  'Honest pricing',
  'Clear communication',
];

const whyUs = [
  { icon: 'badge' as const, title: 'Detailed Reports', text: 'A clear, written summary of your system’s condition and any recommended fixes.' },
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Trained, experienced electricians who safely access internal components.' },
  { icon: 'check' as const, title: 'Code-Compliant', text: 'Recommendations aligned with current local electrical code.' },
  { icon: 'badge' as const, title: 'Honest Pricing', text: 'Clear, upfront pricing with no surprises.' },
];

const faqs = [
  { q: 'What is an electrical safety inspection?', a: 'It is a thorough check of your electrical system — panel, wiring, outlets, grounding, and protective devices — to find hazards and confirm code compliance. You receive a written report on the system’s condition.' },
  { q: 'How often should I have a home electrical inspection?', a: 'Every few years is reasonable for most homes, and it is smart to inspect before buying or selling, after major renovations, after a severe storm, or if your home is more than 25 years old.' },
  { q: 'What does a certified inspection include?', a: 'A panel inspection, wiring and circuit review, outlet and switch testing, GFCI/AFCI verification, and a code-and-permit review of any recent work.' },
  { q: 'What are the signs my home needs an inspection?', a: 'Flickering or dimming lights, frequent breaker trips, burning smells near outlets, warm or discolored wall plates, or a buzzing panel are all good reasons to schedule one.' },
  { q: 'How much will an inspection cost?', a: 'It depends on your home’s size and the scope of the inspection. We provide flat-rate pricing up front, so you know the cost before we begin.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electrical Inspections',
  description: 'Home electrical safety inspections covering panel, wiring, grounding, and protective devices.',
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
    { '@type': 'ListItem', position: 4, name: 'Electrical Inspections', item: `${site.url}/services/electrical-inspections` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ElectricalInspectionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Electrical Inspections in ${site.serviceArea}`}
        description="A thorough check of your panel, wiring, grounding, and safety devices — with a clear written report — to catch hazards early and keep your home safe."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Electrical Inspections' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need an electrical inspection in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/inspect-hero.jpg)' }}
            role="img"
            aria-label="Electrician inspecting an electrical panel"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Electrical Inspections
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Your home’s electrical system powers everything you use each day — lights, appliances,
            HVAC, and smart devices all depend on safe wiring and a working panel.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Over time, wiring and breakers wear down, connections loosen, and panels age. Small issues
            can grow into serious safety risks if they are not found early.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional electrical inspections for homeowners across{' '}
            {site.serviceArea}. Whether you need a routine inspection, a detailed safety check, or a
            system review before renovations that require permits, our licensed electricians make sure
            your system is safe and reliable — and give you peace of mind.
          </p>

          <h3 className="mt-8 font-display text-2xl font-black uppercase leading-tight text-brand-600">
            Benefits of Routine Electrical Inspections
          </h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Routine checks reduce safety risks. Electrical failures are a leading cause of house fires,
            and many begin with small problems that build up over time. Scheduling regular service
            helps you:
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
            Electrical problems are not always visible. A professional inspection looks beyond surface
            issues, checking internal components and protective devices homeowners cannot easily
            access — and fixing small issues early often prevents larger repairs and extends the life
            of your system.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need an inspection (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/electrical-inspections.jpg)' }}
            role="img"
            aria-label="Electrician performing an inspection"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need an Electrical Inspection
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Some warning signs should never be ignored — they often point to deeper concerns inside
              your system. Schedule service if you notice:
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
              Homes more than 25 years old may also benefit, since electrical codes change over time
              and older systems may not meet today’s safety standards. Even if everything appears to
              work, regular checks confirm your system is operating safely.
            </p>
          </div>
        </div>
      </section>

      {/* Band: The inspection process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              The Electrical Inspection Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We follow a clear, step-by-step process and use a detailed inspection checklist so
              nothing important is missed. Our service includes:
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
              At the end of the visit, we explain our findings in simple terms — and if repairs are
              needed, we outline clear next steps.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician reviewing inspection findings with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Pro vs DIY */}
          <h2 className="section-title text-brand-700">Professional vs. DIY Electrical Inspection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            It can be tempting to check outlets or breakers yourself — a quick look may spot obvious
            damage, but it cannot uncover deeper problems. A licensed electrician checks internal panel
            components and grounding systems that require training and safety precautions, along with
            code issues and hidden risks. DIY reviews often miss:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {diyMisses.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Professional service keeps you safe and provides written documentation.
          </p>

          {/* Potential risks of DIY */}
          <h2 className="mt-12 section-title text-brand-700">Potential Risks of DIY Inspections</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Working inside an electrical panel without training can be dangerous. Possible hazards
            include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {diyRisks.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Electrical systems are complex — professional service keeps you safe.
          </p>

          {/* Common issues */}
          <h2 className="mt-12 section-title text-brand-700">Common Issues an Inspection Uncovers</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">During service visits, electricians often discover:</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {commonIssues.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Correcting these issues improves safety and system reliability.
          </p>

          {/* When to schedule */}
          <h2 className="mt-12 section-title text-brand-700">When Should You Schedule an Inspection?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Inspections are not only for emergencies — they are helpful in many situations:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whenToSchedule.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Real estate transactions often require proof that systems are safe, and insurers may
            request documentation. A professional review provides clarity, confidence, and a proactive
            way to protect your investment.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Electrical Inspections</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} choose {site.name} because we provide thorough
            evaluations and friendly service. When you work with us, you receive:
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

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Electrical Inspection FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule an Electrical Inspection Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Noticing warning signs, or simply want reassurance? Our team is ready to help. Call now or
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
