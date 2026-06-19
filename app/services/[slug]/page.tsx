import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { services, getService, type Service } from '@/content/services';
import { servicePages, getServicePage, type ServicePage } from '@/content/servicePages';
import { site } from '@/content/site';

export function generateStaticParams() {
  return [...services.map((s) => s.slug), ...servicePages.map((s) => s.slug)].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (service) {
    return {
      title: `${service.title} Services`,
      description: service.summary,
      alternates: { canonical: `/services/${service.slug}` },
      openGraph: { title: `${service.title} Services`, description: service.summary },
    };
  }
  const sub = getServicePage(slug);
  if (sub) {
    return {
      title: sub.title,
      description: sub.blurb,
      alternates: { canonical: `/services/${sub.slug}` },
      openGraph: { title: sub.title, description: sub.blurb },
    };
  }
  return {};
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return <MainService service={service} />;

  const sub = getServicePage(slug);
  if (sub) return <SubService page={sub} />;

  notFound();
}

/* ─────────── Main category page (rich content) ─────────── */
function MainService({ service }: { service: Service }) {
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
      { '@type': 'ListItem', position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.tagline}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.title }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800">
                  <Icon name="check" className="h-5 w-5 flex-shrink-0 text-brand-500" />
                  {h}
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-5">
              {service.body.map((para, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-brand-800">
                  {para}
                </p>
              ))}
            </div>
            <section id="faq" className="mt-12">
              <h2 className="text-2xl font-extrabold text-brand-950">{service.title} questions, answered</h2>
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

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <BookCard title={service.title} />
            <div className="card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-500">Other services</h2>
              <ul className="mt-4 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/services/${o.slug}`} className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-brand-50">
                      <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${o.accent} text-white`}>
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

/* ─────────── Sub-service page (templated content) ─────────── */
function SubService({ page }: { page: ServicePage }) {
  const parent = getService(page.parentSlug);
  const parentTitle = parent?.title ?? page.category;
  const lower = page.title.toLowerCase();

  const body = [
    `${page.blurb} Our team provides ${lower} for homeowners across ${site.serviceArea}, with same-day availability and a flat-rate price you approve before we start.`,
    `Every job is handled by a licensed, background-checked technician who treats your home with respect and cleans up before leaving. No hourly surprises, and no overtime fees on nights or weekends.`,
    `Not sure ${lower} is what you need? Call us and we will give you honest advice — even if that means a smaller, less expensive fix.`,
  ];

  const highlights = [
    'Same-day availability',
    'Upfront, flat-rate pricing',
    'Licensed & background-checked techs',
    'Satisfaction guaranteed',
  ];

  const faqs = [
    {
      q: `Do you offer same-day ${lower}?`,
      a: `In most cases, yes. We staff for demand so most ${page.category.toLowerCase()} calls are handled the same day you reach out.`,
    },
    {
      q: `How much does ${lower} cost?`,
      a: `Every job is quoted at a flat rate before we begin, based on your home and the work involved. Call for a free, no-obligation estimate.`,
    },
  ];

  const related = servicePages.filter((s) => s.category === page.category && s.slug !== page.slug).slice(0, 8);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: page.title,
    description: page.blurb,
    provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
    areaServed: site.serviceArea,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
      { '@type': 'ListItem', position: 3, name: parentTitle, item: `${site.url}/services/${page.parentSlug}` },
      { '@type': 'ListItem', position: 4, name: page.title, item: `${site.url}/services/${page.slug}` },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow={parentTitle}
        title={page.title}
        description={page.blurb}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: parentTitle, href: `/services/${page.parentSlug}` },
          { label: page.title },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800">
                  <Icon name="check" className="h-5 w-5 flex-shrink-0 text-brand-500" />
                  {h}
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-5">
              {body.map((para, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-brand-800">
                  {para}
                </p>
              ))}
            </div>
            <section id="faq" className="mt-12">
              <h2 className="text-2xl font-extrabold text-brand-950">{page.title} questions, answered</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="card">
                    <h3 className="text-lg font-bold text-brand-950">{f.q}</h3>
                    <p className="mt-2 text-brand-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <BookCard title={page.title} />
            <div className="card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-500">
                More {parentTitle.toLowerCase()} services
              </h2>
              <ul className="mt-4 space-y-1">
                <li>
                  <Link href={`/services/${page.parentSlug}`} className="block rounded-lg px-2 py-1.5 text-sm font-bold text-pink-500 hover:bg-brand-50">
                    All {parentTitle} →
                  </Link>
                </li>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/services/${r.slug}`} className="block rounded-lg px-2 py-1.5 text-sm font-semibold text-brand-900 hover:bg-brand-50 hover:text-pink-500">
                      {r.title}
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

function BookCard({ title }: { title: string }) {
  return (
    <div className="card bg-blue-section text-white">
      <h2 className="text-xl font-bold text-white">Book {title.toLowerCase()}</h2>
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
  );
}
