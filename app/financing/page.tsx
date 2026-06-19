import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Financing',
  description: `Flexible financing options from ${site.name} so you never have to choose between comfort and affordability. Apply for home comfort financing today.`,
  alternates: { canonical: '/financing' },
};

const applyBenefits = [
  'Immediate credit upon approval',
  'Easy, quick application process',
  'No minimum purchase required',
];

// Decorative calendar (static)
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const days = Array.from({ length: 30 }, (_, i) => i + 1);
const highlighted = 10;

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Flexible Payments"
        title="Financing"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Financing' }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] text-brand-600 sm:text-5xl">
              Financing Options That Maximize Your Comfort Level.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">
              Your home&rsquo;s plumbing, heating, and cooling systems are among the most important
              appliances in your home, and they are an investment worth making. Do not base a repair
              or replacement decision strictly on cost — we offer convenient financing so you never
              have to choose between comfort and affordability.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:items-start">
              {/* Installment loan card */}
              <div className="rounded-2xl bg-ink p-6 text-white">
                <h3 className="font-display text-xl font-extrabold text-gold-500">
                  Pay over time with an installment loan.
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                    See if you prequalify with no impact to your credit score
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                    See financing options instantly
                  </li>
                </ul>
                <a href={site.primaryPhone.href} className="btn-gold mt-5">
                  Get Started
                </a>
                <p className="mt-5 text-[10px] leading-relaxed text-white/50">
                  Financing provided through our lending partner. Subject to credit approval.
                </p>
              </div>

              {/* Benefits + apply */}
              <div>
                <ul className="space-y-2.5">
                  {applyBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm font-semibold text-ink/80">
                      <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-pink-500 text-white">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-ink/60">
                  Enjoy total home comfort without having to pay it all upfront. Apply today or call
                  us at {site.primaryPhone.number} to schedule service and ask about our payment
                  options.
                </p>
                <a href={site.primaryPhone.href} className="btn-pink mt-4 w-full">
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* Right — schedule calendar */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-100">
            <div className="bg-pink-500 py-4 text-center">
              <h2 className="font-display text-2xl font-extrabold text-white">Schedule Service!</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-7 gap-1 text-center">
                {weekdays.map((d, i) => (
                  <div key={i} className="py-1 text-xs font-bold text-pink-500">
                    {d}
                  </div>
                ))}
                {days.map((d) => (
                  <div
                    key={d}
                    className={`grid h-9 place-items-center rounded-full text-sm ${
                      d === highlighted
                        ? 'bg-pink-500 font-bold text-white'
                        : 'text-ink/70 hover:bg-brand-50'
                    }`}
                  >
                    {d}
                  </div>
                ))}
              </div>
              <Link href="/free-estimate" className="btn-pink mt-6 w-full text-base">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
