import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'The Degree of Comfort Difference',
  description: `What sets ${site.name} apart: honest advice, upfront pricing, and a real commitment to the community we serve.`,
  alternates: { canonical: '/difference' },
};

const setsApart = [
  'No-pressure, repair-first recommendations',
  'Upfront, flat-rate pricing with no overtime fees',
  'Licensed, insured, and background-checked technicians',
  'Clean, respectful service in your home',
];

// Story slots — replace the placeholder copy and add /public images for your own
// community work (with the permission of anyone featured).
const stories = [
  {
    image: '/difference-1.jpg',
    title: 'A Community Effort',
    body: [
      'We believe a great local company is measured by more than the work it bills for. It is measured by how it shows up for the families and neighbors around it.',
      'Whether it is lending a hand to a household going through a tough stretch or teaming up with local organizations to keep homes safe and comfortable, our team is always looking for ways to give back to the community that supports us.',
    ],
    reverse: false,
  },
  {
    image: '/difference-2.jpg',
    title: 'Giving Back, Year-Round',
    body: [
      'Giving back is not a one-time event for us — it is part of how we operate all year long.',
      'From supporting youth sports and school programs to pitching in on local drives, we are proud to invest in the neighborhoods we serve across Cincinnati and the surrounding area.',
    ],
    reverse: true,
  },
];

export default function DifferencePage() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="The Degree of Comfort Difference"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'The Degree of Comfort Difference' }]}
      />

      {/* Passion banner */}
      <section className="bg-cream py-10">
        <div className="container-page">
          <p className="mx-auto max-w-4xl text-center font-display text-xl font-extrabold uppercase leading-snug tracking-tight text-brand-600 sm:text-2xl">
            People don&rsquo;t care how much we know, until they know how much we care. Service is our
            passion.
          </p>
        </div>
      </section>

      {/* Intro + what sets us apart */}
      <section className="py-16">
        <MainWithSidebar>
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="section-title text-brand-700">More Than a Repair</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              Plenty of companies can fix a furnace. What sets {site.name} apart is how we do it:
              honest advice, clean job sites, and a price you approve before we start. We would
              rather earn a customer for life than win a single oversized sale — if a repair makes
              more sense than a replacement, we will tell you so.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {setsApart.map((s) => (
              <li
                key={s}
                className="flex items-start gap-2.5 rounded-2xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800"
              >
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {s}
              </li>
            ))}
          </ul>
          </div>
        </MainWithSidebar>
      </section>

      {/* Community stories */}
      <section className="bg-cream py-16">
        <div className="container-page space-y-12">
          {stories.map((s) => (
            <div
              key={s.title}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div
                className={`aspect-[4/3] rounded-2xl bg-brand-200 bg-cover bg-center shadow-card ${
                  s.reverse ? 'lg:order-2' : ''
                }`}
                style={{ backgroundImage: `url(${s.image})` }}
                role="img"
                aria-label={s.title}
              />
              <div className={s.reverse ? 'lg:order-1' : ''}>
                <h3 className="font-display text-2xl font-extrabold text-brand-950">{s.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/70">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageSections />
    </>
  );
}
