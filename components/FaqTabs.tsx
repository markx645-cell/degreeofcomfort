'use client';

import { useState } from 'react';
import Accordion from './Accordion';
import { faqGroups } from '@/content/faqs';

// Which FAQ categories belong under each top-level tab.
const tabMap: Record<string, string[]> = {
  'Air Conditioning': [
    'AC Repair',
    'AC Maintenance',
    'AC Installation',
    'Ductless Mini-Splits',
    'Indoor Air Quality',
  ],
  Heating: ['Heating', 'Furnaces', 'Heat Pumps'],
  Plumbing: [
    'Plumbing',
    'Water Quality & Reverse Osmosis',
    'Sump Pumps',
    'Tankless Water Heaters',
    'Water Heaters',
    'Water Treatment',
  ],
};

const tabs = Object.keys(tabMap);

export default function FaqTabs() {
  const [tab, setTab] = useState(tabs[0]);
  const groups = faqGroups.filter((g) => tabMap[tab].includes(g.category));

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
              tab === t
                ? 'bg-pink-500 text-white shadow-cta'
                : 'bg-white text-brand-800 ring-1 ring-brand-200 hover:bg-brand-50'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filtered categories */}
      <div className="mt-10 space-y-10">
        {groups.map((group) => (
          <div key={group.category}>
            <h2 className="mb-4 font-display text-xl font-extrabold uppercase tracking-wide text-pink-500">
              {group.category}
            </h2>
            <Accordion
              items={group.items.map((i) => ({
                title: i.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{i.a}</p>,
              }))}
              defaultOpen={-1}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
