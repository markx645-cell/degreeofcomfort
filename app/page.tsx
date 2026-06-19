import Link from 'next/link';
import Icon from '@/components/Icon';
import TornEdge from '@/components/TornEdge';
import {
  IntroColumns,
  WhyChoose,
  WorkStandsOut,
  TrustedExperts,
  GetFunding,
  ComfortClub,
  Community,
  BookAndAreas,
} from '@/components/PageSections';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { offers } from '@/content/home';

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
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <PromoBar />
      <Hero />
      <IntroColumns />
      <WhyChoose />
      <TornEdge fill="#1f48c8" />
      <WorkStandsOut />
      <TrustedExperts />
      <SpecialOffers />
      <GetFunding />
      <ComfortClub />
      <Community />
      <TornEdge fill="#1f48c8" />
      <BookAndAreas />
    </>
  );
}

/* ─────────────── Promo bar ─────────────── */
function PromoBar() {
  return (
    <div className="relative overflow-hidden bg-cobalt py-10 sm:py-12">
      {/* Large snowflake on the left */}
      <Icon
        name="snowflake"
        className="absolute left-[4%] top-1/2 hidden h-24 w-24 -translate-y-1/2 text-white/85 sm:block lg:left-[14%] lg:h-28 lg:w-28"
      />

      {/* Reviews badge, bottom-left corner */}
      <div className="absolute -bottom-4 -left-4 grid h-24 w-24 place-items-center rounded-full bg-pink-500 text-center text-white shadow-cta sm:h-28 sm:w-28">
        <div className="pl-3 pt-3">
          <div className="flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-2.5 w-2.5 fill-white text-white" />
            ))}
          </div>
          <div className="font-display text-lg font-black leading-none">
            {site.reviewCount.toLocaleString()}+
          </div>
          <div className="text-[8px] font-bold uppercase leading-tight tracking-wide">
            5-Star Reviews
          </div>
        </div>
      </div>

      {/* Centered headline + CTA */}
      <div className="container-page relative z-10 flex flex-col items-center gap-5 text-center">
        <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-[42px]">
          $89 Happy House Cooling Checkup
        </h2>
        <a href={site.primaryPhone.href} className="btn-pink px-7 py-3 text-sm">
          Get Offer Now
          <Icon name="chevron" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────── Hero ─────────────── */
function Hero() {
  const pills = services.map((s) => ({
    label: s.category,
    href: `/services/${s.slug}`,
    icon: s.icon,
  }));

  return (
    <section className="relative overflow-hidden bg-hero-pink">
      {/* Desktop photo with diagonal cut + blue accent edge */}
      <div className="absolute inset-y-0 right-0 hidden w-[64%] lg:block" aria-hidden>
        <div
          className="absolute inset-0 bg-brand-700"
          style={{ clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
        <div
          className="absolute inset-0 bg-brand-300 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero.jpg)',
            clipPath: 'polygon(9% 0, 100% 0, 100% 100%, 3% 100%)',
          }}
        />
      </div>

      {/* Left copy */}
      <div className="container-page relative z-10">
        <div className="max-w-md py-12 text-white lg:max-w-[44%] lg:py-24">
          <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl">
            The{' '}
            <span
              style={{
                WebkitTextStrokeWidth: '2px',
                WebkitTextStrokeColor: '#ffffff',
                color: 'transparent',
              }}
            >
              Color
            </span>{' '}
            of
            <br />
            Comfort.
          </h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white/90 sm:text-base">
            Proudly servicing {site.serviceArea}
          </p>
          <ul className="mt-5 space-y-2.5">
            {['Same-Day Service', 'Local, Family Owned & Operated', '100% Satisfaction Guarantee'].map(
              (b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm font-semibold">
                  <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-white">
                    <Icon name="check" className="h-3.5 w-3.5 text-pink-500" />
                  </span>
                  {b}
                </li>
              )
            )}
          </ul>
          <a
            href={site.primaryPhone.href}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-500 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-cta transition hover:-translate-y-0.5 hover:bg-lime-600"
          >
            Schedule Now
            <Icon name="chevron" className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Desktop service buttons — inside hero, bottom-right */}
      <div className="absolute bottom-6 left-[42%] right-4 z-30 hidden gap-3 lg:flex">
        {pills.map((p) => (
          <Link
            key={p.label}
            href={p.href}
            className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-pink-500 px-3 py-3 shadow-pill transition hover:-translate-y-0.5 hover:bg-pink-600"
          >
            <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-white text-pink-500">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <span className="text-sm font-extrabold uppercase tracking-wide text-white">
              {p.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop mascot */}
      <img
        src="/mascot.png"
        alt="Degree of Comfort mascot"
        width={200}
        height={200}
        className="absolute bottom-20 right-[6%] z-20 hidden h-44 w-44 animate-float object-contain drop-shadow-2xl lg:block"
      />

      {/* Mobile photo + buttons */}
      <div className="container-page relative z-10 pb-10 lg:hidden">
        <div className="relative">
          <div
            className="aspect-[4/3] rounded-2xl bg-brand-300 bg-cover bg-center ring-1 ring-white/30"
            style={{ backgroundImage: 'url(/hero.jpg)' }}
          />
          <img
            src="/mascot.png"
            alt="Degree of Comfort mascot"
            width={120}
            height={120}
            className="absolute -bottom-6 right-2 h-24 w-24 object-contain drop-shadow-xl"
          />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {pills.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              className="flex items-center gap-2.5 rounded-xl bg-pink-500 px-3 py-3 transition hover:bg-pink-600"
            >
              <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-white text-pink-500">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                {p.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Special offers ─────────────── */
function SpecialOffers() {
  return (
    <section id="offers" className="relative bg-blue-section py-16">
      {/* vertical reviews badge */}
      <div className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/3 -rotate-90 lg:block">
        <span className="flex items-center gap-2 rounded-full bg-pink-500 px-4 py-1.5 text-xs font-bold text-white shadow-card">
          <Icon name="star" className="h-4 w-4 fill-white text-white" />
          {site.reviewCount.toLocaleString()}+ Reviews
        </span>
      </div>

      <div className="container-page">
        <h2 className="section-title text-white">Special Offers</h2>

        <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <div
              key={o.subtitle}
              className="flex flex-col rounded-2xl border-2 border-dashed border-pink-300 bg-white p-6 text-center"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-400">
                Hurry, offer ends soon
              </span>
              <div className="mt-3 font-display text-3xl font-black text-pink-500">{o.title}</div>
              <div className="font-display text-lg font-extrabold uppercase text-brand-700">
                {o.subtitle}
              </div>
              <p className="mt-2 flex-1 text-xs text-ink/60">{o.detail}</p>
              <a href={site.primaryPhone.href} className="btn-lime mt-4 w-full text-xs">
                Schedule Now
              </a>
              <span className="mt-2 text-[11px] text-ink/40">{o.expires}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/specials" className="btn-pink">
            See All Specials
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
