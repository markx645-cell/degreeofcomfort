import Link from 'next/link';
import Icon from './Icon';
import { site, nav } from '@/content/site';
import { services } from '@/content/services';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-brand-gradient-deep text-brand-50">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-page flex flex-col items-center gap-6 py-12 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Need service today? We are ready.
            </h2>
            <p className="mt-2 text-brand-100">
              {site.hours} Serving {site.serviceArea}.
            </p>
          </div>
          <a href={site.primaryPhone.href} className="btn-primary text-base">
            <Icon name="phone" className="h-5 w-5" />
            Call {site.primaryPhone.number}
          </a>
        </div>
      </div>

      {/* Columns */}
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-white">
              <Icon name="heart" className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-extrabold text-white">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm text-brand-100">{site.description}</p>
          <div className="mt-5 flex gap-2">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold text-white transition hover:bg-white/20"
              >
                {s.label.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-brand-100 transition hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-brand-100 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="text-brand-100 transition hover:text-white">
                Home Tips Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Visit Us</h3>
          <ul className="mt-4 space-y-4 text-sm">
            {site.offices.map((o) => (
              <li key={o.city}>
                <a href={o.mapHref} className="text-brand-100 transition hover:text-white">
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-brand-200 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {site.licenses.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </p>
          <div className="flex gap-4">
            <Link href="/" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="transition hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
