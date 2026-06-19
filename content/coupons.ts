// Coupon / special-offer cards shown on /specials.
// Edit freely — this is the full list rendered as dashed-border coupon cards.

export type Coupon = {
  price: string; // big headline value, e.g. "$89", "FREE", "$75 OFF"
  title: string;
  details: string;
  expires: string;
};

export const coupons: Coupon[] = [
  {
    price: '$89',
    title: 'Happy House Cooling Checkup',
    details: '+ Free Freon Leak Check + Stay Cool Guarantee. Original Price: $129.',
    expires: '7/15/26',
  },
  {
    price: '$98',
    title: 'Drain Unclog',
    details: 'Clear one slow or clogged drain. Camera inspection available.',
    expires: '7/15/26',
  },
  {
    price: 'FREE',
    title: 'Water Quality Test',
    details: 'On-site water test with any plumbing visit. No obligation.',
    expires: '7/15/26',
  },
  {
    price: '$75 OFF',
    title: 'Any Plumbing Repair',
    details: 'New customers save on their first qualifying plumbing repair.',
    expires: '7/15/26',
  },
  {
    price: '$59',
    title: 'Furnace Tune-Up',
    details: '21-point heating safety inspection before the cold sets in.',
    expires: '10/31/26',
  },
  {
    price: '$50 OFF',
    title: 'Any Electrical Service',
    details: 'Save on panel upgrades, EV chargers, lighting, and more.',
    expires: '7/15/26',
  },
];
