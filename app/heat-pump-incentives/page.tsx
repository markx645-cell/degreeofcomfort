import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import Accordion from '@/components/Accordion';
import MainWithSidebar from '@/components/Sidebar';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Heat Pump Incentives & Costs',
  description: `Federal heat pump rebates and tax credits for ${site.serviceArea}. See what you may qualify for and what a new high-efficiency system costs.`,
  alternates: { canonical: '/heat-pump-incentives' },
};

const benefits = [
  { icon: 'snowflake' as const, title: 'Versatile Heating & Cooling', text: 'One efficient system that both heats and cools your home all year.' },
  { icon: 'bolt' as const, title: 'Lower Energy Bills', text: 'Heat pumps move heat instead of burning fuel, using far less energy than older systems.' },
  { icon: 'heart' as const, title: 'Smaller Carbon Footprint', text: 'High-efficiency electric heating means fewer emissions from your home.' },
  { icon: 'star' as const, title: 'ENERGY STAR Certified', text: 'We install ENERGY STAR-rated equipment, which is what most incentives require.' },
];

const accordionItems = [
  {
    title: 'How Can You Enjoy Heat Pump Savings?',
    body: (
      <>
        <p>
          Heat pumps are highly efficient heating and cooling systems that can cut your energy use
          and lower your utility bills. On top of those savings, qualifying households can tap into
          financial assistance toward buying and installing one. Here is how the rebates break down
          by income:
        </p>
        <ul className="ml-1 space-y-2">
          <li className="flex gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
            <span>
              <strong className="text-brand-700">Low-Income Households:</strong> Earning less than
              80% of your Area Median Income may qualify for full coverage of a new heat pump, up to
              $8,000.
            </span>
          </li>
          <li className="flex gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
            <span>
              <strong className="text-brand-700">Moderate-Income Households:</strong> Earning between
              80% and 150% of Area Median Income may qualify for up to 50% of the cost, up to $8,000.
            </span>
          </li>
        </ul>
        <p className="text-xs text-ink/55">
          Rebate amounts and eligibility rules can vary by state and program.
        </p>
      </>
    ),
  },
  {
    title: 'Heat Pump Water Heater Rebates',
    body: (
      <>
        <p>
          Looking for an affordable, eco-friendly way to heat your water? Low- and moderate-income
          households can also get help switching to a heat pump water heater (HPWH), which is more
          efficient than a conventional model.
        </p>
        <ul className="ml-1 space-y-2">
          <li className="flex gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
            <span>
              <strong className="text-brand-700">Low-Income Households:</strong> Below 80% of Area
              Median Income may qualify for full coverage of HPWH costs, up to $1,750.
            </span>
          </li>
          <li className="flex gap-2.5">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-cobalt" />
            <span>
              <strong className="text-brand-700">Moderate-Income Households:</strong> Between 80% and
              150% of Area Median Income may receive up to 50% coverage, up to $1,750.
            </span>
          </li>
        </ul>
        <p>
          Beyond the savings, these rebates support cleaner energy and lower greenhouse gas
          emissions, so you make a real impact on your community and the planet.
        </p>
      </>
    ),
  },
  {
    title: 'Heat Pump Tax Credits',
    body: (
      <>
        <p>
          Beyond rebates, a high-efficiency electric heat pump can earn federal tax credits that
          reduce your overall tax liability while you move to a greener, more sustainable system.
        </p>
        <p>
          The federal Energy Efficient Home Improvement Credit (Section 25C) lets homeowners claim
          30% back on qualifying heat pumps and heat pump water heaters, capped at $2,000 per year.
          Because the credit resets each year, you can claim it again for future home-improvement
          projects. Always confirm the details with a tax professional.
        </p>
      </>
    ),
  },
];

export default function HeatPumpPage() {
  return (
    <>
      <PageHero
        eyebrow="Save on Efficiency"
        title="Heat Pump Incentives & Costs"
        description={`Energy-efficiency rebates and tax credits for ${site.serviceArea} — plus a plain-English look at what a new system really costs.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Heat Pump Incentives' }]}
      />

      <section className="py-16">
        <MainWithSidebar>
          <div className="mx-auto max-w-3xl text-center text-[17px] leading-relaxed text-ink/75">
            <p>
              A heat pump heats and cools your home from one efficient system, and right now federal
              rebates and tax credits can cover a meaningful share of the cost. Here is how the
              savings work and how we help you claim them.
            </p>
          </div>

          {/* Accordions */}
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={accordionItems} />
          </div>

          {/* Benefits */}
          <h2 className="mt-14 section-title text-brand-700">More Than a Tax Break</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-extrabold text-brand-700">{b.title}</h3>
                <p className="mt-1.5 text-sm text-ink/70">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer + CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Find Out What You Qualify For
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-100">
              Rebate and credit amounts depend on your income, equipment, and current programs. We
              will help you find every incentive you qualify for — and we always recommend confirming
              tax credits with a tax professional.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6">
              <Icon name="phone" className="h-4 w-4" />
              Call {site.primaryPhone.number}
            </a>
          </div>
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
