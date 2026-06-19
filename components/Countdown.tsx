'use client';

import { useEffect, useState } from 'react';

// Counts down to the end of the current day, refreshing daily.
function nextDeadline() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 0);
  if (end.getTime() <= now.getTime()) end.setDate(end.getDate() + 1);
  return end.getTime();
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(nextDeadline() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Render stable placeholder on the server / first paint
  const ms = remaining ?? 0;
  const hours = Math.floor(ms / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);

  const units = [
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ];

  return (
    <div className="flex gap-2.5" aria-label="Offer ends soon">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex min-w-[58px] flex-col items-center rounded-2xl bg-white/15 px-3 py-2 backdrop-blur"
        >
          <span className="font-display text-2xl font-extrabold tabular-nums text-white">
            {u.value}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-100">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
