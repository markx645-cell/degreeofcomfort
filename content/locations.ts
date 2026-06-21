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
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
