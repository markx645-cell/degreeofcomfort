export type Post = {
  slug: string;
  title: string;
  category: 'Cooling' | 'Heating' | 'Plumbing' | 'Electrical' | 'Home Tips';
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  author: { name: string; role: string };
  // Paragraphs of body copy
  body: string[];
  faqs?: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: 'why-your-ac-freezes-up',
    title: 'Why Your Air Conditioner Freezes Up (and How to Stop It)',
    category: 'Cooling',
    excerpt:
      'A block of ice on the line set looks dramatic, but the cause is almost always one of three simple things. Here is how to tell which.',
    date: '2026-05-28',
    readMinutes: 6,
    author: { name: 'Dana Whitfield', role: 'Lead HVAC Technician' },
    body: [
      'A frozen air conditioner is almost always a symptom of restricted airflow or low refrigerant, not a broken compressor. The good news is that two of the three common causes are things you can check yourself in about five minutes.',
      'The first culprit is a dirty air filter. When the filter clogs, the evaporator coil cannot pull enough warm air across it, the coil drops below freezing, and condensation turns to ice. Replacing a filter every 60 to 90 days prevents most freeze-ups outright.',
      'The second is a closed or blocked return vent. Furniture pushed against a return, or too many supply registers shut at once, starves the system of airflow the same way a dirty filter does. Open the returns and keep at least 80 percent of supply vents open.',
      'The third cause, low refrigerant from a leak, is the one to leave to a technician. Refrigerant is sealed and never gets "used up," so if the charge is low there is a leak that needs to be found and repaired. Topping it off without fixing the leak just delays the next freeze.',
      'If you find ice, turn the system to fan-only for an hour to thaw the coil before it overflows the drain pan, then change the filter. If it freezes again within a day, that points to refrigerant and it is time to call.',
    ],
    faqs: [
      {
        q: 'Can I run my AC while it is frozen?',
        a: 'No. Running the compressor against a frozen coil can pull liquid refrigerant back to the compressor and damage it. Switch to fan-only to thaw first.',
      },
      {
        q: 'How long does it take a frozen coil to thaw?',
        a: 'Usually one to three hours with the fan running. Do not chip at the ice, which can puncture the coil.',
      },
    ],
  },
  {
    slug: 'furnace-making-noise',
    title: 'What That Furnace Noise Actually Means',
    category: 'Heating',
    excerpt:
      'Banging, whistling, or a low rumble each point to a different problem. A quick guide to what is urgent and what can wait.',
    date: '2026-04-15',
    readMinutes: 5,
    author: { name: 'Marcus Reed', role: 'Heating Specialist' },
    body: [
      'A furnace is not supposed to be silent, but a new or changing noise is its way of telling you something shifted. The pitch and timing of the sound narrow down the cause faster than anything else.',
      'A loud bang right at startup is often delayed ignition: gas builds up for a second before it lights, then ignites all at once. It is worth a same-day look because the cause is usually dirty burners or a weak igniter, and the pressure can crack components over time.',
      'A high whistle usually means airflow is being forced through too small an opening, most often a clogged filter or an undersized return. Start with the filter. A metallic scraping sound, on the other hand, points to a blower wheel issue and should be shut down until a technician sees it.',
      'A low rumble that lingers after the system shuts off can signal a dirty burner or a venting problem, which is one of the few furnace noises that ties directly to safety. If you hear it alongside a headache or a stuffy feeling that clears when you leave the house, treat it as urgent and call.',
    ],
  },
  {
    slug: 'hard-water-signs',
    title: 'Five Signs You Have Hard Water (and Why It Costs You)',
    category: 'Plumbing',
    excerpt:
      'Hard water rarely announces itself. It shows up as scale, short appliance lifespans, and a water heater that works harder than it should.',
    date: '2026-03-02',
    readMinutes: 7,
    author: { name: 'Priya Sharma', role: 'Master Plumber' },
    body: [
      'Hard water is water with a high mineral content, mostly calcium and magnesium, and most homes have it to some degree. On its own it is not a health risk, but it quietly shortens the life of every appliance that water touches.',
      'The clearest sign is scale: a chalky white crust on faucets, shower glass, and inside the kettle. That same scale builds up invisibly inside your water heater, where even a quarter inch of buildup can noticeably raise the energy needed to heat a tank.',
      'Other tells are soap that will not lather, spots on dishes straight out of the dishwasher, and skin that feels filmy after a shower. Individually they are minor annoyances; together they point to water that is working against your plumbing.',
      'The fix is a water softener or a conditioning system, sized to your household water use. It is not a luxury upgrade so much as insurance for the water heater, dishwasher, and washing machine you already paid for.',
    ],
    faqs: [
      {
        q: 'Does hard water damage pipes?',
        a: 'Over years, scale narrows pipe interiors and reduces flow, especially on the hot side. It is gradual, but it is real, and it accelerates wear on every connected appliance.',
      },
    ],
  },
  {
    slug: 'is-your-panel-safe',
    title: 'Is Your Electrical Panel Safe? A Homeowner Checklist',
    category: 'Electrical',
    excerpt:
      'You do not need to open the panel to spot trouble. Six warning signs that your home electrical service needs a professional look.',
    date: '2026-02-10',
    readMinutes: 6,
    author: { name: 'Tom Castellano', role: 'Licensed Electrician' },
    body: [
      'Your electrical panel is the heart of the home, and like any heart, it gives warning signs before it fails. None of them require you to remove the cover, which you should never do yourself.',
      'Watch for breakers that trip repeatedly, a panel that feels warm to the touch, a persistent burning smell near it, lights that flicker when large appliances start, or scorch marks around outlets. Any one of these is reason to call a licensed electrician.',
      'Age matters too. Panels under 100 amps were built for a different era of home electrical demand, long before heat pumps and EV chargers. If your home still runs on 60 or 100 amps, an assessment is worth doing before you add a major load.',
      'Electrical is the one area of home repair where waiting is genuinely risky. A flickering light is cheap to investigate and expensive to ignore.',
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
