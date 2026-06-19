'use client';

import { useState } from 'react';
import Icon from './Icon';
import { site } from '@/content/site';

const SERVICE_OPTIONS = [
  'Heating & Cooling',
  'Air Quality',
  'Plumbing',
  'Drain / Sewer Cleaning',
  'Water Treatment',
  'Electrical',
];

const inputClass =
  'w-full rounded-lg border border-brand-200 px-4 py-3 text-sm outline-none focus:border-pink-400';

export default function EstimateForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card ring-1 ring-brand-100">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-lime-500 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-brand-700">Request received!</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink/70">
          Thanks — a member of our team will reach out shortly to confirm your free estimate. Need us
          sooner? Call us anytime.
        </p>
        <a href={site.primaryPhone.href} className="btn-pink mt-5">
          <Icon name="phone" className="h-4 w-4" />
          {site.primaryPhone.number}
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-100">
      <div className="bg-pink-500 px-6 py-4">
        <h2 className="font-display text-xl font-extrabold text-white">Request Your Free Estimate</h2>
        <p className="text-xs font-semibold text-white/80">Step {step} of 2</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/30">
          <div
            className="h-full rounded-full bg-white transition-all"
            style={{ width: step === 1 ? '50%' : '100%' }}
          />
        </div>
      </div>

      <form
        className="space-y-4 p-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        {step === 1 ? (
          <>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                Name*
              </label>
              <input className={inputClass} placeholder="First Last" aria-label="Name" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                  Phone Number*
                </label>
                <input className={inputClass} type="tel" aria-label="Phone Number" required />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                  Email*
                </label>
                <input className={inputClass} type="email" aria-label="Email" required />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                Service Request*
              </label>
              <select className={inputClass} aria-label="Service Request" required defaultValue="">
                <option value="" disabled>
                  Select a service…
                </option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                Message
              </label>
              <textarea
                className={`${inputClass} min-h-[96px] resize-y`}
                placeholder="Tell us what you need…"
                aria-label="Message"
              />
            </div>
            <label className="flex items-start gap-2.5 text-xs text-ink/60">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>
                I agree to be contacted by {site.name} by phone, text, or email about my request.
                Message and data rates may apply.
              </span>
            </label>
            <button type="button" onClick={() => setStep(2)} className="btn-pink w-full">
              Next
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                Service Address
              </label>
              <input className={inputClass} placeholder="Street, City, ZIP" aria-label="Service Address" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                  Preferred Date
                </label>
                <input className={inputClass} type="date" aria-label="Preferred Date" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-brand-700">
                  Preferred Time
                </label>
                <select className={inputClass} aria-label="Preferred Time" defaultValue="">
                  <option value="" disabled>
                    Select a window…
                  </option>
                  <option>Morning (8am–12pm)</option>
                  <option>Afternoon (12pm–4pm)</option>
                  <option>Evening (4pm–8pm)</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn-ghost flex-1">
                Back
              </button>
              <button type="submit" className="btn-pink flex-1">
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
