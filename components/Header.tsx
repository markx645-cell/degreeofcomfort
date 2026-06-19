'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { site, nav } from '@/content/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-brand-gradient-deep text-white">
        <div className="container-page flex h-10 items-center justify-between text-xs sm:text-[13px]">
          <p className="hidden items-center gap-2 font-medium text-brand-50 sm:flex">
            <Icon name="badge" className="h-4 w-4 text-brand-200" />
            Rated {site.rating}/5 across {site.reviewCount.toLocaleString()}+ reviews
          </p>
          <div className="flex items-center gap-4">
            {site.phones.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="flex items-center gap-1.5 font-semibold text-white/90 transition hover:text-white"
              >
                <span className="hidden text-brand-200 md:inline">{p.label}:</span>
                <span>{p.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-brand-900/5 bg-white/95 backdrop-blur">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gradient text-white shadow-cta">
              <Icon name="heart" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-extrabold text-brand-950">
                {site.name}
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-500">
                {site.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                    <Icon name="arrow" className="h-3.5 w-3.5 rotate-90 text-brand-400" />
                  </Link>
                  <div className="invisible absolute left-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-card ring-1 ring-brand-900/5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition hover:bg-brand-50"
                        >
                          <span className="block text-sm font-semibold text-brand-900">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="block text-xs text-brand-500">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-brand-900 transition hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/#offers" className="btn-ghost">
              Get Estimate
            </Link>
            <a href={site.primaryPhone.href} className="btn-primary">
              <Icon name="phone" className="h-4 w-4" />
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-brand-200 text-brand-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-brand-900/5 bg-white lg:hidden">
            <div className="container-page space-y-1 py-4">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-brand-900"
                      >
                        {item.label}
                        <Icon
                          name="arrow"
                          className={`h-4 w-4 text-brand-400 transition ${
                            servicesOpen ? '-rotate-90' : 'rotate-90'
                          }`}
                        />
                      </button>
                      {servicesOpen &&
                        item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-xl px-8 py-2.5 text-sm font-medium text-brand-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-brand-900"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <a href={site.primaryPhone.href} className="btn-primary mt-3 w-full">
                <Icon name="phone" className="h-4 w-4" />
                Call {site.primaryPhone.number}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
