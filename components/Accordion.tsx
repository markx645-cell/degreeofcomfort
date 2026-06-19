'use client';

import { useState, type ReactNode } from 'react';

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { title: string; body: ReactNode }[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="overflow-hidden rounded-xl ring-1 ring-brand-100">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-display text-sm font-extrabold uppercase tracking-wide transition ${
                isOpen ? 'bg-pink-500 text-white' : 'bg-white text-brand-600 hover:bg-brand-50'
              }`}
            >
              {item.title}
              <span className="text-2xl font-bold leading-none">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="space-y-3 bg-white px-6 py-5 text-sm leading-relaxed text-ink/75">
                {item.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
