export type Service = {
  slug: string;
  title: string;
  category: 'Cooling' | 'Heating' | 'Plumbing' | 'Electrical';
  tagline: string;
  summary: string;
  // SVG icon key resolved in components/Icon.tsx
  icon: 'snowflake' | 'flame' | 'droplet' | 'bolt';
  // Light/dark accent used on the category card
  accent: string;
  highlights: string[];
  body: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    category: 'Cooling',
    icon: 'snowflake',
    accent: 'from-sky-400 to-brand-500',
    tagline: 'Cool, even comfort all summer long',
    summary:
      'AC repair, replacement, and seasonal tune-ups for every make and model. Most repairs are finished the same day you call.',
    highlights: [
      'Same-day repair on every major brand',
      'Upfront, flat-rate pricing before we start',
      'Free replacement estimates with financing',
      '21-point precision tune-up',
    ],
    body: [
      'When the temperature climbs and the house will not cool, you want a technician at the door today, not next week. We staff for summer demand so most cooling calls are handled the same day, and we carry the common parts on the truck to finish in one visit.',
      'Every diagnostic ends with a written, flat-rate price. You approve the work before any wrench turns, so there are no surprises on the invoice. If a system is past saving, we lay out repair-versus-replace honestly and never push a new unit you do not need.',
      'Our 21-point tune-up clears the condensate line, checks refrigerant charge, tightens electrical connections, and measures temperature split so small problems are caught before they become a July breakdown.',
    ],
    faqs: [
      {
        q: 'How long does an AC repair take?',
        a: 'Most repairs are completed within the same visit. We stock common capacitors, contactors, and motors on every truck so we rarely have to reschedule for parts.',
      },
      {
        q: 'Should I repair or replace my air conditioner?',
        a: 'As a rule of thumb, if the repair costs more than a third of a new system and the unit is over ten years old, replacement usually wins on cost over time. We give you both numbers and let you decide.',
      },
    ],
  },
  {
    slug: 'heating',
    title: 'Heating & Furnaces',
    category: 'Heating',
    icon: 'flame',
    accent: 'from-accent-400 to-accent-600',
    tagline: 'Reliable heat when you need it most',
    summary:
      'Furnace, heat pump, and boiler repair and installation. Emergency no-heat service is available 24 hours a day.',
    highlights: [
      '24/7 emergency no-heat service',
      'Furnace, heat pump & boiler experts',
      'Carbon monoxide safety inspection included',
      'High-efficiency upgrades that lower bills',
    ],
    body: [
      'A furnace almost never quits on a mild afternoon. It quits at 2am on the coldest night of the year, which is exactly when our emergency line is staffed. We treat a house with no heat and small kids inside as the emergency it is.',
      'Every heating repair includes a combustion and carbon monoxide check at no extra charge, because a cracked heat exchanger is a safety issue first and a comfort issue second. If we find one, we show you the reading and explain your options plainly.',
      'When it is time for a new system, we size it by the house, not by the old unit. An oversized furnace short-cycles, wastes fuel, and leaves cold spots. We run the load calculation so the replacement is matched to your home.',
    ],
    faqs: [
      {
        q: 'Do you offer emergency heating repair?',
        a: 'Yes. No-heat calls are handled around the clock, every day of the year, including holidays.',
      },
      {
        q: 'How often should a furnace be serviced?',
        a: 'Once a year, ideally in early fall before the first cold snap. Annual service keeps the warranty valid and catches safety issues early.',
      },
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    category: 'Plumbing',
    icon: 'droplet',
    accent: 'from-brand-400 to-brand-700',
    tagline: 'Fast fixes for leaks, drains & water heaters',
    summary:
      'Drain cleaning, leak repair, fixture installs, and water heater replacement, from a dripping faucet to a full repipe.',
    highlights: [
      'Camera drain inspection available',
      'Tank & tankless water heater installs',
      'Upfront pricing, no overtime fees',
      'Clean job site, every time',
    ],
    body: [
      'A slow drain is annoying. A burst supply line behind a wall is a flood. We handle both with the same urgency because water damage gets more expensive by the hour, and we would rather fix the small thing before it becomes the big one.',
      'For recurring clogs we send a camera down the line so you can see the actual cause, whether it is roots, grease, or a bellied pipe, instead of paying for a snake that only buys a few weeks of relief.',
      'On water heaters we install both tank and tankless, walk you through the real trade-offs, and haul the old unit away. The price you are quoted is the price you pay, with no weekend or after-hours surcharge.',
    ],
    faqs: [
      {
        q: 'Do you charge extra for nights and weekends?',
        a: 'No. Our pricing is flat-rate and the same regardless of the day or hour, so there is never an overtime penalty for a weekend emergency.',
      },
      {
        q: 'How long does a water heater installation take?',
        a: 'A straightforward tank swap is usually done in two to three hours. Tankless conversions take longer because of venting and gas line work, typically most of a day.',
      },
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical',
    category: 'Electrical',
    icon: 'bolt',
    accent: 'from-amber-300 to-accent-500',
    tagline: 'Licensed electricians for a safer home',
    summary:
      'Panel upgrades, EV charger installs, lighting, and whole-home rewiring, handled by licensed, background-checked electricians.',
    highlights: [
      'Panel & service upgrades',
      'Level 2 EV charger installation',
      'Whole-home surge protection',
      'Code-compliant safety inspections',
    ],
    body: [
      'Electrical work is the one trade where cutting corners can burn a house down, so we do not cut them. Every job is performed by a licensed electrician and pulled to permit when the code calls for it.',
      'Older panels were never designed for the load of a modern home running heat pumps, EV chargers, and a kitchen full of appliances. We assess capacity honestly and only recommend an upgrade when the numbers say you need one.',
      'EV chargers are one of our fastest-growing requests. We size the circuit, install the charger, and make sure your panel can carry it, so you are not tripping a breaker every time the car and the dryer run together.',
    ],
    faqs: [
      {
        q: 'Can you install an EV charger in my garage?',
        a: 'In most cases, yes. We confirm your panel has the capacity, run a dedicated circuit, and install a Level 2 charger that fully charges most vehicles overnight.',
      },
      {
        q: 'How do I know if my electrical panel needs an upgrade?',
        a: 'Frequent breaker trips, a panel under 100 amps, flickering lights, or warm outlets are common signs. A licensed inspection settles it quickly.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
