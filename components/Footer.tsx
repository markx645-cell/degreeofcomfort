import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/content/site';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy-bar text-brand-100">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-500 ring-4 ring-brand-600">
                <Icon name="heart" className="h-5 w-5 text-brand-700" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-extrabold uppercase tracking-tight text-white">
                  Degree <span className="text-gold-500">of</span> Comfort
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-brand-300">
                  {site.tagline}
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm font-bold uppercase tracking-wide text-white">
              Join our newsletter
            </p>
            <form className="mt-2 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-brand-300 outline-none focus:border-pink-400"
              />
              <button type="button" className="btn-lime px-5 py-2.5 text-xs">
                Submit
              </button>
            </form>

            <div className="mt-5 flex gap-2">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold text-white transition hover:bg-pink-500"
                >
                  {s.label.slice(0, 1)}
                </a>
              ))}
            </div>
          </div>

          {/* Phones */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Call or Text</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.phones.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="flex items-center gap-2 transition hover:text-white">
                    <Icon name="phone" className="h-4 w-4 text-pink-400" />
                    <span className="text-brand-300">{p.label}:</span>
                    <span className="font-semibold text-white">{p.number}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-brand-200">{site.hours}</p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Visit Us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              {site.offices.map((o) => (
                <li key={o.city}>
                  <a href={o.mapHref} className="transition hover:text-white">
                    <span className="block font-semibold text-white">{o.city}</span>
                    {o.street}
                    <br />
                    {o.region}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {site.licenses.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="transition hover:text-white">
              Site Map
            </Link>
            <Link href="/" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
