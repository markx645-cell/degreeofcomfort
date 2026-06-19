import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { services, getService } from '@/content/services';
import { site } from '@/content/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} Services`, description: service.summary },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    description: service.summary,
    provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
    areaServed: site.serviceArea,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${site.url}/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.tagline}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            {/* Highlights */}
            <div className="grid gap-3 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800"
                >
                  <Icon name="check" className="h-5 w-5 flex-shrink-0 text-brand-500" />
                  {h}
                </div>
              ))}
            </div>

            {/* Body */}
            <div className="mt-10 space-y-5">
              {service.body.map((para, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-brand-800">
                  {para}
                </p>
              ))}
            </div>

            {/* FAQ */}
            <section id="faq" className="mt-12">
              <h2 className="text-2xl font-extrabold text-brand-950">
                {service.title} questions, answered
              </h2>
              <div className="mt-6 space-y-4">
                {service.faqs.map((f) => (
                  <div key={f.q} className="card">
                    <h3 className="text-lg font-bold text-brand-950">{f.q}</h3>
                    <p className="mt-2 text-brand-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card bg-blue-section text-white">
              <h2 className="text-xl font-bold text-white">Book {service.title.toLowerCase()}</h2>
              <p className="mt-2 text-sm text-brand-100">
                {site.hours} Serving {site.serviceArea}.
              </p>
              <a href={site.primaryPhone.href} className="btn-pink mt-5 w-full">
                <Icon name="phone" className="h-4 w-4" />
                {site.primaryPhone.number}
              </a>
              <Link href="/#offers" className="btn-outline mt-3 w-full">
                See current offers
              </Link>
            </div>

            <div className="card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-500">
                Other services
              </h2>
              <ul className="mt-4 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/services/${o.slug}`}
                      className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-brand-50"
                    >
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${o.accent} text-white`}
                      >
                        <Icon name={o.icon} className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-brand-900">{o.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
