import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import ClubForm from '@/components/ClubForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Join the Comfort Club',
  description: `Join the ${site.name} Comfort Club for priority service, member discounts, and seasonal tune-ups on your home's heating, cooling, and plumbing.`,
  alternates: { canonical: '/comfort-club' },
};

const perks = [
  {
    title: 'Priority Service',
    text: 'When you become a Comfort Club member, you earn priority status when you need repairs. Your job is scheduled ahead of non-members.',
  },
  {
    title: '100% Guarantee',
    text: 'We promise your complete satisfaction. We will make it right, or you do not pay — that is our personal pledge to you.',
  },
  {
    title: 'Up to 20% Discounts',
    text: 'Members receive up to 20% off repairs in our price book and on plumbing, heating, and cooling service for the life of the membership.',
  },
  {
    title: "Relax, We'll Call You!",
    text: 'We contact you to schedule your service, so you do not have to worry about forgetting it.',
  },
  {
    title: 'Trusted Professionals',
    text: 'Our technicians are licensed and insured, and we require background checks and drug tests on every employee.',
  },
  {
    title: 'High-Performance Services',
    text: 'High-performance service can reduce breakdowns by as much as 95% and may lower your utility bills by up to 30%.',
  },
  {
    title: 'Reduced Diagnostic Fees',
    text: 'Never pay full price, even on nights and weekends, for both HVAC and plumbing service appointments.',
  },
  {
    title: 'Easy Payment',
    text: 'Your card is processed automatically each month. You never have to worry about mailing in a payment.',
  },
];

const inspections = [
  {
    icon: 'flame' as const,
    category: 'Heating',
    items: [
      'Check Burners',
      'Evaluate Flue Venting System',
      'Check Gas Pressure',
      'Check Ignition System Operation',
      'Clean or Replace Customer Supplied Filter(s)',
      'Check All Electrical Controls',
      'Secure & Check All Electrical Connections',
      'Lubricate Fan Motor (if applicable)',
      'Test home to ensure it is free of carbon monoxide',
      'Visual inspection of heat exchanger to ensure safe operation',
    ],
    note: 'We will give you 5% off current list price on any full system. *Cannot be combined with other offers.',
  },
  {
    icon: 'snowflake' as const,
    category: 'Air Conditioning',
    items: [
      'Clean Air Conditioning Coils with water',
      'Clean or Replace Customer Supplied Filter(s)',
      'Check Refrigerant Levels',
      'Check All Electrical Controls',
      'Check Thermostat Calibration',
      'Secure & Check All Electrical Connections',
      'Lubricate Fan Motor (if applicable)',
      'Check All Motor Operations',
      'Measure Air Flow & Temperature',
      'Test Duct Pressure',
    ],
    note: '*Cannot be combined with other offers.',
  },
  {
    icon: 'droplet' as const,
    category: 'Plumbing',
    items: [
      'Annual Safety Inspection of your Plumbing System & Water Heater',
      'Emergency VIP Service',
      'Dye Test Toilets',
      'Check Whole House for Gas Leaks',
      'One-time Sewer Line Camera Inspection',
    ],
    note: 'Water Heater Rebates for Each Year of Membership: $25 off current list price on any tank water heater and $50 off a tankless water heater for each consecutive year you remain a Comfort Club member.',
  },
];

export default function ComfortClubPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Join the Comfort Club"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Comfort Club' }]}
      />

      {/* Intro */}
      <section className="py-14">
        <div className="container-page mx-auto max-w-3xl space-y-4 text-center text-[17px] leading-relaxed text-ink/75">
          <p>
            Just as you would not drive your car 100,000 miles without changing the oil, you should
            not skip regular maintenance on your comfort equipment. Routine care can extend the life
            of your system, prevent costly repairs, and help it run at peak efficiency when you need
            it most. When you join the Comfort Club, you get the upper hand on the unexpected — with
            priority service and member-only discounts.
          </p>
          <p>
            The most important part of our business is you. If you are not happy, we are not happy —
            that is our promise and our personal pledge to every customer we serve.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-3.5">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-pink-500 text-white">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-brand-600">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign up for VIP service */}
      <section className="overflow-hidden">
        <div className="bg-cobalt py-3 text-center">
          <p className="font-display text-base font-extrabold uppercase tracking-wide text-white sm:text-lg">
            Easy &amp; Convenient to Sign Up for VIP Service
          </p>
        </div>
        <div className="container-page grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] text-lime-600 sm:text-5xl">
              $18.99/Month Draft* for One System**
            </h2>
            <p className="mt-3 font-display text-lg font-extrabold uppercase tracking-wide text-brand-600">
              Each Additional System $5/Month.
            </p>
            <p className="mt-6 text-xs italic leading-relaxed text-ink/60">
              *Membership is a 12-month agreement and may be cancelled at any time with 30 days&rsquo;
              written notice. One month&rsquo;s payment in advance is required. A cancellation fee may
              apply, equal to the membership savings already received and/or any billing-cycle
              payments needed to match the services used.
            </p>
            <p className="mt-4 text-xs italic leading-relaxed text-ink/60">
              **A system consists of one thermostat, one air conditioner, and one furnace. Commercial
              systems or added accessories may incur additional charges.
            </p>
          </div>
          <ClubForm />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              What&rsquo;s Included
            </span>
            <h2 className="mt-4 section-title text-brand-700">Comfort Club Perks</h2>
          </div>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
            {inspections.map((card) => (
              <div key={card.category} className="flex flex-col rounded-2xl bg-pink-500 p-5 text-white">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white/95 text-pink-500">
                  <Icon name={card.icon} className="h-8 w-8" />
                </span>
                <h3 className="mt-4 text-center font-display text-2xl font-extrabold uppercase">
                  {card.category}
                </h3>
                <div className="mt-4 rounded-2xl bg-white p-5">
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm font-semibold text-brand-900">
                        <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-cobalt text-white">
                          <Icon name="check" className="h-2.5 w-2.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-white/90">{card.note}</p>
              </div>
            ))}
          </div>

          {/* Brochure CTA bar */}
          <a
            href="/free-estimate"
            className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-lime-500 px-6 py-5 text-center text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-lime-600"
          >
            <Icon name="doc" className="h-5 w-5 flex-shrink-0" />
            To learn more about pricing, what&rsquo;s included in your inspections, and more, please
            take a look at our brochure.
          </a>
        </div>
      </section>

      <PageSections />
    </>
  );
}
