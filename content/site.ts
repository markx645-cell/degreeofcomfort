// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR BRAND DETAILS
// Swap these values for your real company name, phones, etc.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Degree of Comfort',
  shortName: 'Degree of Comfort',
  tagline: 'Heating · Cooling · Electrical · Plumbing',
  // Used for canonical URLs, sitemap, Open Graph
  url: 'https://degree3trades.vercel.app',
  description:
    'Heating, cooling, plumbing, and electrical for the Tri-State area. Same-day service, upfront pricing, and a satisfaction guarantee on every job.',
  email: 'hello@degreeofcomfort.com',
  founded: 2009,
  rating: 4.9,
  reviewCount: 6200,
  yearsExperience: new Date().getFullYear() - 2009,

  phones: [
    { label: 'Indiana', number: '812-555-0119', href: 'tel:+18125550119' },
    { label: 'Cincinnati', number: '513-555-0188', href: 'tel:+15135550188' },
    { label: 'Kentucky', number: '859-555-0142', href: 'tel:+18595550142' },
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
export type NavItem = { label: string; href: string; caret?: boolean; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: 'Plumbing', href: '/services/plumbing', caret: true },
  { label: 'Heating', href: '/services/heating', caret: true },
  { label: 'Air Conditioning', href: '/services/air-conditioning', caret: true },
  { label: 'Electrical', href: '/services/electrical', caret: true },
  { label: 'About Us', href: '/#why', caret: true },
  { label: 'Specials', href: '/#offers', caret: true },
  { label: 'Areas We Serve', href: '/#areas' },
];
