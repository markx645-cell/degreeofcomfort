// Company / informational pages reached from the About Us and Specials menus.
// Rendered through app/[slug]/page.tsx.

export type CompanyPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string[];
  bullets?: string[];
  faqs?: { q: string; a: string }[];
};

export const companyPages: CompanyPage[] = [
  {
    slug: 'referrals',
    title: 'Referral Program',
    eyebrow: 'Refer a Friend',
    intro: [
      'The best compliment you can give us is a referral. When you send a friend, family member, or neighbor our way, we say thank you.',
      'Call us to learn how our referral program works and how to send someone our way.',
    ],
  },
  {
    slug: 'university',
    title: 'Degree of Comfort University',
    eyebrow: 'Training',
    intro: [
      'Our technicians never stop learning. Degree of Comfort University is our ongoing training program that keeps the team current on the latest systems, codes, and safety standards.',
      'It is part of how we make sure the person at your door is ready for whatever your home needs.',
    ],
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    eyebrow: 'Answers',
    intro: [
      'A few of the questions we hear most often. Do not see yours? Give us a call and we are happy to help.',
    ],
    faqs: [
      { q: 'Do you offer same-day service?', a: 'Yes. We staff for demand so most repair calls are handled the same day you reach out.' },
      { q: 'How does your pricing work?', a: 'Every job is quoted at a flat rate that you approve before any work begins. No hourly surprises, and no overtime fees on nights or weekends.' },
      { q: 'Are your technicians licensed and insured?', a: 'Yes. Every technician is licensed, insured, and background-checked.' },
      { q: 'What areas do you serve?', a: 'We serve Cincinnati and the surrounding Tri-State area. See our Areas We Serve page for the full list of counties and cities.' },
    ],
  },
];

export const getCompanyPage = (slug: string) => companyPages.find((p) => p.slug === slug);
