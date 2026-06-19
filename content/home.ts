// Why-choose benefits (icon list next to the intro video)
export const benefits = [
  {
    icon: 'heart' as const,
    title: 'Family Owned and Operated',
    text: 'We are proud to be a local business that puts the community first.',
  },
  {
    icon: 'badge' as const,
    title: 'Experienced Team',
    text: 'Our team is fully certified, highly trained, and passionate about what they do.',
  },
  {
    icon: 'check' as const,
    title: 'Comprehensive Services',
    text: 'From minor repairs to full installations, we handle all residential needs.',
  },
  {
    icon: 'shield' as const,
    title: 'Customer First Approach',
    text: 'We focus on clear communication and friendly service every step of the way.',
  },
  {
    icon: 'star' as const,
    title: 'Satisfaction Guarantee',
    text: 'We are happy until you are happy — every job comes with a satisfaction guarantee.',
  },
];

// Trust-seal medallions (your own service promises — truthful and yours to show).
// If you have a REAL earned award, give me the badge image file and I'll swap a
// slot to an <img> instead.
export const awards: {
  icon: 'check' | 'clock' | 'badge' | 'shield' | 'star' | 'heart';
  label: string;
}[] = [
  { icon: 'check', label: 'Free Estimates' },
  { icon: 'clock', label: 'Same-Day Service' },
  { icon: 'badge', label: 'Upfront Pricing' },
  { icon: 'shield', label: 'No Overtime Fees' },
  { icon: 'star', label: 'Financing Available' },
  { icon: 'heart', label: 'Locally Owned' },
];

// Special offers carousel cards
export const offers = [
  {
    title: 'FREE',
    subtitle: 'Water Quality Test',
    detail: 'On-site test of your home water with any plumbing visit. No obligation.',
    expires: 'Expires 11/30',
  },
  {
    title: 'SAVE $75',
    subtitle: 'On Plumbing Repair',
    detail: 'New customers save on their first qualifying plumbing repair.',
    expires: 'Expires 11/30',
  },
  {
    title: '$89',
    subtitle: 'Cooling Checkup',
    detail: 'Full 21-point AC tune-up before the summer rush.',
    expires: 'Expires 11/30',
  },
];

// Membership club perks
export const clubPerks = [
  'Priority scheduling',
  'Up to 20% discounts',
  'Trusted professionals',
  'Reduced diagnostic fees',
  '100% guarantee',
];

// Financing bullet points
export const fundingPoints = [
  'Instant credit decision on approval',
  'Easy, quick application process',
  'No prepayment penalties',
];

// Service-area columns
export const serviceAreas = {
  left: ['Boone County', 'Butler County', 'Campbell County', 'Kenton County', 'Hamilton County', 'Pendleton County'],
  right: ['Dearborn County', 'Clermont County', 'Warren County', 'Grant County', 'Gallatin County', 'Bracken County'],
};
