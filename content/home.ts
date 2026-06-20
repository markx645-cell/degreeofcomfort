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
  left: ['Hamilton County, OH', 'Kenton County, KY', 'Campbell County, KY', 'Boone County, KY'],
  right: ['Clermont County, OH', 'Butler County, OH', 'Warren County, OH', 'Dearborn County, IN'],
};

// Sample reviews — REPLACE with your real Google/Facebook reviews before going
// live. Showing invented reviews as if real violates Google and FTC rules.
export const testimonials = [
  { name: 'Sample Review', location: 'Cincinnati, OH', rating: 5, text: 'Fast, friendly, and the price was exactly what they quoted. Had our AC running again the same afternoon.' },
  { name: 'Sample Review', location: 'Florence, KY', rating: 5, text: 'The technician walked me through everything and never pushed a new system I did not need. Will use again.' },
  { name: 'Sample Review', location: 'Erlanger, KY', rating: 5, text: 'Showed up on time, left the work area spotless, and fixed our water heater in one visit.' },
  { name: 'Sample Review', location: 'Mason, OH', rating: 5, text: 'Booked online in the morning and had heat back by evening. Honest, professional, and reasonably priced.' },
  { name: 'Sample Review', location: 'Covington, KY', rating: 5, text: 'Installed our EV charger to code and checked the panel first. Clean, careful work.' },
  { name: 'Sample Review', location: 'West Chester, OH', rating: 5, text: 'Upfront pricing, no surprises, and genuinely nice people. Highly recommend.' },
];
