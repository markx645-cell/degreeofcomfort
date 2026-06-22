export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'AC blowing warm on a hot afternoon in Sedamsville? Our licensed HVAC techs reach most homes along River Road and the hillside above it the same day. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with much of its housing climbing the hillside above River Road and dating to the late 1800s and early 1900s. Homes that old were never built for central air, so they tend to run a patchwork of retrofitted ductwork, window units, or added-on systems that struggle on the hottest days.',
      'The hillside setting matters for cooling, too: west-facing homes take the full afternoon sun, and the humid air off the Ohio River raises the load on an undersized or aging system. When a condenser quits in that kind of heat, a fast local response keeps an old house from turning into an oven.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes retrofitted for central air, the AC problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Sedamsville on a hot day?', a: 'We keep techs on call across the west side and reach most Sedamsville homes — including the hillside streets above River Road — the same day, often within hours.' }],
  },
  'sayler-park': {
    intro: 'AC down in Sayler Park on a 90-degree day? From the riverfront streets to the homes up the hill, our licensed HVAC techs reach Cincinnati’s westernmost neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside, and it was its own village — originally Home City — before annexation in the early 1900s. The result is rows of Victorian and early-1900s frame houses that predate central air by decades, so cooling here usually means retrofitted ductwork, window units, or a mini-split added later.',
      'The riverfront also sits in the Ohio River floodplain, where saturated ground and humid air push cooling demand higher than it would be up on drier ground. An undersized or aging system has to work harder against that moisture, and when one fails on a hot day, a quick same-day visit keeps a century-old frame house comfortable.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes near the floodplain, the AC problems we handle most often are:',
    localFaqs: [{ q: 'Do you cover Sayler Park even though it is on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area. We treat it like any other Cincinnati neighborhood and aim for same-day arrival on hot days, river streets included.' }],
  },
  'riverside': {
    intro: 'AC not keeping up in Riverside? Our licensed HVAC techs are on call and reach the homes along River Road the same day. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati that runs along River Road and US-50, tucked between Sedamsville to the east and Sayler Park to the west, with the hillside on one side and the Ohio River on the other. Together with Sedamsville it forms one of the oldest riverfront communities on the city’s west side, and that older housing rarely had cooling designed in from the start.',
      'Because so many homes here sit on low Ohio River bottomland, the humid air off the water keeps cooling demand high all summer, and a system that is undersized or near the end of its life simply cannot pull enough heat and moisture out. We size and service systems for that kind of riverfront load and get to failures the same day.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots, the AC problems we are called out for most often are:',
    localFaqs: [{ q: 'My Riverside house never feels cool in July — is the AC too small?', a: 'Often, yes. Older River Road homes are frequently running undersized or aging systems that cannot handle the humid riverfront load. We can size and service a system for your home and reach Riverside the same day.' }],
  },
  'east-price-hill': {
    intro: 'AC quit in the heat in East Price Hill? Our licensed HVAC techs reach the hilltop streets around Warsaw Avenue and the Incline District the same day. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats — the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing: two- and three-story frame homes and brick two-families built close together, most of them cooled long after they were built.',
      'That density shapes the cooling work here. Tight lots leave little room for a condenser, two-families often need separate systems or zoning for each unit, and the hilltop perch above the river flats means west-facing rooms take a hard afternoon heat load. We work with those constraints rather than around them.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families retrofitted for cooling, the AC problems we see most often are:',
    localFaqs: [{ q: 'Do you cool the older two-family homes common in East Price Hill?', a: 'Yes. We work on the multi-unit and two-family homes around Warsaw Avenue every day and can service or zone a separate system for each unit. We reach East Price Hill the same day on hot days.' }],
  },
  'west-price-hill': {
    intro: 'AC blowing warm in West Price Hill? Our licensed HVAC techs reach the neighborhoods along Glenway Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans a little newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — which often means an original or once-replaced central system that is now well past its prime.',
      'In homes from that era we routinely find undersized or aging condensers that were installed decades ago and are running on borrowed time, plus ductwork that was added to a house never designed for it. When one of those systems gives out in July, same-day service matters even in a quieter neighborhood like this one.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'How quickly can you get to West Price Hill off Glenway Avenue on a hot day?', a: 'West Price Hill is squarely in our service area. We keep techs on call and aim to reach homes near Glenway Avenue the same day you call.' }],
  },
  'lower-price-hill': {
    intro: 'AC out in the heat in Lower Price Hill? Our licensed HVAC techs reach the historic streets around State Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses — beautiful, and built long before central air existed.',
      'Those mid-1800s rowhouses sit shoulder to shoulder on tight lots, which leaves little room to place a condenser and makes ductless mini-splits a sensible fit where there is no ductwork to work with. The low valley location near Mill Creek and the river also holds humid air, so cooling has to fight moisture as well as heat. We solve both without tearing up historic interiors.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the valley, the AC problems we handle most often are:',
    localFaqs: [{ q: 'Can you cool an old brick rowhouse in Lower Price Hill with no ductwork?', a: 'Yes. The historic rowhouses around State Avenue often have no place for full ductwork, so we frequently fit ductless mini-splits that cool without major demolition. We reach Lower Price Hill the same day.' }],
  },
  'over-the-rhine': {
    intro: 'AC failing in Over-the-Rhine on a hot day? Our licensed HVAC techs reach the historic blocks around Findlay Market and Vine Street the same day. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. None of it was designed for central air.',
      'Many of those buildings are now split into apartments and condos, so cooling runs on a patchwork of retrofitted systems, window units, and mini-splits squeezed into dense rows where there is almost no room for outdoor condensers. We are used to placing and servicing equipment in those tight historic blocks.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the AC problems we see most often are:',
    localFaqs: [{ q: 'Do you handle cooling in multi-unit buildings in Over-the-Rhine?', a: 'Yes. OTR is full of historic buildings split into apartments and condos. We service and install systems for individual units and work within the tight condenser space the dense rows allow. Same-day service on hot days.' }],
  },
  'downtown': {
    intro: 'AC out in a downtown condo or loft? Our licensed HVAC techs reach the central business district the same day. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Cooling here ranges from modern stacked systems in towers to equipment retrofitted into early-1900s buildings turned residential.',
      'In a converted loft, the AC is often a system squeezed into a building that was never meant to have it, while in the towers a single failure can leave a whole unit warm fast. Either way, getting in, coordinating building access, and restoring cooling quickly is what matters on a hot day.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the AC problems we handle most often are:',
    localFaqs: [{ q: 'Can you work on AC in a downtown high-rise or condo?', a: 'Yes. We work in towers and converted loft buildings regularly and coordinate access so we can restore cooling to your unit the same day. Downtown is one of the quickest areas for us to reach.' }],
  },
  'west-end': {
    intro: 'AC not cooling in the West End? Our licensed HVAC techs reach the neighborhood around TQL Stadium and Linn Street the same day. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer development now mixed in. That spread of housing ages means cooling here runs the full range from retrofitted older homes to modern systems.',
      'The older brick rowhouses were built long before central air and often run window units or ductwork added later, while the low ground near the Mill Creek basin holds humid air that pushes cooling demand up. Matching the right system to each of those situations is most of the work.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach the West End on a hot day?', a: 'The West End sits right next to downtown and is one of the quickest areas for us to reach. We aim for same-day, often within hours, when the AC goes down.' }],
  },
  'mount-adams': {
    intro: 'AC down on the hill in Mount Adams? Our licensed HVAC techs reach the steep, narrow streets above downtown the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Homes that old were never built for central air, so cooling is almost always something added in later.',
      'The hilltop perch leaves homes exposed to long afternoon sun, and the tightly packed rows leave little room for an outdoor condenser, which makes ductless mini-splits a common answer here. Tight, steep streets also mean it pays to call a crew that already knows how to get equipment up the hill.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses retrofitted for cooling, the AC problems we see most often are:',
    localFaqs: [{ q: 'Can you get AC equipment to homes on the steep Mount Adams streets?', a: 'Yes. We work the hill regularly and come prepared for the narrow, steep streets and tight parking that make Mount Adams unique. We reach most homes the same day on hot days.' }],
  },
  'mount-auburn': {
    intro: 'AC blowing warm in Mount Auburn? Our licensed HVAC techs reach one of Cincinnati’s oldest hilltop neighborhoods the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Those Victorian-era houses predate central air by a long way.',
      'Cooling a large, subdivided 19th-century home usually means retrofitted ductwork, window units, or separate systems for each apartment, and the hilltop setting puts the upper floors under a steady afternoon heat load. We size and service systems to match how each of these old houses is actually divided and used.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the AC problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Auburn on a hot day?', a: 'Mount Auburn sits right above downtown, so it is one of the faster neighborhoods for us to reach. We aim for same-day service when the AC fails.' }],
  },
  'clifton': {
    intro: 'AC out in Clifton? Our licensed HVAC techs reach the Gaslight District and the homes around Ludlow Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Big houses of that age rarely had central air built in, so cooling them is its own challenge.',
      'A large Victorian often needs more than one system or proper zoning to cool the upper floors evenly, and a fair number of these homes are now rentals near campus where a dead AC needs a fast fix. Retrofitting cooling into tall, century-old houses is the work we are called for most here.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'Do you handle cooling for student rentals near UC in Clifton?', a: 'Yes. We work on the older homes and rentals throughout Clifton and the university area, and we are available for the dead condensers and uneven cooling that tall old houses tend to have. Same-day service on hot days.' }],
  },
  'corryville': {
    intro: 'AC not keeping up in Corryville? Our licensed HVAC techs reach the Short Vine area near UC the same day. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Most of that housing was built long before central air and has had cooling added piecemeal since.',
      'With so much older housing turned into rentals, AC systems here take heavy use and often run undersized or aging for the number of people they cool. Dense buildings sharing walls leave little room for condensers, so window units and mini-splits are common, and a fast response keeps a hot apartment from staying that way.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the AC problems we see most often are:',
    localFaqs: [{ q: 'How quickly can you reach Corryville near UC on a hot day?', a: 'Corryville is central and close to our usual routes, so it is one of the faster areas for us to reach. We offer same-day service when the AC goes down.' }],
  },
  'northside': {
    intro: 'AC blowing warm in Northside? Our licensed HVAC techs reach the homes around Hamilton Avenue and the Mill Creek valley the same day. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Houses that age were not built for central air, so cooling them usually means retrofitted ductwork or window units.',
      'The low ground near Mill Creek holds humid valley air, which pushes cooling demand higher and makes an undersized or aging system work harder to pull out the moisture. Matching the right-sized system to an old Northside home, valley humidity included, is the work we handle most.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the AC problems we handle most often are:',
    localFaqs: [{ q: 'My Northside house feels muggy even with the AC running — can you help?', a: 'Yes. The humid air off the Mill Creek valley raises the load on a cooling system, and an undersized one will struggle to dehumidify. We can assess and right-size your system and reach Northside the same day.' }],
  },
  'college-hill': {
    intro: 'AC out in College Hill? Our licensed HVAC techs reach the homes along Hamilton Avenue and Belmont the same day. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. Cooling here spans everything from retrofitted older homes to mid-century systems that are now decades old.',
      'In the large early-1900s houses, retrofitted ductwork and zoning are common concerns, while the mid-century homes often run an original or once-replaced condenser near the end of its life. The hilltop setting also means upper floors take a steady afternoon heat load that an undersized system cannot keep up with.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach College Hill on a hot day?', a: 'College Hill is well within our service area along Hamilton Avenue. We keep techs on call and aim for same-day arrival when the AC fails.' }],
  },
  'walnut-hills': {
    intro: 'AC down in Walnut Hills? Our licensed HVAC techs reach the homes around Peebles Corner and McMillan Street the same day. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Buildings of that age predate central air, so cooling is something added in later.',
      'Much of the housing is now split into units, which means separate systems or window units per apartment and very little room to place condensers in a dense building. Cooling a tall, subdivided 19th-century home evenly is the challenge we are called for most here.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the AC problems we see most often are:',
    localFaqs: [{ q: 'Do you cool the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings are split into units, and we can service or fit a system for one apartment without disrupting the rest. We reach the neighborhood the same day on hot days.' }],
  },
  'east-walnut-hills': {
    intro: 'AC blowing warm in East Walnut Hills? Our licensed HVAC techs reach the homes around Woodburn Avenue and DeSales Corner the same day. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here were built well before central air.',
      'Cooling a stately early-1900s home usually means retrofitted ductwork threaded through finished walls, and the bigger houses often need zoning or a second system to cool the upper floors evenly. We work to add and service that cooling without tearing up the original detail these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the AC problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach East Walnut Hills on a hot day?', a: 'East Walnut Hills is close to our central routes, so it is a quick reach. We offer same-day service when the AC goes down.' }],
  },
  'avondale': {
    intro: 'AC out in Avondale? Our licensed HVAC techs reach the neighborhood around the hospitals and the zoo the same day. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older and densely built, much of it rental, and none of it was designed with central air in mind.',
      'Densely built rental housing means cooling systems take heavy use and often run undersized or aging for the space and the people they serve. Window units and retrofitted systems are common, and on a hot day a quick visit keeps a packed older building bearable.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the AC problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Avondale on a hot day?', a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach for us. We offer same-day service when the AC fails.' }],
  },
  'hyde-park': {
    intro: 'AC not keeping up in Hyde Park? Our licensed HVAC techs reach the homes around Hyde Park Square and Erie Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Big houses of that era were built without central air.',
      'Cooling a large Tudor or foursquare evenly usually takes proper zoning or more than one system, because a single undersized unit leaves the upper floors warm while the main floor runs cold. We size and service systems to cool these big older homes floor by floor rather than leaving rooms behind.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'My Hyde Park home’s upstairs never cools down — can you fix that?', a: 'Often that is an undersized or unzoned system trying to cool a large early-1900s house with one stage. We can assess zoning or a second system and reach the homes around Hyde Park Square the same day.' }],
  },
  'oakley': {
    intro: 'AC down in Oakley? Our licensed HVAC techs reach the homes around Oakley Square and Madison Road the same day. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The bungalows that fill much of Oakley were built before central air and cooled later.',
      'Those older bungalows often run a central system retrofitted into a compact house, or a condenser that was added decades ago and is now near the end of its life. Right-sizing and servicing cooling for a small early-1900s footprint is the work we handle most here.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the AC problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Oakley on a hot day?', a: 'Oakley is centrally located on the east side and quick for us to reach. We offer same-day service when the AC goes down.' }],
  },
  'mount-lookout': {
    intro: 'AC blowing warm in Mount Lookout? Our licensed HVAC techs reach the homes around Mount Lookout Square and Ault Park the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes carry cooling that was added long after they were built.',
      'The hilltop setting leaves homes exposed to long afternoon sun, which pushes the heat load on the upper floors, and the larger houses often need zoning or a second system to cool evenly. We size and service systems for those hillside conditions and reach failures the same day.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the AC problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Lookout on a hot day?', a: 'Mount Lookout is well within our east-side service area. We offer same-day arrival when the AC fails.' }],
  },
  'columbia-tusculum': {
    intro: 'AC out in Columbia-Tusculum? Our licensed HVAC techs reach Cincinnati’s oldest neighborhood near the river the same day. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, and is known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Those Victorians predate central air by a century or more.',
      'Cooling a restored Victorian means fitting modern systems without disturbing the period detail owners have worked to preserve, and the low riverside ground holds humid air that raises the cooling load all summer. Retrofitting and servicing cooling carefully in these homes is the work we are called for most.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the AC problems we handle most often are:',
    localFaqs: [{ q: 'Can you add AC to a historic Victorian in Columbia-Tusculum without damaging it?', a: 'Yes. We work on the neighborhood’s older and Painted Lady homes regularly and fit cooling — including ductless options — with care for the original features. We reach the area the same day on hot days.' }],
  },
  'mount-washington': {
    intro: 'AC not cooling in Mount Washington? Our licensed HVAC techs reach the homes along Beechmont Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Cooling here spans retrofitted older houses and mid-century systems that are now decades old.',
      'In the mid-century ranches and houses, the original or once-replaced condenser is often near the end of its life and undersized by today’s standards, while the older homes carry cooling that was added later. Right-sizing and replacing aging systems is the work we are called for most.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Washington on a hot day?', a: 'Mount Washington is squarely in our service area along Beechmont Avenue. We offer same-day arrival when the AC goes down.' }],
  },
  'madisonville': {
    intro: 'AC down in Madisonville? Our licensed HVAC techs reach the homes around Madison Road and Whetsel Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of the neighborhood were built well before central air.',
      'Cooling those early-1900s homes usually means a system retrofitted into a house never designed for it, often undersized or aging, while the newer infill runs modern equipment. Matching the right system to each — and replacing the ones at the end of their life — is the work we handle most here.',
    ],
    commonIntro: 'In Madisonville’s older homes, the AC problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Madisonville on a hot day?', a: 'Madisonville is centrally located on the east side and quick for us to reach. We offer same-day service when the AC fails.' }],
  },
  'pleasant-ridge': {
    intro: 'AC blowing warm in Pleasant Ridge? Our licensed HVAC techs reach the homes along Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. None of that housing was built with central air, so cooling was added in later.',
      'The brick two-families often need a separate system or zoning for each unit, and the early-1900s single-family homes run cooling retrofitted into compact older floor plans. Fitting and servicing systems that cool each unit and floor evenly is the work we are called for most.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the AC problems we handle most often are:',
    localFaqs: [{ q: 'Do you cool the two-family homes common in Pleasant Ridge?', a: 'Yes. We work on the brick two-families throughout Pleasant Ridge and can service or zone a separate system for each unit. We reach the neighborhood the same day on hot days.' }],
  },
  'westwood': {
    intro: 'AC out in Westwood? Our licensed HVAC techs reach Cincinnati’s largest neighborhood along Harrison Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. That range means cooling here covers the full span from retrofitted older homes to mid-century systems.',
      'Across that mix, the common thread is aging cooling equipment — original or once-replaced condensers in the mid-century houses now near the end of their life, and ductwork retrofitted into the older homes. Right-sizing and replacing those systems is the work we are called for most.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the AC problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Westwood on a hot day?', a: 'Westwood is a large west-side neighborhood well within our service area. We aim for same-day arrival along Harrison Avenue and beyond when the AC goes down.' }],
  },
  'norwood': {
    intro: 'AC not keeping up in Norwood? Our licensed HVAC techs reach the homes around Surrey Square and Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing was built long before central air.',
      'On small lots with homes built close together, there is little room to place a condenser, and the two-families often need separate systems or zoning per unit. Window units and mini-splits are common here, and fitting cooling into that dense old grid is the work we are called for most.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the AC problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Norwood on a hot day?', a: 'Norwood sits right in the middle of our service area, surrounded by Cincinnati, so it is a fast reach. We offer same-day service when the AC fails.' }],
  },
  'blue-ash': {
    intro: 'AC down in Blue Ash? Our licensed HVAC techs reach homes and businesses across this northeast-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, which puts a lot of cooling equipment past its prime.',
      'The larger newer homes in Blue Ash’s subdivisions often need zoning or more than one system to cool evenly, while the mid-century houses tend to run an aging condenser near the end of its life. We service homes and businesses alike across the city the same day.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the AC problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Blue Ash on a hot day?', a: 'Blue Ash is well within our northeast service area. We keep techs on call and aim for same-day arrival for both homes and businesses.' }],
  },
  'montgomery': {
    intro: 'AC blowing warm in Montgomery? Our licensed HVAC techs reach homes around the historic district and Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. Cooling here spans century-old structures in the historic core to decades-old subdivisions.',
      'The 19th-century buildings in the historic district were never built for central air and need cooling fitted carefully, while the larger newer homes in the surrounding subdivisions often call for zoning or multiple systems to cool evenly. We match the system to the home across that wide range.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the AC problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Montgomery on a hot day?', a: 'Montgomery is well within our northeast service area. We offer same-day service when the AC goes down.' }],
  },
};
