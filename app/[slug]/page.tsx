import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { companyPages, getCompanyPage } from '@/content/companyPages';
import { site } from '@/content/site';

export function generateStaticParams() {
  return companyPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCompanyPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.intro[0],
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: page.title, description: page.intro[0] },
  };
}

export default async function CompanyRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCompanyPage(slug);
  if (!page) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: page.title, item: `${site.url}/${page.slug}` },
    ],
  };

  const faqSchema =
    page.faqs && page.faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        crumbs={[{ label: 'Home', href: '/' }, { label: page.title }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="space-y-5">
              {page.intro.map((para, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-brand-800">
                  {para}
                </p>
              ))}
            </div>

            {page.bullets && page.bullets.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {page.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800"
                  >
                    <Icon name="check" className="h-5 w-5 flex-shrink-0 text-pink-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {page.faqs && page.faqs.length > 0 && (
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-extrabold text-brand-950">Frequently asked questions</h2>
                <div className="mt-6 space-y-4">
                  {page.faqs.map((f) => (
                    <div key={f.q} className="card">
                      <h3 className="text-lg font-bold text-brand-950">{f.q}</h3>
                      <p className="mt-2 text-brand-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card bg-blue-section text-white">
              <h2 className="text-xl font-bold text-white">Talk to a real person</h2>
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
          </aside>
        </div>
      </section>
    </>
  );
}
