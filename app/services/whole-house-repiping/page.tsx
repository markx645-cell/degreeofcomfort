import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Whole-House Repiping',
  description: `Whole-house repiping across ${site.serviceArea} from ${site.name} — licensed plumbers replace old, corroded, or failing water pipes with modern PEX or copper.`,
  alternates: { canonical: '/services/whole-house-repiping' },
};

const signs = [
  { lead: 'Frequent Leaks', text: 'If you’re constantly dealing with leaks, it might indicate that your pipes are deteriorating and need replacement.' },
  { lead: 'Discolored Water', text: 'Brown or yellow water can be a sign of rusting pipes, which can affect water quality and indicate corrosion.' },
  { lead: 'Low Water Pressure', text: 'A sudden drop in water pressure could suggest blockages or leaks in your plumbing system.' },
  { lead: 'Unusual Noises', text: 'Banging or clanking sounds in your pipes may point to loose or damaged piping.' },
  { lead: 'Visible Corrosion', text: 'If you notice rust or corrosion on exposed pipes, it’s a clear sign that your plumbing may need attention.' },
];

const process = [
  { lead: 'Initial Consultation', text: 'A comprehensive assessment of your plumbing system and a discussion of your concerns.' },
  { lead: 'Customized Planning', text: 'A tailored solution that addresses your home’s specific needs and layout.' },
  { lead: 'Professional Installation', text: 'Certified plumbers complete the repipe using quality materials like PEX or copper.' },
  { lead: 'Leak Detection & Final Inspection', text: 'We verify proper function, check for leaks, and complete a thorough cleanup.' },
];

const whyRepipe = [
  'Improved water quality and clarity',
  'More consistent water pressure',
  'Fewer leaks and emergency repairs',
  'Modern PEX or copper materials built to last',
  'Added property value',
];

const whyChoose = [
  'Licensed and experienced plumbers',
  'Modern PEX and copper repiping',
  'Customized plans for your home',
  'Upfront estimates after inspection',
  'A satisfaction guarantee on every job',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Plumbers', text: 'Experienced pros who repipe homes cleanly and to code.' },
  { icon: 'check' as const, title: 'Quality Materials', text: 'Durable PEX or copper sized for your home.' },
  { icon: 'badge' as const, title: 'Upfront Estimates', text: 'A clear quote after we inspect your system.' },
  { icon: 'house' as const, title: 'Thorough Cleanup', text: 'Leak-tested results and a tidy finish.' },
];

const faqs = [
  { q: 'How do I know if I need plumbing repiping services?', a: 'Low water pressure, rusty water, frequent leaks, or unusual sounds indicate aging pipes. Galvanized steel and polybutylene systems particularly benefit from repiping.' },
  { q: 'What is residential repiping, and how long does it take?', a: 'It is the complete replacement of old water supply pipes with modern materials like PEX or copper, typically taking a few days to a week depending on home size.' },
  { q: 'Is whole home repiping really necessary?', a: 'It becomes worthwhile when pipes leak frequently, show heavy corrosion, or use outdated materials — improving water quality and property value.' },
  { q: 'How much does it cost to repipe a house?', a: 'Pricing depends on home size, fixture count, and materials. Our specialists provide an upfront estimate during the inspection.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Whole-House Repiping',
  description: 'Whole-house repiping, replacing old water supply lines with modern PEX or copper piping.',
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
    { '@type': 'ListItem', position: 4, name: 'Whole-House Repiping', item: `${site.url}/services/whole-house-repiping` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function WholeHouseRepipingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Whole-House Repiping in ${site.serviceArea}`}
        description="Licensed plumbers replace old, corroded, or failing water pipes with modern PEX or copper — improving water quality, pressure, and reliability."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Whole-House Repiping' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Tired of leaks and rusty water?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/repiping-hero.jpg)' }} role="img" aria-label="New copper water pipes" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Whole-House Repiping
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Old water pipes do not last forever. Over time they corrode, narrow, and start to leak —
            affecting your water quality, pressure, and peace of mind.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides whole-house repiping for homeowners across {site.serviceArea}. Our
            licensed plumbers replace aging supply lines — including galvanized steel and polybutylene
            systems — with modern PEX or copper built to last.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you are dealing with repeat leaks or planning ahead, a repipe restores reliable water
            throughout your home.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/repiping-signs.jpg)' }} role="img" aria-label="Old corroded pipes" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need to Repipe Your House
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Your home’s plumbing works hard every day, and over time, wear and tear can lead to issues
              that signal it’s time for a repipe. Recognizing these signs early can save you from more
              significant problems down the line:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Repiping Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Schedule Your Repiping Installation Today
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Plumbing work can feel disruptive — but it doesn’t have to be. Our team treats every home
              like it’s our own. We arrive on time, communicate clearly, and always clean up before we
              leave.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              A repiping installation is a big job, but our crew knows how to do it right while keeping
              things manageable. If you’ve been dealing with low water pressure, discolored water, or
              constant pipe leaks, it might be time to take that step. We offer professional repiping
              services throughout {site.serviceArea}.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }} role="img" aria-label="Plumber reviewing a repiping plan with a homeowner" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What to Expect During Whole-Home Repiping</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We keep the project organized and predictable from start to finish:
          </p>
          <ul className="mt-4 space-y-2">
            {process.map((p) => (
              <li key={p.lead} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span><span className="font-bold text-brand-700">{p.lead}:</span> {p.text}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 section-title text-brand-700">Why Repipe Your Home</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Replacing your water lines does more than stop leaks. A full repipe with modern materials
            delivers:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whyRepipe.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            If you are only dealing with an isolated problem, we also offer targeted{' '}
            <Link href="/services/pipe-repair-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              pipe repair and replacement
            </Link>{' '}
            and{' '}
            <Link href="/services/leak-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              leak repair
            </Link>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Repiping</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} trust {site.name} for dependable plumbing. When you work
            with our team, you receive:
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

          <h2 className="mt-12 section-title text-brand-700">Whole-House Repiping FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Whole-House Repiping Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to put leaks and rusty water behind you? {site.name} repipes homes across{' '}
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
