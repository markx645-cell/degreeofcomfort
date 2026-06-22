export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Spiking water bill or a stain spreading on the ceiling in Sedamsville? Our licensed plumbers find the leak and fix it at the source, with same-day service to homes along River Road and the hillside above it. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, where much of the housing climbs the hillside above River Road and dates to the late 1800s and early 1900s. Homes that old usually still carry their original galvanized supply lines, which corrode from the inside and develop pinhole and joint leaks that hide inside plaster walls for weeks.',
      'The hillside grade adds its own problem: ground shifting around old lines stresses joints, and a slow leak in a basement or crawl space on the slope can track along the foundation before anyone notices. We use moisture and acoustic detection to pinpoint the source so we open up only what we have to.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with original galvanized lines, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in an older Sedamsville home without tearing up the walls?', a: 'Yes. In Sedamsville’s plaster-walled historic homes we use moisture and acoustic equipment to pinpoint the leak before opening anything, so we fix the source with minimal demolition — usually the same day.' }],
  },
  'sayler-park': {
    intro: 'Water bill creeping up or a damp spot you can’t explain in Sayler Park? We find the leak and fix it at the source, with same-day service from the riverfront streets to the homes up the hill. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside. It was its own village before annexation in the early 1900s, and its streets are still lined with Victorian and early-1900s frame houses — the kind that quietly leak through century-old galvanized supply lines and worn drain joints.',
      'The riverfront sits in the Ohio River floodplain, so saturated ground and high water put steady pressure on low-lying basements and supply lines, and a slow leak under a slab or in a crawl space can hide in that damp for a long time. We use moisture meters and acoustic detection to separate a true pipe leak from groundwater and fix the source.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame homes near the floodplain, the leaks we trace down most often are:',
    localFaqs: [{ q: 'How do you tell a pipe leak from flood-zone dampness in a Sayler Park basement?', a: 'In Sayler Park’s riverfront homes we use moisture readings and acoustic listening to separate a leaking supply line from groundwater coming through the floodplain, then fix the actual source the same day.' }],
  },
  'riverside': {
    intro: 'Unexplained wet spot or a water bill that won’t settle down in Riverside? Our licensed plumbers locate the leak and repair it at the source, with same-day service to the homes along River Road. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati running along River Road and US-50, wedged between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. Many homes sit on low river bottomland, where high groundwater keeps basements and crawl spaces damp and makes a slow supply-line leak easy to miss.',
      'The neighborhood shares the oldest riverfront housing on the west side with Sedamsville, so original galvanized supply lines and aging drain joints are common, and they develop pinhole and seam leaks as they corrode. We pinpoint the source with moisture and acoustic tools rather than guessing, which keeps low-lying lower levels from soaking longer than they have to.',
    ],
    commonIntro: 'On Riverside’s low river-bottom lots with aging lines, the leaks we trace down most often are:',
    localFaqs: [{ q: 'My Riverside basement stays damp — is it groundwater or a leaking pipe?', a: 'On Riverside’s low river-bottom lots both are possible, so we use moisture meters and acoustic detection to confirm whether it is a corroded supply line or high groundwater, then repair the source the same day.' }],
  },
  'east-price-hill': {
    intro: 'Stain bleeding through a shared wall or a water bill climbing in East Price Hill? We find the leak and fix it at the source, with same-day service to the hilltop streets around Warsaw Avenue and the Incline District. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, its streets around Warsaw Avenue and the Incline District packed with dense early-1900s frame homes and brick two-families built close together. That original cast-iron and galvanized plumbing is brittle with age, and a pinhole or joint leak in one wall can soak the shared wall of the unit next door before it shows.',
      'The hillside grade puts added strain on supply lines and joints as the ground shifts, and on tight lots a hidden leak has nowhere to drain but along the foundation. We use acoustic and moisture detection to trace the source through plaster and shared walls so we repair the right line and open only what we must.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a leak between units in an East Price Hill two-family without opening every wall?', a: 'Yes. In East Price Hill’s closely built two-families we use acoustic and moisture detection to pinpoint which line is leaking behind a shared wall, then repair the source with minimal demolition the same day.' }],
  },
  'west-price-hill': {
    intro: 'Damp slab, a warm spot on the floor, or a water bill that keeps rising in West Price Hill? Our licensed plumbers locate the leak and fix it at the source, with same-day service to homes along Glenway Avenue. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale, with a lot of 1920s through 1950s single-family homes. Plenty of those mid-century houses sit on concrete slabs, where a corroded supply line under the floor turns into a slab leak — a warm spot, a damp patch, or water seeping up at the edge of a room.',
      'The original galvanized supply lines in homes this age slowly close up and corrode through, developing pinhole leaks at fittings, while aging water heaters can weep at the base long before they fail outright. We use slab-leak location, moisture meters, and acoustic listening to find the exact spot so the repair stays small.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century slab homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'How do you find a slab leak in a West Price Hill home without breaking up the whole floor?', a: 'In West Price Hill’s mid-century slab houses we use acoustic and pressure-based location to mark the exact spot the line is leaking under the concrete, so we open one area instead of the whole slab — often the same day.' }],
  },
  'lower-price-hill': {
    intro: 'Stain spreading on old plaster or a water bill that won’t make sense in Lower Price Hill? We find the leak and repair it at the source, with same-day service to the historic streets around State Avenue. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, built long before modern plumbing codes, where original galvanized and cast-iron lines corrode through and leak inside thick plaster and brick walls.',
      'The low valley location keeps the ground damp, so a slow supply-line leak in a basement can blend into general moisture and go unnoticed for weeks. We use moisture and acoustic detection to separate a real pipe leak from valley dampness and trace it to the source so we protect the original masonry and woodwork.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century brick rowhouses, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in a Lower Price Hill rowhouse without damaging original brick or plaster?', a: 'Yes. In Lower Price Hill’s 19th-century rowhouses we pinpoint the leak with moisture and acoustic equipment before opening anything, so we repair the source while protecting the original brick and plaster.' }],
  },
  'over-the-rhine': {
    intro: 'Stain bleeding through a ceiling or a water bill that jumped in Over-the-Rhine? Our licensed plumbers find the leak and fix it at the source, with same-day service to the historic blocks around Findlay Market and Vine Street. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate buildings in the country, block after block of brick tenements and rowhouses around Vine Street and Findlay Market, most built between the 1850s and 1880s. That much age means brittle cast-iron stacks and galvanized risers that develop pinhole and joint leaks deep inside thick plaster and masonry walls.',
      'Many of these buildings are now split into apartments and condos running on a patchwork of original and retrofitted lines, so a leak on one floor can track down through shared walls and stacks to the unit below. We use acoustic and moisture detection to find which line is leaking and repair the source without opening every wall.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a leak in an OTR multi-unit building affecting the unit below?', a: 'Yes. In Over-the-Rhine’s converted 19th-century buildings we use acoustic and moisture detection to trace a leak through shared walls and stacks to its source, then repair the right line without disrupting the whole building.' }],
  },
  'downtown': {
    intro: 'Water staining a ceiling in a downtown condo or loft, or a bill that won’t add up? We find the leak and fix it at the source, with same-day service across the central business district. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures between the river and Over-the-Rhine. In the older conversions, original lines run behind finished walls and ceilings, where a pinhole or joint leak can travel several floors before it shows as a stain far from its source.',
      'In the towers, modern stacked risers carry water up many floors, so a single failed fitting can drip down through more than one unit. Either way we use acoustic and moisture detection to find exactly where the line is leaking and coordinate a clean shutoff, so the repair stays contained to one area.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the leaks we trace down most often are:',
    localFaqs: [{ q: 'A leak is showing in my downtown condo but the source may be a floor up — can you trace it?', a: 'Yes. In downtown towers and loft conversions a leak often travels down through risers and finished ceilings, so we use acoustic and moisture detection to find the true source and coordinate the shutoff before we repair it.' }],
  },
  'west-end': {
    intro: 'Stain creeping across a wall or a water bill that keeps rising in the West End? Our licensed plumbers locate the leak and fix it at the source, with same-day service around TQL Stadium and Linn Street. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes mixed among mid-century housing. The older brick homes carry decades-old galvanized and cast-iron plumbing that corrodes through and leaks behind plaster long before it is obvious.',
      'The low ground near the Mill Creek basin keeps basements damp, so a slow supply-line leak can blend into that moisture for weeks. We use moisture meters and acoustic listening to separate a true pipe leak from basin dampness and trace it back to the source.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Why do older West End brick homes get so many pipe leaks?', a: 'Many West End homes still run on decades-old galvanized and cast-iron lines that corrode from the inside, so they develop pinhole and joint leaks behind plaster. We pinpoint the source and repair it the same day.' }],
  },
  'mount-adams': {
    intro: 'Damp spot in a hillside basement or a water bill that jumped in Mount Adams? We find the leak and fix it at the source, with same-day service to the steep, narrow streets of the hilltop. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, full of tightly packed 19th-century rowhouses and townhomes on steep grades and narrow streets. Those century-old homes carry original supply and drain lines that corrode and develop pinhole and joint leaks inside plaster walls.',
      'The steep hillside puts steady pressure on lines and joints as the ground shifts, and a slow leak in a basement on the slope can track along the foundation before it shows. We come prepared for the hill’s tight access and use acoustic and moisture detection to pinpoint the source rather than opening wall after wall.',
    ],
    commonIntro: 'In Mount Adams’ steep, century-old rowhouses, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in a steep Mount Adams rowhouse without opening every wall?', a: 'Yes. In Mount Adams’ century-old hillside rowhouses we use acoustic and moisture equipment to pinpoint the leak first, so we repair the source with minimal demolition even on the steep, tight-access streets.' }],
  },
  'mount-auburn': {
    intro: 'Stain spreading on plaster or a water bill you can’t explain in Mount Auburn? Our licensed plumbers locate the leak and repair it at the source, with same-day service to one of Cincinnati’s oldest hilltop neighborhoods. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Those Victorian-era houses carry some of the oldest plumbing in the city — original cast-iron drains and galvanized supply lines that corrode and develop pinhole leaks deep in plaster walls.',
      'In subdivided houses a single leaking line can soak more than one unit, and the hilltop grade stresses old joints as the ground settles. We use acoustic and moisture detection to find which line is leaking and repair the source so the damage stays contained.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Why do older Mount Auburn homes get so many pipe leaks?', a: 'Mount Auburn’s 19th-century homes still carry some of the oldest galvanized and cast-iron plumbing in the city, which corrodes from the inside and develops pinhole leaks. We pinpoint the source and repair it the same day.' }],
  },
  'clifton': {
    intro: 'Water bill climbing or a stain on the ceiling in a big Clifton Victorian? We find the leak and fix it at the source, with same-day service to the Gaslight District and the homes around Ludlow Avenue. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, known for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Houses that big and that old carry a lot of original plumbing, and corroding galvanized supply lines develop pinhole and joint leaks that hide inside thick plaster walls.',
      'Many of these homes are now rentals near campus, where a slow leak can run unnoticed between tenants, and the mature trees over old sewer laterals add root intrusion to the mix. We use acoustic and moisture detection to trace the source so the repair stays small in these large historic houses.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in a large Clifton Victorian without tearing into the plaster?', a: 'Yes. In Clifton’s big early-1900s homes we use moisture and acoustic equipment to pinpoint the leak inside the walls first, so we repair the source with minimal demolition, often the same day.' }],
  },
  'corryville': {
    intro: 'Spiking water bill or a damp spot in a Corryville rental near campus? Our licensed plumbers locate the leak and fix it at the source, with same-day service to the Short Vine area near UC. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Heavy use on aging galvanized supply lines wears them through, so pinhole and joint leaks behind plaster are common in this older, densely packed housing.',
      'Because so many units share walls and stacks, a leak in one apartment can soak the next before anyone reports it. We use acoustic and moisture detection to find which line is leaking through the shared walls and repair the source without opening the whole building.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a leak between units in a Corryville rental without disrupting every tenant?', a: 'Yes. In Corryville’s densely built rentals near UC we use acoustic and moisture detection to pinpoint which shared line is leaking, then repair the source with minimal disruption the same day.' }],
  },
  'northside': {
    intro: 'Damp basement or a water bill that won’t settle in Northside? We find the leak and fix it at the source, with same-day service to the homes around Hamilton Avenue and the Mill Creek valley. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. The age of that housing means original galvanized and cast-iron plumbing is common, and it corrodes through to leave pinhole and joint leaks inside plaster walls.',
      'The low ground near Mill Creek keeps basements damp, so a slow supply-line leak can hide in that moisture for weeks before it is noticed. We use moisture meters and acoustic detection to separate a real pipe leak from valley dampness and trace it to the source.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the leaks we trace down most often are:',
    localFaqs: [{ q: 'My Northside basement stays damp — is it the Mill Creek ground or a leaking pipe?', a: 'In Northside’s low-lying streets near Mill Creek both are possible, so we use moisture readings and acoustic detection to confirm whether a corroded supply line is leaking, then fix the source the same day.' }],
  },
  'college-hill': {
    intro: 'Warm spot on the floor or a water bill that keeps climbing in College Hill? Our licensed plumbers locate the leak and fix it at the source, with same-day service to the homes along Hamilton Avenue and Belmont. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes and mid-century houses. The early-1900s homes carry corroding galvanized supply lines that develop pinhole and joint leaks behind plaster, while many mid-century houses sit on slabs where a leaking supply line under the floor turns into a slab leak.',
      'A slab leak shows up as a warm patch, a damp spot, or water seeping at the edge of a room, and it can run for weeks before the bill gives it away. We use slab-leak location and acoustic listening to mark the exact spot so the repair stays small in either type of home.',
    ],
    commonIntro: 'Across College Hill’s early-1900s and mid-century slab homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'How do you find a slab leak in a mid-century College Hill home?', a: 'In College Hill’s mid-century slab houses we use acoustic and pressure-based location to mark exactly where the line is leaking under the concrete, so we open one area instead of the whole floor — often the same day.' }],
  },
  'walnut-hills': {
    intro: 'Stain bleeding through a ceiling or a water bill that jumped in Walnut Hills? We find the leak and fix it at the source, with same-day service to the homes around Peebles Corner and McMillan Street. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. That century-old housing runs on aging cast-iron and galvanized plumbing that corrodes through and leaks behind thick plaster walls.',
      'Much of it is now split into units, so one leaking line can soak more than one apartment before it is reported. We use acoustic and moisture detection to find which line is leaking and repair the source without opening every wall in the building.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a leak in a Walnut Hills apartment building without shutting down every unit?', a: 'Yes. Many Walnut Hills buildings are split into units, so we use acoustic and moisture detection to pinpoint which line is leaking and repair the source while keeping water on for the rest of the building.' }],
  },
  'east-walnut-hills': {
    intro: 'Water bill climbing or a stain spreading near original woodwork in East Walnut Hills? Our licensed plumbers locate the leak and fix it at the source, with same-day service around Woodburn Avenue and DeSales Corner. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here often still carry original galvanized supply lines and aging drains that corrode through to pinhole and joint leaks behind plaster.',
      'In homes this finished, a slow hidden leak can damage original woodwork and detailing before anyone sees it, so finding the exact source matters. We use moisture and acoustic detection to pinpoint the leak and repair it with the least demolition possible.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in an East Walnut Hills home before it damages the original woodwork?', a: 'Yes. In East Walnut Hills’ finished early-1900s homes we use moisture and acoustic equipment to pinpoint the leak fast and repair the source with minimal demolition, protecting the original detailing.' }],
  },
  'avondale': {
    intro: 'Spiking water bill or a damp wall in an Avondale rental or older home? We find the leak and fix it at the source, with same-day service to the neighborhood around the hospitals and the zoo. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. A lot of that housing is older and densely built, much of it rental, so aging galvanized supply lines under heavy use corrode through to pinhole and joint leaks behind plaster.',
      'In densely packed and subdivided buildings, a leaking line can soak the unit next door before it is reported. We use acoustic and moisture detection to trace which line is leaking and repair the source without opening the whole building.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Why do older Avondale homes and rentals get so many pipe leaks?', a: 'Much of Avondale’s housing runs on aging galvanized lines under heavy rental use, so they corrode and develop pinhole leaks. We pinpoint the source with detection equipment and repair it the same day.' }],
  },
  'hyde-park': {
    intro: 'Hidden leak quietly damaging a finished basement in Hyde Park, or a bill that won’t add up? Our licensed plumbers locate the leak and fix it at the source, with same-day service around Hyde Park Square and Erie Avenue. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Houses this big and this old carry aging supply lines that corrode and develop pinhole leaks, and in a finished home that water can do expensive damage to basements and original details before it is noticed.',
      'The mature trees over old sewer laterals add root intrusion to the picture, while a slow supply-line leak hides behind plaster for weeks. We use moisture and acoustic detection to find the exact source so we repair the right line with the least disruption to these finished homes.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in a Hyde Park home before it ruins a finished basement?', a: 'Yes. In Hyde Park’s large early-1900s homes we use moisture and acoustic equipment to pinpoint the leak early and repair the source, protecting the finished basements and original details these homes are known for.' }],
  },
  'oakley': {
    intro: 'Warm spot on the floor or a water bill creeping up in an Oakley bungalow? We find the leak and fix it at the source, with same-day service around Oakley Square and Madison Road. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. Those older bungalows were built with galvanized supply lines and cast-iron drains that are well past their prime, so corrosion leaves pinhole and joint leaks behind plaster and at fittings.',
      'Aging water heaters in these homes can weep at the base long before they fail, and a slow supply-line leak hides until the bill spikes. We use acoustic and moisture detection to trace the source so the repair stays small in these older houses.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Why do older Oakley bungalows get so many pipe leaks?', a: 'Oakley’s early-1900s bungalows still carry galvanized supply lines that corrode from the inside, so they develop pinhole leaks at fittings. We pinpoint the source and repair it the same day.' }],
  },
  'mount-lookout': {
    intro: 'Damp spot in a hillside basement or a water bill that jumped in Mount Lookout? Our licensed plumbers locate the leak and fix it at the source, with same-day service around Mount Lookout Square and Ault Park. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes carry decades-old supply lines that corrode and develop pinhole and joint leaks behind plaster.',
      'The hillside grade stresses old joints as the ground shifts, and a slow leak in a basement on the slope can track along the foundation before it shows. We use acoustic and moisture detection to pinpoint the source rather than opening wall after wall.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in a hillside Mount Lookout home without tearing up walls?', a: 'Yes. In Mount Lookout’s older hilltop homes we use moisture and acoustic equipment to pinpoint the leak before opening anything, so we repair the source with minimal demolition the same day.' }],
  },
  'columbia-tusculum': {
    intro: 'Stain spreading on a restored Painted Lady or a water bill that won’t settle in Columbia-Tusculum? We find the leak and fix it at the source, with same-day service to Cincinnati’s oldest neighborhood near the river. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful Painted Ladies — restored Victorian homes — on the east side near the Ohio River. Those Victorian and early homes carry original plumbing well past its service life, where corroded galvanized lines leak behind plaster and threaten carefully restored interiors.',
      'The low riverside ground keeps basements damp, so a slow supply-line leak can blend into that moisture and run for weeks. We use moisture and acoustic detection to separate a real pipe leak from riverside dampness and trace it to the source, protecting the historic finishes.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a leak in a restored Columbia-Tusculum Painted Lady without damaging the finishes?', a: 'Yes. In Columbia-Tusculum’s restored Victorian homes we pinpoint the leak with moisture and acoustic equipment before opening anything, so we repair the source while protecting the original finishes.' }],
  },
  'mount-washington': {
    intro: 'Warm spot on a slab floor or a water bill creeping up in Mount Washington? Our licensed plumbers locate the leak and fix it at the source, with same-day service to the homes along Beechmont Avenue. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. The early-1900s homes carry original galvanized supply lines that corrode to pinhole leaks, while many mid-century houses sit on slabs where a leaking line under the floor becomes a slab leak.',
      'A slab leak shows as a warm patch, a damp spot, or water at the edge of a room, and it can run for weeks before the bill gives it away. We use slab-leak location and acoustic listening to mark the exact spot so the repair stays small in either type of home.',
    ],
    commonIntro: 'Across Mount Washington’s early-1900s and mid-century slab homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'How do you find a slab leak in a mid-century Mount Washington home?', a: 'In Mount Washington’s mid-century slab houses we use acoustic and pressure-based location to mark where the line is leaking under the concrete, so we open one area instead of the whole floor — often the same day.' }],
  },
  'madisonville': {
    intro: 'Spiking water bill or a damp wall in an older Madisonville home? We find the leak and fix it at the source, with same-day service around Madison Road and Whetsel Avenue. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville run on aging galvanized and cast-iron plumbing that corrodes through to pinhole and joint leaks behind plaster.',
      'A slow supply-line leak in one of these homes can hide for weeks until the bill spikes or a stain appears. We use moisture and acoustic detection to trace the source so the repair stays small in these older houses.',
    ],
    commonIntro: 'In Madisonville’s older homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Why do older Madisonville homes get so many pipe leaks?', a: 'Much of Madisonville’s housing still runs on aging galvanized and cast-iron lines that corrode from the inside, so they develop pinhole leaks behind the walls. We pinpoint the source and repair it the same day.' }],
  },
  'pleasant-ridge': {
    intro: 'Stain bleeding through a shared wall or a water bill that jumped in a Pleasant Ridge two-family? Our licensed plumbers locate the leak and fix it at the source, with same-day service to the homes along Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. Those older single- and two-family homes carry decades-old galvanized supply lines and aging drains that corrode to pinhole and joint leaks behind plaster.',
      'In a two-family, a leaking line in one unit can soak the shared wall of the other before it is noticed. We use acoustic and moisture detection to find which line is leaking and repair the source without opening both units.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a leak between units in a Pleasant Ridge two-family without opening both sides?', a: 'Yes. In Pleasant Ridge’s brick two-families we use acoustic and moisture detection to pinpoint which line is leaking behind the shared wall, then repair the source with minimal demolition the same day.' }],
  },
  'westwood': {
    intro: 'Warm spot on the floor or a water bill that keeps climbing in Westwood? We find the leak and fix it at the source, with same-day service across Cincinnati’s largest neighborhood along Harrison Avenue. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, ranging from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. The early-1900s homes carry galvanized supply lines closing up with corrosion and leaking at fittings, while many mid-century houses sit on slabs where a leaking line under the floor becomes a slab leak.',
      'A slab leak shows as a warm patch or a damp spot at the edge of a room, and an aging water heater can weep at the base before it fails. We use slab-leak location, moisture meters, and acoustic listening to find the exact spot across this wide range of older housing.',
    ],
    commonIntro: 'Across Westwood’s early-1900s and mid-century slab homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'How do you find a slab leak in a mid-century Westwood home without breaking up the floor?', a: 'In Westwood’s mid-century slab houses we use acoustic and pressure-based location to mark the exact spot the line is leaking under the concrete, so we open one area instead of the whole slab — often the same day.' }],
  },
  'norwood': {
    intro: 'Stain spreading on a shared wall or a water bill that jumped in Norwood? Our licensed plumbers locate the leak and fix it at the source, with same-day service around Surrey Square and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. That tightly packed, century-old housing runs on corroded galvanized supply lines and aging cast-iron drains that develop pinhole and joint leaks behind plaster.',
      'On small lots with shared laterals and closely built homes, a leaking line in one house can affect the next before it is noticed. We use acoustic and moisture detection to find which line is leaking and repair the source without opening more than we have to.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Why do older Norwood homes get so many pipe leaks?', a: 'Norwood’s century-old streetcar-era homes still carry galvanized and cast-iron plumbing that corrodes from the inside, so they develop pinhole leaks behind the walls. We pinpoint the source and repair it the same day.' }],
  },
  'blue-ash': {
    intro: 'Failing fitting, a weeping water heater, or a water bill that crept up in Blue Ash? We find the leak and fix it at the source, with same-day service to homes and businesses across this northeast-side city. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, so worn supply lines and fittings develop slow leaks, and many of these homes sit on slabs where a leaking line under the floor becomes a slab leak.',
      'Aging water heaters weep at the base before they fail, and a slow supply-line leak hides until the bill jumps. We use slab-leak location, moisture meters, and acoustic listening to pinpoint the source in homes and businesses alike.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the leaks we trace down most often are:',
    localFaqs: [{ q: 'How do you find a slab leak in a Blue Ash home without breaking up the floor?', a: 'In Blue Ash’s slab-built homes we use acoustic and pressure-based location to mark exactly where the line is leaking under the concrete, so we open one area instead of the whole slab — often the same day.' }],
  },
  'montgomery': {
    intro: 'Stain on the ceiling of a historic-core home or a water bill that won’t add up in Montgomery? Our licensed plumbers locate the leak and fix it at the source, with same-day service around the historic district and Montgomery Road. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. In the historic core, century-old structures carry original galvanized and cast-iron plumbing that corrodes to pinhole and joint leaks behind plaster, while the decades-old subdivisions add worn supply lines and slab leaks under concrete floors.',
      'A slow leak in either type of home hides until a stain appears or the bill spikes. We use moisture meters, acoustic listening, and slab-leak location to pinpoint the source across this wide range of housing.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the leaks we trace down most often are:',
    localFaqs: [{ q: 'Can you find a hidden leak in a Montgomery historic-district home without damaging it?', a: 'Yes. In Montgomery’s 19th-century historic-core homes we use moisture and acoustic equipment to pinpoint the leak before opening anything, so we repair the source with minimal demolition the same day.' }],
  },
};
