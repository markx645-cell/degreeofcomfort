import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `${site.name} is a family-owned heating, cooling, plumbing, and electrical company serving ${site.serviceArea}. Meet the team and our story.`,
  alternates: { canonical: '/about' },
};

const values = [
  { icon: 'heart' as const, title: 'Family Owned & Operated', text: 'Locally owned, with the same family values we started with.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'We staff for demand so most calls are handled the same day.' },
  { icon: 'badge' as const, title: 'Upfront, Flat-Rate Pricing', text: 'You approve the price before any work begins.' },
  { icon: 'shield' as const, title: 'Satisfaction Guaranteed', text: 'If you are not happy, we make it right.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Welcome to the family */}
      <section className="py-16">
        <div className="container-page mx-auto max-w-3xl">
          {/* Video placeholder */}
          <div className="relative grid aspect-video place-items-center overflow-hidden rounded-2xl bg-brand-900">
            <button
              type="button"
              className="grid h-20 w-20 place-items-center rounded-full bg-white/90 text-pink-500 shadow-card transition hover:scale-105"
              aria-label="Play story video"
            >
              <Icon name="play" className="h-9 w-9 translate-x-0.5 fill-current" />
            </button>
            <div className="absolute bottom-4 left-4 text-left">
              <p className="font-display text-lg font-bold text-white">Customer Name</p>
              <span className="mt-1 inline-block rounded-full bg-cobalt px-3 py-0.5 text-xs font-semibold text-white">
                Customer
              </span>
            </div>
          </div>

          <h2 className="mt-8 font-display text-4xl font-black uppercase leading-[1.02] text-pink-500 sm:text-5xl">
            Welcome to the Family. We&rsquo;re Glad You&rsquo;re Here.
          </h2>
          <h3 className="mt-4 font-display text-xl font-extrabold text-brand-950 sm:text-2xl">
            How {site.name} turned a passion into a business.
          </h3>

          <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-ink/75">
            <p>
              {site.name} began with a simple love for the trade and a desire to help people when
              they need it most. What started as a passion for keeping homes comfortable grew into a
              family-owned company built to treat every customer like a neighbor.
            </p>
            <p>
              {site.name} is family owned and operated. Our number one priority is to provide the
              best quality service and solutions to our customers. Our licensed technicians care for
              your home and complete every job with speed and precision. The most important part of
              our business is you, the customer — if you are not happy, we are not happy. That is our
              pledge to you.
            </p>
            <p>
              Your home should be comfortable, clean, and efficient, and that is exactly what our
              team delivers. We provide heating and cooling products and services that create even
              temperatures, clean air, and humidity control throughout your home. We also help
              homeowners with maintenance and upkeep of their plumbing systems, including water
              heater replacement.
            </p>
            <p>
              As we grow across {site.serviceArea} and beyond, we stay grounded in the same trusted,
              family values we started with.
            </p>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-3.5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-base font-extrabold text-brand-700">{v.title}</h4>
                  <p className="text-sm text-ink/70">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we wear orange */}
      <section className="relative overflow-hidden bg-brand-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/why-orange.jpg)' }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-pink-600/30"
          aria-hidden
        />
        <div className="container-page relative py-20">
          <div className="max-w-2xl text-white">
            <h2 className="font-display text-4xl font-black uppercase text-pink-500 sm:text-5xl">
              Why We Wear Orange.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/90 sm:text-base">
              Our team wears orange to stand out and be memorable. It is part of a business model
              driven by building strong relationships with our customers through efficient,
              exceptional service. To us, orange stands for energy, warmth, and a genuine desire to
              help people in their time of need. We back that attitude with the highest-quality
              products and unmatched service — because the most important part of our business is you.
            </p>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
