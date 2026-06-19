'use client';

import { useState } from 'react';
import Icon from './Icon';
import { site } from '@/content/site';

const inputClass =
  'w-full rounded-md border border-brand-200 px-3 py-2.5 text-sm outline-none focus:border-pink-400';

export default function ClubForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card ring-1 ring-brand-100">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-lime-500 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-brand-700">Welcome aboard!</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink/70">
          Thanks for joining the Comfort Club. A team member will reach out shortly to finish setting
          up your membership.
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
      <div className="bg-pink-500 px-6 py-4 text-center">
        <h2 className="font-display text-xl font-extrabold text-white">
          Join the Comfort Club Today!
        </h2>
      </div>
      <form
        className="space-y-3 p-6"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <p className="text-xs text-ink/50">
          <span className="font-bold text-pink-500">*</span> indicates required fields
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={inputClass} placeholder="First Name" aria-label="First Name" required />
          <input className={inputClass} placeholder="Last Name" aria-label="Last Name" required />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            className={inputClass}
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
            required
          />
          <input className={inputClass} type="email" placeholder="Email" aria-label="Email" required />
        </div>
        <textarea
          className={`${inputClass} min-h-[110px] resize-y`}
          placeholder="Message"
          aria-label="Message"
        />
        <label className="flex items-start gap-2 text-[11px] leading-relaxed text-ink/55">
          <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
          <span>
            By clicking Submit, I consent to be contacted by {site.name} at the phone number and
            email I have provided (including by call, text, and email) for marketing and
            informational purposes, including via automated systems and prerecorded messages. Consent
            is not a condition of purchase, and I may opt out at any time by replying STOP.{' '}
            <span className="font-bold text-pink-500">Opt in today!</span>
          </span>
        </label>
        <button type="submit" className="btn-pink">
          Submit
        </button>
      </form>
    </div>
  );
}
