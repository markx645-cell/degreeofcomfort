import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Drain Cleaning',
  description: `Professional drain cleaning across ${site.serviceArea} from ${site.name} — snaking, hydro jetting, and camera inspection to clear stubborn clogs for good. Upfront pricing, same-day service.`,
  alternates: { canonical: '/services/drain-cleaning' },
};

const benefits = [
  { lead: 'Full flow restored', text: 'we clear the entire clog, not just poke a hole through it, so water drains the way it should.' },
  { lead: 'Fewer future clogs', text: 'a thorough cleaning removes the buildup that causes the next backup.' },
  { lead: 'Protected pipes', text: 'no harsh chemicals sitting in your lines and corroding them over time.' },
  { lead: 'No more odors', text: 'clearing trapped debris gets rid of the smell coming from the drain.' },
  { lead: 'Lower long-term cost', text: 'routine cleaning is far cheaper than an emergency repair after a full blockage.' },
];

const signs = [
  'Slow drainage at one or more fixtures',
  'Standing water in a sink, tub, or shower',
  'Clogs that keep coming back after you clear them',
  'Gurgling sounds from drains or toilets',
  'Foul odors coming up from the drain',
  'Water or sewage backing up into fixtures',
  'Several drains acting up at the same time',
];

const process = [
  { step: '1', title: 'Assessment', text: 'We inspect the problem and, when needed, run a camera down the line to find the exact cause and location of the clog.' },
  { step: '2', title: 'Cleaning', text: 'We clear it with the right tool — a drain snake for localized clogs, or hydro jetting (high-pressure water) for stubborn, grease-heavy, or recurring blockages.' },
  { step: '3', title: 'Prevention', text: 'We confirm everything flows freely and leave you with simple tips — and an optional maintenance schedule — to keep it from coming back.' },
];

const specialized = [
  { title: 'Main Line Cleaning', text: 'Clears the main sewer line that every drain in your home feeds into — the source of the worst backups.' },
  { title: 'Bathroom & Toilet Drains', text: 'Sinks, tubs, showers, and toilets, where hair and soap scum build up fastest.' },
  { title: 'Kitchen Sink Drains', text: 'Grease, food scraps, and disposal lines that clog more often than any other drain in the house.' },
  { title: 'Emergency & Same-Day', text: 'A drain backing up now? We answer 24/7 and reach most homes the same day.' },
];

const whyUs = [
  { icon: 'badge' as const, title: 'Camera Inspection', text: 'We find the real cause of the clog instead of guessing, so it stays fixed.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'Most drain calls are handled the same day you reach out.' },
];

const faqs = [
  { q: 'How often should I schedule professional drain cleaning?', a: 'For most homes, about once a year keeps drains flowing freely. Schedule more often if you have an older home, a large household, big trees near the sewer line, or a history of recurring clogs.' },
  { q: 'What are the signs of a clogged drain?', a: 'Slow drainage, standing water, gurgling sounds, bad odors, and clogs that keep returning. If more than one fixture is affected at once, the blockage is likely deeper in the main line.' },
  { q: 'Can I use chemical drain cleaners instead of hiring professionals?', a: 'We advise against them. Chemical cleaners can corrode pipes over time and usually only clear a small channel through the clog rather than removing it. Professional cleaning is safer and far more thorough.' },
  { q: 'What causes recurring drain clogs?', a: 'Usually grease, hair, soap, and food debris building up over time — but a clog that keeps coming back can point to a deeper issue like root intrusion or a damaged, sagging line. A camera inspection tells us which it is.' },
  { q: 'What should I do if my shower drain is clogged?', a: 'Start by removing hair from the strainer and trying a plunger. Skip the chemical cleaners. If it stays slow, keeps clogging, or other drains are affected too, it is time to call a plumber to clear it properly.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Drain Cleaning',
  description: 'Professional drain cleaning, snaking, hydro jetting, and camera inspection.',
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
    { '@type': 'ListItem', position: 4, name: 'Drains', item: `${site.url}/services/drains` },
    { '@type': 'ListItem', position: 5, name: 'Drain Cleaning', item: `${site.url}/services/drain-cleaning` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function DrainCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing · Drains"
        title={`Drain Cleaning in ${site.serviceArea}`}
        description="Stubborn clog or a slow drain that keeps coming back? We clear it completely with snaking or hydro jetting — and a camera inspection to find the real cause."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Drains', href: '/services/drains' },
          { label: 'Drain Cleaning' },
        ]}
      />

      {/* Top CTA banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Clogged drain in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/drain-cleaning-hero.jpg)' }}
            role="img"
            aria-label="Licensed plumber cleaning a clogged drain"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Drain Cleaning
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A clogged drain is easy to ignore until it is not — a slow sink becomes standing water, a
            sluggish main line becomes a backup in the basement. Left alone, clogs put pressure on
            your pipes and can lead to leaks, water damage, and expensive repairs.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} clears drains the right way for homeowners across {site.serviceArea}. We
            remove the whole blockage — not just punch through it — and use a camera inspection to
            find what caused it, so the clog does not come right back. Upfront, flat-rate pricing you
            approve before we start, and we clean up before we leave.
          </p>

          {/* Benefits */}
          <h2 className="mt-10 section-title text-brand-700">Why Professional Drain Cleaning Matters</h2>
          <ul className="mt-4 space-y-2.5">
            {benefits.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}</span> — {b.text}
                </span>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Signs You Need Drain Cleaning (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/drains-signs.jpg)' }}
            role="img"
            aria-label="Plumber clearing a clogged drain line"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Drain Cleaning
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Drains rarely fail without warning. If you notice any of these, it is time for a
              cleaning before a slow drain turns into a backup:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Band: Our Process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our Drain Cleaning Process
            </h2>
            <div className="mt-5 space-y-4">
              {process.map((p) => (
                <div key={p.step} className="flex gap-4">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-white font-display text-sm font-black text-pink-600">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold uppercase">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/90">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/drain-cleaning-process.jpg)' }}
            role="img"
            aria-label="Drain cleaning equipment in use"
          />
        </div>
      </section>

      {/* Specialized */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Drain Cleaning We Specialize In</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {specialized.map((s) => (
              <div key={s.title} className="card">
                <h3 className="font-display text-base font-extrabold text-brand-700">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Emergency banner */}
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Drain backing up right now? We answer 24/7.
            </h2>
            <Link href="/services/emergency-plumbing" className="btn-pink flex-shrink-0">
              Emergency Plumbing
            </Link>
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Drain Cleaning</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
          <h2 className="mt-12 section-title text-brand-700">Drain Cleaning FAQs</h2>
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
              Schedule Your Drain Cleaning Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Same-day service, upfront pricing, and a camera inspection to clear that clog for good.
              Call now or request a free estimate.
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
