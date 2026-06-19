import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { site } from '@/content/site';
import { serviceAreas } from '@/content/home';

export const metadata: Metadata = {
  title: 'Areas We Serve',
  description: `${site.name} provides heating, cooling, plumbing, and electrical service across ${site.serviceArea}. See the counties, cities, and towns we cover.`,
  alternates: { canonical: '/areas' },
};

// Cities & towns across the Greater Cincinnati / Tri-State area.
const cities = [
  'Cincinnati, OH',
  'Covington, KY',
  'Newport, KY',
  'Florence, KY',
  'Erlanger, KY',
  'Fort Mitchell, KY',
  'Fort Thomas, KY',
  'Independence, KY',
  'Hebron, KY',
  'Burlington, KY',
  'Mason, OH',
  'West Chester, OH',
  'Loveland, OH',
  'Milford, OH',
  'Blue Ash, OH',
  'Hamilton, OH',
  'Fairfield, OH',
  'Lawrenceburg, IN',
];

export default function AreasPage() {
  const counties = [...serviceAreas.left, ...serviceAreas.right];

  const areaSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: site.name,
    url: `${site.url}/areas`,
    telephone: site.primaryPhone.number,
    areaServed: counties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <PageHero
        eyebrow="Service Area"
        title="Areas We Serve"
        description={`We bring same-day heating, cooling, plumbing, and electrical service to ${site.serviceArea}. If you are nearby, there is a good chance we are already in your neighborhood.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas We Serve' }]}
      />

      <section className="py-16">
        <div className="container-page">
          {/* Counties */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              Counties
            </span>
            <h2 className="mt-4 section-title text-brand-700">Counties We Serve</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {counties.map((county) => (
              <div
                key={county}
                className="flex items-center gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800"
              >
                <Icon name="pin" className="h-4 w-4 flex-shrink-0 text-pink-500" />
                {county}
              </div>
            ))}
          </div>

          {/* Cities */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              Cities &amp; Towns
            </span>
            <h2 className="mt-4 section-title text-brand-700">Cities &amp; Towns We Cover</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-ink/80 ring-1 ring-brand-100"
              >
                <Icon name="check" className="h-4 w-4 flex-shrink-0 text-lime-500" />
                {city}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-blue-section px-6 py-12 text-center">
            <h2 className="text-2xl font-extrabold uppercase text-white sm:text-3xl">
              Don&rsquo;t see your area?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              We are always expanding. Give us a call and we will let you know if we can get a
              technician to your door.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6">
              <Icon name="phone" className="h-4 w-4" />
              Call {site.primaryPhone.number}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
