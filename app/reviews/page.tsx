import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { site } from '@/content/site';
import { testimonials } from '@/content/home';

export const metadata: Metadata = {
  title: 'Reviews',
  description: `See what homeowners across ${site.serviceArea} are saying about ${site.name}.`,
  alternates: { canonical: '/reviews' },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Reviews"
        description={`What homeowners across ${site.serviceArea} say about working with ${site.name}.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'The Degree of Comfort Difference', href: '/difference' },
          { label: 'Reviews' },
        ]}
      />

      <section className="py-16">
        <div className="container-page">
          {/* Rating summary */}
          <div className="mx-auto max-w-xl rounded-2xl bg-cream p-8 text-center ring-1 ring-brand-100">
            <div className="font-display text-5xl font-black text-brand-700">{site.rating}</div>
            <div className="mt-2 flex justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-6 w-6 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="mt-2 text-sm font-semibold text-ink/70">
              Based on {site.reviewCount.toLocaleString()}+ verified reviews
            </p>
            <a href={site.social[0].href} className="btn-pink mt-5">
              See All Reviews on Google
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          {/* Review cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col">
                <Icon name="quote" className="h-8 w-8 text-brand-200" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">
                  {t.text}
                </blockquote>
                <div className="mt-5 flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <figcaption className="mt-3 border-t border-brand-900/5 pt-3">
                  <span className="block text-sm font-bold text-brand-950">{t.name}</span>
                  <span className="block text-xs text-brand-500">{t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-ink/60">Worked with us recently? We would love your feedback.</p>
            <a href={site.social[0].href} className="btn-ghost mt-4">
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
