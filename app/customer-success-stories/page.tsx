import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Customer Success Stories',
  description: `Real-world examples of the heating, cooling, plumbing, and electrical problems ${site.name} solves for homeowners across ${site.serviceArea}.`,
  alternates: { canonical: '/customer-success-stories' },
};

// Representative examples of the work we do. Replace with real customer stories
// (with the customer's permission) whenever you have them.
const stories = [
  {
    icon: 'snowflake' as const,
    title: 'Same-Day AC Rescue',
    text: 'When a family lost cooling during the first heat wave of the summer, our team had a technician at the door that afternoon and cold air flowing again before dinner — with a flat-rate price quoted before any work began.',
  },
  {
    icon: 'flame' as const,
    title: 'No Heat on the Coldest Night',
    text: 'A furnace that quit overnight left a household scrambling. Our emergency team diagnosed and repaired it the same night, and included a carbon monoxide safety check before leaving.',
  },
  {
    icon: 'droplet' as const,
    title: 'Catching a Hidden Leak',
    text: 'A creeping water bill turned out to be a slab leak. A camera inspection pinpointed it fast, and a targeted repair saved the homeowner from tearing up the whole floor.',
  },
  {
    icon: 'bolt' as const,
    title: 'Safer, Smarter Electrical',
    text: 'An aging panel that kept tripping got a proper assessment and a code-compliant upgrade — making room for the EV charger the homeowner had been wanting to add.',
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Success Stories"
        title="Customer Success Stories"
        description={`A look at the kinds of problems we solve every day for homeowners across ${site.serviceArea}.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'The Degree of Comfort Difference', href: '/difference' },
          { label: 'Customer Success Stories' },
        ]}
      />

      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <div key={s.title} className="card flex gap-4">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-pink-500 text-white">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-lg font-extrabold text-brand-700">{s.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="container-page mt-10 text-center">
          <p className="text-sm text-ink/60">
            Have a story of your own? We would love to hear it.
          </p>
          <a href={site.primaryPhone.href} className="btn-pink mt-4">
            <Icon name="phone" className="h-4 w-4" />
            {site.primaryPhone.number}
          </a>
        </div>
      </section>

      <PageSections />
    </>
  );
}
