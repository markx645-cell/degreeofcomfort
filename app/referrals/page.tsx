import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Referral Program',
  description: `Refer a friend to ${site.name} and earn $50 when they have a qualifying HVAC or tankless system installed.`,
  alternates: { canonical: '/referrals' },
};

const inputClass =
  'w-full rounded-lg border border-brand-200 px-4 py-3 text-sm outline-none focus:border-pink-400';

const faqs = [
  {
    title: 'What is a referral?',
    body: (
      <>
        <p>
          A referral happens when a {site.name} customer connects our team with a new customer they
          feel could benefit from our plumbing, heating, and air conditioning services.
        </p>
        <p>
          Please note that you cannot refer yourself, a customer who is already using {site.name}, or
          someone who has already been in contact with our team.
        </p>
      </>
    ),
  },
  {
    title: 'Who should I refer?',
    body: (
      <p>
        If you know a homeowner with plumbing, heating, or air conditioning needs, we encourage you
        to refer them to us. We are always adding new services and limited-time offers, so be sure to
        check back often to see what we have added.
      </p>
    ),
  },
  {
    title: 'How do I receive my $50 referral rewards?',
    body: (
      <p>
        If our team determines we would be a good fit for your referral, we will contact them to
        schedule an appointment. If they qualify and purchase a new complete heating and cooling
        system or tankless water heater within 5 days of your referral submission, you are eligible
        for a reward.
      </p>
    ),
  },
  {
    title: 'When will I receive my rewards?',
    body: (
      <p>
        For the $50 complete heating and cooling system installation reward, payments take about 6–8
        weeks to arrive once you have been notified of your eligibility. If you earn a total of $600
        or more, we will provide you with a W-9 tax form to complete and submit to us.
      </p>
    ),
  },
  {
    title: 'What are the official rules?',
    body: (
      <p>
        Please reach out to our team for the full terms and conditions of our Referral Rewards
        Program.
      </p>
    ),
  },
  {
    title: 'Who do I talk to if I have questions?',
    body: (
      <p>
        Please email us at{' '}
        <a href={`mailto:${site.email}`} className="font-semibold text-pink-500">
          {site.email}
        </a>{' '}
        with any referral-related questions. We are happy to help!
      </p>
    ),
  },
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referrals"
        title="The More You Refer, the More You Earn!"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Referral Program' }]}
      />

      <section className="py-16">
        <MainWithSidebar>
          <p className="text-[17px] leading-relaxed text-ink/75">
            Connect us with customers you believe would benefit from our plumbing, heating, and air
            conditioning services. You will earn cash the moment they make a purchase — and the top
            referrer of the year wins a new tankless water heater!
          </p>
          <div className="mt-4 rounded-2xl bg-brand-50 p-5">
            <span className="font-display text-3xl font-black text-pink-500">$50</span>
            <span className="ml-2 text-sm font-semibold text-brand-700">
              if your referral has an HVAC system or tankless system installed — plus more cash for
              every new customer referral.
            </span>
          </div>

          {/* How it works */}
          <h2 className="mt-10 section-title text-brand-700">How It Works</h2>
          <div className="mt-4 space-y-3">
            <p className="flex gap-3 text-sm text-ink/75">
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-pink-500 text-xs font-bold text-white">
                1
              </span>
              <span>
                <strong className="text-brand-700">Submit your referral</strong> using the form
                below.
              </span>
            </p>
            <p className="flex gap-3 text-sm text-ink/75">
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-pink-500 text-xs font-bold text-white">
                2
              </span>
              <span>
                If they are a new customer and have an HVAC system or tankless water heater
                installed, you are eligible to receive $50. The referral form must be submitted
                within 5 days of the customer&rsquo;s installation.
              </span>
            </p>
          </div>

          {/* Referral form */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-100">
            <h3 className="font-display text-lg font-extrabold text-brand-700">Submit a Referral</h3>
            <form className="mt-4 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={inputClass} placeholder="Your Name" aria-label="Your Name" />
                <input className={inputClass} type="email" placeholder="Your Email" aria-label="Your Email" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={inputClass} placeholder="Referral's Name" aria-label="Referral's Name" />
                <input className={inputClass} placeholder="Referral's Phone" aria-label="Referral's Phone" />
              </div>
              <input className={inputClass} placeholder="Referral's Email (optional)" aria-label="Referral's Email" />
              <button type="button" className="btn-pink w-full">
                Submit Referral
              </button>
            </form>
          </div>

          {/* FAQ */}
          <h2 className="mt-10 section-title text-brand-700">Referral FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs} defaultOpen={-1} />
          </div>
        </MainWithSidebar>
      </section>

      <PageSections />
    </>
  );
}
