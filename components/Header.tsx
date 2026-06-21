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
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-xs font-bold uppercase tracking-wide text-ink transition group-hover:text-pink-500"
                  >
                    {item.label}
                    {item.caret && (
                      <Icon name="caretDown" className="h-2.5 w-2.5" />
                    )}
                  </Link>

                  {/* Hover dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-b-lg border border-brand-100 bg-white shadow-card">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.label} className="group/sub relative">
                            <Link
                              href={child.href}
                              className="flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition group-hover/sub:bg-pink-500 group-hover/sub:text-white"
                            >
                              {child.label}
                              <Icon name="chevron" className="h-3.5 w-3.5" />
                            </Link>
                            {/* Nested flyout — opens to the right */}
                            <div className="invisible absolute left-full top-0 z-50 w-72 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
                              <div className="ml-px rounded-r-lg border border-brand-100 bg-white shadow-card">
                                {child.children.map((sub) =>
                                  sub.children ? (
                                    <div key={sub.label} className="group/sub2 relative">
                                      <Link
                                        href={sub.href}
                                        className="flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition last:border-b-0 group-hover/sub2:bg-pink-500 group-hover/sub2:text-white"
                                      >
                                        {sub.label}
                                        <Icon name="chevron" className="h-3.5 w-3.5" />
                                      </Link>
                                      <div className="invisible absolute left-full top-0 z-50 w-72 opacity-0 transition-all duration-150 group-hover/sub2:visible group-hover/sub2:opacity-100">
                                        <div className="ml-px rounded-r-lg border border-brand-100 bg-white shadow-card">
                                          {sub.children.map((leaf) => (
                                            <Link
                                              key={leaf.label}
                                              href={leaf.href}
                                              className="flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition last:border-b-0 hover:bg-brand-50 hover:text-pink-500"
                                            >
                                              {leaf.label}
                                              {leaf.arrow && (
                                                <Icon name="chevron" className="h-3.5 w-3.5 text-brand-400" />
                                              )}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      className="flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition last:border-b-0 hover:bg-brand-50 hover:text-pink-500"
                                    >
                                      {sub.label}
                                      {sub.arrow && (
                                        <Icon name="chevron" className="h-3.5 w-3.5 text-brand-400" />
                                      )}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center justify-between border-b border-brand-100 px-5 py-2.5 text-sm font-semibold text-brand-900 transition last:rounded-b-lg last:border-b-0 hover:bg-brand-50 hover:text-pink-500"
                          >
                            {child.label}
                            {child.arrow && (
                              <Icon name="chevron" className="h-3.5 w-3.5 text-brand-400" />
                            )}
                          </Link>
                        )
                      )}
                      {item.cta && (
                        <Link
                          href={item.cta.href}
                          className="block rounded-b-lg bg-lime-500 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-lime-600"
                        >
                          {item.cta.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 text-xs font-bold uppercase tracking-wide text-ink transition hover:text-pink-500"
                >
                  {item.label}
                  {item.caret && <Icon name="caretDown" className="h-2.5 w-2.5" />}
                </Link>
              )
            )}
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
      {/* Save the bulldog mascot as public/mascot.png */}
      <img
        src="/mascot.png"
        alt="Degree of Comfort mascot"
        width={56}
        height={56}
        className="h-12 w-12 flex-shrink-0 object-contain sm:h-14 sm:w-14"
      />
      <span className="leading-none">
        <span className="block whitespace-nowrap font-logo text-xl font-black tracking-tight text-brand-700 sm:text-2xl xl:text-[28px]">
          Degree of Comfort
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-brand-400 sm:text-[10px]">
          Heating · Cooling · Electrical · Plumbing
        </span>
      </span>
    </Link>
  );
}
