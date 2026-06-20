// Location data for programmatic service × location pages.
//
// Built per local-service-page-playbook.md: each entry must carry ≥3 verifiable
// local specifics so sections 2 (intro), 4 (local relevance) and 9 (local proof)
// are genuinely UNIQUE per neighborhood — not boilerplate. Only add a location
// here if you can write that much real local detail for it.
//
// Phase 1 cohort: the west-side riverside + Price Hill cluster, where the
// "older housing stock → more plumbing emergencies" thesis is genuinely true.

export type Adjacent = { name: string; slug: string };

export type Location = {
  slug: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  // Section 2 — unique intro (primary keyword + same-day + phone in first 100 words)
  intro: string;
  // Section 4 — THE MOAT: 1–2 unique paragraphs, ≥3 verifiable local specifics
  relevance: string[];
  // Section 6 — one sentence tying common emergencies to local housing traits
  commonIntro: string;
  // Section 10 — at least one localized FAQ (in addition to shared ones)
  localFaqs: { q: string; a: string }[];
  // Section 12 — sideways links in the mesh
  adjacent: Adjacent[];
};

export const locations: Location[] = [
  {
    slug: 'sedamsville',
    neighborhood: 'Sedamsville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    intro:
      'Burst pipe, no water, or a sewer backup in Sedamsville? Our licensed plumbers are on call 24/7 and reach most homes along River Road and the hillside above it the same day. Call (513) 586-5107.',
    relevance: [
      "Sedamsville (ZIP 45204) is one of Cincinnati's historic riverside neighborhoods, sitting on the west side between Riverside and Sayler Park. Much of its housing climbs the hillside above River Road and dates to the late 1800s and early 1900s, which means aging galvanized supply lines, original cast-iron drains, and water lines that were never built to last a century.",
      'In homes that old, plumbing tends to fail suddenly and all at once — a pinhole leak in a galvanized riser becomes a burst line overnight, or a root-clogged cast-iron lateral backs a whole basement up after heavy rain off the hill. That is why a fast, local response matters here: the sooner the water is shut off, the less damage to original woodwork and finished lower levels.',
    ],
    commonIntro:
      "In Sedamsville's century-old hillside homes, the emergencies we see most often trace straight back to the age of the plumbing:",
    localFaqs: [
      {
        q: 'How fast can you reach Sedamsville?',
        a: 'We are based in the Cincinnati area and keep plumbers on call 24/7, so we reach most Sedamsville homes — including the hillside streets above River Road — the same day, often within hours.',
      },
    ],
    adjacent: [
      { name: 'Riverside', slug: 'riverside' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
      { name: 'Sayler Park', slug: 'sayler-park' },
    ],
  },
  {
    slug: 'sayler-park',
    neighborhood: 'Sayler Park',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45233',
    intro:
      "Plumbing emergency in Sayler Park? From the riverfront streets to the homes up the hill, our licensed plumbers are on call 24/7 and reach Cincinnati's westernmost neighborhood the same day. Call (513) 586-5107.",
    relevance: [
      "Sayler Park (ZIP 45233) is Cincinnati's westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village — originally Home City — before it was annexed by Cincinnati in the early 1900s, and it still reads that way: tree-lined streets and rows of Victorian and early-1900s frame houses.",
      'Two local factors drive emergency plumbing calls here. The riverfront sits in the Ohio River floodplain, so high water and saturated ground raise the risk of sewer and storm backups in low-lying homes. And the original plumbing in those century-old frame houses — galvanized supply lines and old drains — is well past its service life, so leaks and pipe failures arrive without warning.',
    ],
    commonIntro:
      "Between the floodplain along the river and the age of Sayler Park's frame homes, the emergencies we handle most often here are:",
    localFaqs: [
      {
        q: 'Do you cover Sayler Park even though it is on the far west edge of the city?',
        a: 'Yes. Sayler Park is well within our service area. We treat it like any other Cincinnati neighborhood and aim for same-day arrival, river streets included.',
      },
    ],
    adjacent: [
      { name: 'Riverside', slug: 'riverside' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
  {
    slug: 'riverside',
    neighborhood: 'Riverside',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    intro:
      'Burst pipe or backed-up drain in Riverside? Our licensed plumbers are on call 24/7 and reach the homes along River Road the same day. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side.',
      'Because so many homes here sit on low Ohio River bottomland, flooding and high groundwater are a constant backdrop — backwater valves, sump pumps, and basement drains all matter more in Riverside than they do up on the hill. Combine that with older housing and original drain lines, and a single heavy rain can turn a slow drain into a flooded lower level fast.',
    ],
    commonIntro:
      "On Riverside's low riverfront lots, the emergencies we are called out for most often are the water-intrusion kind:",
    localFaqs: [
      {
        q: 'My Riverside basement floods when the river is high — can you help?',
        a: 'Yes. We handle emergency backups and failed sump pumps, and we can recommend a backwater valve or pump setup suited to low-lying River Road homes so it is less likely to happen again.',
      },
    ],
    adjacent: [
      { name: 'Sedamsville', slug: 'sedamsville' },
      { name: 'Sayler Park', slug: 'sayler-park' },
    ],
  },
  {
    slug: 'east-price-hill',
    neighborhood: 'East Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45205',
    intro:
      'Plumbing emergency in East Price Hill? Our licensed plumbers are on call 24/7 and reach the hilltop streets around Warsaw Avenue and the Incline District the same day. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together.',
      'That dense, century-old housing stock is exactly what keeps emergency plumbers busy. Shared walls and tight lots mean a burst line or sewer backup in one unit can affect the next, original cast-iron and galvanized plumbing is brittle with age, and the hillside grade puts real pressure on basement drains during heavy rain.',
    ],
    commonIntro:
      "In East Price Hill's dense, early-1900s homes and two-families, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you work on the older two-family homes common in East Price Hill?',
        a: 'Absolutely. We work on the multi-unit and two-family homes that fill the streets around Warsaw Avenue every day, and we can isolate and repair a problem in one unit without shutting down the whole building.',
      },
    ],
    adjacent: [
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
  {
    slug: 'west-price-hill',
    neighborhood: 'West Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45238',
    intro:
      'Need an emergency plumber in West Price Hill? Our licensed plumbers are on call 24/7 and reach the neighborhoods along Glenway Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but "newer" here still means plumbing that is many decades old.',
      'In homes from that era we routinely find the original galvanized supply lines slowly closing up with corrosion, aging water heaters reaching the end of their life, and clay or cast-iron sewer laterals that crack or fill with roots. Any of those can go from a minor annoyance to an emergency overnight, which is why same-day service matters even in a quieter neighborhood like this one.',
    ],
    commonIntro:
      "Across West Price Hill's mid-century single-family homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How quickly can you get to West Price Hill off Glenway Avenue?',
        a: 'West Price Hill is squarely in our service area. We keep plumbers on call around the clock and aim to reach homes near Glenway Avenue the same day you call.',
      },
    ],
    adjacent: [
      { name: 'East Price Hill', slug: 'east-price-hill' },
      { name: 'Lower Price Hill', slug: 'lower-price-hill' },
    ],
  },
  {
    slug: 'lower-price-hill',
    neighborhood: 'Lower Price Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    intro:
      'Plumbing emergency in Lower Price Hill? Our licensed plumbers are on call 24/7 and reach the historic streets around State Avenue the same day. Call (513) 586-5107.',
    relevance: [
      "Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati's most intact stretches of 19th-century Italianate brick rowhouses — beautiful, and full of original plumbing.",
      'Those mid-1800s rowhouses were built long before modern plumbing codes, so many still run on old galvanized and cast-iron systems that fail without warning. The low-lying valley location adds a second problem: when Mill Creek and the river run high, the risk of sewer and storm backups in basements climbs sharply. Fast shutoff and cleanup are what keep a backup from ruining a historic lower level.',
    ],
    commonIntro:
      "In Lower Price Hill's 19th-century rowhouses down in the valley, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the old brick rowhouses in Lower Price Hill?',
        a: 'Yes. We work on the historic 19th-century rowhouses around State Avenue regularly and take care to repair aging galvanized and cast-iron plumbing without damaging original features.',
      },
    ],
    adjacent: [
      { name: 'East Price Hill', slug: 'east-price-hill' },
      { name: 'Sedamsville', slug: 'sedamsville' },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
