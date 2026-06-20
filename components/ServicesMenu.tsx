'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { serviceMenu } from '@/content/servicePages';

export default function ServicesMenu() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-2">
      {serviceMenu.map((cat, i) => {
        const isOpen = open === i;
        return (
          <div key={cat.category} className="overflow-hidden rounded-lg shadow-pill">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-bold text-white transition ${
                isOpen ? 'bg-lime-500' : 'bg-brand-700 hover:bg-brand-800'
              }`}
            >
              {cat.category}
              <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-white/25">
                <Icon
                  name="chevron"
                  className={`h-3.5 w-3.5 ${isOpen ? '-rotate-90' : 'rotate-90'}`}
                />
              </span>
            </button>
            {isOpen && (
              <div className="bg-white p-4">
                <ul className="columns-2 gap-x-3">
                  {cat.items.map((item) => (
                    <li key={item.label} className="mb-2 break-inside-avoid">
                      <Link
                        href={item.href}
                        className="block text-xs font-semibold leading-tight text-brand-600 transition hover:text-pink-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
