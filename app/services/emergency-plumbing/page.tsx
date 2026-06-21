import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations, locationsByGroup } from '@/content/locations';

export const metadata: Metadata = {
  title: 'Emergency Plumbing',
  description: `24/7 emergency plumbing from ${site.name} — burst pipes, sewer backups, water heater failures, and more, across ${site.serviceArea}. Call now for immediate service.`,
  alternates: { canonical: '/services/emergency-plumbing' },
};

const fixFast = [
  'Burst pipes and water line breaks',
  'Leaking or overflowing water heaters',
  'Sewer line backups and clogged drains',
  'Sudden toilet or faucet failures',
  'Emergency installations and general repairs',
];

const commonSituations = [
  'Burst or leaking pipes that can quickly flood your home',
  'Sewer backups causing wastewater to back up into sinks, tubs, or floor drains',
  'Overflowing toilets that will not stop running or flushing',
  'No water or a sudden loss of water pressure throughout the home',
  'Water heater leaks or a complete loss of hot water',
  'Major drain clogs causing repeated backups in multiple fixtures',
  'Gas line issues related to plumbing appliances',
];

const whyUs = [
  { icon: 'clock' as const, title: 'Fast, Same-Day Response', text: 'We answer 24/7 and reach most homes the same day, often within hours.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
  { icon: 'badge' as const, title: 'Upfront Pricing', text: 'Flat-rate quotes approved before we start — no overtime or weekend fees.' },
  { icon: 'check' as const, title: 'Repairs That Last', text: 'We fix the real cause, not just the symptom, so it stays fixed.' },
];

const faqs = [
  { q: 'What is a plumbing emergency?', a: 'Any situation that threatens your home, health, or safety due to water or sewer issues — burst pipes, overflowing water heaters, sewer backups, and major leaks.' },
  { q: `How soon can your emergency plumbers arrive in ${site.serviceArea}?`, a: 'We prioritize speed. Our emergency plumbers aim to arrive the same day, often within hours of your call, to address urgent issues quickly.' },
  { q: 'What should I do if a pipe bursts in my home?', a: 'Shut off the main water supply immediately to prevent flooding, avoid using affected fixtures, and call our team for emergency repair. Our licensed plumbers handle the rest.' },
  { q: 'Can you fix clogged drains quickly?', a: 'Yes. We provide fast drain clearing and emergency service, getting your plumbing functional again without delay — and a camera inspection if clogs keep returning.' },
  { q: 'What services do you offer for water heaters?', a: 'We provide repair, replacement, and installation for all types of water heaters, including tankless and traditional models, and can handle urgent water heater issues the same day.' },
  { q: 'Do you charge extra for nights or weekends?', a: 'No. Our flat-rate pricing is the same any day or hour, with no overtime surcharges.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Emergency Plumbing',
  description: '24/7 emergency plumbing repair for burst pipes, sewer backups, and water heater failures.',
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
    { '@type': 'ListItem', position: 4, name: 'Emergency Plumbing', item: `${site.url}/services/emergency-plumbing` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function EmergencyPlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`24/7 Emergency Plumbing in ${site.serviceArea}`}
        description="Burst pipe? No water? Sewer backup? Our licensed plumbers are on call around the clock and reach most homes the same day."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Emergency Plumbing' },
        ]}
      />

      {/* Immediate-call banner (full width) */}
      <section className="bg-blue-section">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase sm:text-2xl">
            Have a Plumbing Emergency? Call for Immediate Service
          </h2>
          <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0 text-base">
            <Icon name="phone" className="h-5 w-5" />
            Call {site.primaryPhone.number}
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          {/* Can fix fast */}
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Plumbing Emergencies We Can Fix Fast
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Plumbing problems rarely happen on a convenient schedule. That is why {site.name} offers
            24/7 service for every plumbing emergency. From a minor leak to a major water line
            failure, our licensed plumbers handle each situation with speed and precision. Common
            emergencies we fix include:
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {fixFast.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-semibold text-pink-600">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A burst pipe or sewer backup can cause thousands of dollars in damage in just a few
            hours, so getting help quickly is key to minimizing loss. When you face a plumbing
            emergency, our team arrives quickly, assesses the problem, and completes the repair
            efficiently — protecting your home from further damage while delivering long-lasting
            results.
          </p>

          {/* Receptionist intro */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-center">
            <div
              className="aspect-[4/3] rounded-2xl bg-brand-200 bg-cover bg-center"
              style={{ backgroundImage: 'url(/emergency-call.jpg)' }}
              role="img"
              aria-label="Our team answering an emergency call"
            />
            <div className="space-y-3 text-sm leading-relaxed text-ink/75">
              <p>
                When a plumbing emergency strikes, every minute counts. We provide fast, reliable,
                professional emergency plumbing for homeowners across {site.serviceArea}.
              </p>
              <p>
                Whether it is a burst pipe, an overflowing water heater, or a sudden sewer backup,
                our licensed plumbers are ready to respond immediately — keeping your home protected
                and your plumbing restored quickly. Even small delays can lead to mounting water
                damage and mold, which is why we treat every emergency with urgency and care.
              </p>
            </div>
          </div>

          {/* Most common situations — pink band */}
          <div className="mt-12 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
            <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
              <div
                className="aspect-[4/3] rounded-2xl bg-white/20 bg-cover bg-center"
                style={{ backgroundImage: 'url(/emergency-situations.jpg)' }}
                role="img"
                aria-label="Service van"
              />
              <div>
                <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
                  Most Common Emergency Plumbing Situations
                </h2>
                <p className="mt-3 text-sm text-white/90">
                  Plumbing emergencies can happen without warning and often require immediate
                  attention to prevent water damage or costly repairs. Some of the most common
                  situations include:
                </p>
                <ul className="mt-4 space-y-1.5">
                  {commonSituations.map((c) => (
                    <li key={c} className="flex gap-2 text-sm font-medium">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Local & trusted banner */}
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              Your Local &amp; Trusted Emergency Plumbing Service Pros
            </h2>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              Get Peace of Mind Today!
            </a>
          </div>

          {/* What to expect — pink band */}
          <div className="mt-8 overflow-hidden rounded-3xl bg-hero-pink p-7 text-white sm:p-9">
            <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
                  What to Expect From Your Emergency Plumbing Service
                </h2>
                <p className="mt-3 text-sm text-white/90">
                  When you schedule emergency plumbing service, the priority is to respond quickly
                  and limit damage to your home. A licensed plumber arrives promptly, assesses the
                  situation, and takes immediate steps to stop active leaks, backups, or flooding.
                </p>
                <p className="mt-3 text-sm text-white/90">
                  After identifying the cause, the plumber explains the recommended repair and gives
                  you clear next steps before any work begins. We focus on restoring safety and basic
                  function first, with permanent repairs completed as efficiently as possible to get
                  your plumbing back to normal.
                </p>
              </div>
              <div
                className="aspect-[4/3] rounded-2xl bg-white/20 bg-cover bg-center lg:order-last"
                style={{ backgroundImage: 'url(/emergency-expect.jpg)' }}
                role="img"
                aria-label="Technician reviewing the repair with a homeowner"
              />
            </div>
          </div>

          {/* Prose sections */}
          <div className="mt-12 space-y-8">
            <div>
              <h2 className="section-title text-brand-700">
                Emergency Plumbing Services in {site.serviceArea} &amp; Beyond
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Plumbing emergencies call for fast action, and our team is always ready to help.
                Whether you are facing a water leak, a blocked pipe, or a sewer-line issue, we deliver
                professional solutions and focus on restoring your home as quickly as possible. A
                serious plumbing problem is stressful, so we are here to take the weight off your
                shoulders. Our people are what make the difference — we approach every emergency with
                genuine care and a focus on your well-being.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">Burst Pipes and Our Process</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                A burst pipe can release hundreds of gallons of water a day, so a fast response
                prevents structural damage, electrical hazards, and mold growth. We respond
                immediately, shut off the water supply to stop the damage, and make the repair
                efficiently. We inspect the affected area, repair or replace the damaged piping, and
                confirm your system is fully operational before we leave — plus tips to help you
                prevent future bursts.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">24-Hour Plumber in {site.serviceArea}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Plumbing disasters do not wait for business hours, which is why we are available
                around the clock. As your trusted 24-hour plumber across {site.serviceArea}, we
                respond promptly to minimize damage and restore comfort to your home. We arrive with
                the tools, expertise, and dedication to fix the issue quickly — and the trust of
                homeowners across the area backs up our work.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">
                Same-Day Plumbing to Get Your Home Back in Shape
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                From a leaky faucet to the emergency installation of a new water heater, we provide
                same-day service whenever possible. Our goal is to restore your home quickly, reduce
                disruption, and prevent further damage. Every job is completed with care, attention
                to detail, and an emphasis on durability, so your plumbing keeps working reliably long
                after the emergency is over.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">
                Why Choose {site.name} for Your Plumbing Emergencies
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Plumbing emergencies require fast action and experienced professionals who know how
                to handle urgent situations. With licensed technicians, clear communication, and
                upfront scheduling, we make it easier to get the help you need when it matters most —
                restoring safety, protecting your plumbing system, and delivering reliable repairs you
                can trust.
              </p>
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
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Emergency Plumbing FAQs</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          {/* Neighborhoods — links DOWN to location pages (internal-link mesh) */}
          {locations.length > 0 && (
            <div className="mt-12">
              <h2 className="section-title text-brand-700">Emergency plumbing by neighborhood</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                We respond across {site.serviceArea} — {locations.length} neighborhoods and counting.
                For local detail on response times and the plumbing issues common to older homes in
                your area, find yours below.
              </p>
              <div className="mt-6 space-y-7">
                {locationsByGroup().map(({ group, items }) => (
                  <div key={group}>
                    <h3 className="flex items-center gap-2 font-display text-base font-extrabold text-brand-700">
                      <Icon name="pin" className="h-4 w-4 text-pink-500" />
                      {group}
                    </h3>
                    <ul className="mt-2 columns-1 gap-x-6 sm:columns-2">
                      {items.map((l) => (
                        <li key={l.slug} className="mb-1.5 break-inside-avoid">
                          <Link
                            href={`/services/emergency-plumbing/${l.slug}`}
                            className="text-sm font-medium text-brand-800 hover:text-pink-600"
                          >
                            Emergency plumber in {l.neighborhood}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Call Today for Emergency Plumbing Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Do not wait for a small leak to turn into a full-blown emergency. Call now for fast,
              reliable service from licensed plumbers who put homeowners first.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6 text-base">
              <Icon name="phone" className="h-5 w-5" />
              Call {site.primaryPhone.number}
            </a>
          </div>
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
