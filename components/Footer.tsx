import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/content/site';
import { services } from '@/content/services';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy-bar text-brand-100">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/mascot.png"
                alt="Degree of Comfort mascot"
                width={48}
                height={48}
                className="h-12 w-12 flex-shrink-0 object-contain"
              />
              <span className="leading-none">
                <span className="block whitespace-nowrap font-logo text-xl font-black tracking-tight text-white">
                  Degree of Comfort
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-brand-300">
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

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-gold-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.primaryPhone.href} className="flex items-center gap-2.5 transition hover:text-white">
                  <Icon name="phone" className="h-4 w-4 flex-shrink-0 text-brand-300" />
                  <span className="font-semibold text-white">{site.primaryPhone.number}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition hover:text-white">
                  <Icon name="mail" className="h-4 w-4 flex-shrink-0 text-brand-300" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a href={site.offices[0].mapHref} className="flex items-center gap-2.5 transition hover:text-white">
                  <Icon name="pin" className="h-4 w-4 flex-shrink-0 text-brand-300" />
                  <span>{site.location}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="clock" className="h-4 w-4 flex-shrink-0 text-brand-300" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-gold-500">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="transition hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
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
