import Link from 'next/link';
import Icon from '@/components/Icon';
import Countdown from '@/components/Countdown';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { benefits, testimonials, offers, stats } from '@/content/home';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.primaryPhone.number,
  email: site.email,
  areaServed: site.serviceArea,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
  address: site.offices.map((o) => ({
    '@type': 'PostalAddress',
    streetAddress: o.street,
    addressLocality: o.city,
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <TrustBar />
      <ServiceCards />
      <WhyChoose />
      <ServiceStory />
      <Reviews />
      <ClubCta />
      <Offers />
      <FinalCta />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient-deep">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-brand-400/20 blur-3xl lg:block" />

      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="animate-fade-up">
          <span className="eyebrow bg-white/10 text-brand-100">
            <Icon name="badge" className="h-4 w-4" />
            {site.serviceArea}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Heating, Cooling, Plumbing &amp; Electrical,{' '}
            <span className="bg-gradient-to-r from-brand-200 to-white bg-clip-text text-transparent">
              done right.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-brand-100">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={site.primaryPhone.href} className="btn-primary text-base">
              <Icon name="phone" className="h-5 w-5" />
              Call {site.primaryPhone.number}
            </a>
            <Link href="/#offers" className="btn-outline text-base">
              Book Online
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-brand-100">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <span>
              <strong className="text-white">{site.rating}/5</strong> from{' '}
              {site.reviewCount.toLocaleString()}+ verified reviews
            </span>
          </div>
        </div>

        {/* Offer card */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md rounded-3xl bg-white p-7 shadow-card-hover">
            <span className="absolute -top-3 left-7 rounded-full bg-accent-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
              Limited Offer
            </span>
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white">
                <Icon name="snowflake" className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold text-brand-950">$89 Cooling Checkup</h2>
                <p className="text-sm text-brand-600">
                  Full 21-point AC tune-up before the summer rush.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-2.5">
              {[
                'Refrigerant & airflow check',
                'Electrical connections tightened',
                'Condensate line cleared',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-brand-800">
                  <Icon name="check" className="h-5 w-5 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-brand-gradient-deep p-4">
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-100">
                Offer ends today
              </p>
              <div className="mt-3 flex justify-center">
                <Countdown />
              </div>
            </div>

            <a href={site.primaryPhone.href} className="btn-brand mt-5 w-full text-base">
              Claim This Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Trust bar ───────────────────────── */
function TrustBar() {
  return (
    <section className="border-b border-brand-900/5 bg-white">
      <div className="container-page grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-extrabold text-brand-600">{s.value}</div>
            <div className="mt-1 text-sm font-medium text-brand-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Service cards ───────────────────────── */
function ServiceCards() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            One team for your whole home
          </h2>
          <p className="mt-4 text-brand-600">
            Four trades, one trusted crew. Whatever stops working, we have a licensed technician
            who can fix it, often the same day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card card-hover group flex flex-col"
            >
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-cta`}
              >
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-950">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-brand-600">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
                Explore {s.category}
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Why choose ───────────────────────── */
function WhyChoose() {
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <span className="eyebrow">Why homeowners choose us</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              The kind of company you tell your neighbor about
            </h2>
            <p className="mt-4 text-brand-600">
              We built {site.name} on a simple idea: show up when we say we will, quote the price
              before we start, and treat your home like our own. Here is what that looks like in
              practice.
            </p>
            <a href={site.primaryPhone.href} className="btn-brand mt-6">
              <Icon name="phone" className="h-4 w-4" />
              Talk to a real person
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="card card-hover">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-950">{b.title}</h3>
                <p className="mt-1.5 text-sm text-brand-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Service story ───────────────────────── */
function ServiceStory() {
  const blocks = [
    {
      icon: 'snowflake' as const,
      title: 'Comfort that lasts',
      text: 'From a midsummer AC breakdown to a furnace that quits on the coldest night, our HVAC team keeps your home at the temperature you set, with same-day service and honest repair-or-replace advice.',
    },
    {
      icon: 'droplet' as const,
      title: 'Plumbing without the dread',
      text: 'Leaks, clogs, and water heaters handled with upfront pricing and a clean job site. We find the real cause with camera inspection so the fix actually holds.',
    },
    {
      icon: 'bolt' as const,
      title: 'Safer, smarter electrical',
      text: 'Licensed electricians for panel upgrades, EV chargers, and whole-home surge protection. Every job is pulled to permit when the code calls for it.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container-page">
        <div className="rounded-3xl bg-brand-gradient-deep p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-3">
            {blocks.map((b) => (
              <div key={b.title}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Reviews ───────────────────────── */
function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Real reviews</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Rated {site.rating} stars by your neighbors
          </h2>
          <p className="mt-4 text-brand-600">
            More than {site.reviewCount.toLocaleString()} homeowners across {site.serviceArea} have
            trusted us with their homes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col">
              <Icon name="quote" className="h-8 w-8 text-brand-200" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-800">
                {t.text}
              </blockquote>
              <div className="mt-5 flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <figcaption className="mt-3 border-t border-brand-900/5 pt-3">
                <span className="block text-sm font-bold text-brand-950">{t.name}</span>
                <span className="block text-xs text-brand-500">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Club CTA ───────────────────────── */
function ClubCta() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-brand-gradient shadow-card-hover">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow bg-white/15 text-white">Membership</span>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Join the Comfort Club
              </h2>
              <p className="mt-4 max-w-lg text-brand-50">
                Priority scheduling, two seasonal tune-ups a year, no overtime fees, and an
                exclusive discount on every repair. Members skip the line and pay less.
              </p>
              <Link href="/#offers" className="btn-primary mt-6">
                See member benefits
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'Priority same-day scheduling',
                '2 precision tune-ups per year',
                '15% off all repairs',
                'No overtime or weekend fees',
                'Transferable if you move',
                'Dedicated member hotline',
              ].map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur"
                >
                  <Icon name="check" className="h-5 w-5 flex-shrink-0 text-white" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Offers ───────────────────────── */
function Offers() {
  return (
    <section id="offers" className="bg-cream py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Current specials</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Save on your next service</h2>
          <p className="mt-4 text-brand-600">
            Seasonal offers for new and returning customers. Mention the offer when you call.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <div key={o.title} className="card card-hover relative flex flex-col">
              <span className="absolute right-5 top-5 rounded-full bg-accent-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-600">
                {o.badge}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white">
                <Icon name={o.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-950">{o.title}</h3>
              <p className="mt-2 flex-1 text-sm text-brand-600">{o.detail}</p>
              <a
                href={site.primaryPhone.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
              >
                Redeem offer
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Final CTA ───────────────────────── */
function FinalCta() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient-deep px-6 py-14 text-center">
          <div className="absolute inset-0 bg-hero-radial opacity-60" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready when you are
            </h2>
            <p className="mt-4 text-brand-100">
              {site.hours} Book online or call now and talk to a real person in {site.serviceArea}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={site.primaryPhone.href} className="btn-primary text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/services" className="btn-outline text-base">
                Browse all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
