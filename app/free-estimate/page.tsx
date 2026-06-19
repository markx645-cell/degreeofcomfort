import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import EstimateForm from '@/components/EstimateForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Free Estimate',
  description: `Request a free, no-obligation estimate from ${site.name} on new heating, cooling, and plumbing systems in ${site.serviceArea}.`,
  alternates: { canonical: '/free-estimate' },
};

const expectations = [
  'Free, written, no-obligation estimate',
  'Honest repair-versus-replace advice',
  'Upfront, flat-rate pricing',
  'Financing options explained',
];

export default function FreeEstimatePage() {
  return (
    <>
      <PageHero
        eyebrow="No Obligation"
        title="Request Your Free Estimate"
        description="Transparent residential estimates on new plumbing, heating, and cooling system installations and replacements."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Free Estimate' }]}
      />

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <EstimateForm />

          <aside className="space-y-6">
            <div>
              <h2 className="section-title text-brand-700">Transparent Estimates, No Pressure</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Tell us about your project and we will assess your home, lay out your options in plain
                language, and give you a written price. No jargon, no hard sell — just the information
                you need to make a confident decision.
              </p>
            </div>

            <ul className="space-y-3">
              {expectations.map((e) => (
                <li key={e} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-lime-500 text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {e}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-blue-section p-6 text-white">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <span className="text-sm font-bold">
                  {site.rating}/5 · {site.reviewCount.toLocaleString()}+ 5-Star Reviews
                </span>
              </div>
              <p className="mt-3 text-sm text-brand-100">Prefer to talk now? Call or text us:</p>
              <a href={site.primaryPhone.href} className="btn-pink mt-3 w-full">
                <Icon name="phone" className="h-4 w-4" />
                {site.primaryPhone.number}
              </a>
              <p className="mt-3 text-xs text-brand-200">{site.hours}</p>
            </div>
          </aside>
        </div>
      </section>

      <PageSections />
    </>
  );
}
