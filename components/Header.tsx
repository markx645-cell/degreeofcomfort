'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { site, nav } from '@/content/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-pill">
      {/* Thin top phone strip */}
      <div className="bg-navy-bar text-white">
        <div className="container-page flex h-9 items-center justify-between text-[11px] font-semibold sm:text-xs">
          <span className="hidden items-center gap-1.5 text-brand-100 sm:flex">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {site.hours}
          </span>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden text-brand-200 sm:inline">Call or Text:</span>
            {site.phones.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="flex items-center gap-1 transition hover:text-pink-400"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                <span>{p.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* White main nav */}
      <div className="bg-white">
        <div className="container-page flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-2.5 py-2 text-[13px] font-bold uppercase tracking-wide text-brand-900 transition hover:text-pink-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Link href="/#offers" className="btn-lime px-5 py-2.5 text-xs">
              Get Instant Estimate
            </Link>
            <a href={site.primaryPhone.href} className="btn-gold px-5 py-2.5 text-xs">
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-brand-200 text-brand-700 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-brand-100 bg-white xl:hidden">
            <div className="container-page space-y-1 py-3">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-900"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/#offers" onClick={() => setMobileOpen(false)} className="btn-lime w-full">
                  Get Instant Estimate
                </Link>
                <a href={site.primaryPhone.href} className="btn-gold w-full">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* Placeholder mascot mark — replace with /public/logo when ready */}
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-gold-500 ring-4 ring-brand-600">
        <Icon name="heart" className="h-5 w-5 text-brand-700" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold uppercase tracking-tight text-brand-700">
          Degree <span className="text-gold-500">of</span> Comfort
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-brand-400">
          Heating · Cooling · Electrical · Plumbing
        </span>
      </span>
    </Link>
  );
}
