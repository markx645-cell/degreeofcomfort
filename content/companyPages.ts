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
    slug: 'about',
    title: 'About Us',
    eyebrow: 'Our Story',
    intro: [
      'Degree of Comfort is a locally owned heating, cooling, plumbing, and electrical company serving Cincinnati and surrounding areas. We started with a simple idea: treat every home like our own and every customer like a neighbor.',
      'That means showing up when we say we will, quoting a flat-rate price before any work starts, and never selling you something you do not need. Our technicians are background-checked, trained on every major brand, and genuinely happy to help.',
      'Whether it is a midsummer AC breakdown, a slow drain, or an electrical panel that has seen better days, you get one trusted crew for the whole home.',
    ],
    bullets: [
      'Family owned and operated',
      'Same-day service available',
      'Upfront, flat-rate pricing',
      'Satisfaction guaranteed on every job',
    ],
  },
  {
    slug: 'difference',
    title: 'The Degree of Comfort Difference',
    eyebrow: 'Why Us',
    intro: [
      'Plenty of companies can fix a furnace. What sets us apart is how we do it: honest advice, clean job sites, and pricing you approve before we start.',
      'We would rather earn a customer for life than win a single oversized sale. If a repair makes more sense than a replacement, we will tell you so.',
    ],
    bullets: [
      'No-pressure, repair-first recommendations',
      'Flat-rate pricing with no overtime fees',
      'Licensed, insured, and background-checked technicians',
      'Clean, respectful service in your home',
    ],
  },
  {
    slug: 'careers',
    title: "We're Hiring",
    eyebrow: 'Careers',
    intro: [
      'We are always looking for skilled, friendly people who take pride in their work. If you are a technician, apprentice, or office team member who wants to grow with a company that invests in its people, we want to hear from you.',
      'Reach out by phone or email and tell us a little about yourself. We will take it from there.',
    ],
    bullets: [
      'Competitive pay and benefits',
      'Ongoing paid training',
      'A supportive, family-style team',
      'Room to grow into leadership',
    ],
  },
  {
    slug: 'financing',
    title: 'Financing',
    eyebrow: 'Flexible Payments',
    intro: [
      'A new system should not have to wait for the perfect time. We offer flexible financing so qualified buyers can get comfortable now and pay over time.',
      'Ask us about current financing options when you schedule. Approval is quick, and our team will walk you through what fits your budget.',
    ],
    bullets: [
      'Quick application and decision',
      'Plans for qualified buyers',
      'Apply when you book your estimate',
    ],
  },
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
  {
    slug: 'specials',
    title: 'Specials & Coupons',
    eyebrow: 'Current Offers',
    intro: [
      'Save on the service your home needs with our current promotions. Mention the offer when you call, and ask about seasonal deals and new-customer savings.',
    ],
    bullets: [
      '$89 Cooling Checkup',
      'Free water quality test with any plumbing visit',
      '$75 off your first plumbing repair',
      'Financing for qualified buyers',
    ],
  },
  {
    slug: 'free-estimate',
    title: 'Free Estimate',
    eyebrow: 'No Obligation',
    intro: [
      'Thinking about a new system or a bigger project? Get a free, no-obligation estimate. We will assess your home, lay out your options in plain language, and give you a written price.',
      'No pressure, no jargon, just the information you need to make a confident decision.',
    ],
    bullets: [
      'Free, written, no-obligation estimates',
      'Honest repair-versus-replace advice',
      'Financing options explained upfront',
    ],
  },
  {
    slug: 'comfort-club',
    title: 'Join the Comfort Club',
    eyebrow: 'Membership',
    intro: [
      'Comfort Club members skip the line and pay less. For one simple membership, you get priority scheduling, seasonal tune-ups, and a discount on every repair.',
      'It is the easiest way to keep your home running smoothly all year.',
    ],
    bullets: [
      'Priority same-day scheduling',
      'Two seasonal tune-ups per year',
      'Discount on all repairs',
      'No overtime or weekend fees',
    ],
  },
  {
    slug: 'heat-pump-incentives',
    title: 'Heat Pump Incentives & Costs',
    eyebrow: 'Save on Efficiency',
    intro: [
      'Heat pumps heat and cool your home from a single efficient system, and there has never been a better time to consider one. Federal and utility incentives can offset a meaningful share of the cost for qualifying systems.',
      'We will help you understand what is available, what a system costs, and what it could save you. Ask us for a free assessment.',
    ],
    bullets: [
      'Year-round heating and cooling in one system',
      'May qualify for federal and utility incentives',
      'Lower monthly energy use than older systems',
    ],
  },
];

export const getCompanyPage = (slug: string) => companyPages.find((p) => p.slug === slug);
