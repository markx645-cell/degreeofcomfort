import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { services } from '@/content/services';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Heating, cooling, plumbing, and electrical services from ' +
    site.name +
    '. Licensed technicians, upfront pricing, same-day service.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Four trades, one trusted crew"
        description="Whatever stops working in your home, we have a licensed technician who can fix it. Explore what we do and how we price it."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page space-y-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="card card-hover grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"
            >
              <span
                className={`grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${s.accent} text-white shadow-cta`}
              >
                <Icon name={s.icon} className="h-10 w-10" />
              </span>

              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-2xl font-extrabold text-brand-950">
                    {s.title}
                  </h2>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                    {s.category}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-brand-600">{s.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm font-medium text-brand-700"
                    >
                      <Icon name="check" className="h-4 w-4 text-brand-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 lg:items-end">
                <Link href={`/services/${s.slug}`} className="btn-pink">
                  Learn more
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href={site.primaryPhone.href}
                  className="text-center text-sm font-semibold text-brand-600"
                >
                  or call now
                </a>
              </div>

              {/* keep index referenced for stable keys ordering */}
              <span className="hidden" aria-hidden>
                {i}
              </span>
            </div>
          ))}
        </div>
      </section>
      <PageSections />
    </>
  );
}
