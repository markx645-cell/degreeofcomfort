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
  email: 'cincydegreeofcomfort@gmail.com',
  founded: 2009,
  rating: 4.9,
  reviewCount: 6200,
  yearsExperience: new Date().getFullYear() - 2009,

  phones: [
    { label: '', number: '(513) 586-5107', href: 'tel:+15135865107' },
  ],

  primaryPhone: { number: '(513) 586-5107', href: 'tel:+15135865107' },

  location: 'Cincinnati, OH',

  offices: [
    {
      city: 'Cincinnati, OH',
      street: '',
      region: '',
      mapHref: 'https://maps.google.com/?q=Cincinnati,OH',
    },
  ],

  hours: 'Mon–Sun: 8am–8pm',
  serviceArea: 'the Greater Cincinnati area',

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
