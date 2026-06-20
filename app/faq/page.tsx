import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import FaqTabs from '@/components/FaqTabs';
import { site } from '@/content/site';
import { faqGroups } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: `Answers to common heating, cooling, plumbing, and electrical questions from ${site.name} in ${site.serviceArea}.`,
  alternates: { canonical: '/faq' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Answers"
        title="Frequently Asked Questions"
        description="Straight answers to the heating, cooling, plumbing, and electrical questions homeowners ask us most."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      <section className="py-16">
        <MainWithSidebar>
          <FaqTabs />
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
