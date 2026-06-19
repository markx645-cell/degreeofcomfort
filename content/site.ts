// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR BRAND DETAILS
// Swap these values for your real company name, phones, etc.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Summit Home Services',
  shortName: 'Summit',
  tagline: 'The Whole-Home Comfort Team',
  // Used for canonical URLs, sitemap, Open Graph
  url: 'https://www.summithomeservices.com',
  description:
    'Heating, cooling, plumbing, and electrical for the Tri-State area. Same-day service, upfront pricing, and a satisfaction guarantee on every job.',
  email: 'hello@summithomeservices.com',
  founded: 2009,
  rating: 4.9,
  reviewCount: 6200,
  yearsExperience: new Date().getFullYear() - 2009,

  phones: [
    { label: 'Kentucky', number: '859-555-0142', href: 'tel:+18595550142' },
    { label: 'Cincinnati', number: '513-555-0188', href: 'tel:+15135550188' },
    { label: 'Indiana', number: '812-555-0119', href: 'tel:+18125550119' },
  ],

  primaryPhone: { number: '859-555-0142', href: 'tel:+18595550142' },

  offices: [
    {
      city: 'Erlanger, KY',
      street: '1420 Comfort Way',
      region: 'Erlanger, KY 41018',
      mapHref: 'https://maps.google.com',
    },
    {
      city: 'Cincinnati, OH',
      street: '88 Riverbend Ave',
      region: 'Cincinnati, OH 45202',
      mapHref: 'https://maps.google.com',
    },
  ],

  hours: 'Open 7 days — 7am to 9pm. Emergency service 24/7.',
  serviceArea: 'Northern Kentucky, Greater Cincinnati & Southeast Indiana',

  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Yelp', href: 'https://yelp.com' },
  ],

  licenses: ['KY HVAC #M12345', 'OH Plumbing #PL48820', 'KY Electrical #CE99041'],
};

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const nav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Air Conditioning', href: '/services/air-conditioning', description: 'Repair, install & tune-ups' },
      { label: 'Heating & Furnaces', href: '/services/heating', description: 'Furnaces, heat pumps & boilers' },
      { label: 'Plumbing', href: '/services/plumbing', description: 'Drains, water heaters & repairs' },
      { label: 'Electrical', href: '/services/electrical', description: 'Panels, EV chargers & wiring' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Offers', href: '/#offers' },
];
