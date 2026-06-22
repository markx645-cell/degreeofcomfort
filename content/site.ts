// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR BRAND DETAILS
// Swap these values for your real company name, phones, etc.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Degree of Comfort',
  shortName: 'Degree of Comfort',
  tagline: 'Heating · Cooling · Electrical · Plumbing',
  // Used for canonical URLs, sitemap, Open Graph
  url: 'https://degreeofcomfort.vercel.app',
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
      {
        label: 'Drains',
        href: '/services/drains',
        arrow: true,
        children: [{ label: 'Drain Cleaning', href: '/services/drain-cleaning' }],
      },
      { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
      { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
      { label: 'Leak Detection', href: '/services/leak-detection' },
      { label: 'Leak Repair', href: '/services/leak-repair' },
      { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
      { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
      { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
      { label: 'Whole-House Repiping', href: '/services/whole-house-repiping' },
      { label: 'Gas Line Repair & Replacement', href: '/services/gas-line-repair-replacement' },
      { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
      { label: 'Garbage Disposals', href: '/services/garbage-disposals' },
      { label: 'Sump Pumps', href: '/services/sump-pumps' },
      { label: 'Tankless Water Heater', href: '/services/tankless-water-heater' },
      { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
      { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
      { label: 'Water Quality', href: '/services/water-quality' },
    ],
    cta: { label: 'Get Water Heater Quote', href: '/free-estimate' },
  },
  {
    label: 'Heating',
    href: '/services/heating',
    caret: true,
    children: [
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
      { label: 'Furnace Repair', href: '/services/furnace-repair' },
      { label: 'Heat Pumps', href: '/services/heat-pumps' },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Shop Furnace Filters', href: '/services/furnace-filters' },
    ],
    cta: { label: 'Get Furnace Quote', href: '/free-estimate' },
  },
  {
    label: 'Air Conditioning',
    href: '/services/air-conditioning',
    caret: true,
    children: [
      { label: 'AC Repair', href: '/services/ac-repair' },
      { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
      { label: 'AC Maintenance', href: '/services/ac-maintenance' },
      {
        label: 'Mini-Splits',
        href: '/services/mini-splits',
        arrow: true,
        children: [
          { label: 'Mini-Split Installation', href: '/services/mini-split-installation' },
          { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
        ],
      },
      { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
      { label: 'Shop Air Filters', href: '/services/air-filters' },
    ],
    cta: { label: 'Get AC Quote', href: '/free-estimate' },
  },
  {
    label: 'Electrical',
    href: '/services/electrical',
    caret: true,
    children: [
      {
        label: 'Lighting',
        href: '/services/lighting',
        arrow: true,
        children: [
          {
            label: 'Outdoor Lighting',
            href: '/services/outdoor-lighting',
            arrow: true,
            children: [
              { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
              { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
              { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
              { label: 'Patio Lighting', href: '/services/patio-lighting' },
            ],
          },
          {
            label: 'Indoor Lighting',
            href: '/services/indoor-lighting',
            arrow: true,
            children: [
              { label: 'LED Lighting', href: '/services/led-lighting' },
              { label: 'Basement Lighting', href: '/services/basement-lighting' },
              { label: 'Garage Lighting', href: '/services/garage-lighting' },
            ],
          },
          { label: 'Recessed Lighting Installation', href: '/services/recessed-lighting' },
          { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
        ],
      },
      { label: 'Exhaust Fan Installation & Repair', href: '/services/exhaust-fan-installation-repair' },
      { label: 'Whole-Home Surge Protector Installation', href: '/services/surge-protector-installation' },
      { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation' },
      { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
      { label: 'Home Rewiring', href: '/services/home-rewiring' },
      { label: 'EV Chargers', href: '/services/ev-chargers' },
      { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
      { label: 'Switches & Outlets', href: '/services/switches-outlets' },
      { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    caret: true,
    children: [
      { label: "We're Hiring! Apply Today", href: '/careers' },
      { label: 'Financing', href: '/financing' },
      {
        label: 'The Degree of Comfort Difference',
        href: '/difference',
        arrow: true,
        children: [
          { label: 'Customer Success Stories', href: '/customer-success-stories' },
          { label: 'Reviews', href: '/reviews' },
        ],
      },
      { label: 'Referral Program', href: '/referrals' },
      { label: 'Degree of Comfort University', href: '/university' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    label: 'Specials',
    href: '/specials',
    caret: true,
    children: [
      { label: 'Coupons', href: '/specials' },
      { label: 'Free Estimate', href: '/free-estimate' },
      { label: 'Join the Comfort Club', href: '/comfort-club' },
      { label: 'Heat Pump Incentives & Costs', href: '/heat-pump-incentives' },
    ],
  },
  { label: 'Areas We Serve', href: '/areas' },
];
