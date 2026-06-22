export const part1: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'sedamsville': {
    intro: 'Furnace quit on a cold night in Sedamsville? Our licensed HVAC techs are on call 24/7 and reach most homes along River Road and the hillside above it the same day. Call (513) 586-5107.',
    relevance: [
      'Sedamsville (ZIP 45204) is a historic riverside neighborhood on Cincinnati’s west side, with much of its housing climbing the hillside above River Road and dating to the late 1800s and early 1900s. Homes that old usually run aging gas furnaces tied into ductwork that was added or reworked over the decades, and many were originally heated by boilers before forced air was retrofitted in.',
      'Drafty old construction and exposed hillside positions mean these furnaces work hard through an Ohio River Valley winter, so a tired heat exchanger or worn blower motor tends to give out on the coldest night. A fast local response keeps a century-old house from getting dangerously cold while we make the repair.',
    ],
    commonIntro: 'In Sedamsville’s century-old hillside homes with aging gas furnaces, the heating problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Sedamsville when the heat goes out?', a: 'We keep techs on call across the west side around the clock and reach most Sedamsville homes — including the hillside streets above River Road — the same day, often within hours.' }],
  },
  'sayler-park': {
    intro: 'No heat in Sayler Park on a freezing morning? From the riverfront streets to the homes up the hill, our licensed HVAC techs are on call 24/7 and reach Cincinnati’s westernmost neighborhood the same day. Call (513) 586-5107.',
    relevance: [
      'Sayler Park (ZIP 45233) is Cincinnati’s westernmost neighborhood, strung along the Ohio River past Riverside and annexed in the early 1900s after life as its own village. Its tree-lined streets are full of Victorian and early-1900s frame houses, and a frame house that old usually heats with a gas furnace that has long since outlived the system it replaced.',
      'Two local factors strain those furnaces. The riverfront sits in the Ohio River floodplain, so damp, saturated ground and high water can leave a basement furnace and its venting fighting moisture all winter. Add a century of wear on the equipment and you get the no-heat calls we run most on the coldest nights — failed ignitions, cracked heat exchangers, and blowers that finally seize.',
    ],
    commonIntro: 'In Sayler Park’s century-old frame houses near the floodplain, the heating problems we see most often are:',
    localFaqs: [{ q: 'Do you service Sayler Park even though it is on the far west edge of the city?', a: 'Yes. Sayler Park is well within our service area, river streets included. We are on call 24/7 and aim for same-day arrival when the heat goes out.' }],
  },
  'riverside': {
    intro: 'Furnace down in Riverside with the temperature dropping? Our licensed HVAC techs are on call 24/7 and reach the homes along River Road the same day. Call (513) 586-5107.',
    relevance: [
      'Riverside (ZIP 45204) is the narrow strip of Cincinnati along River Road and US-50, tucked between Sedamsville and Sayler Park with the hillside on one side and the Ohio River on the other. Many homes here sit on low river bottomland, where damp ground and high groundwater keep basement furnaces and their venting working against moisture through the winter.',
      'That low, exposed position next to one of the oldest riverfront communities on the west side means older heating equipment ages fast. A furnace standing in a humid lower level near the river is prone to corroded burners, rust on the heat exchanger, and a blower motor that fails when the cold finally settles in — which is why same-day repair matters here.',
    ],
    commonIntro: 'On Riverside’s low riverfront lots, the furnace problems we are called out for most often are:',
    localFaqs: [{ q: 'My Riverside furnace sits in a damp basement near the river — is that a problem?', a: 'It can be. Moisture off the river bottomland is hard on burners, venting, and the heat exchanger. We are on call 24/7, reach River Road homes the same day, and can advise on protecting the unit from the damp.' }],
  },
  'east-price-hill': {
    intro: 'Lost heat in East Price Hill? Our licensed HVAC techs are on call 24/7 and reach the hilltop streets around Warsaw Avenue and the Incline District the same day. Call (513) 586-5107.',
    relevance: [
      'East Price Hill (ZIP 45205) sits on the bluff above the west-side river flats, the neighborhood the old Price Hill Incline once carried residents up to. Its streets around Warsaw Avenue and the Incline District are packed with dense early-1900s housing — two- and three-story frame homes and brick two-families built close together, most heated by gas furnaces fed through ductwork added over the decades.',
      'That dense, century-old stock is exactly what keeps furnace techs busy. Shared walls and tight lots mean one home’s heating trouble sits right against the next, original ductwork is often undersized or leaky, and the exposed hilltop position pushes a tired furnace hard through an Ohio River Valley winter. Worn heat exchangers and failing igniters are the calls we run most.',
    ],
    commonIntro: 'In East Price Hill’s dense, early-1900s homes and two-families, the heating problems we see most often are:',
    localFaqs: [{ q: 'Do you work on the older two-family homes common in East Price Hill?', a: 'Yes. We service the multi-unit and two-family homes around Warsaw Avenue every day and can repair a furnace serving one unit without disrupting the rest of the building. We are on call 24/7.' }],
  },
  'west-price-hill': {
    intro: 'Need furnace repair in West Price Hill? Our licensed HVAC techs are on call 24/7 and reach the neighborhoods along Glenway Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'West Price Hill (ZIP 45238) is the larger, more residential stretch of the west side, running out along Glenway Avenue toward Covedale. Its housing leans newer than the river neighborhoods — a lot of 1920s through 1950s single-family homes — but a furnace in a 1950s house is often original or close to it, well past the point where heat exchangers and blowers start to fail.',
      'In homes from that era we routinely find furnaces that are undersized for additions made over the years, ductwork that was never balanced, and ignition systems near the end of their life. Any one of those can turn into a no-heat night without warning, which is why same-day service matters even in a quieter neighborhood like this one.',
    ],
    commonIntro: 'Across West Price Hill’s mid-century single-family homes, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'How quickly can you get to West Price Hill off Glenway Avenue?', a: 'West Price Hill is squarely in our service area. We keep techs on call around the clock and aim to reach homes near Glenway Avenue the same day you call.' }],
  },
  'lower-price-hill': {
    intro: 'No heat in Lower Price Hill? Our licensed HVAC techs are on call 24/7 and reach the historic streets around State Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Lower Price Hill (ZIP 45204) is the compact neighborhood at the foot of Price Hill, down in the Mill Creek valley near the river and the industrial bottoms around State Avenue. It holds one of Cincinnati’s most intact stretches of 19th-century Italianate brick rowhouses, many originally heated by coal and boilers before forced-air gas furnaces were retrofitted in.',
      'Those mid-1800s rowhouses were built long before modern heating, so a retrofitted furnace often vents through old chimneys and pushes air through ducts squeezed into a house that was never designed for them. Down in the low valley, damp air adds wear to burners and venting, and on the coldest nights a tired furnace in a drafty brick rowhouse is the call we run most.',
    ],
    commonIntro: 'In Lower Price Hill’s 19th-century rowhouses down in the valley, the heating problems we handle most often are:',
    localFaqs: [{ q: 'Do you work on furnaces in the old brick rowhouses in Lower Price Hill?', a: 'Yes. We service the historic 19th-century rowhouses around State Avenue regularly, including furnaces retrofitted into homes that once ran on boilers. We are on call 24/7 with same-day service.' }],
  },
  'over-the-rhine': {
    intro: 'Heat out in Over-the-Rhine? Our licensed HVAC techs are on call 24/7 and reach the historic blocks around Findlay Market and Vine Street the same day. Call (513) 586-5107.',
    relevance: [
      'Over-the-Rhine (ZIP 45202) holds one of the largest intact collections of 19th-century Italianate architecture in the country — block after block of brick tenements, storefronts, and rowhouses around Vine Street and Findlay Market built between the 1850s and 1880s. Most have moved from their original boilers and radiators to a patchwork of retrofitted gas furnaces over the years.',
      'Buildings that old, many now split into apartments and condos, run their heat through whatever could be fit into tall, narrow brick structures: furnaces tucked into basements, ducts threaded up through old walls, and venting shared in ways that need an experienced hand. When one furnace fails in OTR, several units can lose heat at once, so a fast response matters.',
    ],
    commonIntro: 'In Over-the-Rhine’s 19th-century buildings and converted multi-units, the heating problems we see most often are:',
    localFaqs: [{ q: 'Do you handle furnaces in multi-unit buildings in Over-the-Rhine?', a: 'Yes. OTR is full of historic buildings split into apartments and condos. We can diagnose and repair the furnace serving one unit without disrupting heat to the rest of the building, and we are on call 24/7.' }],
  },
  'downtown': {
    intro: 'No heat in your downtown condo or loft? Our licensed HVAC techs are on call 24/7 and reach the central business district the same day. Call (513) 586-5107.',
    relevance: [
      'Downtown Cincinnati (ZIP 45202) mixes high-rise condos and converted loft buildings with century-old commercial structures across the central business district between the river and Over-the-Rhine. Heating systems here run the full range, from modern furnaces and air handlers in newer towers to units retrofitted into early-1900s buildings turned residential.',
      'In a converted loft or an older commercial building, the furnace was usually fit into a space never designed for it, with venting and ductwork worked around the original structure. Coordinated access and a clean shutoff matter as much as the repair itself, so a heating fault on one floor does not leave the rest of the building cold.',
    ],
    commonIntro: 'In downtown’s condos, lofts, and older commercial conversions, the heating problems we handle most often are:',
    localFaqs: [{ q: 'Can you work on a furnace in a downtown high-rise or condo?', a: 'Yes. We service furnaces and air handlers in towers and converted loft buildings regularly, and we coordinate access so a repair on one floor does not disrupt heat for the rest of the building. We are on call 24/7.' }],
  },
  'west-end': {
    intro: 'Furnace down in the West End? Our licensed HVAC techs are on call 24/7 and reach the neighborhood around TQL Stadium and Linn Street the same day. Call (513) 586-5107.',
    relevance: [
      'The West End (ZIP 45203) is one of Cincinnati’s oldest neighborhoods, sitting just west of downtown near TQL Stadium, with historic Italianate rowhouses and brick homes alongside mid-century housing and newer infill. The older brick homes were built in an era of boilers and radiators, and many now run gas furnaces retrofitted into basements over the decades.',
      'That range of housing means a wide range of heating equipment, but the common thread in the older stock is age — furnaces and ductwork past their service life, venting through chimneys that predate forced air. Sitting on low ground near the Mill Creek basin, basement furnaces here also contend with damp conditions that wear burners and venting faster.',
    ],
    commonIntro: 'Across the West End’s historic rowhouses and older homes, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach the West End when the heat goes out?', a: 'The West End sits right next to downtown and is one of the quickest areas for us to reach. We keep techs on call 24/7 and aim for same-day, often within hours.' }],
  },
  'mount-adams': {
    intro: 'Lost heat in Mount Adams? Our licensed HVAC techs are on call 24/7 and reach the steep, narrow streets of the hilltop the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Adams (ZIP 45202) is the dense hilltop neighborhood above downtown and Eden Park, known for its steep grades, narrow streets, and tightly packed 19th-century rowhouses and townhomes. Most have been converted from their original boilers and radiators to gas furnaces tucked into small basements over the years.',
      'The hilltop setting and the age of the housing both drive heating calls. Exposed to wind on every side, these century-old rowhouses lose heat fast, so a furnace with a worn heat exchanger or a failing igniter struggles to keep up on a cold, windy night. Tight, steep access also means it pays to call a crew that already knows the hill.',
    ],
    commonIntro: 'In Mount Adams’ steep, wind-exposed century-old rowhouses, the heating problems we see most often are:',
    localFaqs: [{ q: 'Can you get equipment to homes on the steep Mount Adams streets when the heat fails?', a: 'Yes. We work on the hill regularly and come prepared for the narrow, steep streets and tight parking that make Mount Adams unique. We are on call 24/7 with same-day service.' }],
  },
  'mount-auburn': {
    intro: 'No heat in Mount Auburn? Our licensed HVAC techs are on call 24/7 and reach one of Cincinnati’s oldest hilltop neighborhoods the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Auburn (ZIP 45219) is one of Cincinnati’s oldest hilltop neighborhoods, rising just north of downtown and Over-the-Rhine, lined with grand 19th-century homes and historic mansions, many now divided into apartments. Houses this old were built around boilers and radiators, with gas furnaces retrofitted in over the decades.',
      'Those Victorian-era homes carry some of the oldest heating setups in the city, where original ductwork is undersized for a big, drafty house and an aging furnace strains to heat tall rooms. In subdivided houses, one failed furnace can leave several units cold, so a quick, knowledgeable response keeps the whole building from going without heat.',
    ],
    commonIntro: 'In Mount Auburn’s grand but aging 19th-century homes, the heating problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Auburn when the furnace quits?', a: 'Mount Auburn sits right above downtown, so it is one of the faster neighborhoods for us to reach. We are on call 24/7 and aim for same-day service.' }],
  },
  'clifton': {
    intro: 'Furnace out in Clifton? Our licensed HVAC techs are on call 24/7 and reach the Gaslight District and the homes around Ludlow Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Clifton (ZIP 45220) is the leafy hilltop neighborhood near the University of Cincinnati, famous for its Ludlow Avenue Gaslight District and large Victorian and early-1900s homes on tree-lined streets. Those big older houses have been here over a century, and many still heat with furnaces retrofitted in long after the original boilers and radiators went in.',
      'Heating a large Victorian is demanding work, and a fair number of these homes are now rentals near campus where a dead furnace needs a fast fix on a cold night. Undersized ductwork in tall, drafty rooms and aging furnaces near the end of their life are the two issues we see most here.',
    ],
    commonIntro: 'In Clifton’s large Victorian and early-1900s homes, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'Do you handle furnaces in student rentals near UC in Clifton?', a: 'Yes. We service the older homes and rentals throughout Clifton and the university area, and we are available 24/7 for the no-heat calls that tend to hit big, drafty old houses.' }],
  },
  'corryville': {
    intro: 'No heat in Corryville? Our licensed HVAC techs are on call 24/7 and reach the Short Vine area near UC the same day. Call (513) 586-5107.',
    relevance: [
      'Corryville (ZIP 45219) sits right at the edge of the University of Cincinnati around the Short Vine corridor, a dense mix of early-1900s homes, apartments, and student rentals. Much of that older housing has been carved into units, each leaning on furnaces and ductwork that take heavy use.',
      'With so many century-old buildings turned into rentals, the heating equipment here runs hard and ages fast — worn blower motors, failing igniters, and furnaces never resized for the way the homes are now divided. Because units share walls and chimneys, one failure can leave several apartments cold, so a fast response keeps the problem from spreading.',
    ],
    commonIntro: 'In Corryville’s dense, older housing near campus, the heating problems we see most often are:',
    localFaqs: [{ q: 'How quickly can you reach Corryville near UC when the heat goes out?', a: 'Corryville is central and close to our usual routes, so it is one of the faster areas for us to reach. We are on call 24/7 with same-day service.' }],
  },
  'northside': {
    intro: 'Furnace down in Northside? Our licensed HVAC techs are on call 24/7 and reach the homes around Hamilton Avenue and the Mill Creek valley the same day. Call (513) 586-5107.',
    relevance: [
      'Northside (ZIP 45223) is the eclectic neighborhood along Hamilton Avenue, with a walkable business district and streets of late-1800s and early-1900s homes running down toward the Mill Creek valley. Homes that age usually heat with gas furnaces retrofitted in well after the original boilers, vented through old chimneys.',
      'The age of the housing means aging furnaces and patched-together ductwork are common, and the low ground near Mill Creek leaves basement furnaces dealing with damp conditions that wear burners and venting. Both add up to the no-heat calls we run most when the temperature drops.',
    ],
    commonIntro: 'In Northside’s older homes near the Mill Creek valley, the heating problems we handle most often are:',
    localFaqs: [{ q: 'My Northside furnace sits in a damp basement near Mill Creek — can you help?', a: 'Yes. Moisture off the low ground near Mill Creek is hard on burners and venting. We are on call 24/7, reach Northside homes the same day, and can advise on keeping an aging furnace running through the damp.' }],
  },
  'college-hill': {
    intro: 'Lost heat in College Hill? Our licensed HVAC techs are on call 24/7 and reach the homes along Hamilton Avenue and Belmont the same day. Call (513) 586-5107.',
    relevance: [
      'College Hill (ZIP 45224) is a hilltop neighborhood on the northwest side along Hamilton Avenue, with a mix of large early-1900s homes, mid-century houses, and a revitalizing business district. That spread means furnaces of every vintage, from units retrofitted into century-old houses to originals still running in 1950s ranches.',
      'In the older homes, undersized ductwork and aging heat exchangers are the usual reason a furnace finally quits, while the mid-century houses often run furnaces near the end of their service life. Sitting up on the hill, both feel the wind, so a tired furnace struggles most on the coldest nights. We handle either day or night.',
    ],
    commonIntro: 'Across College Hill’s older and mid-century homes, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach College Hill when the furnace fails?', a: 'College Hill is well within our service area along Hamilton Avenue. We keep techs on call around the clock and aim for same-day arrival.' }],
  },
  'walnut-hills': {
    intro: 'No heat in Walnut Hills? Our licensed HVAC techs are on call 24/7 and reach the homes around Peebles Corner and McMillan Street the same day. Call (513) 586-5107.',
    relevance: [
      'Walnut Hills (ZIP 45206) is a historic hilltop neighborhood just northeast of downtown, with grand 19th-century homes and apartment buildings around the Peebles Corner business district. Houses this old started on boilers and radiators, and many now run gas furnaces retrofitted into the basement.',
      'Its century-old housing, much of it now split into units, leans on aging furnaces and the undersized ductwork that came with the conversion. In a multi-unit building, one furnace failure can leave several apartments cold, so quick diagnosis and an experienced repair matter when the heat drops out.',
    ],
    commonIntro: 'In Walnut Hills’ historic homes and apartment buildings, the heating problems we see most often are:',
    localFaqs: [{ q: 'Do you work on furnaces in the older apartment buildings in Walnut Hills?', a: 'Yes. Many Walnut Hills buildings are split into units, and we can repair the furnace serving one apartment without disrupting heat to the rest of the building. We are on call 24/7.' }],
  },
  'east-walnut-hills': {
    intro: 'Furnace out in East Walnut Hills? Our licensed HVAC techs are on call 24/7 and reach the homes around Woodburn Avenue and DeSales Corner the same day. Call (513) 586-5107.',
    relevance: [
      'East Walnut Hills (ZIP 45206) is a historic east-side neighborhood around Woodburn Avenue and DeSales Corner, known for stately early-1900s homes, brick apartment buildings, and tree-lined streets. The large, century-old houses here were built around boilers and radiators, with forced-air furnaces retrofitted in over the years.',
      'Those big older homes are demanding to heat, and the furnaces serving them often push air through ductwork squeezed into a house never designed for it. An aging heat exchanger or worn blower can leave tall, drafty rooms cold fast, so we respond quickly to protect the original woodwork and finished spaces these homes are known for.',
    ],
    commonIntro: 'In East Walnut Hills’ stately early-1900s homes, the heating problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach East Walnut Hills when the heat goes out?', a: 'East Walnut Hills is close to our central routes, so it is a quick reach. We are on call 24/7 with same-day service.' }],
  },
  'avondale': {
    intro: 'No heat in Avondale? Our licensed HVAC techs are on call 24/7 and reach the neighborhood around the hospitals and the zoo the same day. Call (513) 586-5107.',
    relevance: [
      'Avondale (ZIP 45229) sits in the uptown core near the major hospitals and the Cincinnati Zoo, with historic early-1900s homes and apartment buildings throughout. Much of that housing is older and densely built, a lot of it rental, leaning on furnaces and ductwork that take heavy use.',
      'In century-old houses divided into units, the heating equipment runs hard year after year, so aging furnaces, worn blower motors, and failing igniters are the calls we run most. Shared walls and chimneys mean one failure can leave neighbors cold too, and we respond around the clock to keep that from happening.',
    ],
    commonIntro: 'In Avondale’s older homes and apartment buildings, the heating problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Avondale when the furnace quits?', a: 'Avondale is in the central uptown area near the hospitals, so it is a fast reach for us. We are on call 24/7 with same-day service.' }],
  },
  'hyde-park': {
    intro: 'Furnace down in Hyde Park? Our licensed HVAC techs are on call 24/7 and reach the homes around Hyde Park Square and Erie Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Hyde Park (ZIP 45208) is an affluent east-side neighborhood built around Hyde Park Square, lined with large early-1900s homes — Tudors, colonials, and brick foursquares — on established, tree-shaded streets. Homes this size and age are demanding to heat, and many run furnaces retrofitted in well after their original boilers.',
      'These big older houses are exactly the kind where a furnace pushing air through undersized, century-old ductwork struggles to keep finished basements and tall rooms warm. An aging heat exchanger or a worn blower can fail without much warning, so same-day repair matters to keep an expensive home from getting cold.',
    ],
    commonIntro: 'In Hyde Park’s large, established early-1900s homes, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Hyde Park when the heat goes out?', a: 'Hyde Park is well within our service area. We keep techs on call 24/7 and reach the homes around Hyde Park Square the same day, often within hours.' }],
  },
  'oakley': {
    intro: 'No heat in Oakley? Our licensed HVAC techs are on call 24/7 and reach the homes around Oakley Square and Madison Road the same day. Call (513) 586-5107.',
    relevance: [
      'Oakley (ZIP 45209) is a popular east-side neighborhood around Oakley Square and Madison Road, with streets of early-1900s bungalows and brick homes alongside newer development. The older bungalows that fill much of Oakley were built before forced air was standard, so their furnaces were retrofitted in and the ductwork worked around a compact floor plan.',
      'In a bungalow that age, the furnace and its ducts are now well past their prime, so worn heat exchangers, failing igniters, and aging blower motors are the heating problems we see most. We are on call to handle them day or night before a small house gets cold.',
    ],
    commonIntro: 'Across Oakley’s early-1900s bungalows and brick homes, the heating problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Oakley when the furnace fails?', a: 'Oakley is centrally located on the east side and quick for us to reach. We are on call 24/7 and aim for same-day service.' }],
  },
  'mount-lookout': {
    intro: 'Furnace out in Mount Lookout? Our licensed HVAC techs are on call 24/7 and reach the homes around Mount Lookout Square and Ault Park the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Lookout (ZIP 45226) is an east-side hilltop neighborhood around Mount Lookout Square, near Ault Park, with a mix of early-1900s homes and larger houses on quiet, hilly streets. The older homes here carry decades-old furnaces, many retrofitted in long after the original heating went in.',
      'Up on the hill, these homes are exposed to wind that pulls heat out fast, so an aging furnace with a worn heat exchanger or tired blower struggles hardest on the coldest nights. A larger hilltop house also demands more of its ductwork, which is why same-day response matters here.',
    ],
    commonIntro: 'In Mount Lookout’s older hilltop homes, the heating problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Lookout when the heat goes out?', a: 'Mount Lookout is well within our east-side service area. We are on call 24/7 and aim for same-day arrival.' }],
  },
  'columbia-tusculum': {
    intro: 'No heat in Columbia-Tusculum? Our licensed HVAC techs are on call 24/7 and reach Cincinnati’s oldest neighborhood near the river the same day. Call (513) 586-5107.',
    relevance: [
      'Columbia-Tusculum (ZIP 45226) is Cincinnati’s oldest neighborhood, settled in 1788, known for its colorful "Painted Ladies" — restored Victorian homes — on the east side near the Ohio River. Houses this old were built around boilers and radiators, and many now run gas furnaces retrofitted into basements over the years.',
      'Two things drive heating calls here. The Victorian and early homes are drafty and tall, so a furnace strains to push warm air through century-old ductwork, and the low riverside ground leaves basement furnaces and their venting working against damp air all winter. A fast repair keeps a historic interior from getting cold.',
    ],
    commonIntro: 'In Columbia-Tusculum’s historic Victorian homes near the river, the heating problems we handle most often are:',
    localFaqs: [{ q: 'Do you work on furnaces in the historic Victorian homes in Columbia-Tusculum?', a: 'Yes. We service the neighborhood’s older and Painted Lady homes regularly, including furnaces retrofitted into houses that once ran on boilers. We are on call 24/7 with same-day service.' }],
  },
  'mount-washington': {
    intro: 'Furnace down in Mount Washington? Our licensed HVAC techs are on call 24/7 and reach the homes along Beechmont Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Washington (ZIP 45230) is a far-east-side neighborhood along Beechmont Avenue, with a settled mix of early-1900s through mid-century single-family homes. Across that range, the mid-century ranches in particular often still run original or undersized furnaces that are well past the point where parts start to fail.',
      'In homes of that era, an aging heat exchanger, a worn blower motor, and tired ignition systems are the usual sources of a sudden no-heat night, and ductwork installed decades ago rarely heats the house evenly anymore. We respond around the clock to keep the cold out.',
    ],
    commonIntro: 'Across Mount Washington’s older and mid-century homes, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Mount Washington when the heat goes out?', a: 'Mount Washington is squarely in our service area along Beechmont Avenue. We are on call 24/7 and aim for same-day arrival.' }],
  },
  'madisonville': {
    intro: 'No heat in Madisonville? Our licensed HVAC techs are on call 24/7 and reach the homes around Madison Road and Whetsel Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Madisonville (ZIP 45227) is an east-side neighborhood along Madison Road that has seen steady reinvestment, with streets of early-1900s homes alongside newer infill. The older houses that make up much of Madisonville heat with furnaces retrofitted in over the decades, pushing air through ductwork added long after the homes were built.',
      'In those century-old homes, aging furnaces, worn blower motors, and failing igniters are the heating problems we are called for most, and undersized ductwork leaves rooms uneven. We handle them day or night so a reinvested old house does not go cold.',
    ],
    commonIntro: 'In Madisonville’s older homes, the heating problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Madisonville when the furnace quits?', a: 'Madisonville is centrally located on the east side and quick for us to reach. We are on call 24/7 with same-day service.' }],
  },
  'pleasant-ridge': {
    intro: 'Furnace out in Pleasant Ridge? Our licensed HVAC techs are on call 24/7 and reach the homes along Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Pleasant Ridge (ZIP 45213) is a walkable east-side neighborhood along Montgomery Road, with tree-lined streets of early-1900s homes and classic Cincinnati brick two-families. The two-families in particular often run a single aging furnace or separate units that share venting and chimneys.',
      'Those older single- and two-family homes carry decades-old furnaces and ductwork, where a worn heat exchanger or tired blower leaves the house cold without much warning. In a two-family, one furnace failure can affect both units, so a quick response keeps it contained.',
    ],
    commonIntro: 'In Pleasant Ridge’s early-1900s homes and two-families, the heating problems we handle most often are:',
    localFaqs: [{ q: 'Do you work on furnaces in the two-family homes common in Pleasant Ridge?', a: 'Yes. We service the brick two-families throughout Pleasant Ridge and can repair the furnace serving one unit without disrupting heat to the other. We are on call 24/7.' }],
  },
  'westwood': {
    intro: 'No heat in Westwood? Our licensed HVAC techs are on call 24/7 and reach Cincinnati’s largest neighborhood along Harrison Avenue the same day. Call (513) 586-5107.',
    relevance: [
      'Westwood (ZIP 45211) is the largest neighborhood in Cincinnati by population, spread across the west side along Harrison Avenue, with everything from historic homes near the Westwood Town Hall to streets of early-1900s and mid-century houses. That range means furnaces of every vintage, from units retrofitted into older homes to originals still running in mid-century houses.',
      'Across that spread of older housing, the common thread is aging equipment — furnaces near the end of their service life, worn heat exchangers, and ductwork installed decades ago that no longer heats evenly. Those are the no-heat calls we are dispatched for most across the neighborhood.',
    ],
    commonIntro: 'Across Westwood’s older and mid-century homes, the heating problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Westwood when the furnace fails?', a: 'Westwood is a large west-side neighborhood well within our service area. We are on call 24/7 and aim for same-day arrival along Harrison Avenue and beyond.' }],
  },
  'norwood': {
    intro: 'Furnace down in Norwood? Our licensed HVAC techs are on call 24/7 and reach the homes around Surrey Square and Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Norwood (ZIP 45212) is its own city, completely surrounded by Cincinnati, with a dense grid of early-1900s homes and brick two-families built during its days as a streetcar and factory town. Houses from that era heat with furnaces retrofitted in over the decades, often sharing venting on small, tightly packed lots.',
      'That dense, century-old housing is exactly where heating trouble clusters: aging furnaces, undersized ductwork, and worn blower motors in homes built close together. When one furnace quits on a cold night, neighbors sit right against the problem, so we respond fast to get heat back before a tightly built block gets cold.',
    ],
    commonIntro: 'In Norwood’s dense, early-1900s homes and two-families, the heating problems we are called for most often are:',
    localFaqs: [{ q: 'How fast can you reach Norwood when the heat goes out?', a: 'Norwood sits right in the middle of our service area, surrounded by Cincinnati, so it is a fast reach. We are on call 24/7 with same-day service.' }],
  },
  'blue-ash': {
    intro: 'No heat in Blue Ash? Our licensed HVAC techs are on call 24/7 and reach homes and businesses across this northeast-side city the same day. Call (513) 586-5107.',
    relevance: [
      'Blue Ash (ZIP 45242) is a thriving northeast-side city and business hub, with established mid-century neighborhoods alongside newer subdivisions and a large commercial corridor. Even the newer housing here is now decades old, and the larger homes in the subdivisions often run multiple zones or a furnace that has to heat a lot of square footage.',
      'In the mid-century neighborhoods, original or first-replacement furnaces are reaching the end of their life, so worn heat exchangers and aging blowers are common. In the bigger newer homes, an undersized or unbalanced furnace leaves rooms uneven. We respond around the clock to homes and businesses alike.',
    ],
    commonIntro: 'Across Blue Ash’s mid-century homes and newer subdivisions, the heating problems we handle most often are:',
    localFaqs: [{ q: 'How fast can you reach Blue Ash when the furnace quits?', a: 'Blue Ash is well within our northeast service area. We keep techs on call 24/7 and aim for same-day arrival.' }],
  },
  'montgomery': {
    intro: 'Furnace out in Montgomery? Our licensed HVAC techs are on call 24/7 and reach homes around the historic district and Montgomery Road the same day. Call (513) 586-5107.',
    relevance: [
      'Montgomery (ZIP 45242) is an upscale northeast-side city with a preserved historic district of 19th-century buildings and surrounding neighborhoods of established and newer homes. The heating here spans a wide range, from furnaces retrofitted into century-old structures in the historic core to systems serving large newer houses in the subdivisions.',
      'In the historic core, aging furnaces and old ductwork are the usual reason the heat fails, while the larger established and newer homes often need zoned heating to keep every room even. Worn heat exchangers, tired blowers, and the occasional dead furnace are the calls we respond to most, day or night.',
    ],
    commonIntro: 'Across Montgomery’s historic and established homes, the heating problems we see most often are:',
    localFaqs: [{ q: 'How fast can you reach Montgomery when the heat goes out?', a: 'Montgomery is well within our northeast service area. We are on call 24/7 and aim for same-day service.' }],
  },
};
