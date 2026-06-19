import Link from 'next/link';
import Icon from './Icon';
import TornEdge from './TornEdge';
import { site } from '@/content/site';
import { benefits, awards, clubPerks, fundingPoints, serviceAreas } from '@/content/home';

// Shared marketing sections reused across the homepage and every interior page.
export default function PageSections() {
  return (
    <>
      <IntroColumns />
      <WhyChoose />
      <TornEdge fill="#1f48c8" />
      <WorkStandsOut />
      <TrustedExperts />
      <GetFunding />
      <ComfortClub />
      <Community />
      <TornEdge fill="#1f48c8" />
      <BookAndAreas />
    </>
  );
}

/* ─────────────── Intro columns ─────────────── */
export function IntroColumns() {
  const cols = [
    {
      icon: 'house' as const,
      title: 'What We Do',
      text: `At ${site.name}, it all starts with passion. We are a family-owned business specializing in heating, cooling, plumbing, and electrical service. With years of experience and a team of certified residential technicians, we provide reliable service that homeowners can depend on.`,
    },
    {
      icon: 'pin' as const,
      title: 'Where We Serve',
      text: `We are proud to serve ${site.serviceArea} and the surrounding Tri-State communities. We love our region, which blends the warmth of happy small-town charm with the variety and excitement of big-city life.`,
    },
    {
      icon: 'star' as const,
      title: `Why Choose ${site.name}`,
      text: `Our expertly trained team is committed to quality work and customer satisfaction on every job. From upfront, flat-rate pricing to same-day service and a satisfaction guarantee, we earn our customers' trust one home at a time.`,
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container-page grid gap-10 text-center md:grid-cols-3">
        {cols.map((col) => (
          <div key={col.title} className="flex flex-col items-center">
            <Icon name={col.icon} className="h-14 w-14 text-pink-500" />
            <h2 className="mt-5 font-display text-xl font-extrabold text-brand-700">{col.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{col.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── Why choose ─────────────── */
export function WhyChoose() {
  return (
    <section id="why" className="bg-white py-16">
      <div className="container-page">
        <h2 className="section-title max-w-3xl text-brand-700">
          Why Choose {site.name} as Your Residential HVAC, Plumbing &amp; Electrical Contractors?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Video placeholder */}
          <div className="relative grid aspect-video place-items-center overflow-hidden rounded-2xl bg-brand-900">
            <button
              type="button"
              className="grid h-20 w-20 place-items-center rounded-full bg-white/90 text-brand-700 shadow-card transition hover:scale-105"
              aria-label="Play intro video"
            >
              <Icon name="play" className="h-9 w-9 translate-x-0.5 fill-current" />
            </button>
          </div>

          {/* Benefits list */}
          <div>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-3.5">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-pink-500 text-white">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-brand-700">{b.title}</h3>
                    <p className="text-sm text-ink/70">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-pink-500"
            >
              Read More
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Trust-seal medallions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {awards.map((a) => (
            <div
              key={a.label}
              className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-full bg-brand-50 px-3 text-center ring-4 ring-brand-100 sm:h-28 sm:w-28"
            >
              <Icon name={a.icon} className="h-6 w-6 text-pink-500" />
              <span className="text-[9px] font-extrabold uppercase leading-tight tracking-wide text-brand-700 sm:text-[10px]">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Work stands out ─────────────── */
export function WorkStandsOut() {
  return (
    <section className="relative bg-blue-section pb-16 pt-12">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* tech photo placeholder */}
        <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20">
          <span className="text-sm font-semibold text-white/70">[ Team photo ]</span>
        </div>

        <div className="text-white">
          <h2 className="section-title">Our Work Stands Out</h2>
          <p className="mt-1 text-lg font-bold uppercase tracking-wide text-pink-400">
            Even more than our shirts
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-100">
            We are a local, family-owned plumbing and HVAC company built on showing up when we say we
            will, quoting the price before we start, and treating your home like our own. Our
            technicians are background-checked, factory-trained, and genuinely happy to help.
          </p>

          {/* Testimonial card */}
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-card">
            <h3 className="font-display text-lg font-extrabold text-brand-700">
              See What Our Happy Customers Say
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              &ldquo;Our AC died during the first heat wave and they had it running again by early
              afternoon. Quoted the price first, no surprises on the bill. Friendly, fast, and
              clean.&rdquo;
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-extrabold text-brand-700">{site.rating}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
              </div>
              <span className="text-xs font-bold uppercase text-ink/60">
                {site.reviewCount.toLocaleString()}+ Reviews on Google
              </span>
              <a href={site.social[0].href} className="btn-pink ml-auto px-5 py-2 text-xs">
                See All Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Trusted experts ─────────────── */
export function TrustedExperts() {
  return (
    <section className="bg-white py-16">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h2 className="section-title text-brand-700">
            Your Trusted Plumbing, HVAC &amp; Electrical Experts in {site.serviceArea}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            From a midsummer AC breakdown to a slow drain that never quite clears, we handle the whole
            home with one trusted crew. Same-day service, upfront flat-rate pricing, and a clean job
            site every time. When something stops working, you get a licensed technician at the door,
            not a runaround.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-pink-500"
          >
            Read More
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid aspect-[5/3] place-items-center overflow-hidden rounded-2xl bg-brand-50 ring-1 ring-brand-100">
          <span className="text-sm font-semibold text-brand-400">[ Service vans photo ]</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Get funding ─────────────── */
export function GetFunding() {
  return (
    <section className="bg-white py-14">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="section-title text-brand-700">Get Funding Today!</h2>
          <Link href="/financing" className="btn-pink mt-5">
            See If You Qualify Today
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <ul className="space-y-3">
          {fundingPoints.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
              <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-lime-500 text-white">
                <Icon name="check" className="h-4 w-4" />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────── Comfort club ─────────────── */
export function ComfortClub() {
  return (
    <section className="bg-blue-section">
      <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2">
        <div className="text-white">
          <h2 className="section-title">Comfort Club</h2>
          <ul className="mt-6 space-y-3">
            {clubPerks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm font-semibold">
                <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-pink-500">
                  <Icon name="check" className="h-3.5 w-3.5 text-white" />
                </span>
                {perk}
              </li>
            ))}
          </ul>
          <Link href="/comfort-club" className="btn-pink mt-7">
            See If You Qualify Today
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20">
          <span className="text-sm font-semibold text-white/70">[ Handshake photo ]</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Community ─────────────── */
export function Community() {
  return (
    <section className="bg-white py-16">
      <div className="container-page max-w-3xl">
        <h2 className="section-title text-brand-700">In the Community</h2>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">
          We believe a great local company is part of the neighborhood it serves. We sponsor youth
          sports, support local schools and food drives, and show up for the families around us the
          same way we show up for their homes. When you hire us, you are keeping good work and good
          people right here in the community.
        </p>
        <Link href="/about" className="btn-pink mt-6">
          Learn More
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ─────────────── Book + areas ─────────────── */
export function BookAndAreas() {
  return (
    <section id="areas" className="bg-blue-section pb-16 pt-6">
      <div className="container-page grid gap-6 lg:grid-cols-2">
        {/* Booking form */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-card">
          <div className="bg-pink-500 px-6 py-4">
            <h2 className="font-display text-xl font-extrabold text-white">Book Your Service Now!</h2>
            <p className="text-xs font-semibold text-white/80">Step 1 of 3</p>
          </div>
          <form className="grid gap-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-lg border border-brand-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="First Name"
                aria-label="First Name"
              />
              <input
                className="rounded-lg border border-brand-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Last Name"
                aria-label="Last Name"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-lg border border-brand-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Phone Number"
                aria-label="Phone Number"
              />
              <input
                className="rounded-lg border border-brand-200 px-4 py-3 text-sm outline-none focus:border-pink-400"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <button type="button" className="btn-lime w-full">
              Next
            </button>
          </form>
        </div>

        {/* Areas we serve */}
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-display text-2xl font-extrabold uppercase text-brand-700">Areas We Serve</h2>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {[...serviceAreas.left, ...serviceAreas.right].map((county) => (
              <div key={county} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                <Icon name="check" className="h-4 w-4 flex-shrink-0 text-lime-500" />
                {county}
              </div>
            ))}
          </div>
          <Link
            href="/areas"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-pink-500"
          >
            See All Service Areas
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
