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
  reviewCount: 6000,
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
  serviceArea: 'Cincinnati and surrounding areas',

  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Yelp', href: 'https://yelp.com' },
  ],

  licenses: ['KY HVAC #M12345', 'OH Plumbing #PL48820', 'KY Electrical #CE99041'],
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  arrow?: boolean;
  children?: NavChild[];
};
export type NavItem = {
  label: string;
  href: string;
  caret?: boolean;
  children?: NavChild[];
  cta?: NavChild;
};

export const nav: NavItem[] = [
  {
    label: 'Plumbing',
    href: '/services/plumbing',
    caret: true,
    children: [
      { label: 'Drains', href: '/services/plumbing', arrow: true },
      { label: 'Emergency Plumbing', href: '/services/plumbing' },
      { label: 'Faucet Repair & Replacement', href: '/services/plumbing' },
      { label: 'Leak Detection', href: '/services/plumbing' },
      { label: 'Leak Repair', href: '/services/plumbing' },
      { label: 'Plumbing Installation', href: '/services/plumbing' },
      { label: 'Plumbing Repair', href: '/services/plumbing' },
      { label: 'Sewer Repair & Replacement', href: '/services/plumbing' },
      { label: 'Sump Pumps', href: '/services/plumbing' },
      { label: 'Tankless Water Heater', href: '/services/plumbing' },
      { label: 'Water Heater Installation', href: '/services/plumbing' },
      { label: 'Water Heater Maintenance', href: '/services/plumbing' },
      { label: 'Water Heater Repair', href: '/services/plumbing' },
      { label: 'Water Quality', href: '/services/plumbing' },
    ],
    cta: { label: 'Get Water Heater Quote', href: '/#offers' },
  },
  {
    label: 'Heating',
    href: '/services/heating',
    caret: true,
    children: [
      { label: 'Furnace Installation & Replacement', href: '/services/heating' },
      { label: 'Furnace Maintenance', href: '/services/heating' },
      { label: 'Furnace Repair', href: '/services/heating' },
      { label: 'Heat Pumps', href: '/services/heating' },
      { label: 'Indoor Air Quality', href: '/services/heating' },
      { label: 'Shop Furnace Filters', href: '/services/heating' },
    ],
    cta: { label: 'Get Furnace Quote', href: '/#offers' },
  },
  {
    label: 'Air Conditioning',
    href: '/services/air-conditioning',
    caret: true,
    children: [
      { label: 'AC Repair', href: '/services/air-conditioning' },
      { label: 'AC Installation & Replacement', href: '/services/air-conditioning' },
      { label: 'AC Maintenance', href: '/services/air-conditioning' },
      { label: 'Mini-Splits', href: '/services/air-conditioning', arrow: true },
      { label: 'Indoor Air Quality', href: '/services/air-conditioning' },
      { label: 'Shop Air Filters', href: '/services/air-conditioning' },
    ],
    cta: { label: 'Get AC Quote', href: '/#offers' },
  },
  {
    label: 'Electrical',
    href: '/services/electrical',
    caret: true,
    children: [
      {
        label: 'Lighting',
        href: '/services/electrical',
        arrow: true,
        children: [
          {
            label: 'Outdoor Lighting',
            href: '/services/electrical',
            arrow: true,
            children: [
              { label: 'Holiday Lighting', href: '/services/electrical' },
              { label: 'Hot Tub Wiring', href: '/services/electrical' },
              { label: 'Landscape Lighting', href: '/services/electrical' },
              { label: 'Patio Lighting', href: '/services/electrical' },
            ],
          },
          {
            label: 'Indoor Lighting',
            href: '/services/electrical',
            arrow: true,
            children: [
              { label: 'LED Lighting', href: '/services/electrical' },
              { label: 'Basement Lighting', href: '/services/electrical' },
              { label: 'Garage Lighting', href: '/services/electrical' },
            ],
          },
          { label: 'Recessed Lighting Installation', href: '/services/electrical' },
          { label: 'Lighting Fixture Installation', href: '/services/electrical' },
        ],
      },
      { label: 'Exhaust Fan Installation & Repair', href: '/services/electrical' },
      { label: 'Whole-Home Surge Protector Installation', href: '/services/electrical' },
      { label: 'Ceiling Fan Installation', href: '/services/electrical' },
      { label: 'Electrical Inspections', href: '/services/electrical' },
      { label: 'Home Rewiring', href: '/services/electrical' },
      { label: 'EV Chargers', href: '/services/electrical' },
    ],
  },
  {
    label: 'About Us',
    href: '/#why',
    caret: true,
    children: [
      { label: "We're Hiring! Apply Today", href: '/#why' },
      { label: 'Financing', href: '/#offers' },
      { label: 'The Degree of Comfort Difference', href: '/#why', arrow: true },
      { label: 'Referral Program', href: '/#offers' },
      { label: 'Degree of Comfort University', href: '/#why' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/services' },
    ],
  },
  {
    label: 'Specials',
    href: '/#offers',
    caret: true,
    children: [
      { label: 'Coupons', href: '/#offers' },
      { label: 'Free Estimate', href: '/#offers' },
      { label: 'Join the Comfort Club', href: '/#offers' },
      { label: 'Heat Pump Incentives & Costs', href: '/services/heating' },
    ],
  },
  { label: 'Areas We Serve', href: '/#areas' },
];
