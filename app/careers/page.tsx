import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Careers',
  description: `Join the ${site.name} team. Great pay, real benefits, and a family-owned culture serving ${site.serviceArea}.`,
  alternates: { canonical: '/careers' },
};

// NOTE: confirm these reflect the benefits you actually offer before going live.
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
];

export default function CareersPage() {
  const applyHref = `mailto:${site.email}?subject=Career%20Opportunity%20at%20${encodeURIComponent(
    site.name
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Careers"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      {/* Hiring pitch */}
      <section className="py-14">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h2 className="section-title text-brand-700">
            Great Opportunities at a Great Company. Join Our Team Today.
          </h2>
          <p className="mx-auto mt-4 text-[17px] leading-relaxed text-ink/75">
            Are you ready to take your career to the next level? Tired of being under-appreciated for
            the great work you do? Come work with a team that is passionate about taking care of its
            customers and each other. {site.name} is always looking for skilled, friendly
            professionals who want to grow with a company that invests in its people.
          </p>
          <a href={applyHref} className="btn-pink mt-6">
            Apply Today
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Video + benefits */}
      <section className="pb-16">
        <div className="container-page grid items-stretch gap-0 overflow-hidden rounded-2xl shadow-card lg:grid-cols-2">
          {/* Video */}
          <div className="relative grid min-h-[320px] place-items-center bg-brand-900">
            <button
              type="button"
              className="grid h-20 w-20 place-items-center rounded-full bg-white/90 text-pink-500 shadow-card transition hover:scale-105"
              aria-label="Play recruiting video"
            >
              <Icon name="play" className="h-9 w-9 translate-x-0.5 fill-current" />
            </button>
            <div className="absolute -bottom-3 -left-3 grid h-20 w-20 place-items-center rounded-full bg-pink-500 text-center text-white shadow-cta">
              <div className="pl-2 pt-2">
                <div className="font-display text-base font-black leading-none">
                  {site.reviewCount.toLocaleString()}+
                </div>
                <div className="text-[7px] font-bold uppercase tracking-wide">5-Star Reviews</div>
              </div>
            </div>
            <a
              href={applyHref}
              className="absolute inset-x-0 bottom-0 bg-cobalt py-3 text-center text-sm font-extrabold uppercase tracking-wide text-white transition hover:brightness-110"
            >
              Click to Watch Full Video
            </a>
          </div>

          {/* Benefits */}
          <div className="bg-pink-500 p-8">
            <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm font-semibold text-white">
                  <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-white/25">
                    <Icon name="check" className="h-3.5 w-3.5 text-white" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Positions + training + confidentiality */}
      <section className="bg-cream py-16">
        <MainWithSidebar>
          <div className="grid gap-6">
          <div className="card">
            <div
              className="mb-5 aspect-[16/7] rounded-xl bg-brand-100 bg-cover bg-center"
              style={{ backgroundImage: 'url(/careers-1.jpg)' }}
              role="img"
              aria-label="Available positions"
            />
            <h3 className="font-display text-lg font-extrabold text-brand-700">Available Positions</h3>
            <p className="mt-2 text-sm text-ink/70">
              We hire across the trades — service technicians, installers, apprentices, and office
              team members. Send your resume and we will be in touch.
            </p>
            <a href={applyHref} className="btn-pink mt-4">
              Apply Now
            </a>
          </div>
          <div className="card">
            <div
              className="mb-5 aspect-[16/7] rounded-xl bg-brand-100 bg-cover bg-center"
              style={{ backgroundImage: 'url(/careers-2.jpg)' }}
              role="img"
              aria-label="Training program"
            />
            <h3 className="font-display text-lg font-extrabold text-brand-700">
              Interested in Learning the Trade?
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              New to the field? Through {site.name} University we train motivated people from the
              ground up, with ongoing paid education.
            </p>
            <Link href="/university" className="btn-ghost mt-4">
              Learn More
            </Link>
          </div>
          </div>
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
