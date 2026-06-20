import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import { site } from '@/content/site';
import { serviceCounties, serviceCommunities, communityCount } from '@/content/areas';

export const metadata: Metadata = {
  title: 'Areas We Serve',
  description: `${site.name} provides heating, cooling, plumbing, and electrical service to ${communityCount}+ communities across ${serviceCounties.length} counties in the Greater Cincinnati area.`,
  alternates: { canonical: '/areas' },
};

const areaSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: site.name,
  url: `${site.url}/areas`,
  telephone: site.primaryPhone.number,
  areaServed: serviceCounties.map((c) => ({
    '@type': 'AdministrativeArea',
    name: `${c.name}, ${c.state}`,
  })),
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
      />

      <PageHero
        eyebrow="Service Area"
        title="Areas We Serve"
        description={`We bring same-day heating, cooling, plumbing, and electrical service to ${communityCount}+ communities across the Greater Cincinnati Tri-State area. If you are nearby, there is a good chance we are already in your neighborhood.`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas We Serve' }]}
      />

      <section className="py-16">
        <MainWithSidebar>
          {/* Counties */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              Counties
            </span>
            <h2 className="mt-4 section-title text-brand-700">Counties We Serve</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {serviceCounties.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 rounded-xl bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800"
              >
                <Icon name="pin" className="h-4 w-4 flex-shrink-0 text-pink-500" />
                {c.name}, {c.state}
              </div>
            ))}
          </div>

          {/* Communities by county */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              Cities &amp; Neighborhoods
            </span>
            <h2 className="mt-4 section-title text-brand-700">Communities We Serve</h2>
            <p className="mt-3 text-brand-600">
              {communityCount}+ neighborhoods, cities, and towns across the Tri-State.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            {serviceCommunities.map((group) => (
              <div key={group.county}>
                <h3 className="flex items-center gap-2 font-display text-lg font-extrabold text-brand-700">
                  <Icon name="pin" className="h-5 w-5 text-pink-500" />
                  {group.county}
                </h3>
                <ul className="mt-3 columns-2 gap-x-4 sm:columns-3">
                  {group.places.map((place) => (
                    <li
                      key={place}
                      className="mb-1.5 flex break-inside-avoid gap-2 text-sm text-ink/75"
                    >
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-lime-500" />
                      {place}
                    </li>
                  ))}
                </ul>
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
        </MainWithSidebar>
      </section>
      <PageSections />
    </>
  );
}
