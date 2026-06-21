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
  // Parent city for a neighborhood (e.g. "Cincinnati"). Omit for standalone
  // municipalities so the H1 reads "Florence, KY" not "Florence, Florence, KY".
  city?: string;
  state: string;
  // ZIP only when confident — never fabricated. Used for PostalAddress schema.
  zip?: string;
  // County / group (matches content/areas.ts groups). Drives auto-adjacency.
  county?: string;
  // Section 2 — unique intro (primary keyword + same-day + phone in first 100 words)
  intro: string;
  // Section 4 — THE MOAT: 1–2 unique paragraphs, ≥3 verifiable local specifics
  relevance: string[];
  // Section 6 — one sentence tying common emergencies to local housing traits
  commonIntro: string;
  // Section 10 — at least one localized FAQ (in addition to shared ones)
  localFaqs: { q: string; a: string }[];
  // Section 12 — sideways links in the mesh. Optional: auto-computed from
  // same-county locations when not hand-curated.
  adjacent?: Adjacent[];
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

  // ── Phase 2: central & uptown Cincinnati ──────────────────────────────
  {
    slug: 'over-the-rhine',
    neighborhood: 'Over-the-Rhine',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    intro:
      'Plumbing emergency in Over-the-Rhine? Our licensed plumbers are on call 24/7 and reach the historic blocks around Findlay Market and Vine Street the same day. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most of them built between the 1850s and 1880s.',
      'Buildings that old, many now split into apartments and condos, run on a patchwork of original and retrofitted plumbing: brittle cast-iron stacks, galvanized risers, and shared lines where a single failure can affect several units at once. That makes fast shutoff and an experienced hand essential when a pipe lets go in OTR.',
    ],
    commonIntro:
      "In Over-the-Rhine's 19th-century buildings and converted multi-units, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you handle multi-unit buildings in Over-the-Rhine?',
        a: 'Yes. OTR is full of historic buildings split into apartments and condos. We can isolate and repair a leak or backup affecting one unit without shutting down water to the whole building.',
      },
    ],
    adjacent: [
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'West End', slug: 'west-end' },
      { name: 'Downtown', slug: 'downtown' },
    ],
  },
  {
    slug: 'downtown',
    neighborhood: 'Downtown',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    intro:
      'Plumbing emergency downtown? Our licensed plumbers are on call 24/7 and reach the central business district and its condos and lofts the same day. Call (513) 586-5107.',
    relevance: [
      "Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine.",
      'Plumbing here ranges from modern stacked risers in towers to original lines in early-1900s buildings turned residential. In either case, a leak several floors up can travel fast, so a quick response and a clean shutoff matter as much as the repair itself.',
    ],
    commonIntro:
      "In downtown's condos, lofts, and older commercial conversions, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Can you work in a downtown high-rise or condo?',
        a: 'Yes. We work in towers and converted loft buildings regularly, and we coordinate access and water shutoffs so a repair on one floor does not disrupt the rest of the building.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'West End', slug: 'west-end' },
    ],
  },
  {
    slug: 'west-end',
    neighborhood: 'West End',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45203',
    intro:
      'Need an emergency plumber in the West End? Our licensed plumbers are on call 24/7 and reach the neighborhood around TQL Stadium and Linn Street the same day. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium. It holds historic Italianate rowhouses and brick homes alongside mid-century housing, with newer development now mixed in.',
      'The older brick homes here carry decades-old galvanized and cast-iron plumbing that fails without much warning, while the low ground near the Mill Creek basin raises the risk of drain and sewer backups during heavy rain.',
    ],
    commonIntro:
      "Across the West End's historic rowhouses and older homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach the West End?',
        a: 'The West End sits right next to downtown and is one of the quickest areas for us to reach. We keep plumbers on call 24/7 and aim for same-day, often within hours.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Downtown', slug: 'downtown' },
    ],
  },
  {
    slug: 'mount-adams',
    neighborhood: 'Mount Adams',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45202',
    intro:
      'Plumbing emergency in Mount Adams? Our licensed plumbers are on call 24/7 and reach the steep, narrow streets of the hilltop the same day. Call (513) 586-5107.',
    relevance: [
      "Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes.",
      'That hillside setting and the age of the housing both drive plumbing emergencies: old supply and drain lines in century-old rowhouses, plus steep terrain that puts pressure on sewer laterals and basement drains during heavy rain. Tight access also means it pays to call a crew that knows the hill.',
    ],
    commonIntro:
      "In Mount Adams' steep, century-old rowhouses, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Can you get equipment to homes on the steep Mount Adams streets?',
        a: 'Yes. We work on the hill regularly and come prepared for the narrow, steep streets and tight parking that make Mount Adams unique.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },
  {
    slug: 'mount-auburn',
    neighborhood: 'Mount Auburn',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    intro:
      'Plumbing emergency in Mount Auburn? Our licensed plumbers are on call 24/7 and reach one of Cincinnati’s oldest hilltop neighborhoods the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine. It is lined with grand 19th-century homes and historic mansions, many now divided into apartments.',
      'Those Victorian-era homes carry some of the oldest plumbing in the city — original cast-iron drains and galvanized supply lines that corrode and fail with age. In subdivided houses, one burst line can affect several units, so a quick, knowledgeable response keeps the damage contained.',
    ],
    commonIntro:
      "In Mount Auburn's grand but aging 19th-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mount Auburn?',
        a: 'Mount Auburn sits right above downtown, so it is one of the faster neighborhoods for us to reach. We are on call 24/7 and aim for same-day service.',
      },
    ],
    adjacent: [
      { name: 'Over-the-Rhine', slug: 'over-the-rhine' },
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },
  {
    slug: 'clifton',
    neighborhood: 'Clifton',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45220',
    intro:
      'Plumbing emergency in Clifton? Our licensed plumbers are on call 24/7 and reach the Gaslight District and the homes around Ludlow Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets.',
      'Many of those big, older houses have been here for over a century, with plenty of original plumbing still in service — and a fair number are now rentals near campus, where a burst pipe or failed water heater needs a fast fix. Aging supply lines and mature trees over old sewer laterals are the two issues we see most.',
    ],
    commonIntro:
      "In Clifton's large Victorian and early-1900s homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'Do you handle student rentals near UC in Clifton?',
        a: 'Yes. We work on the older homes and rentals throughout Clifton and the university area, and we are available 24/7 for the burst pipes and water heater failures that tend to hit older houses.',
      },
    ],
    adjacent: [
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Northside', slug: 'northside' },
      { name: 'College Hill', slug: 'college-hill' },
    ],
  },
  {
    slug: 'corryville',
    neighborhood: 'Corryville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45219',
    intro:
      'Plumbing emergency in Corryville? Our licensed plumbers are on call 24/7 and reach the Short Vine area near UC the same day. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals.',
      'With so much older, densely packed housing turned into rentals, plumbing here takes heavy use on aging lines. Burst pipes, failed water heaters, and clogged drains are common, and because units share walls and stacks, a fast response keeps one problem from spreading.',
    ],
    commonIntro:
      "In Corryville's dense, older housing near campus, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How quickly can you reach Corryville near UC?',
        a: 'Corryville is central and close to our usual routes, so it is one of the faster areas for us to reach. We are on call 24/7 with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Clifton', slug: 'clifton' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'northside',
    neighborhood: 'Northside',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45223',
    intro:
      'Plumbing emergency in Northside? Our licensed plumbers are on call 24/7 and reach the homes around Hamilton Avenue and the Mill Creek valley the same day. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley.',
      'The age of the housing means original galvanized and cast-iron plumbing is common, and the low ground near Mill Creek adds a real risk of drain and sewer backups during heavy rain. Both are emergencies where shutting things down quickly limits the damage.',
    ],
    commonIntro:
      "In Northside's older homes near the Mill Creek valley, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'My Northside basement backs up in heavy rain — can you help?',
        a: 'Yes. We clear emergency backups and can recommend a backwater valve or sump setup suited to the lower-lying streets near Mill Creek so it is less likely to recur.',
      },
    ],
    adjacent: [
      { name: 'Clifton', slug: 'clifton' },
      { name: 'College Hill', slug: 'college-hill' },
    ],
  },
  {
    slug: 'college-hill',
    neighborhood: 'College Hill',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45224',
    intro:
      'Plumbing emergency in College Hill? Our licensed plumbers are on call 24/7 and reach the homes along Hamilton Avenue and Belmont the same day. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district.',
      'In homes this age, slowly corroding galvanized supply lines and aging water heaters are the usual culprits behind a sudden emergency, and older clay or cast-iron sewer laterals are prone to root intrusion. We handle both day or night.',
    ],
    commonIntro:
      "Across College Hill's older and mid-century homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach College Hill?',
        a: 'College Hill is well within our service area along Hamilton Avenue. We keep plumbers on call around the clock and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Northside', slug: 'northside' },
      { name: 'Clifton', slug: 'clifton' },
    ],
  },
  {
    slug: 'walnut-hills',
    neighborhood: 'Walnut Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
    intro:
      'Plumbing emergency in Walnut Hills? Our licensed plumbers are on call 24/7 and reach the homes around Peebles Corner and McMillan Street the same day. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district.',
      'Its century-old housing — much of it now split into units — runs on aging cast-iron and galvanized plumbing that fails with little warning. In multi-unit buildings, one burst line can affect several apartments, so quick shutoff and an experienced repair matter.',
    ],
    commonIntro:
      "In Walnut Hills' historic homes and apartment buildings, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you work on the older apartment buildings in Walnut Hills?',
        a: 'Yes. Many Walnut Hills buildings are split into units, and we can isolate and repair a problem in one apartment without shutting off water to the whole building.',
      },
    ],
    adjacent: [
      { name: 'East Walnut Hills', slug: 'east-walnut-hills' },
      { name: 'Mount Auburn', slug: 'mount-auburn' },
      { name: 'Avondale', slug: 'avondale' },
    ],
  },
  {
    slug: 'east-walnut-hills',
    neighborhood: 'East Walnut Hills',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45206',
    intro:
      'Plumbing emergency in East Walnut Hills? Our licensed plumbers are on call 24/7 and reach the homes around Woodburn Avenue and DeSales Corner the same day. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets.',
      'The large, century-old houses here often still carry original plumbing, where corroded galvanized lines and aging drains lead to sudden leaks. We respond fast to protect the original woodwork and finished spaces these homes are known for.',
    ],
    commonIntro:
      "In East Walnut Hills' stately early-1900s homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach East Walnut Hills?',
        a: 'East Walnut Hills is close to our central routes, so it is a quick reach. We are on call 24/7 with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Walnut Hills', slug: 'walnut-hills' },
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Mount Adams', slug: 'mount-adams' },
    ],
  },
  {
    slug: 'avondale',
    neighborhood: 'Avondale',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45229',
    intro:
      'Plumbing emergency in Avondale? Our licensed plumbers are on call 24/7 and reach the neighborhood around the hospitals and the zoo the same day. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout.',
      'A lot of Avondale’s housing is older and densely built, much of it rental, which means aging plumbing under heavy use. Burst pipes, water heater failures, and drain backups are the emergencies we are called for most, and we respond around the clock.',
    ],
    commonIntro:
      "In Avondale's older homes and apartment buildings, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Avondale?',
        a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach for us. We are on call 24/7 with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Corryville', slug: 'corryville' },
      { name: 'Walnut Hills', slug: 'walnut-hills' },
    ],
  },

  // ── Phase 2: east-side Cincinnati ─────────────────────────────────────
  {
    slug: 'hyde-park',
    neighborhood: 'Hyde Park',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45208',
    intro:
      'Plumbing emergency in Hyde Park? Our licensed plumbers are on call 24/7 and reach the homes around Hyde Park Square and Erie Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets.',
      'These big older homes are exactly the kind where a hidden leak or a failing supply line can do expensive damage to finished basements and original details before it is noticed. Aging plumbing and mature trees over old sewer laterals are the issues we handle most here.',
    ],
    commonIntro:
      "In Hyde Park's large, established early-1900s homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Hyde Park?',
        a: 'Hyde Park is well within our service area. We keep plumbers on call 24/7 and reach the homes around Hyde Park Square the same day, often within hours.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Mount Lookout', slug: 'mount-lookout' },
      { name: 'East Walnut Hills', slug: 'east-walnut-hills' },
    ],
  },
  {
    slug: 'oakley',
    neighborhood: 'Oakley',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45209',
    intro:
      'Plumbing emergency in Oakley? Our licensed plumbers are on call 24/7 and reach the homes around Oakley Square and Madison Road the same day. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development.',
      'The older bungalows that fill much of Oakley were built with galvanized supply lines and cast-iron drains that are now well past their prime, so corrosion leaks and aging water heaters are the emergencies we see most. We are on call to handle them day or night.',
    ],
    commonIntro:
      "Across Oakley's early-1900s bungalows and brick homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Oakley?',
        a: 'Oakley is centrally located on the east side and quick for us to reach. We are on call 24/7 and aim for same-day service.',
      },
    ],
    adjacent: [
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Norwood', slug: 'norwood' },
    ],
  },
  {
    slug: 'mount-lookout',
    neighborhood: 'Mount Lookout',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    intro:
      'Plumbing emergency in Mount Lookout? Our licensed plumbers are on call 24/7 and reach the homes around Mount Lookout Square and Ault Park the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets.',
      'The older homes here carry decades-old plumbing, and the hillside grade puts extra demand on basement drains and sewer laterals during heavy rain. Both can turn into emergencies fast, which is why same-day response matters.',
    ],
    commonIntro:
      "In Mount Lookout's older hilltop homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mount Lookout?',
        a: 'Mount Lookout is well within our east-side service area. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Columbia-Tusculum', slug: 'columbia-tusculum' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'columbia-tusculum',
    neighborhood: 'Columbia-Tusculum',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45226',
    intro:
      'Plumbing emergency in Columbia-Tusculum? Our licensed plumbers are on call 24/7 and reach Cincinnati’s oldest neighborhood near the river the same day. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River.',
      'Two things drive emergency calls here: the age of those Victorian and early homes, with original plumbing well past its service life, and the low riverside ground, where high water raises the risk of basement and sewer backups. Fast shutoff protects historic interiors.',
    ],
    commonIntro:
      "In Columbia-Tusculum's historic Victorian homes near the river, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the historic Victorian homes in Columbia-Tusculum?',
        a: 'Yes. We work on the neighborhood’s older and Painted Lady homes regularly and take care to repair aging plumbing without damaging original features.',
      },
    ],
    adjacent: [
      { name: 'Mount Lookout', slug: 'mount-lookout' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'mount-washington',
    neighborhood: 'Mount Washington',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45230',
    intro:
      'Plumbing emergency in Mount Washington? Our licensed plumbers are on call 24/7 and reach the homes along Beechmont Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes.',
      'In homes of that era, the original galvanized supply lines and aging water heaters are the usual sources of a sudden emergency, and older sewer laterals can crack or fill with roots. We respond around the clock to keep the damage contained.',
    ],
    commonIntro:
      "Across Mount Washington's older and mid-century homes, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mount Washington?',
        a: 'Mount Washington is squarely in our service area along Beechmont Avenue. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Columbia-Tusculum', slug: 'columbia-tusculum' },
      { name: 'Mount Lookout', slug: 'mount-lookout' },
    ],
  },
  {
    slug: 'madisonville',
    neighborhood: 'Madisonville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45227',
    intro:
      'Plumbing emergency in Madisonville? Our licensed plumbers are on call 24/7 and reach the homes around Madison Road and Whetsel Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill.',
      'The older houses that make up much of Madisonville run on aging galvanized and cast-iron plumbing, so corrosion leaks, failing water heaters, and clogged drains are the emergencies we are called for most. We handle them day or night.',
    ],
    commonIntro:
      "In Madisonville's older homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Madisonville?',
        a: 'Madisonville is centrally located on the east side and quick for us to reach. We are on call 24/7 with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
      { name: 'Mariemont', slug: 'mariemont' },
    ],
  },
  {
    slug: 'pleasant-ridge',
    neighborhood: 'Pleasant Ridge',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45213',
    intro:
      'Plumbing emergency in Pleasant Ridge? Our licensed plumbers are on call 24/7 and reach the homes along Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families.',
      'Those older single- and two-family homes carry decades-old plumbing, where corroded galvanized lines and aging drains lead to sudden leaks and backups. In two-families, one failure can affect both units, so a quick response keeps it contained.',
    ],
    commonIntro:
      "In Pleasant Ridge's early-1900s homes and two-families, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the two-family homes common in Pleasant Ridge?',
        a: 'Yes. We work on the brick two-families throughout Pleasant Ridge and can repair a problem in one unit without shutting down water to the other.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Norwood', slug: 'norwood' },
    ],
  },
  {
    slug: 'westwood',
    neighborhood: 'Westwood',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45211',
    intro:
      'Plumbing emergency in Westwood? Our licensed plumbers are on call 24/7 and reach Cincinnati’s largest neighborhood along Harrison Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses.',
      'Across that range of older housing, the common thread is aging plumbing — galvanized supply lines closing up with corrosion, water heaters at the end of their life, and cast-iron drains prone to backups. Those are the emergencies we are called for most.',
    ],
    commonIntro:
      "Across Westwood's older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Westwood?',
        a: 'Westwood is a large west-side neighborhood well within our service area. We are on call 24/7 and aim for same-day arrival along Harrison Avenue and beyond.',
      },
    ],
    adjacent: [
      { name: 'Cheviot', slug: 'cheviot' },
      { name: 'Covedale', slug: 'covedale' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
    ],
  },

  // ── Phase 2: Hamilton County suburbs ──────────────────────────────────
  {
    slug: 'norwood',
    neighborhood: 'Norwood',
    state: 'OH',
    zip: '45212',
    intro:
      'Plumbing emergency in Norwood? Our licensed plumbers are on call 24/7 and reach the homes around Surrey Square and Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town.',
      'That tightly packed, century-old housing is exactly where plumbing emergencies cluster: corroded galvanized lines, aging cast-iron drains, and shared laterals on small lots. We respond fast to keep a burst pipe or backup from spreading between closely built homes.',
    ],
    commonIntro:
      "In Norwood's dense, early-1900s homes and two-families, the emergencies we are called for most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Norwood?',
        a: 'Norwood sits right in the middle of our service area, surrounded by Cincinnati, so it is a fast reach. We are on call 24/7 with same-day service.',
      },
    ],
    adjacent: [
      { name: 'Oakley', slug: 'oakley' },
      { name: 'Hyde Park', slug: 'hyde-park' },
      { name: 'Pleasant Ridge', slug: 'pleasant-ridge' },
    ],
  },
  {
    slug: 'blue-ash',
    neighborhood: 'Blue Ash',
    state: 'OH',
    zip: '45242',
    intro:
      'Plumbing emergency in Blue Ash? Our licensed plumbers are on call 24/7 and reach homes and businesses across this northeast-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor.',
      'Even the "newer" housing here is now decades old, so aging water heaters, worn supply lines, and failing sump pumps are the emergencies we see most. We respond around the clock to homes and businesses alike.',
    ],
    commonIntro:
      "Across Blue Ash's mid-century homes and newer subdivisions, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Blue Ash?',
        a: 'Blue Ash is well within our northeast service area. We keep plumbers on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Montgomery', slug: 'montgomery' },
      { name: 'Madeira', slug: 'madeira' },
    ],
  },
  {
    slug: 'montgomery',
    neighborhood: 'Montgomery',
    state: 'OH',
    zip: '45242',
    intro:
      'Plumbing emergency in Montgomery? Our licensed plumbers are on call 24/7 and reach homes around the historic district and Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes.',
      'From century-old structures in the historic core to decades-old subdivisions, the plumbing here spans a wide range — but aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we respond to most. We are available day or night.',
    ],
    commonIntro:
      "Across Montgomery's historic and established homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Montgomery?',
        a: 'Montgomery is well within our northeast service area. We are on call 24/7 and aim for same-day service.',
      },
    ],
    adjacent: [
      { name: 'Blue Ash', slug: 'blue-ash' },
      { name: 'Madeira', slug: 'madeira' },
    ],
  },
  {
    slug: 'madeira',
    neighborhood: 'Madeira',
    state: 'OH',
    zip: '45243',
    intro:
      'Plumbing emergency in Madeira? Our licensed plumbers are on call 24/7 and reach homes around Miami and Euclid Avenues the same day. Call (513) 586-5107.',
    relevance: [
      'Madeira (ZIP 45243) is an established east-side city with a small-town feel, built largely of mid-century single-family homes on quiet, tree-lined streets.',
      'Homes from the mid-1900s are now well into the age where original galvanized supply lines corrode, water heaters fail, and cast-iron drains back up. Those are the emergencies we are called for most in Madeira, and we handle them around the clock.',
    ],
    commonIntro:
      "Across Madeira's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Madeira?',
        a: 'Madeira is well within our east-side service area. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Montgomery', slug: 'montgomery' },
      { name: 'Madisonville', slug: 'madisonville' },
    ],
  },
  {
    slug: 'wyoming',
    neighborhood: 'Wyoming',
    state: 'OH',
    zip: '45215',
    intro:
      'Plumbing emergency in Wyoming? Our licensed plumbers are on call 24/7 and reach this historic suburb’s tree-lined streets the same day. Call (513) 586-5107.',
    relevance: [
      'Wyoming (ZIP 45215) is a historic, affluent suburb north of the city, known for its grand Victorian and early-1900s homes on established, tree-shaded streets.',
      'Those large, century-old houses often still run on original plumbing, where a corroded supply line or aging drain can cause expensive damage to finished spaces before it is caught. We respond fast to protect the historic interiors these homes are known for.',
    ],
    commonIntro:
      "In Wyoming's grand, century-old homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Wyoming?',
        a: 'Wyoming is well within our northern service area. We keep plumbers on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'College Hill', slug: 'college-hill' },
      { name: 'Montgomery', slug: 'montgomery' },
    ],
  },
  {
    slug: 'mariemont',
    neighborhood: 'Mariemont',
    state: 'OH',
    zip: '45227',
    intro:
      'Plumbing emergency in Mariemont? Our licensed plumbers are on call 24/7 and reach this historic planned village the same day. Call (513) 586-5107.',
    relevance: [
      'Mariemont (ZIP 45227) is a planned "garden community" laid out in the 1920s and now a National Historic Landmark, known for its Tudor Revival architecture and village square on the east side.',
      'Because so much of Mariemont dates to the 1920s and 30s, its homes carry nearly a century of plumbing wear — original galvanized lines and aging drains that fail with little warning. We take care to make repairs that respect the village’s historic character.',
    ],
    commonIntro:
      "In Mariemont's 1920s-era homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the historic homes in Mariemont?',
        a: 'Yes. We work throughout Mariemont and take care to repair aging plumbing in its historic Tudor homes without disturbing original features.',
      },
    ],
    adjacent: [
      { name: 'Madisonville', slug: 'madisonville' },
      { name: 'Mount Washington', slug: 'mount-washington' },
    ],
  },
  {
    slug: 'cheviot',
    neighborhood: 'Cheviot',
    state: 'OH',
    zip: '45211',
    intro:
      'Plumbing emergency in Cheviot? Our licensed plumbers are on call 24/7 and reach this west-side city along Harrison Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Cheviot (ZIP 45211) is a small, densely built city on the west side, completely surrounded by Cincinnati, with a grid of early-1900s homes and brick two-families along Harrison Avenue.',
      'That older, tightly packed housing runs on aging galvanized and cast-iron plumbing, so corrosion leaks, burst pipes, and drain backups are the emergencies we are called for most. We respond fast to keep one home’s problem from reaching the next.',
    ],
    commonIntro:
      "In Cheviot's dense, early-1900s homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Cheviot?',
        a: 'Cheviot is a compact west-side city well within our service area. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
      { name: 'Covedale', slug: 'covedale' },
    ],
  },
  {
    slug: 'covedale',
    neighborhood: 'Covedale',
    state: 'OH',
    zip: '45238',
    intro:
      'Plumbing emergency in Covedale? Our licensed plumbers are on call 24/7 and reach the homes along Glenway and Cleves Warsaw the same day. Call (513) 586-5107.',
    relevance: [
      'Covedale (ZIP 45238) is a settled west-side community on the edge of the city near Green Township, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Homes of that age commonly have corroding galvanized supply lines, aging water heaters, and clay or cast-iron sewer laterals prone to roots — all of which can become emergencies overnight. We handle them around the clock.',
    ],
    commonIntro:
      "Across Covedale's older and mid-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Covedale?',
        a: 'Covedale is well within our west-side service area. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Westwood', slug: 'westwood' },
      { name: 'Cheviot', slug: 'cheviot' },
      { name: 'West Price Hill', slug: 'west-price-hill' },
    ],
  },

  // ── Phase 2: Northern Kentucky river cities ───────────────────────────
  {
    slug: 'covington',
    neighborhood: 'Covington',
    state: 'KY',
    zip: '41011',
    intro:
      'Plumbing emergency in Covington? Our licensed plumbers are on call 24/7 and reach the historic riverfront and MainStrasse Village the same day. Call (513) 586-5107.',
    relevance: [
      'Covington (ZIP 41011) sits directly across the Ohio River from downtown Cincinnati, with historic districts like MainStrasse Village and Licking Riverside full of 19th-century rowhouses and brick homes.',
      'Those century-old riverfront homes carry original cast-iron and galvanized plumbing, and the low ground near the Ohio and Licking Rivers adds a real risk of sewer and basement backups during high water. Both make a fast local response essential.',
    ],
    commonIntro:
      "In Covington's historic riverfront homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'Do you cross the river to serve Covington?',
        a: 'Yes. Covington is a core part of our service area, just across the river from downtown. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Bellevue', slug: 'bellevue' },
    ],
  },
  {
    slug: 'newport',
    neighborhood: 'Newport',
    state: 'KY',
    zip: '41071',
    intro:
      'Plumbing emergency in Newport? Our licensed plumbers are on call 24/7 and reach the homes around the East Row Historic District and the riverfront the same day. Call (513) 586-5107.',
    relevance: [
      'Newport (ZIP 41071) is a Northern Kentucky river city across from downtown Cincinnati, home to the East Row Historic District — one of the largest Victorian historic districts in the state — along with the Levee riverfront.',
      'The hundreds of 19th-century homes in the East Row run on original plumbing well past its service life, and the low riverfront ground raises the risk of backups when the river is high. We respond fast and repair with care for the historic details.',
    ],
    commonIntro:
      "In Newport's Victorian East Row homes and riverfront streets, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'Do you work on the historic East Row homes in Newport?',
        a: 'Yes. We work throughout the East Row and the rest of Newport and take care to repair aging plumbing in these Victorian homes without damaging original features.',
      },
    ],
    adjacent: [
      { name: 'Covington', slug: 'covington' },
      { name: 'Bellevue', slug: 'bellevue' },
      { name: 'Fort Thomas', slug: 'fort-thomas' },
    ],
  },
  {
    slug: 'bellevue',
    neighborhood: 'Bellevue',
    state: 'KY',
    zip: '41073',
    intro:
      'Plumbing emergency in Bellevue? Our licensed plumbers are on call 24/7 and reach the homes around Fairfield Avenue near the river the same day. Call (513) 586-5107.',
    relevance: [
      'Bellevue (ZIP 41073) is a compact Northern Kentucky river city with a historic Fairfield Avenue business district and tight streets of well-preserved late-1800s homes.',
      'Its century-old housing carries original galvanized and cast-iron plumbing, and the riverfront location means high water can drive basement and sewer backups. We respond around the clock to keep the damage contained.',
    ],
    commonIntro:
      "In Bellevue's historic riverfront homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Bellevue?',
        a: 'Bellevue is a core part of our Northern Kentucky service area along the river. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Fort Thomas', slug: 'fort-thomas' },
      { name: 'Covington', slug: 'covington' },
    ],
  },
  {
    slug: 'fort-thomas',
    neighborhood: 'Fort Thomas',
    state: 'KY',
    zip: '41075',
    intro:
      'Plumbing emergency in Fort Thomas? Our licensed plumbers are on call 24/7 and reach the homes along the historic military reservation and Fort Thomas Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Fort Thomas (ZIP 41075) is a historic Northern Kentucky city built around a former U.S. Army post, with stately early-1900s homes on tree-lined streets above the river.',
      'Many of these large, established homes still carry original plumbing, where corroded supply lines and aging drains can do real damage before they are noticed. We respond fast and make repairs built to last.',
    ],
    commonIntro:
      "In Fort Thomas' stately early-1900s homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Fort Thomas?',
        a: 'Fort Thomas is well within our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [
      { name: 'Newport', slug: 'newport' },
      { name: 'Bellevue', slug: 'bellevue' },
    ],
  },
  {
    slug: 'florence',
    neighborhood: 'Florence',
    state: 'KY',
    zip: '41042',
    intro:
      'Plumbing emergency in Florence? Our licensed plumbers are on call 24/7 and reach homes across this fast-growing Boone County city the same day. Call (513) 586-5107.',
    relevance: [
      'Florence (ZIP 41042) is the largest city in Boone County and one of the fastest-growing in Northern Kentucky, with a wide mix of mid-century neighborhoods and newer subdivisions around the Florence Mall area.',
      'Even the newer homes here are now old enough for water heaters and supply lines to start failing, while the mid-century neighborhoods see the corrosion leaks and drain backups typical of older plumbing. We respond around the clock to both.',
    ],
    commonIntro:
      "Across Florence's mid-century and newer homes, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Florence?',
        a: 'Florence is a key part of our Boone County service area. We keep plumbers on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'Erlanger', slug: 'erlanger' }],
  },
  {
    slug: 'erlanger',
    neighborhood: 'Erlanger',
    state: 'KY',
    zip: '41018',
    intro:
      'Plumbing emergency in Erlanger? Our licensed plumbers are on call 24/7 and reach homes across this Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Erlanger (ZIP 41018) is an established Kenton County city near the airport, with settled mid-century neighborhoods and a mix of older and newer homes.',
      'Homes from the mid-1900s are now at the age where original supply lines corrode, water heaters fail, and sewer laterals back up. Those are the emergencies we are called for most in Erlanger, and we handle them day or night.',
    ],
    commonIntro:
      "Across Erlanger's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Erlanger?',
        a: 'Erlanger is well within our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'Florence', slug: 'florence' }],
  },

  // ── Phase 2: outer Ohio suburbs ───────────────────────────────────────
  {
    slug: 'mason',
    neighborhood: 'Mason',
    state: 'OH',
    zip: '45040',
    intro:
      'Plumbing emergency in Mason? Our licensed plumbers are on call 24/7 and reach homes across this fast-growing Warren County city the same day. Call (513) 586-5107.',
    relevance: [
      'Mason (ZIP 45040) is a fast-growing Warren County city north of Cincinnati, near Kings Island, with large subdivisions of homes built mostly from the 1990s onward alongside an older town center.',
      'Even in newer subdivisions, water heaters, sump pumps, and supply lines reach the end of their life on a predictable schedule, and the older town center sees the issues typical of decades-old plumbing. We respond around the clock across the city.',
    ],
    commonIntro:
      "Across Mason's newer subdivisions and older town center, the emergencies we see most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach Mason?',
        a: 'Mason is part of our northern service area. We keep plumbers on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'West Chester', slug: 'west-chester' }],
  },
  {
    slug: 'west-chester',
    neighborhood: 'West Chester',
    state: 'OH',
    zip: '45069',
    intro:
      'Plumbing emergency in West Chester? Our licensed plumbers are on call 24/7 and reach homes across this Butler County township the same day. Call (513) 586-5107.',
    relevance: [
      'West Chester (ZIP 45069) is a large, fast-growing Butler County community between Cincinnati and Dayton, made up largely of subdivisions built from the 1990s onward along the I-75 corridor.',
      'These newer homes are now old enough that water heaters fail, sump pumps wear out, and supply lines spring leaks — the emergencies we are called for most here. We respond day or night across the township.',
    ],
    commonIntro:
      "Across West Chester's newer subdivisions, the emergencies we handle most often are:",
    localFaqs: [
      {
        q: 'How fast can you reach West Chester?',
        a: 'West Chester is part of our northern service area along I-75. We are on call 24/7 and aim for same-day arrival.',
      },
    ],
    adjacent: [{ name: 'Mason', slug: 'mason' }],
  },

  // ── All remaining Cincinnati neighborhoods ────────────────────────────
  {
    slug: 'pendleton', neighborhood: 'Pendleton', city: 'Cincinnati', state: 'OH', zip: '45202',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Pendleton? Our licensed plumbers are on call 24/7 and reach this historic district next to Over-the-Rhine the same day. Call (513) 586-5107.',
    relevance: [
      'Pendleton (ZIP 45202) is a small, historic arts district tucked against the eastern edge of Over-the-Rhine, full of restored 19th-century Italianate buildings and converted lofts and condos.',
      'Those mid-1800s buildings run on a mix of original and retrofitted plumbing — brittle cast-iron stacks and old risers — where one failure can reach several units. Fast shutoff is key in such tightly built historic blocks.',
    ],
    commonIntro: "In Pendleton's 19th-century buildings and converted lofts, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Pendleton?', a: 'Pendleton sits right beside downtown and OTR, so it is one of the fastest areas for us to reach. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'queensgate', neighborhood: 'Queensgate', city: 'Cincinnati', state: 'OH', zip: '45203',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Queensgate? Our licensed plumbers are on call 24/7 and reach this commercial and industrial district west of downtown the same day. Call (513) 586-5107.',
    relevance: [
      'Queensgate (ZIP 45203) is the largely commercial and industrial district just west of downtown, near the rail yards and the Mill Creek, with warehouses, offices, and light-industrial buildings.',
      'Plumbing emergencies here tend to be commercial: burst supply lines, failed water heaters, and backups in older industrial buildings on low ground prone to flooding. We respond around the clock.',
    ],
    commonIntro: "In Queensgate's commercial and industrial buildings, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you handle commercial buildings in Queensgate?', a: 'Yes. Queensgate is mostly commercial and industrial, and we handle emergency repairs for those buildings as well as homes, 24/7.' }],
  },
  {
    slug: 'cuf', neighborhood: 'CUF (Clifton Heights, University Heights & Fairview)', city: 'Cincinnati', state: 'OH', zip: '45219',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in CUF near UC? Our licensed plumbers are on call 24/7 and reach Clifton Heights, University Heights, and Fairview the same day. Call (513) 586-5107.',
    relevance: [
      'CUF (ZIP 45219) covers Clifton Heights, University Heights, and Fairview — the dense hilltop neighborhoods packed against the University of Cincinnati, full of 19th- and early-1900s homes now largely converted to student rentals.',
      'Heavy use on old plumbing is the story here: aging galvanized lines, overworked water heaters, and shared stacks in subdivided houses, where a burst pipe can hit several units at once. We respond fast, day or night.',
    ],
    commonIntro: "In CUF's dense, older student-rental housing near UC, the emergencies we see most often are:",
    localFaqs: [{ q: 'Do you handle student rentals in the CUF area?', a: 'Yes. We work on the older homes and rentals throughout Clifton Heights, University Heights, and Fairview, and we are available 24/7 for burst pipes and water heater failures.' }],
  },
  {
    slug: 'camp-washington', neighborhood: 'Camp Washington', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Camp Washington? Our licensed plumbers are on call 24/7 and reach this historic Mill Creek valley neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Camp Washington (ZIP 45225) is a historic working neighborhood in the Mill Creek valley, known for its industry, the American Sign Museum, and a tight mix of old worker housing and factories.',
      'The low valley ground raises the risk of drain and sewer backups during heavy rain, and the older homes and buildings here run on aging plumbing prone to sudden leaks. We respond around the clock.',
    ],
    commonIntro: "In Camp Washington's older homes and buildings down in the valley, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My Camp Washington building backs up in heavy rain — can you help?', a: 'Yes. We clear emergency backups and can advise on backwater valves and sump setups suited to the low Mill Creek valley ground.' }],
  },
  {
    slug: 'south-fairmount', neighborhood: 'South Fairmount', city: 'Cincinnati', state: 'OH', zip: '45205',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in South Fairmount? Our licensed plumbers are on call 24/7 and reach the homes along Queen City Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'South Fairmount (ZIP 45205) sits in the Lick Run valley along Queen City Avenue on the west side — the area rebuilt around the Lick Run Greenway stormwater project after a long history of valley flooding.',
      'That low-lying valley setting and the neighborhood’s older housing make sewer and drain backups a recurring emergency, alongside the burst pipes typical of aging plumbing. We respond fast to limit the damage.',
    ],
    commonIntro: "In South Fairmount's older valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach South Fairmount?', a: 'South Fairmount is well within our west-side service area along Queen City Avenue. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'east-end', neighborhood: 'East End', city: 'Cincinnati', state: 'OH', zip: '45226',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in the East End? Our licensed plumbers are on call 24/7 and reach the riverfront homes along Eastern Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'The East End (ZIP 45226) is a narrow riverfront neighborhood stretching east of downtown along Eastern Avenue, below Columbia Parkway, with historic river cottages and newer condos squeezed between the hillside and the Ohio River.',
      'Its low position right on the river means high water and backups are a real risk, and the older cottages carry decades-old plumbing. Both make a quick local response important.',
    ],
    commonIntro: "Along the East End's riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My East End home floods when the river is high — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to riverfront homes along Eastern Avenue.' }],
  },
  {
    slug: 'north-fairmount', neighborhood: 'North Fairmount', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in North Fairmount? Our licensed plumbers are on call 24/7 and reach this west-side hillside neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'North Fairmount (ZIP 45225) is a west-side hillside neighborhood above the Mill Creek valley, with streets of older early-1900s homes.',
      'The age of the housing means aging galvanized and cast-iron plumbing is common, and the hillside grade puts extra demand on basement drains during heavy rain — both frequent sources of emergencies.',
    ],
    commonIntro: "In North Fairmount's older hillside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach North Fairmount?', a: 'North Fairmount is within our west-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'evanston', neighborhood: 'Evanston', city: 'Cincinnati', state: 'OH', zip: '45207',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Evanston? Our licensed plumbers are on call 24/7 and reach the homes near Xavier University the same day. Call (513) 586-5107.',
    relevance: [
      'Evanston (ZIP 45207) is an east-side neighborhood next to Xavier University, with streets of early-1900s homes and apartment buildings, some now student housing.',
      'The older homes here carry aging plumbing prone to corrosion leaks and drain backups, and densely built rentals add heavy wear. We respond around the clock.',
    ],
    commonIntro: "In Evanston's early-1900s homes near Xavier, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Evanston?', a: 'Evanston is centrally located on the east side near Xavier and quick for us to reach. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'south-cumminsville', neighborhood: 'South Cumminsville', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in South Cumminsville? Our licensed plumbers are on call 24/7 and reach this Mill Creek valley neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'South Cumminsville (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, with older homes set among industrial corridors.',
      'The low valley ground brings a real risk of sewer and drain backups in heavy rain, and the older housing runs on aging plumbing that fails without warning. We respond fast to contain the damage.',
    ],
    commonIntro: "In South Cumminsville's older valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach South Cumminsville?', a: 'South Cumminsville is within our service area in the Mill Creek valley. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'english-woods', neighborhood: 'English Woods', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in English Woods? Our licensed plumbers are on call 24/7 and reach this west-side hilltop neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'English Woods (ZIP 45225) is a west-side hilltop neighborhood overlooking the Mill Creek valley, a quiet, largely residential area that has seen redevelopment in recent years.',
      'Older homes here run on aging plumbing, and the hillside setting adds strain to drains during heavy rain — both common sources of an emergency call. We respond day or night.',
    ],
    commonIntro: "In English Woods' older hilltop homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach English Woods?', a: 'English Woods is within our west-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'north-avondale', neighborhood: 'North Avondale', city: 'Cincinnati', state: 'OH', zip: '45229',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in North Avondale? Our licensed plumbers are on call 24/7 and reach the homes around Rockdale and Reading Road the same day. Call (513) 586-5107.',
    relevance: [
      'North Avondale (ZIP 45229) is a historic, leafy neighborhood known for its grand early-1900s homes on large, tree-shaded lots near Rockdale Avenue.',
      'Those big, century-old houses often still carry original plumbing, where a hidden leak or failing supply line can do expensive damage before it is noticed. We respond fast to protect the finished spaces these homes are known for.',
    ],
    commonIntro: "In North Avondale's grand early-1900s homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach North Avondale?', a: 'North Avondale is centrally located and quick for us to reach. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'millvale', neighborhood: 'Millvale', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Millvale? Our licensed plumbers are on call 24/7 and reach this Mill Creek valley neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Millvale (ZIP 45225) is a small west-side neighborhood in the Mill Creek valley, a compact, largely residential community.',
      'The low-lying ground raises the risk of drain and sewer backups during heavy rain, and older housing here runs on aging plumbing prone to leaks. We respond around the clock.',
    ],
    commonIntro: "In Millvale's valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Millvale?', a: 'Millvale is within our service area in the Mill Creek valley. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'paddock-hills', neighborhood: 'Paddock Hills', city: 'Cincinnati', state: 'OH', zip: '45229',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Paddock Hills? Our licensed plumbers are on call 24/7 and reach this north-side neighborhood near Paddock Road the same day. Call (513) 586-5107.',
    relevance: [
      'Paddock Hills (ZIP 45229) is a small, well-kept north-side residential pocket near Paddock Road and the Norwood Lateral, with streets of early- and mid-1900s homes.',
      'Homes of that era commonly have corroding galvanized supply lines and aging water heaters that fail without much warning — the emergencies we are called for most here.',
    ],
    commonIntro: "In Paddock Hills' early- and mid-1900s homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Paddock Hills?', a: 'Paddock Hills is centrally located near Paddock Road and quick for us to reach. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'spring-grove-village', neighborhood: 'Spring Grove Village', city: 'Cincinnati', state: 'OH', zip: '45232',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Spring Grove Village? Our licensed plumbers are on call 24/7 and reach the homes near Spring Grove Cemetery the same day. Call (513) 586-5107.',
    relevance: [
      'Spring Grove Village (ZIP 45232) sits in the Mill Creek valley around the historic Spring Grove Cemetery and Arboretum, one of the largest cemeteries in the country, with a mix of older homes and industry.',
      'The low valley ground brings a real risk of backups in heavy rain, and the neighborhood’s older housing runs on aging plumbing prone to sudden leaks. We respond around the clock.',
    ],
    commonIntro: "In Spring Grove Village's older valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Spring Grove Village?', a: 'Spring Grove Village is within our service area in the Mill Creek valley. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'linwood', neighborhood: 'Linwood', city: 'Cincinnati', state: 'OH', zip: '45226',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Linwood? Our licensed plumbers are on call 24/7 and reach this small east-side neighborhood near Lunken the same day. Call (513) 586-5107.',
    relevance: [
      'Linwood (ZIP 45226) is one of Cincinnati’s smaller east-side neighborhoods, set along Eastern Avenue near Lunken Airport and the river bottoms.',
      'Its low riverside position raises the risk of backups in high water, and the older homes here carry aging plumbing prone to leaks. Both make a fast local response worthwhile.',
    ],
    commonIntro: "In Linwood's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Linwood?', a: 'Linwood is within our east-side service area near Lunken. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'bond-hill', neighborhood: 'Bond Hill', city: 'Cincinnati', state: 'OH', zip: '45237',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Bond Hill? Our licensed plumbers are on call 24/7 and reach the homes along Reading Road the same day. Call (513) 586-5107.',
    relevance: [
      'Bond Hill (ZIP 45237) is a north-side neighborhood along Reading Road, with established streets of early-1900s and mid-century single-family homes.',
      'Homes of that age carry decades-old plumbing, where corroded supply lines, aging water heaters, and clogged drains turn into emergencies without warning. We handle them day or night.',
    ],
    commonIntro: "Across Bond Hill's older and mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Bond Hill?', a: 'Bond Hill is well within our north-side service area along Reading Road. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'villages-of-roll-hill', neighborhood: 'Villages of Roll Hill', city: 'Cincinnati', state: 'OH', zip: '45225',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Villages of Roll Hill? Our licensed plumbers are on call 24/7 and reach this west-side hilltop community the same day. Call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop residential community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings.',
      'In densely built multi-unit housing, a single burst pipe or backup can affect several units quickly, so fast shutoff and repair matter. We respond around the clock.',
    ],
    commonIntro: "In the multi-unit buildings of Roll Hill, the emergencies we see most often are:",
    localFaqs: [{ q: 'Do you handle apartment buildings at Roll Hill?', a: 'Yes. We work on multi-unit buildings and can isolate a problem to one unit without shutting down water for the whole building.' }],
  },
  {
    slug: 'east-westwood', neighborhood: 'East Westwood', city: 'Cincinnati', state: 'OH', zip: '45211',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in East Westwood? Our licensed plumbers are on call 24/7 and reach this west-side neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'East Westwood (ZIP 45211) is a west-side neighborhood on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes.',
      'The older homes carry aging plumbing prone to corrosion leaks, and the hillside grade adds demand on basement drains in heavy rain. We respond fast, day or night.',
    ],
    commonIntro: "In East Westwood's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach East Westwood?', a: 'East Westwood is within our west-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'western-hills', neighborhood: 'Western Hills', city: 'Cincinnati', state: 'OH', zip: '45211',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Western Hills? Our licensed plumbers are on call 24/7 and reach the homes around Western Hills Plaza and Glenway the same day. Call (513) 586-5107.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes.',
      'Across that older housing, corroding galvanized lines, aging water heaters, and clay or cast-iron sewer laterals are the common sources of an emergency. We handle them around the clock.',
    ],
    commonIntro: "Across Western Hills' older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Western Hills?', a: 'Western Hills is well within our west-side service area along Glenway. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'california', neighborhood: 'California', city: 'Cincinnati', state: 'OH', zip: '45230',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in the California neighborhood? Our licensed plumbers are on call 24/7 and reach the riverfront homes along Kellogg Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend and the old Coney Island grounds, set on low ground beside the Ohio River.',
      'That riverside position makes high water and backups a recurring risk, and the older homes here carry aging plumbing. A fast local response keeps a backup from ruining a lower level.',
    ],
    commonIntro: "Along California's riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My California home backs up when the river is high — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to riverfront homes along Kellogg Avenue.' }],
  },
  {
    slug: 'carthage', neighborhood: 'Carthage', city: 'Cincinnati', state: 'OH', zip: '45215',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Carthage? Our licensed plumbers are on call 24/7 and reach the homes along Vine Street the same day. Call (513) 586-5107.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes.',
      'The age of the housing means aging galvanized and cast-iron plumbing is common, with corrosion leaks and drain backups the usual emergencies. We respond day or night.',
    ],
    commonIntro: "In Carthage's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Carthage?', a: 'Carthage is within our north-side service area along Vine Street. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'winton-hills', neighborhood: 'Winton Hills', city: 'Cincinnati', state: 'OH', zip: '45232',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Winton Hills? Our licensed plumbers are on call 24/7 and reach this north-side neighborhood near Winton Road the same day. Call (513) 586-5107.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing.',
      'Densely built multi-unit homes mean a burst pipe or backup can affect several units, and older buildings run on aging plumbing. We respond around the clock to keep problems contained.',
    ],
    commonIntro: "In Winton Hills' homes and multi-unit buildings, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Winton Hills?', a: 'Winton Hills is within our north-side service area near Winton Road. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'roselawn', neighborhood: 'Roselawn', city: 'Cincinnati', state: 'OH', zip: '45237',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Roselawn? Our licensed plumbers are on call 24/7 and reach the homes along Reading Road the same day. Call (513) 586-5107.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings.',
      'Homes from the mid-1900s are now well into the age where supply lines corrode and water heaters fail, while older apartments add heavy plumbing wear. We respond day or night.',
    ],
    commonIntro: "Across Roselawn's mid-century homes and apartments, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Roselawn?', a: 'Roselawn is well within our north-side service area along Reading Road. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'mount-airy', neighborhood: 'Mount Airy', city: 'Cincinnati', state: 'OH', zip: '45239',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Mount Airy? Our licensed plumbers are on call 24/7 and reach the homes near Mount Airy Forest the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters, and the hilltop terrain adds strain on drains during heavy rain. We respond around the clock.',
    ],
    commonIntro: "Across Mount Airy's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Airy?', a: 'Mount Airy is within our northwest-side service area near the forest. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'hartwell', neighborhood: 'Hartwell', city: 'Cincinnati', state: 'OH', zip: '45215',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Hartwell? Our licensed plumbers are on call 24/7 and reach this historic streetcar neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets.',
      'Those century-old homes often still carry original plumbing, where corroded supply lines and aging drains lead to sudden leaks. We respond fast to protect their historic details.',
    ],
    commonIntro: "In Hartwell's Victorian and early-1900s homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Hartwell?', a: 'Hartwell is well within our north-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'kennedy-heights', neighborhood: 'Kennedy Heights', city: 'Cincinnati', state: 'OH', zip: '45213',
    county: 'Cincinnati Neighborhoods',
    intro: 'Plumbing emergency in Kennedy Heights? Our licensed plumbers are on call 24/7 and reach this historic east-side hilltop neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes.',
      'The age of the housing means original plumbing is common, with corrosion leaks and aging drains the usual emergencies. We respond around the clock to keep the damage contained.',
    ],
    commonIntro: "In Kennedy Heights' historic homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Kennedy Heights?', a: 'Kennedy Heights is well within our east-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Hamilton County, OH suburbs ───────────────────────────────────────
  {
    slug: 'st-bernard', neighborhood: 'St. Bernard', state: 'OH', zip: '45217', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in St. Bernard? Our licensed plumbers are on call 24/7 and reach this independent city the same day. Call (513) 586-5107.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes.',
      'That tightly packed, century-old housing is where plumbing emergencies cluster — corroded galvanized lines and aging cast-iron drains on small valley lots. We respond fast to keep one home’s problem from reaching the next.',
    ],
    commonIntro: "In St. Bernard's dense, early-1900s homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach St. Bernard?', a: 'St. Bernard sits right in the middle of our service area, surrounded by Cincinnati, so it is a quick reach. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'elmwood-place', neighborhood: 'Elmwood Place', state: 'OH', zip: '45216', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Elmwood Place? Our licensed plumbers are on call 24/7 and reach this small inner-ring village the same day. Call (513) 586-5107.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes.',
      'The low valley ground brings a real risk of backups in heavy rain, and the old, tightly packed housing runs on aging plumbing. We respond around the clock.',
    ],
    commonIntro: "In Elmwood Place's dense valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Elmwood Place?', a: 'Elmwood Place is a compact village within our service area in the Mill Creek valley. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'delhi-hills', neighborhood: 'Delhi Hills', state: 'OH', zip: '45233', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Delhi Hills? Our licensed plumbers are on call 24/7 and reach this west-side township community above the river the same day. Call (513) 586-5107.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River — an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters, and the hillside grade adds demand on drains during heavy rain. We respond day or night.',
    ],
    commonIntro: "Across Delhi Hills' mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Delhi Hills?', a: 'Delhi Hills is well within our west-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'golf-manor', neighborhood: 'Golf Manor', state: 'OH', zip: '45237', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Golf Manor? Our licensed plumbers are on call 24/7 and reach this small inner-ring village the same day. Call (513) 586-5107.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond around the clock.',
    ],
    commonIntro: "In Golf Manor's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Golf Manor?', a: 'Golf Manor is centrally located, surrounded by Cincinnati, so it is a fast reach. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'fairfax', neighborhood: 'Fairfax', state: 'OH', zip: '45227', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Fairfax? Our licensed plumbers are on call 24/7 and reach this small east-side village along Wooster Pike the same day. Call (513) 586-5107.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes.',
      'The age of the housing means aging plumbing is common, with corrosion leaks and failing water heaters the usual emergencies. We respond day or night.',
    ],
    commonIntro: "In Fairfax's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Fairfax?', a: 'Fairfax is well within our east-side service area near Mariemont. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'mack', neighborhood: 'Mack', state: 'OH', zip: '45248', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Mack? Our licensed plumbers are on call 24/7 and reach this west-side Green Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes.',
      'Even newer homes here are now old enough for water heaters and supply lines to fail, while older houses see the corrosion leaks typical of aging plumbing. We respond around the clock.',
    ],
    commonIntro: "Across Mack's mid-century and newer homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Mack?', a: 'Mack is well within our west-side service area in Green Township. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'monfort-heights', neighborhood: 'Monfort Heights', state: 'OH', zip: '45247', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Monfort Heights? Our licensed plumbers are on call 24/7 and reach this west-side Green Township suburb the same day. Call (513) 586-5107.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes.',
      'Homes from the mid-1900s are now well into the age where supply lines corrode, water heaters fail, and sewer laterals back up. We handle those emergencies day or night.',
    ],
    commonIntro: "Across Monfort Heights' mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Monfort Heights?', a: 'Monfort Heights is well within our west-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'bridgetown', neighborhood: 'Bridgetown', state: 'OH', zip: '45248', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Bridgetown? Our licensed plumbers are on call 24/7 and reach this west-side Green Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Bridgetown's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Bridgetown?', a: 'Bridgetown is well within our west-side service area in Green Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'finneytown', neighborhood: 'Finneytown', state: 'OH', zip: '45231', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Finneytown? Our licensed plumbers are on call 24/7 and reach this north-side Springfield Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters, the emergencies we handle most. We respond day or night.',
    ],
    commonIntro: "Across Finneytown's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Finneytown?', a: 'Finneytown is well within our north-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'amberley', neighborhood: 'Amberley', state: 'OH', zip: '45237', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Amberley Village? Our licensed plumbers are on call 24/7 and reach this wooded north-side village the same day. Call (513) 586-5107.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets.',
      'Larger homes mean larger plumbing systems, where a hidden leak or failing line can do real damage before it is noticed. We respond fast to limit it.',
    ],
    commonIntro: "In Amberley's large homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Amberley?', a: 'Amberley Village is well within our north-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'arlington-heights', neighborhood: 'Arlington Heights', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Arlington Heights? Our licensed plumbers are on call 24/7 and reach this small Mill Creek valley village the same day. Call (513) 586-5107.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes.',
      'The low valley ground raises the risk of backups in heavy rain, and the older housing runs on aging plumbing. We respond around the clock.',
    ],
    commonIntro: "In Arlington Heights' older valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Arlington Heights?', a: 'Arlington Heights is within our service area in the Mill Creek valley. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'north-college-hill', neighborhood: 'North College Hill', state: 'OH', zip: '45239', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in North College Hill? Our licensed plumbers are on call 24/7 and reach this small north-side city the same day. Call (513) 586-5107.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes.',
      'That older, tightly packed housing runs on aging galvanized and cast-iron plumbing, so corrosion leaks and drain backups are the emergencies we are called for most. We respond day or night.',
    ],
    commonIntro: "In North College Hill's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach North College Hill?', a: 'North College Hill is well within our north-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'newtown', neighborhood: 'Newtown', state: 'OH', zip: '45244', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Newtown? Our licensed plumbers are on call 24/7 and reach this east-side village near the Little Miami River the same day. Call (513) 586-5107.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground.',
      'That low ground brings a real risk of flooding and backups in heavy rain, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Newtown's older homes near the Little Miami, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My Newtown home backs up in heavy rain — can you help?', a: 'Yes. We clear emergency backups and failed sump pumps and can advise on a backwater valve suited to low-lying homes near the river.' }],
  },
  {
    slug: 'turpin-hills', neighborhood: 'Turpin Hills', state: 'OH', zip: '45244', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Turpin Hills? Our licensed plumbers are on call 24/7 and reach this east-side Anderson Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Turpin Hills' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Turpin Hills?', a: 'Turpin Hills is well within our east-side service area in Anderson Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'silverton', neighborhood: 'Silverton', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Silverton? Our licensed plumbers are on call 24/7 and reach the homes along Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes.',
      'The age of the housing means aging plumbing is common, with corrosion leaks and failing water heaters the usual emergencies. We respond day or night.',
    ],
    commonIntro: "In Silverton's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Silverton?', a: 'Silverton is well within our east-side service area along Montgomery Road. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'lockland', neighborhood: 'Lockland', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Lockland? Our licensed plumbers are on call 24/7 and reach this historic Mill Creek valley village the same day. Call (513) 586-5107.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing.',
      'The low valley ground brings a real risk of backups in heavy rain, and the old, tightly packed homes run on aging plumbing prone to leaks. We respond around the clock.',
    ],
    commonIntro: "In Lockland's older valley homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Lockland?', a: 'Lockland is within our service area in the Mill Creek valley. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'groesbeck', neighborhood: 'Groesbeck', state: 'OH', zip: '45239', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Groesbeck? Our licensed plumbers are on call 24/7 and reach this northwest Colerain Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters — the emergencies we handle most. We respond day or night.',
    ],
    commonIntro: "Across Groesbeck's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Groesbeck?', a: 'Groesbeck is well within our northwest service area in Colerain Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'mount-healthy', neighborhood: 'Mount Healthy', state: 'OH', zip: '45231', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Mount Healthy? Our licensed plumbers are on call 24/7 and reach this historic north-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes.',
      'The age of the housing means aging galvanized and cast-iron plumbing is common, with corrosion leaks and drain backups the usual emergencies. We respond around the clock.',
    ],
    commonIntro: "In Mount Healthy's older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Healthy?', a: 'Mount Healthy is well within our north-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'reading', neighborhood: 'Reading', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Reading? Our licensed plumbers are on call 24/7 and reach this Mill Creek valley city the same day. Call (513) 586-5107.',
    relevance: [
      'Reading (ZIP 45215) is a city in the Mill Creek valley north of Cincinnati, known for its bridal-shop district and a settled mix of older and mid-century homes.',
      'The low valley ground raises the risk of backups in heavy rain, and the older housing runs on aging plumbing prone to leaks. We respond day or night.',
    ],
    commonIntro: "Across Reading's older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Reading?', a: 'Reading is well within our service area in the Mill Creek valley. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'dent', neighborhood: 'Dent', state: 'OH', zip: '45247', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Dent? Our licensed plumbers are on call 24/7 and reach this west-side Green Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Dent (ZIP 45247) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Dent's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Dent?', a: 'Dent is well within our west-side service area in Green Township. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'deer-park', neighborhood: 'Deer Park', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Deer Park? Our licensed plumbers are on call 24/7 and reach this small east-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Deer Park (ZIP 45236) is a small, settled city on the east side, made up largely of mid-century single-family homes on quiet streets.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond day or night.',
    ],
    commonIntro: "Across Deer Park's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Deer Park?', a: 'Deer Park is well within our east-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'terrace-park', neighborhood: 'Terrace Park', state: 'OH', zip: '45174', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Terrace Park? Our licensed plumbers are on call 24/7 and reach this east-side village near the Little Miami the same day. Call (513) 586-5107.',
    relevance: [
      'Terrace Park (ZIP 45174) is an affluent east-side village near the Little Miami River, known for its established early-1900s homes and tree-lined streets.',
      'The older homes here carry aging plumbing, and the low ground near the river adds a flood and backup risk in heavy rain. We respond fast to protect finished spaces.',
    ],
    commonIntro: "In Terrace Park's established older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Terrace Park?', a: 'Terrace Park is well within our east-side service area near the Little Miami. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'dry-run', neighborhood: 'Dry Run', state: 'OH', zip: '45244', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Dry Run? Our licensed plumbers are on call 24/7 and reach this east-side Anderson Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Dry Run (ZIP 45244) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Even newer homes here are old enough for water heaters and sump pumps to fail, while older houses see corrosion leaks. We respond around the clock.',
    ],
    commonIntro: "Across Dry Run's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Dry Run?', a: 'Dry Run is well within our east-side service area in Anderson Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'white-oak', neighborhood: 'White Oak', state: 'OH', zip: '45247', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in White Oak? Our licensed plumbers are on call 24/7 and reach this northwest-side Green Township community the same day. Call (513) 586-5107.',
    relevance: [
      'White Oak (ZIP 45247) is a settled Green Township community on the northwest side, made up largely of mid-century and newer single-family homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond day or night.',
    ],
    commonIntro: "Across White Oak's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach White Oak?', a: 'White Oak is well within our northwest-side service area in Green Township. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'forestville', neighborhood: 'Forestville', state: 'OH', zip: '45230', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Forestville? Our licensed plumbers are on call 24/7 and reach this east-side Anderson Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Forestville (ZIP 45230) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond around the clock.',
    ],
    commonIntro: "Across Forestville's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Forestville?', a: 'Forestville is well within our east-side service area in Anderson Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'cherry-grove', neighborhood: 'Cherry Grove', state: 'OH', zip: '45230', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Cherry Grove? Our licensed plumbers are on call 24/7 and reach this east-side Anderson Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Cherry Grove (ZIP 45230) is a suburban Anderson Township community on the east side, with neighborhoods of mid-century and newer single-family homes.',
      'Aging water heaters, worn supply lines, and the occasional burst pipe are the emergencies we are called for most here. We respond day or night.',
    ],
    commonIntro: "Across Cherry Grove's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Cherry Grove?', a: 'Cherry Grove is well within our east-side service area in Anderson Township. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'kenwood', neighborhood: 'Kenwood', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Kenwood? Our licensed plumbers are on call 24/7 and reach the homes around Kenwood Towne Centre the same day. Call (513) 586-5107.',
    relevance: [
      'Kenwood (ZIP 45236) is an upscale, unincorporated community on the east side around Kenwood Towne Centre, with mid-century homes alongside newer, larger houses.',
      'Larger and older homes both have plumbing that can fail without warning — aging supply lines, water heaters, and hidden leaks. We respond around the clock.',
    ],
    commonIntro: "Across Kenwood's mid-century and larger homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Kenwood?', a: 'Kenwood is well within our east-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'lincoln-heights', neighborhood: 'Lincoln Heights', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Lincoln Heights? Our licensed plumbers are on call 24/7 and reach this historic Mill Creek valley community the same day. Call (513) 586-5107.',
    relevance: [
      'Lincoln Heights (ZIP 45215) is a historic community in the Mill Creek valley north of the city — one of the first self-governed Black municipalities in the northern United States — with older, modest homes.',
      'The low valley ground brings a real risk of backups in heavy rain, and the older housing runs on aging plumbing prone to leaks. We respond around the clock.',
    ],
    commonIntro: "In Lincoln Heights' older valley homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Lincoln Heights?', a: 'Lincoln Heights is within our service area in the Mill Creek valley. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'dillonvale', neighborhood: 'Dillonvale', state: 'OH', zip: '45236', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Dillonvale? Our licensed plumbers are on call 24/7 and reach this east-side Sycamore Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Dillonvale (ZIP 45236) is a Sycamore Township community on the east side near Kenwood, with settled neighborhoods of mid-century homes.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond day or night.',
    ],
    commonIntro: "Across Dillonvale's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Dillonvale?', a: 'Dillonvale is well within our east-side service area near Kenwood. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'woodlawn', neighborhood: 'Woodlawn', state: 'OH', zip: '45215', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Woodlawn? Our licensed plumbers are on call 24/7 and reach this Mill Creek valley village the same day. Call (513) 586-5107.',
    relevance: [
      'Woodlawn (ZIP 45215) is a village in the Mill Creek valley north of the city, with a mix of residential streets and industrial corridors.',
      'The low valley ground raises the risk of backups in heavy rain, and the older homes run on aging plumbing prone to leaks. We respond around the clock.',
    ],
    commonIntro: "Across Woodlawn's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Woodlawn?', a: 'Woodlawn is within our service area in the Mill Creek valley. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'addyston', neighborhood: 'Addyston', state: 'OH', zip: '45001', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Addyston? Our licensed plumbers are on call 24/7 and reach this far-west river village the same day. Call (513) 586-5107.',
    relevance: [
      'Addyston (ZIP 45001) is a small village on the far west side along the Ohio River, an old mill town with closely spaced older worker homes.',
      'Its riverside position makes high water and backups a real risk, and the century-old homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Addyston's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Addyston?', a: 'Addyston is part of our far-west river service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'greenhills', neighborhood: 'Greenhills', state: 'OH', zip: '45218', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Greenhills? Our licensed plumbers are on call 24/7 and reach this historic planned village the same day. Call (513) 586-5107.',
    relevance: [
      'Greenhills (ZIP 45218) is a historic planned "Greenbelt" town built in the 1930s as a New Deal project, now a National Historic Landmark district, with its original cottages and townhomes still in use.',
      'Those 1930s-era homes carry close to a century of plumbing wear — original supply lines and drains that fail with little warning. We take care to repair them without disturbing the historic character.',
    ],
    commonIntro: "In Greenhills' 1930s planned-community homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you work on the historic Greenhills homes?', a: 'Yes. We work throughout Greenhills and take care to repair aging plumbing in its original Greenbelt-era homes without disturbing historic features.' }],
  },
  {
    slug: 'northbrook', neighborhood: 'Northbrook', state: 'OH', zip: '45251', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Northbrook? Our licensed plumbers are on call 24/7 and reach this northwest Colerain Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Northbrook (ZIP 45251) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes.',
      'Homes of that era carry aging plumbing prone to corrosion leaks and failing water heaters — the emergencies we handle most. We respond day or night.',
    ],
    commonIntro: "Across Northbrook's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Northbrook?', a: 'Northbrook is well within our northwest service area in Colerain Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'indian-hill', neighborhood: 'Indian Hill', state: 'OH', zip: '45243', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Indian Hill? Our licensed plumbers are on call 24/7 and reach the estates of this east-side village the same day. Call (513) 586-5107.',
    relevance: [
      'Indian Hill (ZIP 45243) is an affluent east-side village known for its large estates and homes on multi-acre, wooded lots, many set well back from the road.',
      'Big properties mean long water and sewer runs and large plumbing systems, where a leak or line failure can do real damage before it is found — and some homes rely on private wells and septic. We respond around the clock.',
    ],
    commonIntro: "On Indian Hill's large estates, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you work on the large estate properties in Indian Hill?', a: 'Yes. We handle the larger plumbing systems and long service runs common on Indian Hill properties, and we are on call 24/7 for emergencies.' }],
  },
  {
    slug: 'evendale', neighborhood: 'Evendale', state: 'OH', zip: '45241', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Evendale? Our licensed plumbers are on call 24/7 and reach this north-side village the same day. Call (513) 586-5107.',
    relevance: [
      'Evendale (ZIP 45241) is a north-side village with a large industrial base, including GE Aerospace, alongside established residential neighborhoods.',
      'From mid-century homes to commercial and industrial buildings, the plumbing here spans a wide range, but aging water heaters, worn supply lines, and burst pipes are the emergencies we respond to most. We are available day or night.',
    ],
    commonIntro: "Across Evendale's homes and buildings, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Evendale?', a: 'Evendale is well within our north-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'glendale', neighborhood: 'Glendale', state: 'OH', zip: '45246', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Glendale? Our licensed plumbers are on call 24/7 and reach this historic railroad-suburb village the same day. Call (513) 586-5107.',
    relevance: [
      'Glendale (ZIP 45246) is a historic village and one of the country’s earliest planned railroad suburbs — a National Historic Landmark — known for its preserved Victorian homes and winding, tree-lined streets.',
      'Those 19th-century homes often still carry original plumbing, where corroded supply lines and aging drains lead to sudden leaks. We repair with care for the historic details.',
    ],
    commonIntro: "In Glendale's preserved Victorian homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'Do you work on the historic homes in Glendale?', a: 'Yes. We work throughout Glendale and take care to repair aging plumbing in its Victorian homes without disturbing original features.' }],
  },
  {
    slug: 'sharonville', neighborhood: 'Sharonville', state: 'OH', zip: '45241', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Sharonville? Our licensed plumbers are on call 24/7 and reach homes and businesses across this north-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Sharonville (ZIP 45241) is a north-side city near Sharon Woods, with a mix of established residential neighborhoods, the convention center, and industrial corridors.',
      'Mid-century homes here reach the age where supply lines corrode and water heaters fail, and commercial buildings add their own emergencies. We respond around the clock to both.',
    ],
    commonIntro: "Across Sharonville's homes and businesses, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Sharonville?', a: 'Sharonville is well within our north-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'northgate', neighborhood: 'Northgate', state: 'OH', zip: '45251', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Northgate? Our licensed plumbers are on call 24/7 and reach this northwest Colerain Township area the same day. Call (513) 586-5107.',
    relevance: [
      'Northgate (ZIP 45251) is a Colerain Township area on the northwest side around the Northgate Mall corridor, with neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond day or night.',
    ],
    commonIntro: "Across Northgate's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Northgate?', a: 'Northgate is well within our northwest service area in Colerain Township. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'springdale', neighborhood: 'Springdale', state: 'OH', zip: '45246', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Springdale? Our licensed plumbers are on call 24/7 and reach homes and businesses across this north-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Springdale (ZIP 45246) is a north-side city along the Tri-County corridor, with established mid-century neighborhoods alongside a large commercial and retail base.',
      'Mid-century homes here are now at the age where supply lines corrode and water heaters fail, and commercial buildings add their own emergencies. We respond around the clock.',
    ],
    commonIntro: "Across Springdale's homes and businesses, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Springdale?', a: 'Springdale is well within our north-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'miamitown', neighborhood: 'Miamitown', state: 'OH', zip: '45041', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Miamitown? Our licensed plumbers are on call 24/7 and reach this far-west community on the Great Miami River the same day. Call (513) 586-5107.',
    relevance: [
      'Miamitown (ZIP 45041) is a small far-west community on the Great Miami River, with older homes set on low river-bottom ground.',
      'That low ground brings a real risk of flooding and backups in heavy rain, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Miamitown's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My Miamitown home backs up in heavy rain — can you help?', a: 'Yes. We clear emergency backups and failed sump pumps and can advise on a backwater valve suited to low-lying homes near the Great Miami River.' }],
  },
  {
    slug: 'forest-park', neighborhood: 'Forest Park', state: 'OH', zip: '45240', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Forest Park? Our licensed plumbers are on call 24/7 and reach this planned north-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Forest Park (ZIP 45240) is a north-side city developed as a planned community from the 1960s, with neighborhoods of mid-century single-family homes.',
      'Homes built in that era are now well into the age where supply lines corrode, water heaters fail, and sump pumps wear out. We handle those emergencies day or night.',
    ],
    commonIntro: "Across Forest Park's planned-era homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Forest Park?', a: 'Forest Park is well within our north-side service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'pleasant-run', neighborhood: 'Pleasant Run', state: 'OH', zip: '45240', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Pleasant Run? Our licensed plumbers are on call 24/7 and reach this north-side Springfield Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Run (ZIP 45240) is a Springfield Township community on the north side, with settled neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Pleasant Run's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Pleasant Run?', a: 'Pleasant Run is well within our north-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'cleves', neighborhood: 'Cleves', state: 'OH', zip: '45002', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Cleves? Our licensed plumbers are on call 24/7 and reach this far-west river village the same day. Call (513) 586-5107.',
    relevance: [
      'Cleves (ZIP 45002) is a far-west village near where the Great Miami River meets the Ohio, with older homes on low ground prone to flooding.',
      'That riverside position makes high water and backups a recurring risk, and the older housing carries aging plumbing. A fast local response keeps a backup from ruining a lower level.',
    ],
    commonIntro: "In Cleves' older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'My Cleves home floods in heavy rain — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to low-lying homes near the rivers.' }],
  },
  {
    slug: 'north-bend', neighborhood: 'North Bend', state: 'OH', zip: '45052', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in North Bend? Our licensed plumbers are on call 24/7 and reach this historic far-west river village the same day. Call (513) 586-5107.',
    relevance: [
      'North Bend (ZIP 45052) is a historic far-west village on the Ohio River — the burial place of President William Henry Harrison — with older homes set on low riverside ground.',
      'Its riverfront position makes high water and backups a real risk, and the older homes carry aging plumbing. We respond fast to keep the damage contained.',
    ],
    commonIntro: "In North Bend's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach North Bend?', a: 'North Bend is part of our far-west river service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'loveland', neighborhood: 'Loveland', state: 'OH', zip: '45140', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Loveland? Our licensed plumbers are on call 24/7 and reach this historic city on the Little Miami River the same day. Call (513) 586-5107.',
    relevance: [
      'Loveland (ZIP 45140) is a historic city straddling the Little Miami River and the Loveland Bike Trail, with a charming older downtown and a mix of historic and newer homes.',
      'The older homes near the river carry aging plumbing, and the low riverside ground adds a flood and backup risk in heavy rain. We respond around the clock.',
    ],
    commonIntro: "Across Loveland's historic and riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Loveland?', a: 'Loveland is within our service area along the Little Miami River. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'harrison', neighborhood: 'Harrison', state: 'OH', zip: '45030', county: 'Hamilton County, OH',
    intro: 'Plumbing emergency in Harrison? Our licensed plumbers are on call 24/7 and reach this far-west city on the Indiana line the same day. Call (513) 586-5107.',
    relevance: [
      'Harrison (ZIP 45030) is a far-west city on the Indiana state line along the Whitewater River, with an older downtown and a growing mix of established and newer homes.',
      'The older homes carry aging plumbing prone to leaks, and the low ground near the Whitewater adds a backup risk in heavy rain. We respond day or night.',
    ],
    commonIntro: "Across Harrison's older and newer homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Harrison?', a: 'Harrison is part of our far-west service area near the Indiana line. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Kenton County, KY ─────────────────────────────────────────────────
  {
    slug: 'ludlow', neighborhood: 'Ludlow', state: 'KY', zip: '41016', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Ludlow? Our licensed plumbers are on call 24/7 and reach this historic riverfront town the same day. Call (513) 586-5107.',
    relevance: [
      'Ludlow (ZIP 41016) is a historic Northern Kentucky river town with a walkable Elm Street business district and streets of well-preserved Victorian and early-1900s homes.',
      'Those century-old homes carry original galvanized and cast-iron plumbing, and the riverfront location adds a backup risk when the Ohio runs high. We respond around the clock.',
    ],
    commonIntro: "In Ludlow's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Ludlow?', a: 'Ludlow is a core part of our Northern Kentucky service area along the river. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'park-hills', neighborhood: 'Park Hills', state: 'KY', zip: '41011', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Park Hills? Our licensed plumbers are on call 24/7 and reach this hillside city near Devou Park the same day. Call (513) 586-5107.',
    relevance: [
      'Park Hills (ZIP 41011) is a hillside Northern Kentucky city beside Devou Park, known for its early-1900s homes on steep, tree-lined streets above Covington.',
      'The older homes carry aging plumbing prone to leaks, and the hillside grade adds demand on basement drains in heavy rain. We respond day or night.',
    ],
    commonIntro: "In Park Hills' older hillside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Park Hills?', a: 'Park Hills is well within our Northern Kentucky service area near Covington. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'bromley', neighborhood: 'Bromley', state: 'KY', zip: '41016', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Bromley? Our licensed plumbers are on call 24/7 and reach this small riverfront village the same day. Call (513) 586-5107.',
    relevance: [
      'Bromley (ZIP 41016) is a small Northern Kentucky river village next to Ludlow, with older homes on low ground beside the Ohio River.',
      'Its riverside position makes high water and backups a real risk, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Bromley's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Bromley?', a: 'Bromley is within our Northern Kentucky river service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'fort-wright', neighborhood: 'Fort Wright', state: 'KY', zip: '41011', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Fort Wright? Our licensed plumbers are on call 24/7 and reach this hilltop Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Fort Wright (ZIP 41011) is a hilltop Kenton County city above the river, with established neighborhoods of mid-century and newer homes.',
      'Mid-century homes here reach the age where supply lines corrode and water heaters fail, and the hillside terrain adds demand on drains in heavy rain. We respond around the clock.',
    ],
    commonIntro: "Across Fort Wright's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Fort Wright?', a: 'Fort Wright is well within our Northern Kentucky service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'fort-mitchell', neighborhood: 'Fort Mitchell', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Fort Mitchell? Our licensed plumbers are on call 24/7 and reach this established city along Dixie Highway the same day. Call (513) 586-5107.',
    relevance: [
      'Fort Mitchell (ZIP 41017) is an established Kenton County city along the Dixie Highway corridor, with a mix of historic and mid-century homes on settled streets.',
      'The older and mid-century homes here carry aging plumbing, with corrosion leaks and failing water heaters the usual emergencies. We respond day or night.',
    ],
    commonIntro: "Across Fort Mitchell's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Fort Mitchell?', a: 'Fort Mitchell is well within our Northern Kentucky service area along Dixie Highway. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'villa-hills', neighborhood: 'Villa Hills', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Villa Hills? Our licensed plumbers are on call 24/7 and reach this hilltop residential city the same day. Call (513) 586-5107.',
    relevance: [
      'Villa Hills (ZIP 41017) is a hilltop residential Kenton County city above the river, made up largely of mid-century and newer single-family homes.',
      'Even newer homes here reach the age where water heaters and supply lines fail, and the hillside grade adds demand on sump pumps and drains. We respond around the clock.',
    ],
    commonIntro: "Across Villa Hills' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Villa Hills?', a: 'Villa Hills is well within our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'lakeside-park', neighborhood: 'Lakeside Park', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Lakeside Park? Our licensed plumbers are on call 24/7 and reach this small Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Lakeside Park (ZIP 41017) is a small, settled Kenton County city, made up largely of mid-century single-family homes on quiet streets.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond day or night.',
    ],
    commonIntro: "Across Lakeside Park's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Lakeside Park?', a: 'Lakeside Park is well within our Northern Kentucky service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'crescent-springs', neighborhood: 'Crescent Springs', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Crescent Springs? Our licensed plumbers are on call 24/7 and reach this suburban Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Crescent Springs (ZIP 41017) is a suburban Kenton County city, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Crescent Springs' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Crescent Springs?', a: 'Crescent Springs is well within our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'crestview-hills', neighborhood: 'Crestview Hills', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Crestview Hills? Our licensed plumbers are on call 24/7 and reach homes and businesses across this Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Crestview Hills (ZIP 41017) is a Kenton County city home to Thomas More University and the Crestview Hills mall, with residential neighborhoods alongside a commercial corridor.',
      'Mid-century and newer homes here reach the age where water heaters and supply lines fail, and commercial buildings add their own emergencies. We respond day or night.',
    ],
    commonIntro: "Across Crestview Hills' homes and businesses, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Crestview Hills?', a: 'Crestview Hills is well within our Northern Kentucky service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'edgewood', neighborhood: 'Edgewood', state: 'KY', zip: '41017', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Edgewood? Our licensed plumbers are on call 24/7 and reach this residential Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Edgewood (ZIP 41017) is a residential Kenton County city, home to St. Elizabeth Healthcare, with established neighborhoods of mid-century and newer homes.',
      'Homes of that era are now at the age where supply lines corrode, water heaters fail, and sump pumps wear out. We handle those emergencies around the clock.',
    ],
    commonIntro: "Across Edgewood's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Edgewood?', a: 'Edgewood is well within our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'taylor-mill', neighborhood: 'Taylor Mill', state: 'KY', zip: '41015', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Taylor Mill? Our licensed plumbers are on call 24/7 and reach this hilltop Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Taylor Mill (ZIP 41015) is a hilltop residential Kenton County city south of Covington, made up largely of mid-century and newer single-family homes.',
      'Even newer homes here reach the age where water heaters and supply lines fail, and the hillside grade adds demand on sump pumps and drains. We respond day or night.',
    ],
    commonIntro: "Across Taylor Mill's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Taylor Mill?', a: 'Taylor Mill is well within our Northern Kentucky service area. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'elsmere', neighborhood: 'Elsmere', state: 'KY', zip: '41018', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Elsmere? Our licensed plumbers are on call 24/7 and reach this Kenton County city along Dixie Highway the same day. Call (513) 586-5107.',
    relevance: [
      'Elsmere (ZIP 41018) is an established Kenton County city along the Dixie Highway corridor near Erlanger, with a mix of older and mid-century homes.',
      'The age of the housing means aging plumbing is common, with corrosion leaks and failing water heaters the usual emergencies. We respond around the clock.',
    ],
    commonIntro: "Across Elsmere's older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Elsmere?', a: 'Elsmere is well within our Northern Kentucky service area along Dixie Highway. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'independence', neighborhood: 'Independence', state: 'KY', zip: '41051', county: 'Kenton County, KY',
    intro: 'Plumbing emergency in Independence? Our licensed plumbers are on call 24/7 and reach this fast-growing Kenton County city the same day. Call (513) 586-5107.',
    relevance: [
      'Independence (ZIP 41051) is the Kenton County seat and one of the faster-growing cities in Northern Kentucky, with a historic core surrounded by newer subdivisions.',
      'Even in newer subdivisions, water heaters, sump pumps, and supply lines reach the end of their life on a predictable schedule, while the older core sees the issues typical of aging plumbing. We respond day or night.',
    ],
    commonIntro: "Across Independence's newer subdivisions and older core, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Independence?', a: 'Independence is part of our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Campbell County, KY ───────────────────────────────────────────────
  {
    slug: 'dayton-ky', neighborhood: 'Dayton', city: 'Dayton', state: 'KY', zip: '41074', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Dayton, KY? Our licensed plumbers are on call 24/7 and reach this riverfront city next to Bellevue the same day. Call (513) 586-5107.',
    relevance: [
      'Dayton (ZIP 41074) is a Northern Kentucky river city next to Bellevue, with tight streets of well-preserved late-1800s and early-1900s homes near the Ohio River.',
      'Those century-old homes carry original galvanized and cast-iron plumbing, and the riverfront location adds a backup risk when the river runs high. We respond around the clock.',
    ],
    commonIntro: "In Dayton's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Dayton, KY?', a: 'Dayton is a core part of our Northern Kentucky service area along the river. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'southgate', neighborhood: 'Southgate', state: 'KY', zip: '41071', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Southgate? Our licensed plumbers are on call 24/7 and reach this Campbell County city near Newport the same day. Call (513) 586-5107.',
    relevance: [
      'Southgate (ZIP 41071) is a small Campbell County city between Newport and Fort Thomas, with established neighborhoods of mid-century homes.',
      'Homes of that era are now at the age where supply lines corrode and water heaters fail, the emergencies we are called for most. We respond day or night.',
    ],
    commonIntro: "Across Southgate's mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Southgate?', a: 'Southgate is well within our Northern Kentucky service area near Newport. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'wilder', neighborhood: 'Wilder', state: 'KY', zip: '41076', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Wilder? Our licensed plumbers are on call 24/7 and reach homes and businesses across this Campbell County city the same day. Call (513) 586-5107.',
    relevance: [
      'Wilder (ZIP 41076) is a Campbell County city along the Licking River corridor, with a commercial and industrial base alongside residential neighborhoods.',
      'From mid-century homes to commercial buildings, aging water heaters, worn supply lines, and burst pipes are the emergencies we respond to most. We are available day or night.',
    ],
    commonIntro: "Across Wilder's homes and businesses, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Wilder?', a: 'Wilder is well within our Northern Kentucky service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'highland-heights', neighborhood: 'Highland Heights', state: 'KY', zip: '41076', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Highland Heights? Our licensed plumbers are on call 24/7 and reach this Campbell County city near NKU the same day. Call (513) 586-5107.',
    relevance: [
      'Highland Heights (ZIP 41076) is a Campbell County city home to Northern Kentucky University, with a mix of residential neighborhoods and student housing.',
      'Densely used student rentals and mid-century homes both run on plumbing that fails under wear — burst pipes, water heater failures, and clogged drains. We respond around the clock.',
    ],
    commonIntro: "Across Highland Heights' homes and rentals near NKU, the emergencies we see most often are:",
    localFaqs: [{ q: 'Do you handle student rentals near NKU in Highland Heights?', a: 'Yes. We work on the homes and rentals around the university and are available 24/7 for burst pipes and water heater failures.' }],
  },
  {
    slug: 'cold-spring', neighborhood: 'Cold Spring', state: 'KY', zip: '41076', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Cold Spring? Our licensed plumbers are on call 24/7 and reach this growing Campbell County city along US-27 the same day. Call (513) 586-5107.',
    relevance: [
      'Cold Spring (ZIP 41076) is a growing Campbell County city along the US-27 corridor, with a mix of established neighborhoods and newer subdivisions.',
      'Even newer homes here reach the age where water heaters and supply lines fail, while older houses see corrosion leaks. We respond day or night.',
    ],
    commonIntro: "Across Cold Spring's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Cold Spring?', a: 'Cold Spring is within our Northern Kentucky service area along US-27. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'alexandria', neighborhood: 'Alexandria', state: 'KY', zip: '41001', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Alexandria? Our licensed plumbers are on call 24/7 and reach this Campbell County seat the same day. Call (513) 586-5107.',
    relevance: [
      'Alexandria (ZIP 41001) is the Campbell County seat, a growing southern community with a historic core surrounded by newer subdivisions and some semi-rural homes.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the older core and rural homes see aging plumbing and the occasional well or septic issue. We respond around the clock.',
    ],
    commonIntro: "Across Alexandria's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Alexandria?', a: 'Alexandria is part of our southern Campbell County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'melbourne', neighborhood: 'Melbourne', state: 'KY', zip: '41059', county: 'Campbell County, KY',
    intro: 'Plumbing emergency in Melbourne? Our licensed plumbers are on call 24/7 and reach this small river village the same day. Call (513) 586-5107.',
    relevance: [
      'Melbourne (ZIP 41059) is a small Campbell County village along the Ohio River east of Newport, with older homes on low riverside ground.',
      'Its riverside position makes high water and backups a real risk, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Melbourne's older riverside homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Melbourne?', a: 'Melbourne is within our Northern Kentucky river service area. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Boone County, KY ──────────────────────────────────────────────────
  {
    slug: 'hebron', neighborhood: 'Hebron', state: 'KY', zip: '41048', county: 'Boone County, KY',
    intro: 'Plumbing emergency in Hebron? Our licensed plumbers are on call 24/7 and reach this Boone County community near the airport the same day. Call (513) 586-5107.',
    relevance: [
      'Hebron (ZIP 41048) is a Boone County community near the Cincinnati/Northern Kentucky airport (CVG), with a mix of newer subdivisions and established semi-rural homes.',
      'Newer homes reach the age where water heaters and sump pumps fail, while rural properties may run on wells and septic that need fast attention when they fail. We respond around the clock.',
    ],
    commonIntro: "Across Hebron's newer and rural homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Hebron?', a: 'Hebron is part of our Boone County service area near the airport. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'burlington', neighborhood: 'Burlington', state: 'KY', zip: '41005', county: 'Boone County, KY',
    intro: 'Plumbing emergency in Burlington? Our licensed plumbers are on call 24/7 and reach this Boone County seat the same day. Call (513) 586-5107.',
    relevance: [
      'Burlington (ZIP 41005) is the Boone County seat, with a historic core around the old courthouse surrounded by fast-growing newer subdivisions.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the historic core and rural homes see aging plumbing. We respond day or night.',
    ],
    commonIntro: "Across Burlington's newer and historic homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Burlington?', a: 'Burlington is part of our Boone County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'union', neighborhood: 'Union', state: 'KY', zip: '41091', county: 'Boone County, KY',
    intro: 'Plumbing emergency in Union? Our licensed plumbers are on call 24/7 and reach this fast-growing Boone County city the same day. Call (513) 586-5107.',
    relevance: [
      'Union (ZIP 41091) is one of the fastest-growing cities in Boone County, made up largely of newer subdivisions built from the 1990s onward.',
      'Even in newer homes, water heaters, sump pumps, and supply lines reach the end of their life on a predictable schedule — the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Union's newer subdivisions, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Union?', a: 'Union is part of our Boone County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'walton', neighborhood: 'Walton', state: 'KY', zip: '41094', county: 'Boone County, KY',
    intro: 'Plumbing emergency in Walton? Our licensed plumbers are on call 24/7 and reach this southern Boone County town the same day. Call (513) 586-5107.',
    relevance: [
      'Walton (ZIP 41094) is a small, growing town at the southern edge of the Boone County metro, with a historic core and newer subdivisions plus surrounding rural homes.',
      'Newer homes reach the age where water heaters and sump pumps fail, while older and rural properties see aging plumbing and the occasional well or septic issue. We respond day or night.',
    ],
    commonIntro: "Across Walton's newer and older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Walton?', a: 'Walton is at the southern edge of our Boone County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Clermont County, OH ───────────────────────────────────────────────
  {
    slug: 'mount-carmel', neighborhood: 'Mount Carmel', state: 'OH', zip: '45244', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Mount Carmel? Our licensed plumbers are on call 24/7 and reach this east-side Union Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Carmel (ZIP 45244) is a Union Township community on the east side near the I-275 corridor, with established neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond around the clock.',
    ],
    commonIntro: "Across Mount Carmel's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Carmel?', a: 'Mount Carmel is well within our east-side service area in Union Township. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'summerside', neighborhood: 'Summerside', state: 'OH', zip: '45245', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Summerside? Our licensed plumbers are on call 24/7 and reach this Union Township community the same day. Call (513) 586-5107.',
    relevance: [
      'Summerside (ZIP 45245) is a Union Township community in western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond day or night.',
    ],
    commonIntro: "Across Summerside's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Summerside?', a: 'Summerside is within our east-side service area in Union Township. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'withamsville', neighborhood: 'Withamsville', state: 'OH', zip: '45245', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Withamsville? Our licensed plumbers are on call 24/7 and reach this community along Ohio Pike the same day. Call (513) 586-5107.',
    relevance: [
      'Withamsville (ZIP 45245) is a Union Township community along the Ohio Pike corridor in western Clermont County, with a mix of suburban homes and commercial strips.',
      'Mid-century and newer homes here reach the age where water heaters and supply lines fail, and commercial buildings add their own emergencies. We respond around the clock.',
    ],
    commonIntro: "Across Withamsville's homes and businesses, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Withamsville?', a: 'Withamsville is within our east-side service area along Ohio Pike. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'milford', neighborhood: 'Milford', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Milford? Our licensed plumbers are on call 24/7 and reach this historic city on the Little Miami River the same day. Call (513) 586-5107.',
    relevance: [
      'Milford (ZIP 45150) is a historic city straddling the Little Miami River, with a preserved old Main Street district of 19th-century buildings and surrounding older homes.',
      'Those century-old buildings carry aging plumbing, and the low ground near the river adds a flood and backup risk in heavy rain. We respond fast to limit the damage.',
    ],
    commonIntro: "In Milford's historic downtown and older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Milford?', a: 'Milford is within our east-side service area along the Little Miami River. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'mulberry', neighborhood: 'Mulberry', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Mulberry? Our licensed plumbers are on call 24/7 and reach this community near Milford the same day. Call (513) 586-5107.',
    relevance: [
      'Mulberry (ZIP 45150) is a community in the Milford area of western Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Aging water heaters, worn supply lines, and failing sump pumps are the emergencies we are called for most here. We respond day or night.',
    ],
    commonIntro: "Across Mulberry's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Mulberry?', a: 'Mulberry is within our east-side service area near Milford. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'mount-repose', neighborhood: 'Mount Repose', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Mount Repose? Our licensed plumbers are on call 24/7 and reach this community near Milford the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Repose (ZIP 45150) is a community in the Milford area of Clermont County, with suburban neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond around the clock.',
    ],
    commonIntro: "Across Mount Repose's homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Mount Repose?', a: 'Mount Repose is within our east-side service area near Milford. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'day-heights', neighborhood: 'Day Heights', state: 'OH', zip: '45150', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Day Heights? Our licensed plumbers are on call 24/7 and reach this community near Milford the same day. Call (513) 586-5107.',
    relevance: [
      'Day Heights (ZIP 45150) is a community in the Milford area of Clermont County, with suburban and semi-rural homes.',
      'Mid-century and newer homes reach the age where water heaters and sump pumps fail, while rural properties may run on wells and septic. We respond day or night.',
    ],
    commonIntro: "Across Day Heights' homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Day Heights?', a: 'Day Heights is within our east-side service area near Milford. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'new-richmond', neighborhood: 'New Richmond', state: 'OH', zip: '45157', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in New Richmond? Our licensed plumbers are on call 24/7 and reach this historic Ohio River village the same day. Call (513) 586-5107.',
    relevance: [
      'New Richmond (ZIP 45157) is a historic Ohio River village in Clermont County with deep roots in the abolitionist movement, lined with 19th-century homes along the riverfront.',
      'Those century-old homes carry original plumbing, and the riverside location makes high water and backups a recurring risk. We respond fast to keep the damage contained.',
    ],
    commonIntro: "In New Richmond's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'My New Richmond home floods when the river is high — can you help?', a: 'Yes. We handle emergency backups and failed sump pumps and can recommend a backwater valve suited to riverfront homes.' }],
  },
  {
    slug: 'amelia', neighborhood: 'Amelia', state: 'OH', zip: '45102', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Amelia? Our licensed plumbers are on call 24/7 and reach this community along Ohio Pike the same day. Call (513) 586-5107.',
    relevance: [
      'Amelia (ZIP 45102) is a community along the Ohio Pike corridor in Clermont County, with established neighborhoods of mid-century and newer homes.',
      'Homes of that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond around the clock.',
    ],
    commonIntro: "Across Amelia's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Amelia?', a: 'Amelia is within our east-side service area along Ohio Pike. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'batavia', neighborhood: 'Batavia', state: 'OH', zip: '45103', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Batavia? Our licensed plumbers are on call 24/7 and reach this Clermont County seat the same day. Call (513) 586-5107.',
    relevance: [
      'Batavia (ZIP 45103) is the Clermont County seat, set on the East Fork of the Little Miami River, with a historic village core and surrounding newer development.',
      'The older village homes carry aging plumbing, and the low ground near the river adds a backup risk in heavy rain. We respond day or night.',
    ],
    commonIntro: "Across Batavia's historic and newer homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Batavia?', a: 'Batavia is within our east-side service area on the East Fork. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'owensville', neighborhood: 'Owensville', state: 'OH', zip: '45160', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Owensville? Our licensed plumbers are on call 24/7 and reach this Clermont County village the same day. Call (513) 586-5107.',
    relevance: [
      'Owensville (ZIP 45160) is a small village in eastern Clermont County, with a historic core and surrounding rural and suburban homes.',
      'Older homes carry aging plumbing, and rural properties may run on wells and septic that need fast attention when they fail. We respond around the clock.',
    ],
    commonIntro: "Across Owensville's older and rural homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Owensville?', a: 'Owensville is part of our eastern Clermont County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'goshen', neighborhood: 'Goshen', state: 'OH', zip: '45122', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Goshen? Our licensed plumbers are on call 24/7 and reach this Clermont County township community the same day. Call (513) 586-5107.',
    relevance: [
      'Goshen (ZIP 45122) is a township community in northern Clermont County, with a mix of suburban and rural homes.',
      'Suburban homes reach the age where water heaters and sump pumps fail, while rural properties may rely on wells and septic. We respond day or night.',
    ],
    commonIntro: "Across Goshen's suburban and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Goshen?', a: 'Goshen is part of our northern Clermont County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'moscow', neighborhood: 'Moscow', state: 'OH', zip: '45153', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Moscow? Our licensed plumbers are on call 24/7 and reach this small Ohio River village the same day. Call (513) 586-5107.',
    relevance: [
      'Moscow (ZIP 45153) is a small Ohio River village in southeastern Clermont County, with older homes on low riverside ground.',
      'Its riverside position makes high water and backups a real risk, and the older homes carry aging plumbing. A fast response keeps the damage contained.',
    ],
    commonIntro: "In Moscow's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Moscow?', a: 'Moscow is part of our river service area in southeastern Clermont County. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'newtonsville', neighborhood: 'Newtonsville', state: 'OH', zip: '45158', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Newtonsville? Our licensed plumbers are on call 24/7 and reach this small Clermont County village the same day. Call (513) 586-5107.',
    relevance: [
      'Newtonsville (ZIP 45158) is a small rural village in northeastern Clermont County, with older homes and surrounding rural properties.',
      'Older homes carry aging plumbing, and many rural properties run on wells and septic that need fast attention when they fail. We respond around the clock.',
    ],
    commonIntro: "Across Newtonsville's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Newtonsville?', a: 'Newtonsville is part of our eastern Clermont County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'williamsburg', neighborhood: 'Williamsburg', state: 'OH', zip: '45176', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Williamsburg? Our licensed plumbers are on call 24/7 and reach this historic Clermont County village the same day. Call (513) 586-5107.',
    relevance: [
      'Williamsburg (ZIP 45176) is a historic village on the East Fork of the Little Miami River in Clermont County, with a 19th-century core and surrounding rural homes.',
      'The older village homes carry aging plumbing, and the low ground near the river adds a backup risk in heavy rain. We respond day or night.',
    ],
    commonIntro: "Across Williamsburg's historic and rural homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Williamsburg?', a: 'Williamsburg is part of our eastern Clermont County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'bethel', neighborhood: 'Bethel', state: 'OH', zip: '45106', county: 'Clermont County, OH',
    intro: 'Plumbing emergency in Bethel? Our licensed plumbers are on call 24/7 and reach this historic Clermont County village the same day. Call (513) 586-5107.',
    relevance: [
      'Bethel (ZIP 45106) is a historic village in southeastern Clermont County, with a 19th-century core and surrounding rural and small-town homes.',
      'Older homes carry aging plumbing, and rural properties may run on wells and septic that need fast attention when they fail. We respond around the clock.',
    ],
    commonIntro: "Across Bethel's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Bethel?', a: 'Bethel is part of our southeastern Clermont County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Butler County, OH ─────────────────────────────────────────────────
  {
    slug: 'ross', neighborhood: 'Ross', state: 'OH', zip: '45061', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Ross? Our licensed plumbers are on call 24/7 and reach this Butler County township on the Great Miami the same day. Call (513) 586-5107.',
    relevance: [
      'Ross (ZIP 45061) is a Ross Township community in southwestern Butler County along the Great Miami River, with a mix of small-town and rural homes.',
      'Older homes carry aging plumbing, rural properties may run on wells and septic, and the low ground near the river adds a backup risk in heavy rain. We respond around the clock.',
    ],
    commonIntro: "Across Ross's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Ross?', a: 'Ross is part of our Butler County service area along the Great Miami. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'fairfield', neighborhood: 'Fairfield', state: 'OH', zip: '45014', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Fairfield? Our licensed plumbers are on call 24/7 and reach homes across this Butler County city the same day. Call (513) 586-5107.',
    relevance: [
      'Fairfield (ZIP 45014) is a large Butler County city north of Cincinnati, with established mid-century neighborhoods alongside newer subdivisions and a busy commercial corridor.',
      'Mid-century homes here reach the age where supply lines corrode and water heaters fail, while newer homes see their own wear. We respond day or night.',
    ],
    commonIntro: "Across Fairfield's mid-century and newer homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Fairfield?', a: 'Fairfield is part of our Butler County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'beckett-ridge', neighborhood: 'Beckett Ridge', state: 'OH', zip: '45069', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Beckett Ridge? Our licensed plumbers are on call 24/7 and reach this West Chester community the same day. Call (513) 586-5107.',
    relevance: [
      'Beckett Ridge (ZIP 45069) is a planned West Chester community in Butler County built around a golf course, made up largely of homes from the 1980s onward.',
      'Homes from that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond around the clock.',
    ],
    commonIntro: "Across Beckett Ridge's homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Beckett Ridge?', a: 'Beckett Ridge is part of our Butler County service area in West Chester. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'wetherington', neighborhood: 'Wetherington', state: 'OH', zip: '45069', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Wetherington? Our licensed plumbers are on call 24/7 and reach this West Chester community the same day. Call (513) 586-5107.',
    relevance: [
      'Wetherington (ZIP 45069) is an upscale West Chester community in Butler County built around a golf course, with larger homes from the 1980s and 90s onward.',
      'Larger homes mean larger plumbing systems, where a hidden leak or failing line can do real damage before it is noticed, and water heaters and sump pumps reach the end of their life. We respond day or night.',
    ],
    commonIntro: "Across Wetherington's larger homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Wetherington?', a: 'Wetherington is part of our Butler County service area in West Chester. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'hamilton', neighborhood: 'Hamilton', state: 'OH', zip: '45011', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Hamilton? Our licensed plumbers are on call 24/7 and reach this historic Butler County seat on the Great Miami the same day. Call (513) 586-5107.',
    relevance: [
      'Hamilton (ZIP 45011) is the Butler County seat, straddling the Great Miami River, with historic districts like German Village and Dayton Lane full of 19th-century and early-1900s homes.',
      'Those century-old homes carry original galvanized and cast-iron plumbing, and the low ground near the river adds a flood and backup risk in heavy rain. We respond fast to limit the damage.',
    ],
    commonIntro: "In Hamilton's historic riverfront homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Hamilton?', a: 'Hamilton is part of our Butler County service area on the Great Miami River. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'millville', neighborhood: 'Millville', state: 'OH', zip: '45013', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Millville? Our licensed plumbers are on call 24/7 and reach this small Butler County village near Hamilton the same day. Call (513) 586-5107.',
    relevance: [
      'Millville (ZIP 45013) is a small Butler County village west of Hamilton, with older homes and surrounding rural properties.',
      'Older homes carry aging plumbing, and rural properties may run on wells and septic that need fast attention when they fail. We respond around the clock.',
    ],
    commonIntro: "Across Millville's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Millville?', a: 'Millville is part of our Butler County service area near Hamilton. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'new-miami', neighborhood: 'New Miami', state: 'OH', zip: '45011', county: 'Butler County, OH',
    intro: 'Plumbing emergency in New Miami? Our licensed plumbers are on call 24/7 and reach this small village on the Great Miami the same day. Call (513) 586-5107.',
    relevance: [
      'New Miami (ZIP 45011) is a small village on the Great Miami River just north of Hamilton, an old mill community with closely spaced older homes.',
      'The low riverside ground brings a real backup risk in heavy rain, and the older homes run on aging plumbing prone to leaks. We respond day or night.',
    ],
    commonIntro: "In New Miami's older riverside homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach New Miami?', a: 'New Miami is part of our Butler County service area on the Great Miami River. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'monroe', neighborhood: 'Monroe', state: 'OH', zip: '45050', county: 'Butler County, OH',
    intro: 'Plumbing emergency in Monroe? Our licensed plumbers are on call 24/7 and reach this growing city along I-75 the same day. Call (513) 586-5107.',
    relevance: [
      'Monroe (ZIP 45050) is a fast-growing city straddling Butler and Warren Counties along the I-75 corridor between Cincinnati and Dayton, with newer subdivisions and an older town core.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the older core sees aging plumbing. We respond around the clock.',
    ],
    commonIntro: "Across Monroe's newer and older homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Monroe?', a: 'Monroe is part of our service area along the I-75 corridor. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Warren County, OH ─────────────────────────────────────────────────
  {
    slug: 'landen', neighborhood: 'Landen', state: 'OH', zip: '45040', county: 'Warren County, OH',
    intro: 'Plumbing emergency in Landen? Our licensed plumbers are on call 24/7 and reach this planned Warren County community the same day. Call (513) 586-5107.',
    relevance: [
      'Landen (ZIP 45040) is a planned Warren County community near Maineville and Mason, made up largely of homes built from the 1970s and 80s onward around its lake and common areas.',
      'Homes from that era reach the age where water heaters, supply lines, and sump pumps fail — the emergencies we are called for most. We respond around the clock.',
    ],
    commonIntro: "Across Landen's planned-community homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Landen?', a: 'Landen is part of our Warren County service area near Mason. We are on call 24/7 with same-day service.' }],
  },
  {
    slug: 'loveland-park', neighborhood: 'Loveland Park', state: 'OH', zip: '45140', county: 'Warren County, OH',
    intro: 'Plumbing emergency in Loveland Park? Our licensed plumbers are on call 24/7 and reach this Warren County community near Loveland the same day. Call (513) 586-5107.',
    relevance: [
      'Loveland Park (ZIP 45140) is a Warren County community just north of Loveland near the Little Miami River, with established neighborhoods of mid-century homes.',
      'Homes of that era reach the age where supply lines corrode and water heaters fail, and the low ground near the river adds a backup risk in heavy rain. We respond day or night.',
    ],
    commonIntro: "Across Loveland Park's mid-century homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Loveland Park?', a: 'Loveland Park is within our service area near Loveland and the Little Miami. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'maineville', neighborhood: 'Maineville', state: 'OH', zip: '45039', county: 'Warren County, OH',
    intro: 'Plumbing emergency in Maineville? Our licensed plumbers are on call 24/7 and reach this growing Warren County town the same day. Call (513) 586-5107.',
    relevance: [
      'Maineville (ZIP 45039) is a growing town in southern Warren County, with a small historic core surrounded by newer subdivisions and rural homes.',
      'Newer homes reach the age where water heaters and sump pumps fail, while older and rural properties see aging plumbing and the occasional well or septic issue. We respond around the clock.',
    ],
    commonIntro: "Across Maineville's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Maineville?', a: 'Maineville is part of our southern Warren County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'pleasant-plain', neighborhood: 'Pleasant Plain', state: 'OH', zip: '45162', county: 'Warren County, OH',
    intro: 'Plumbing emergency in Pleasant Plain? Our licensed plumbers are on call 24/7 and reach this small Warren County village the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Plain (ZIP 45162) is a small village in southeastern Warren County, with older homes and surrounding rural properties.',
      'Older homes carry aging plumbing, and many rural properties run on wells and septic that need fast attention when they fail. We respond day or night.',
    ],
    commonIntro: "Across Pleasant Plain's older and rural homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Pleasant Plain?', a: 'Pleasant Plain is part of our southeastern Warren County service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'south-lebanon', neighborhood: 'South Lebanon', state: 'OH', zip: '45065', county: 'Warren County, OH',
    intro: 'Plumbing emergency in South Lebanon? Our licensed plumbers are on call 24/7 and reach this growing town on the Little Miami River the same day. Call (513) 586-5107.',
    relevance: [
      'South Lebanon (ZIP 45065) is a growing town on the Little Miami River in Warren County, with a historic core and fast-expanding newer subdivisions.',
      'Newer subdivisions reach the age where water heaters and sump pumps fail, while the older core and low riverside ground add aging plumbing and backup risks. We respond around the clock.',
    ],
    commonIntro: "Across South Lebanon's newer and older homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach South Lebanon?', a: 'South Lebanon is part of our Warren County service area along the Little Miami. We are on call 24/7 and aim for same-day arrival.' }],
  },

  // ── Dearborn County, IN ───────────────────────────────────────────────
  {
    slug: 'lawrenceburg', neighborhood: 'Lawrenceburg', state: 'IN', zip: '47025', county: 'Dearborn County, IN',
    intro: 'Plumbing emergency in Lawrenceburg? Our licensed plumbers are on call 24/7 and reach this historic Ohio River city the same day. Call (513) 586-5107.',
    relevance: [
      'Lawrenceburg (ZIP 47025) is a historic Ohio River city in southeastern Indiana, known for its distilling heritage and a downtown of 19th-century buildings protected by a riverfront levee.',
      'Those century-old buildings carry aging plumbing, and the low riverside setting makes backups a real risk in high water. We respond around the clock.',
    ],
    commonIntro: "In Lawrenceburg's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Lawrenceburg?', a: 'Lawrenceburg is part of our far-west river service area in Dearborn County. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'greendale', neighborhood: 'Greendale', state: 'IN', zip: '47025', county: 'Dearborn County, IN',
    intro: 'Plumbing emergency in Greendale? Our licensed plumbers are on call 24/7 and reach this Dearborn County city next to Lawrenceburg the same day. Call (513) 586-5107.',
    relevance: [
      'Greendale (ZIP 47025) is a Dearborn County city adjoining Lawrenceburg, climbing the hillside above the Ohio River, with a mix of older and mid-century homes.',
      'Older homes carry aging plumbing, and the hillside grade adds demand on basement drains in heavy rain. We respond day or night.',
    ],
    commonIntro: "Across Greendale's older and mid-century homes, the emergencies we see most often are:",
    localFaqs: [{ q: 'How fast can you reach Greendale?', a: 'Greendale is part of our far-west river service area next to Lawrenceburg. We are on call 24/7 and aim for same-day arrival.' }],
  },
  {
    slug: 'aurora', neighborhood: 'Aurora', state: 'IN', zip: '47001', county: 'Dearborn County, IN',
    intro: 'Plumbing emergency in Aurora? Our licensed plumbers are on call 24/7 and reach this historic Ohio River town the same day. Call (513) 586-5107.',
    relevance: [
      'Aurora (ZIP 47001) is a historic Ohio River town in Dearborn County, home to the Hillforest Victorian mansion, with a riverfront downtown of 19th-century homes and buildings.',
      'Those century-old homes carry original plumbing, and the riverside location makes high water and backups a recurring risk. We respond fast to keep the damage contained.',
    ],
    commonIntro: "In Aurora's historic riverfront homes, the emergencies we handle most often are:",
    localFaqs: [{ q: 'How fast can you reach Aurora?', a: 'Aurora is part of our far-west river service area in Dearborn County. We are on call 24/7 and aim for same-day arrival.' }],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

// Nearby places for the internal-link mesh. Uses hand-curated `adjacent` when
// present, otherwise falls back to other locations in the same county (or state),
// so every "nearby" link always points to a real, generated page.
export function getNearby(loc: Location, max = 3): Adjacent[] {
  if (loc.adjacent && loc.adjacent.length) return loc.adjacent.slice(0, max);
  const sameCounty = locations.filter(
    (l) => l.slug !== loc.slug && l.county && l.county === loc.county,
  );
  const pool = sameCounty.length
    ? sameCounty
    : locations.filter((l) => l.slug !== loc.slug && l.state === loc.state);
  return pool.slice(0, max).map((l) => ({ name: l.neighborhood, slug: l.slug }));
}

// County labels for the earlier (Phase 1/2) entries that predate the `county`
// field, so the hub can group every location consistently.
const LEGACY_COUNTY: Record<string, string> = {
  norwood: 'Hamilton County, OH', 'blue-ash': 'Hamilton County, OH', montgomery: 'Hamilton County, OH',
  madeira: 'Hamilton County, OH', wyoming: 'Hamilton County, OH', mariemont: 'Hamilton County, OH',
  cheviot: 'Hamilton County, OH', covedale: 'Hamilton County, OH',
  covington: 'Kenton County, KY', erlanger: 'Kenton County, KY',
  newport: 'Campbell County, KY', bellevue: 'Campbell County, KY', 'fort-thomas': 'Campbell County, KY',
  florence: 'Boone County, KY', mason: 'Warren County, OH', 'west-chester': 'Butler County, OH',
};

// The group heading a location belongs under (for the hub's neighborhood index).
export function groupOf(loc: Location): string {
  return (
    loc.county ??
    LEGACY_COUNTY[loc.slug] ??
    (loc.city ? 'Cincinnati Neighborhoods' : 'Greater Cincinnati')
  );
}

// Group order for display on the hub.
export const COUNTY_ORDER = [
  'Cincinnati Neighborhoods',
  'Hamilton County, OH',
  'Kenton County, KY',
  'Campbell County, KY',
  'Boone County, KY',
  'Clermont County, OH',
  'Butler County, OH',
  'Warren County, OH',
  'Dearborn County, IN',
];

// Locations grouped and ordered for the hub's neighborhood index.
export function locationsByGroup(): { group: string; items: Location[] }[] {
  const map = new Map<string, Location[]>();
  for (const loc of locations) {
    const g = groupOf(loc);
    if (!map.has(g)) map.set(g, []);
    map.get(g)!.push(loc);
  }
  const ordered = COUNTY_ORDER.filter((g) => map.has(g));
  const extras = [...map.keys()].filter((g) => !COUNTY_ORDER.includes(g));
  return [...ordered, ...extras].map((group) => ({ group, items: map.get(group)! }));
}
