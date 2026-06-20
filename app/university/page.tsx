import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { awards } from '@/content/home';

export const metadata: Metadata = {
  title: 'Degree of Comfort University',
  description: `${site.name} University is our paid apprenticeship program that trains the next generation of HVAC, plumbing, and electrical professionals — no experience needed.`,
  alternates: { canonical: '/university' },
};

const benefits = [
  'We are very involved in the communities we serve',
  'Paid vacation days',
  '401(k) with company match',
  'Company-provided uniforms',
  'Plenty of opportunities — we service the entire tri-state area',
  'Large portion of medical insurance paid for',
  '100% paid short-term and long-term disability',
  'Company-provided trucks, fully stocked with parts and tools',
  'Established, family-owned local company',
  'Family owned and managed',
  'A Trade Scholarship supporting future HVAC and plumbing professionals',
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 text-sm text-ink/75">
          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-600" />
          {t}
        </li>
      ))}
    </ul>
  );
}

const faqs = [
  {
    title: 'Requirements to Apply?',
    body: (
      <Bullets
        items={[
          '18 years old or older',
          "Valid driver's license and pass a motor vehicle background check",
          'No criminal history and pass a background check',
          'No experience needed',
          'A positive attitude and a genuine want to learn and grow as a person',
          'A desire to provide exceptional customer service, stand out in a crowd, and be proud to wear orange',
        ]}
      />
    ),
  },
  {
    title: 'How to Apply?',
    body: <Bullets items={['Online at our website', 'Open recruitment nights']} />,
  },
  {
    title: 'How Long is the Program?',
    body: <Bullets items={['3–4 months']} />,
  },
  {
    title: 'Do I Have to Pay for the Program? Or Will I Receive Compensation?',
    body: (
      <Bullets
        items={[
          `From day one you are a ${site.name} employee`,
          'This is a paid apprenticeship, Monday through Friday. You get paid to learn!',
          'Learning is your primary job during this time period',
        ]}
      />
    ),
  },
  {
    title: 'Do I Have a Job After I Complete the Program?',
    body: (
      <p className="text-sm leading-relaxed text-ink/75">
        Learn from the best and become one of the best. The goal of the program is to hire the right
        people with the right attitude, a willingness to learn, and a want to provide the best
        customer service to every customer. After completing the program, you get the keys to your
        own {site.name} vehicle.
      </p>
    ),
  },
];

export default function UniversityPage() {
  const applyHref = `mailto:${site.email}?subject=${encodeURIComponent(site.name + ' University')}`;

  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Degree of Comfort University"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Degree of Comfort University' }]}
      />

      {/* Great opportunities intro */}
      <section className="py-14">
        <div className="container-page">
          <h2 className="font-display text-4xl font-black uppercase leading-[1.05] text-brand-600 sm:text-5xl">
            Great Opportunities at a Great Company.
          </h2>
          <p className="mt-3 font-display text-xl font-extrabold uppercase tracking-wide text-pink-500 sm:text-2xl">
            Sign Up for {site.name} University Today!
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink/70">
            Learn from the best and become one of the best. The goal of the program is to hire the
            right people with the right attitude and a willingness to learn — people who want to
            provide the best customer service to every customer we serve.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-8">
            {awards.map((a) => (
              <div
                key={a.label}
                className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full bg-brand-50 px-2 text-center ring-2 ring-brand-100 sm:h-24 sm:w-24"
              >
                <Icon name={a.icon} className="h-6 w-6 text-pink-500" />
                <span className="text-[8px] font-extrabold uppercase leading-tight tracking-wide text-brand-700 sm:text-[9px]">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why University — full width */}
      <section className="bg-cream py-14">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div
            className="aspect-[4/3] rounded-2xl bg-brand-200 bg-cover bg-center shadow-card"
            style={{ backgroundImage: 'url(/university.jpg)' }}
            role="img"
            aria-label="Degree of Comfort University team"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-pink-500 sm:text-4xl">
              Why {site.name} University?
            </h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm font-semibold text-brand-800">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-pink-500 text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          {/* Program FAQ */}
          <h2 className="mt-12 section-title text-brand-700">The Program</h2>
          <div className="mt-4">
            <Accordion items={faqs} variant="bar" defaultOpen={0} />
          </div>

          <a href={applyHref} className="btn-pink mt-8 w-full text-base">
            Learn More
          </a>
        </MainWithSidebar>
      </section>

      {/* Confidentiality banner */}
      <section className="relative overflow-hidden bg-brand-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/careers-confidentiality.jpg)' }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40"
          aria-hidden
        />
        <div className="container-page relative py-20">
          <div className="max-w-2xl text-white">
            <h2 className="font-display text-4xl font-black uppercase leading-[1.05] text-pink-500 sm:text-5xl">
              When You Apply, We Promise Confidentiality.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/90 sm:text-base">
              We promise complete confidentiality and privacy, and we will not contact your current
              or previous employer without your permission. Reaching out to us never affects your
              current job. Send us your resume today — we look forward to meeting you soon!
            </p>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
