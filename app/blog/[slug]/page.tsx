import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { posts, getPost } from '@/content/posts';
import { site } from '@/content/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.role },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
    ],
  };

  const faqSchema = post.faqs && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <PageHero
        eyebrow={post.category}
        title={post.title}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
      />

      <article className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            {/* Byline */}
            <div className="flex items-center gap-4 border-b border-brand-900/5 pb-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-section font-display text-lg font-bold text-white">
                {post.author.name.slice(0, 1)}
              </span>
              <div className="text-sm">
                <span className="block font-bold text-brand-950">{post.author.name}</span>
                <span className="block text-brand-500">
                  {post.author.role} · {formatDate(post.date)} · {post.readMinutes} min read
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="prose-custom mt-8 space-y-5">
              {post.body.map((para, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-brand-800">
                  {para}
                </p>
              ))}
            </div>

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faq" className="mt-12">
                <h2 className="text-2xl font-extrabold text-brand-950">
                  Frequently asked questions
                </h2>
                <div className="mt-6 space-y-4">
                  {post.faqs.map((f) => (
                    <div key={f.q} className="card">
                      <h3 className="text-lg font-bold text-brand-950">{f.q}</h3>
                      <p className="mt-2 text-brand-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Inline CTA */}
            <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center">
              <h2 className="text-2xl font-extrabold text-white">Rather just have us handle it?</h2>
              <p className="mx-auto mt-2 max-w-md text-brand-50">
                Our licensed technicians serve {site.serviceArea}. Same-day service available.
              </p>
              <a href={site.primaryPhone.href} className="btn-pink mt-5">
                <Icon name="phone" className="h-4 w-4" />
                Call {site.primaryPhone.number}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-500">
                On this page
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-brand-700 transition hover:text-brand-500">
                    Introduction
                  </a>
                </li>
                {post.faqs && post.faqs.length > 0 && (
                  <li>
                    <a href="#faq" className="text-brand-700 transition hover:text-brand-500">
                      FAQ
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-500">
                Keep reading
              </h2>
              <ul className="mt-4 space-y-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="group block">
                      <span className="block text-sm font-bold text-brand-900 transition group-hover:text-brand-600">
                        {r.title}
                      </span>
                      <span className="text-xs text-brand-400">{r.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
