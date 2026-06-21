import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Indoor Air Quality',
  description: `Indoor air quality services across ${site.serviceArea} from ${site.name} — air testing, whole-home filtration, purifiers, and humidifiers for cleaner, healthier air. Upfront pricing.`,
  alternates: { canonical: '/services/indoor-air-quality' },
};

const concerns = [
  { icon: 'shield' as const, title: 'Germs & Infectious Agents', text: 'Bacteria and viruses can sneak into your home and make you sick even when you take precautions. An air filtration system helps eliminate harmful germs like mold and viruses.' },
  { icon: 'badge' as const, title: 'Chemical Gases & Odors', text: 'Fumes from chemical cleaners, building materials, or damaged gas lines can be dangerous to your health — especially in excessive amounts.' },
  { icon: 'heart' as const, title: 'Dust Particles & Allergens', text: 'Dust and allergens make home life uncomfortable and are often why allergies and asthma feel worse indoors, especially for those with respiratory issues.' },
];

const benefits = [
  { lead: 'Fewer allergens', text: 'a good filtration system reduces dust, pet dander, and pollen, easing itchy skin, watery eyes, and respiratory irritation.' },
  { lead: 'Less mold and mildew', text: 'controlling moisture levels helps prevent the mold growth that thrives in high humidity.' },
  { lead: 'Improved health', text: 'cleaner air can reduce the headaches, coughing, and fatigue that poor air quality contributes to.' },
  { lead: 'Lower energy costs', text: 'a cleaner HVAC system does not have to work as hard, which can lower utility bills.' },
  { lead: 'Longer HVAC lifespan', text: 'less dust and debris means less strain on your system and fewer breakdowns.' },
];

const filtration = [
  'Reduced dust, mold, germs, and overall air pollution',
  'Improved air quality for allergies and asthma',
  'Lower humidity levels for more indoor comfort',
  'Elimination of bad indoor odors',
  'Elimination of airborne bacteria and germs',
  'Elimination of pet dander',
];

const whyUs = [
  { icon: 'badge' as const, title: 'Air Quality Testing', text: 'We test your indoor air to pinpoint the exact cause before recommending a solution.' },
  { icon: 'check' as const, title: 'Filtration & Humidifiers', text: 'Whole-home air purifiers, filters, humidifiers, and dehumidifiers — installed right.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and properly installed, lasting systems.' },
  { icon: 'star' as const, title: 'Satisfaction Guarantee', text: 'If you are not happy, neither are we — we stand behind every job.' },
];

