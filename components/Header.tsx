'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { site, nav } from '@/content/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Row 1 — blue phone bar */}
      <div className="bg-brand-600 text-white">
        <div className="container-page flex h-9 items-center justify-between gap-3">
          <span className="hidden text-xs font-bold uppercase tracking-wide text-white sm:inline">
            Call or Text · {site.hours}
          </span>
          <div className="flex flex-1 items-center justify-end gap-4 overflow-x-auto sm:gap-7">
            {site.phones.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="flex flex-shrink-0 items-center gap-1.5 text-[11px] transition hover:text-pink-300 sm:text-[13px]"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {p.label && (
                  <span className="hidden font-semibold uppercase tracking-wide text-brand-100 sm:inline">
                    {p.label}:
                  </span>
                )}
                <span className="font-bold">{p.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — full-width split CTA buttons */}
      <div className="grid grid-cols-2">
        <Link
          href="/#offers"
          className="flex items-center justify-center gap-2 bg-pink-500 px-3 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-pink-600 sm:text-sm"
        >
          Get Instant Estimate
          <Icon name="badge" className="hidden h-4 w-4 sm:inline" />
        </Link>
        <a
          href={site.primaryPhone.href}
          className="flex items-center justify-center gap-2 bg-lime-500 px-3 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-lime-600 sm:text-sm"
        >
          <Icon name="calendar" className="hidden h-4 w-4 sm:inline" />
          Book Appointment
        </a>
      </div>

      {/* Row 3 — white nav (sticky) */}
      <div className="sticky top-0 z-50 bg-white shadow-pill">
        <div className="container-page flex h-[88px] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 rounded-md px-2.5 py-2 text-[13px] font-bold uppercase tracking-wide text-brand-800 transition hover:text-pink-500"
              >
                {item.label}
                {item.caret && <Icon name="chevron" className="h-3 w-3 rotate-90 text-pink-500" />}
              </Link>
            ))}
          </nav>

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
                  className="block rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-800"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-800"
              >
                Blog
              </Link>
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
      {/* Placeholder mascot mark — replace with /public logo when ready */}
      <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-gold-500 ring-4 ring-brand-600">
        <Icon name="heart" className="h-6 w-6 text-brand-700" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold uppercase tracking-tight text-brand-700 sm:text-2xl">
          Degree <span className="text-gold-500">of</span> Comfort
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-brand-400">
          Heating · Cooling · Electrical · Plumbing
        </span>
      </span>
    </Link>
  );
}
