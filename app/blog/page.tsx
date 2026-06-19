import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { posts } from '@/content/posts';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Home Comfort Blog',
  description:
    'Practical heating, cooling, plumbing, and electrical tips from the licensed technicians at ' +
    site.name + '.',
  alternates: { canonical: '/blog' },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHero
        eyebrow="The blog"
        title="Home comfort tips, minus the jargon"
        description="Straight answers from our technicians on the heating, cooling, plumbing, and electrical questions homeowners actually ask."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="card card-hover group grid gap-8 lg:grid-cols-2 lg:items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-500">
                <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-600">
                  {featured.category}
                </span>
                <span>{formatDate(featured.date)}</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-brand-950 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-brand-600">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
                Read the article
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
            <div className="order-1 grid aspect-[16/10] place-items-center rounded-2xl bg-hero-pink lg:order-2">
              <Icon name="quote" className="h-16 w-16 text-white/40" />
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card card-hover group flex flex-col"
              >
                <div className="grid aspect-[16/9] place-items-center rounded-2xl bg-brand-50">
                  <Icon name="heart" className="h-10 w-10 text-brand-300" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-600">
                    {post.category}
                  </span>
                  <span>{post.readMinutes} min</span>
                </div>
                <h3 className="mt-3 flex-1 font-display text-lg font-bold text-brand-950">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-brand-600">{post.excerpt}</p>
                <span className="mt-4 text-xs font-medium text-brand-400">
                  {formatDate(post.date)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageSections />
    </>
  );
}