const faqs = [
  { q: 'What are the signs of poor indoor air quality?', a: 'Common signs include frequent allergy or asthma flare-ups, stale or stuffy air, lingering odors, excessive dust on surfaces, and humidity problems like dry skin in winter or condensation and mold in summer.' },
  { q: 'What are indoor air quality services, and why are they important?', a: 'IAQ services combine air testing with solutions like filtration, purifiers, humidifiers, dehumidifiers, and ventilation to reduce contaminants. They matter because most of us spend the majority of our time indoors, where pollutants can concentrate.' },
  { q: 'What types of indoor air pollutants can affect my home?', a: 'Dust, pollen, pet dander, mold spores, bacteria and viruses, chemical fumes (VOCs) from cleaners and building materials, and both excess and low humidity can all affect your air.' },
  { q: 'Can poor air quality affect my HVAC system?', a: 'Yes. A buildup of dust and debris strains your equipment, reduces efficiency, and leads to more breakdowns — so cleaner air helps your HVAC system last longer too.' },
  { q: 'How often should I replace air filters?', a: 'Monthly is ideal (as Energy Star recommends), and every three months at a minimum — more often with pets or during heavy heating and cooling seasons.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Indoor Air Quality',
  description: 'Air quality testing, whole-home filtration, purifiers, and humidifiers.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Heating', item: `${site.url}/services/heating` },
    { '@type': 'ListItem', position: 4, name: 'Indoor Air Quality', item: `${site.url}/services/indoor-air-quality` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function IndoorAirQualityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating & Cooling"
        title={`Indoor Air Quality Services in ${site.serviceArea}`}
        description="Cleaner, healthier air at home — through testing, whole-home filtration, purifiers, and humidifiers tailored to your home."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Indoor Air Quality' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Worried about your air quality in {site.serviceArea}?
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
            style={{ backgroundImage: 'url(/services/iaq-hero.jpg)' }}
            role="img"
            aria-label="Clean, comfortable home interior"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Expert Indoor Air Quality Services
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We take air quality seriously. {site.name} is known for being thorough, reliable, and easy
            to work with — and we do not take shortcuts. Our team follows a careful process, using
            high-quality materials and proven methods for long-term solutions.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Every home is different, so we work closely with each homeowner to build a plan that fits
            their specific air quality needs. These are the issues good IAQ solutions address:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {concerns.map((c) => (
              <div key={c.title} className="card text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-3 font-display text-sm font-extrabold uppercase text-brand-700">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{c.text}</p>
              </div>
            ))}
          </div>
        </MainWithSidebar>
      </section>

      {/* Band: How better IAQ benefits your home (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/iaq-benefits.jpg)' }}
            role="img"
            aria-label="Family enjoying a comfortable home"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              How Better Air Quality Benefits Your Home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Indoor air pollution can cause everything from allergy symptoms to higher energy bills.
              Investing in IAQ services improves your home in several ways:
            </p>
            <ul className="mt-4 space-y-2">
              {benefits.map((b) => (
                <li key={b.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span>
                    <span className="font-bold text-white">{b.lead}:</span> {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Band: Whole-home filtration (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Whole-Home Air Filtration
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              More pollutants infiltrate our homes than most of us realize. A high-quality whole-home
              air purifier keeps your family safer and your home healthier:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {filtration.map((f) => (
                <li key={f} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/furnace-filters.jpg)' }}
            role="img"
            aria-label="Whole-home air filter"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Start With a Home Air Quality Inspection</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Treating indoor air pollution is not as simple as buying the first product on the shelf —
            there is a science to finding the right purifier, and it starts with testing your indoor
            air to pinpoint the exact cause. Our specialists use the latest IAQ technology to find what
            is contaminating your air, then provide a customized solution. We are licensed to install
            your new air filtration system, so you can start enjoying cleaner air quickly.
          </p>

          {/* Filter changes */}
          <h2 className="mt-12 section-title text-brand-700">When to Change Your Air Filter</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Your air filters should be changed regularly to keep your HVAC system performing and energy
            use down. A good rule of thumb is monthly — as Energy Star recommends — or every three
            months at a minimum, especially during a heavy heating or cooling season. This simple task
            extends the life of your HVAC system, lowers monthly energy costs, and keeps your indoor air
            safe.
          </p>

          {/* Humidifiers */}
          <h2 className="mt-12 section-title text-brand-700">Whole-Home Humidifiers</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Humidity is a crucial factor in your indoor air quality. Low humidity leads to dry skin,
            aggravated respiratory conditions, and a higher risk of colds and flu — and it can even
            damage wood furniture and your home’s structure.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Our whole-home humidifiers integrate with your existing HVAC system to maintain optimal
            humidity throughout your home — not just one room. Set your desired level and the system
            takes care of the rest, with minimal maintenance.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Indoor Air Quality</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Indoor air quality plays an important role in comfort, health, and overall home
            performance. {site.name} provides professional IAQ services designed to reduce airborne
            contaminants, improve ventilation, and support a healthier living environment.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            With experienced technicians and tailored recommendations, we help homeowners tackle common
            concerns like allergens, humidity, and poor airflow. And because we also handle heating,
            cooling, electrical, and plumbing, you have one trusted team for the whole home.
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
          <h2 className="mt-12 section-title text-brand-700">Indoor Air Quality FAQs</h2>
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
              Schedule Your Air Quality Testing Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Your indoor air will not fix itself. Our IAQ specialists test your air and recommend the
              best solution — and you can start enjoying a new purifier, humidifier, or dehumidifier
              right away. Call now or request a free estimate.
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
