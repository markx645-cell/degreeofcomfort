export const part3: Record<string, { intro: string; relevance: string[]; commonIntro: string; localFaqs: { q: string; a: string }[] }> = {
  'villages-of-roll-hill': {
    intro:
      'AC out in a Villages of Roll Hill apartment? We service the multi-unit buildings on this west-side hilltop and can be out the same day to get the air moving again. Call (513) 586-5107.',
    relevance: [
      'Villages of Roll Hill (ZIP 45225) is a west-side hilltop community overlooking the Mill Creek valley, made up largely of multi-unit apartment buildings. Cooling in buildings like these usually runs through shared or closely grouped condensers and long line sets, so when one unit stops cooling the cause is often a system serving several apartments at once.',
      'On a hilltop with little tree cover, those rooftop and ground-level condensers take direct afternoon sun, which pushes head pressure up and wears compressors faster than the equipment’s age alone would suggest. We can isolate and repair the unit that is down without disrupting cooling for the rest of the building, and we keep the same-day response that crowded summer days call for.',
    ],
    commonIntro:
      'In the multi-unit buildings of Roll Hill, the AC problems we see most often trace back to shared, sun-exposed condensers under heavy summer load.',
    localFaqs: [
      {
        q: 'Do you repair AC in the apartment buildings at Roll Hill?',
        a: 'Yes. We work on multi-unit cooling systems here in Hamilton County and can pin a problem to one apartment without shutting down the others, with same-day arrival in most cases.',
      },
    ],
  },
  'east-westwood': {
    intro:
      'No cool air in East Westwood? We repair AC across this west-side slope and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'East Westwood (ZIP 45211) sits on the slopes between Westwood and the Mill Creek valley, with streets of early- and mid-1900s homes. Many of those older houses were built before central air was standard, so cooling here is a mix of retrofitted systems and aging condensers added decades after the house went up.',
      'On a hillside grade, condensers often sit on uneven or settled pads where they lose level over time, and the older the retrofit, the more likely the line set and electrical were sized for a smaller, less efficient unit. Those are the details that turn a hot afternoon into a no-cool call, and we handle them the same day.',
    ],
    commonIntro:
      'In East Westwood’s older hillside homes, the AC problems we handle most often come from retrofitted systems and aging condensers working harder than they were built to.',
    localFaqs: [
      {
        q: 'How fast can you reach East Westwood for an AC repair?',
        a: 'East Westwood is within our west-side service area in Hamilton County. We aim for same-day arrival when your air conditioning quits.',
      },
    ],
  },
  'western-hills': {
    intro:
      'AC not keeping up in Western Hills? We repair cooling systems around Western Hills Plaza and Glenway Avenue and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Western Hills (ZIP 45211) is the established west-side area around Western Hills Plaza and Glenway Avenue, with neighborhoods of early-1900s through mid-century single-family homes. A lot of the cooling equipment here is on its second or third condenser, since the houses long predate the systems bolted onto them.',
      'In homes from the 1950s and 60s especially, the original central air or its replacement is often undersized for the way families use the space today, so the unit runs nearly nonstop in July and burns out capacitors and compressors ahead of schedule. We diagnose whether you are looking at a quick fix or a unit at the end of its life, and we get out the same day either way.',
    ],
    commonIntro:
      'Across Western Hills’ older and mid-century homes, the AC problems we see most often come from aging or undersized condensers run hard through the summer.',
    localFaqs: [
      {
        q: 'How fast can you reach Western Hills when the AC goes out?',
        a: 'Western Hills is well within our west-side service area in Hamilton County, near Glenway Avenue. We aim for same-day repair.',
      },
    ],
  },
  'california': {
    intro:
      'AC down in the California neighborhood? We service cooling systems on the riverfront homes along Kellogg Avenue and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'California (ZIP 45230) is Cincinnati’s far-east riverfront neighborhood along Kellogg Avenue, near Riverbend, set on low ground beside the Ohio River. The low, humid air that settles along the river makes cooling and dehumidifying a home harder work, so AC systems here run longer to hit the same temperature than they would up on a hill.',
      'The older homes that line this stretch tend to carry aging condensers, and units sitting on low riverside lots are exposed to damp ground and the occasional high-water event that can foul outdoor equipment. When a compressor or fan motor gives out on a humid August afternoon, a fast local response keeps the house from turning into a sauna, and we keep same-day availability for exactly that.',
    ],
    commonIntro:
      'Along California’s riverfront homes, the AC problems we handle most often come from aging equipment fighting heavy river-valley humidity.',
    localFaqs: [
      {
        q: 'My California home near the river never feels cool enough — can you help?',
        a: 'Yes. We diagnose undersized and aging AC systems and the high humidity common to riverfront homes along Kellogg Avenue here in Hamilton County, with same-day service.',
      },
    ],
  },
  'carthage': {
    intro:
      'AC quit in Carthage? We repair cooling systems on the older homes along Vine Street and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Carthage (ZIP 45215) is a north-side neighborhood along Vine Street, a former village now home to the Hamilton County Fairgrounds, with older early-1900s homes. Houses of that era were built well before central air, so cooling here is almost always a retrofit, and the condensers tucked along the side of these narrow lots are often decades into their service life.',
      'In century-old homes with retrofitted systems, the ductwork and electrical were rarely designed for air conditioning in the first place, which leaves units straining and tripping breakers on the hottest days. Where a window-shaker or a tired old condenser can’t keep up, a properly sized mini-split is often the better fit, and we can talk through that on the same visit we make the repair.',
    ],
    commonIntro:
      'In Carthage’s early-1900s homes, the AC problems we see most often come from retrofitted cooling pushed through houses that were never built for it.',
    localFaqs: [
      {
        q: 'How fast can you reach Carthage for AC repair?',
        a: 'Carthage is within our north-side service area in Hamilton County, along Vine Street. We aim for same-day arrival when your AC fails.',
      },
    ],
  },
  'winton-hills': {
    intro:
      'AC out in Winton Hills? We service cooling in the homes and multi-unit buildings near Winton Road and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Winton Hills (ZIP 45232) is a north-side neighborhood near Winton Road, with a mix of residential and industrial areas including multi-unit housing. Cooling in the densely built buildings here often runs through grouped condensers and shared systems, so a single failure can leave several units without air at the same time.',
      'Older apartment buildings tend to carry older equipment, and condensers packed close together in tight outdoor spaces can starve each other of airflow and overheat in a heat wave. We can isolate the system that is down, get it cooling again, and do it without taking the whole building offline, with same-day response.',
    ],
    commonIntro:
      'In Winton Hills’ homes and multi-unit buildings, the AC problems we handle most often come from aging, tightly grouped condensers under summer load.',
    localFaqs: [
      {
        q: 'How fast can you reach Winton Hills when the AC goes down?',
        a: 'Winton Hills is within our north-side service area in Hamilton County, near Winton Road. We aim for same-day repair on both homes and multi-unit buildings.',
      },
    ],
  },
  'roselawn': {
    intro:
      'AC not cooling in Roselawn? We service homes and apartment buildings along Reading Road and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Roselawn (ZIP 45237) is a north-side neighborhood along Reading Road, with settled streets of mid-century single-family homes and apartment buildings. The mid-1900s houses here are now well into the age where the original or first-replacement central air system is running on borrowed time.',
      'Condensers from that era lose capacity gradually, so a unit that limped through last summer often fails outright in the first real heat wave of the next. The older apartment buildings add their own load, with aging equipment serving multiple units. We diagnose whether a capacitor, motor, or refrigerant issue will buy you the season, and we get out the same day to find out.',
    ],
    commonIntro:
      'Across Roselawn’s mid-century homes and apartments, the AC problems we see most often come from aging condensers losing capacity year over year.',
    localFaqs: [
      {
        q: 'How fast can you reach Roselawn for an AC repair?',
        a: 'Roselawn is well within our north-side service area in Hamilton County, along Reading Road. We aim for same-day arrival.',
      },
    ],
  },
  'mount-airy': {
    intro:
      'AC down in Mount Airy? We repair cooling systems on the wooded streets near Mount Airy Forest and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Airy (ZIP 45239) is a northwest-side neighborhood beside Mount Airy Forest, one of the largest city parks in the country, with mid-century single-family homes on hilly, wooded streets. The houses here largely date to the mid-1900s, so the central air systems serving them are typically aging condensers that have been replaced once and are due again.',
      'The hilltop terrain means condensers sit on graded pads that can settle and pull the unit out of level, while afternoon sun and the heat that pools on a ridge push the equipment hard in July. Where mature trees shade part of the lot, debris and pollen clog the coils and choke airflow. We handle the cleaning, the repair, or the replacement assessment the same day.',
    ],
    commonIntro:
      'Across Mount Airy’s mid-century homes, the AC problems we handle most often come from aging condensers on hilly lots working through heat and shade debris.',
    localFaqs: [
      {
        q: 'How fast can you reach Mount Airy when the AC quits?',
        a: 'Mount Airy is within our northwest-side service area in Hamilton County, near the forest. We aim for same-day arrival.',
      },
    ],
  },
  'hartwell': {
    intro:
      'AC out in Hartwell? We service cooling in this historic streetcar neighborhood’s older homes and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Hartwell (ZIP 45215) is a historic north-side neighborhood that grew as a streetcar suburb, known for its Victorian and early-1900s homes on tree-lined streets. Houses this old came up long before central air, so cooling here is a retrofit story — systems threaded into homes whose plaster walls, balloon framing, and original ductwork were never planned around air conditioning.',
      'In those century-old homes, the retrofitted ducts often can’t move enough air to cool the upper floors evenly, and the outdoor condensers added decades ago are well into old age. The mature trees that line these streets also drop leaves and seed onto the units and clog the coils. Where adding ductwork would tear up historic finishes, a mini-split is frequently the cleaner fix, and we can lay out the options the same day we come out.',
    ],
    commonIntro:
      'In Hartwell’s Victorian and early-1900s homes, the AC problems we see most often come from retrofitted cooling and aging condensers in houses built before central air.',
    localFaqs: [
      {
        q: 'Can you cool an older Hartwell home that has no good ductwork?',
        a: 'Yes. For the century-old homes here in Hamilton County, a ductless mini-split often cools better than fighting undersized retrofitted ducts, and we can assess it on a same-day visit.',
      },
    ],
  },
  'kennedy-heights': {
    intro:
      'AC quit in Kennedy Heights? We repair cooling on this historic east-side hilltop and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Kennedy Heights (ZIP 45213) is a historic east-side hilltop neighborhood that began as a Victorian-era resort community, now known for its arts center and large early-1900s homes. Those big older houses were built before central air, so cooling them means retrofitted systems and condensers added long after construction — and the larger the home, the harder a single undersized unit has to work.',
      'On a hilltop, the equipment takes more direct sun and the upper floors of these tall older homes trap heat, which leaves an aging condenser running flat out through the afternoon and failing early. We diagnose whether the system can be repaired for the season or is genuinely undersized for the house, and we keep same-day availability through the summer.',
    ],
    commonIntro:
      'In Kennedy Heights’ historic hilltop homes, the AC problems we handle most often come from aging, often undersized systems retrofitted into large older houses.',
    localFaqs: [
      {
        q: 'How fast can you reach Kennedy Heights for AC repair?',
        a: 'Kennedy Heights is well within our east-side service area in Hamilton County. We aim for same-day arrival when your air conditioning fails.',
      },
    ],
  },
  'st-bernard': {
    intro:
      'AC out in St. Bernard? We repair cooling across this independent city’s dense older homes and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'St. Bernard (ZIP 45217) is its own city, completely surrounded by Cincinnati, built up around the Procter & Gamble Ivorydale complex with a dense grid of early-1900s homes. On lots this tight, condensers end up squeezed into narrow side yards and gangways where two units can sit a few feet apart and recirculate each other’s hot exhaust.',
      'These century-old homes were built before central air, so the cooling is retrofitted, and the equipment crammed into small valley lots tends to run hot and fail early in a heat wave. Poor clearance around the condenser is one of the most common reasons a unit in St. Bernard stops keeping up, and it is something we check and correct on the same-day call.',
    ],
    commonIntro:
      'In St. Bernard’s dense, early-1900s homes, the AC problems we handle most often come from retrofitted systems and tightly squeezed condensers starved of airflow.',
    localFaqs: [
      {
        q: 'How fast can you reach St. Bernard when the AC goes out?',
        a: 'St. Bernard sits right in the middle of our Hamilton County service area, surrounded by Cincinnati, so it is a quick reach. We aim for same-day repair.',
      },
    ],
  },
  'elmwood-place': {
    intro:
      'AC down in Elmwood Place? We service cooling in this small inner-ring village’s closely spaced homes and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Elmwood Place (ZIP 45216) is a tiny, densely built village in the Mill Creek valley north of the city, with closely spaced early-1900s homes. Down in the valley the summer air sits heavy and humid, so cooling systems here run longer to pull both the heat and the moisture out of a house.',
      'These century-old homes predate central air, so the systems are retrofits, and condensers crowded into narrow gaps between closely spaced houses lose the clearance they need to breathe. An aging unit fighting valley humidity with little airflow around it is a common no-cool call here, and we keep same-day availability to get it running before the house gets unbearable.',
    ],
    commonIntro:
      'In Elmwood Place’s dense valley homes, the AC problems we see most often come from retrofitted systems and crowded condensers working against heavy valley humidity.',
    localFaqs: [
      {
        q: 'How fast can you reach Elmwood Place for AC repair?',
        a: 'Elmwood Place is a compact village within our Hamilton County service area in the Mill Creek valley. We aim for same-day arrival.',
      },
    ],
  },
  'delhi-hills': {
    intro:
      'AC not cooling in Delhi Hills? We service homes across this west-side township above the river and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Delhi Hills (ZIP 45233) sits in Delhi Township on the west side above the Ohio River, an area with deep ties to greenhouse and floral growing, with established mid-century homes on hilly streets. Houses from the mid-1900s here are now running on aging condensers, many of them a first or second replacement that is due for another.',
      'On hilly lots the outdoor units sit on graded pads that settle over time, and the slopes above the river catch full afternoon sun that drives head pressure up and shortens compressor life. A mid-century system worked hard on a sunny hillside is exactly the kind that fails in the first heat wave, and we get out the same day to repair it.',
    ],
    commonIntro:
      'Across Delhi Hills’ mid-century homes, the AC problems we handle most often come from aging condensers on sun-exposed hillside lots.',
    localFaqs: [
      {
        q: 'How fast can you reach Delhi Hills when the AC quits?',
        a: 'Delhi Hills is well within our west-side service area in Delhi Township, Hamilton County. We aim for same-day arrival.',
      },
    ],
  },
  'golf-manor': {
    intro:
      'AC out in Golf Manor? We repair cooling in this small inner-ring village’s mid-century homes and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Golf Manor (ZIP 45237) is a small village completely surrounded by Cincinnati on the north side, with a compact grid of modest mid-century homes. The houses here are now at the age where the original central air or its first replacement is wearing out, and on this tight grid the condensers sit close to the house and the neighbors.',
      'Modest mid-century homes were often fitted with smaller condensers, and decades on, those units run flat out and still struggle to cool on the hottest days. Failing capacitors, tired fan motors, and low refrigerant are the usual culprits behind a no-cool call here. We diagnose and repair the same day, and tell you honestly when a unit is past saving.',
    ],
    commonIntro:
      'In Golf Manor’s mid-century homes, the AC problems we see most often come from aging, modestly sized condensers reaching the end of their life.',
    localFaqs: [
      {
        q: 'How fast can you reach Golf Manor for AC repair?',
        a: 'Golf Manor is centrally located in Hamilton County, surrounded by Cincinnati, so it is a fast reach. We aim for same-day repair.',
      },
    ],
  },
  'fairfax': {
    intro:
      'AC down in Fairfax? We service cooling on the older homes along Wooster Pike and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Fairfax (ZIP 45227) is a small east-side village along Wooster Pike near Mariemont, with established early- and mid-1900s homes. The cooling equipment on these older houses is typically a retrofit on the early-1900s stock and an aging original-or-replacement system on the mid-century homes — either way, equipment with a lot of summers behind it.',
      'In a small village like this, the housing stock is consistent enough that the failures follow a pattern: condensers a couple of decades old shedding capacity, capacitors giving out in the first heat wave, and coils that haven’t been cleaned in years choking airflow. We carry the common parts and aim for a same-day fix.',
    ],
    commonIntro:
      'In Fairfax’s older homes, the AC problems we handle most often come from aging condensers and retrofitted systems on early- and mid-century houses.',
    localFaqs: [
      {
        q: 'How fast can you reach Fairfax when the AC goes out?',
        a: 'Fairfax is well within our east-side service area in Hamilton County, near Mariemont. We aim for same-day repair.',
      },
    ],
  },
  'mack': {
    intro:
      'AC not keeping up in Mack? We service cooling across this west-side Green Township community and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Mack (ZIP 45248) is an established community in Green Township on the west side, with neighborhoods of mid-century and newer single-family homes. The mix matters for cooling: the mid-century homes are on aging condensers due for replacement, while even the newer subdivision houses have now passed the ten-to-fifteen-year mark where their first system starts to fail.',
      'Across both, the summer pattern is the same — a unit that worked fine last year quits in the first stretch of 90-degree days because a worn capacitor, a tired compressor, or low refrigerant finally tips it over. We figure out which it is and whether a repair makes sense, and we get out the same day in either case.',
    ],
    commonIntro:
      'Across Mack’s mid-century and newer homes, the AC problems we see most often come from aging condensers and first-generation systems reaching the end of their life.',
    localFaqs: [
      {
        q: 'How fast can you reach Mack for an AC repair?',
        a: 'Mack is well within our west-side service area in Green Township, Hamilton County. We aim for same-day arrival.',
      },
    ],
  },
  'monfort-heights': {
    intro:
      'AC out in Monfort Heights? We repair cooling across this west-side Green Township suburb and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Monfort Heights (ZIP 45247) is a settled Green Township suburb on the west side, made up largely of mid-century single-family homes. A neighborhood built mostly in the mid-1900s tends to have a wave of aging condensers all reaching the end of their service life around the same stretch of summers.',
      'Those mid-century systems were sized for the homes as originally built, and decades of additions, finished basements, and warmer summers leave them undersized for the load they now carry — so they run constantly and burn out compressors and motors early. We diagnose whether the unit has a repairable fault or has simply aged out, and we respond the same day.',
    ],
    commonIntro:
      'Across Monfort Heights’ mid-century homes, the AC problems we handle most often come from aging, often undersized condensers run hard through the summer.',
    localFaqs: [
      {
        q: 'How fast can you reach Monfort Heights when the AC quits?',
        a: 'Monfort Heights is well within our west-side service area in Green Township, Hamilton County. We aim for same-day repair.',
      },
    ],
  },
  'bridgetown': {
    intro:
      'AC down in Bridgetown? We service cooling across this west-side Green Township community and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Bridgetown (ZIP 45248) is a Green Township community on the west side, with established neighborhoods of mid-century and newer homes. The cooling equipment here spans that same range — older condensers on the mid-century houses and first-generation systems on the newer builds that have now aged into the failure window.',
      'On the hottest west-side afternoons, an aging condenser that has lost a little capacity each year finally can’t hold the set temperature, and that is when most no-cool calls come in. We carry the common capacitors, contactors, and motors that cause those failures, and we aim to have you cooling again the same day.',
    ],
    commonIntro:
      'Across Bridgetown’s mid-century and newer homes, the AC problems we see most often come from aging condensers losing capacity over the years.',
    localFaqs: [
      {
        q: 'How fast can you reach Bridgetown for AC repair?',
        a: 'Bridgetown is well within our west-side service area in Green Township, Hamilton County. We aim for same-day arrival.',
      },
    ],
  },
  'finneytown': {
    intro:
      'AC out in Finneytown? We service cooling across this north-side Springfield Township community and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Finneytown (ZIP 45231) is a settled Springfield Township community on the north side, made up largely of mid-century single-family homes. Homes built in that mid-1900s wave are now on aging condensers, and a neighborhood of similar-vintage houses tends to see those systems fail in clusters across the same hot summers.',
      'A mid-century ranch or split-level here typically still relies on a condenser that has been replaced once and is overdue again, running long cycles through July that wear out the compressor and fan motor ahead of schedule. We diagnose whether a part will get you through the season or the unit has aged out, and we respond the same day.',
    ],
    commonIntro:
      'Across Finneytown’s mid-century homes, the AC problems we handle most often come from aging condensers running long cycles through the summer.',
    localFaqs: [
      {
        q: 'How fast can you reach Finneytown when the AC goes out?',
        a: 'Finneytown is well within our north-side service area in Springfield Township, Hamilton County. We aim for same-day repair.',
      },
    ],
  },
  'amberley': {
    intro:
      'AC not cooling in Amberley Village? We service the large homes on this wooded north-side village’s lots and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Amberley Village (ZIP 45237) is an affluent north-side village known for its large homes on big, wooded lots along winding streets. Larger homes mean larger cooling loads, and many of these houses run on multiple zones or oversized systems where a single condenser or air handler failure can leave a whole wing without air.',
      'The heavy tree cover that gives Amberley its character also drops leaves, seed, and pollen onto the outdoor units, clogging coils and choking the airflow a big system needs to keep up. Set on large lots, those condensers can sit out of sight and go unmaintained for years. We service multi-zone and larger systems and keep same-day availability when one goes down in the heat.',
    ],
    commonIntro:
      'In Amberley’s large homes, the AC problems we see most often come from big multi-zone systems and tree-fouled condensers struggling to carry a heavy cooling load.',
    localFaqs: [
      {
        q: 'Can you service the larger AC systems on Amberley’s big lots?',
        a: 'Yes. We handle the multi-zone and larger cooling systems common on Amberley Village properties here in Hamilton County, with same-day response when one fails.',
      },
    ],
  },
  'arlington-heights': {
    intro:
      'AC out in Arlington Heights? We service cooling in this small Mill Creek valley village and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Arlington Heights (ZIP 45215) is a small village in the Mill Creek valley north of the city, with a compact grid of older homes. Down in the valley the summer air is humid and slow to move, so cooling systems here have to work harder to pull moisture out of a house, not just heat.',
      'The older homes on this tight grid were built before central air, so the systems are retrofits, and condensers tucked into small valley lots run hot with little clearance. An aging unit fighting valley humidity in a cramped side yard is a common no-cool call here, and we keep same-day availability to get it back online.',
    ],
    commonIntro:
      'In Arlington Heights’ older valley homes, the AC problems we handle most often come from retrofitted systems and aging condensers working against heavy valley humidity.',
    localFaqs: [
      {
        q: 'How fast can you reach Arlington Heights for AC repair?',
        a: 'Arlington Heights is within our Hamilton County service area in the Mill Creek valley. We aim for same-day arrival.',
      },
    ],
  },
  'north-college-hill': {
    intro:
      'AC down in North College Hill? We service cooling in this small north-side city’s older homes and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'North College Hill (ZIP 45239) is a small, densely built city just north of College Hill, with a grid of early- and mid-1900s homes. On this tight grid the early-1900s houses carry retrofitted cooling while the mid-century homes run aging condensers, and on small lots the outdoor units sit close to the house and the neighbors.',
      'Tightly packed condensers with limited clearance recirculate hot air and run hotter than they should, which on a mid-century or retrofitted system already short on capacity is enough to leave a house warm on the worst days. We check airflow and clearance along with the electrical and refrigerant, and we aim for a same-day repair.',
    ],
    commonIntro:
      'In North College Hill’s older homes, the AC problems we see most often come from aging and retrofitted systems on tight lots where condensers run short of airflow.',
    localFaqs: [
      {
        q: 'How fast can you reach North College Hill when the AC quits?',
        a: 'North College Hill is well within our north-side service area in Hamilton County. We aim for same-day repair.',
      },
    ],
  },
  'newtown': {
    intro:
      'AC out in Newtown? We service cooling on the older homes near the Little Miami River and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Newtown (ZIP 45244) is a small east-side village near the Little Miami River, with older homes set on low river-bottom ground. The damp, humid air that settles over low river-bottom land makes cooling work harder, so AC systems here run longer to dry and cool a house than they would on higher ground.',
      'The older homes here carry aging cooling equipment, and condensers sitting on low river-bottom lots are exposed to damp ground and the occasional high water that can foul or damage an outdoor unit. When a system fails in that kind of humidity, the house heats up fast, so we keep same-day availability to get it running again.',
    ],
    commonIntro:
      'In Newtown’s older homes near the Little Miami, the AC problems we handle most often come from aging equipment fighting heavy river-bottom humidity.',
    localFaqs: [
      {
        q: 'My Newtown home near the river feels humid even with the AC on — can you help?',
        a: 'Yes. We diagnose aging systems and humidity problems common to low-lying homes near the Little Miami here in Hamilton County, with same-day service.',
      },
    ],
  },
  'turpin-hills': {
    intro:
      'AC not keeping up in Turpin Hills? We service cooling across this east-side Anderson Township community and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Turpin Hills (ZIP 45244) is a suburban Anderson Township community on the east side, with established neighborhoods of mid-century and newer homes. The cooling equipment runs the same range — older condensers on the mid-century houses and first-generation systems on the newer builds that have now aged into the failure window.',
      'A mid-century home here is often on a condenser due for its second replacement, and even the newer subdivision homes have passed the point where their original system starts dropping capacity. The first long stretch of 90-degree days is when those tired units quit, and we respond the same day to repair or assess them.',
    ],
    commonIntro:
      'Across Turpin Hills’ mid-century and newer homes, the AC problems we see most often come from aging condensers and first-generation systems wearing out.',
    localFaqs: [
      {
        q: 'How fast can you reach Turpin Hills for AC repair?',
        a: 'Turpin Hills is well within our east-side service area in Anderson Township, Hamilton County. We aim for same-day arrival.',
      },
    ],
  },
  'silverton': {
    intro:
      'AC down in Silverton? We service cooling on the older homes along Montgomery Road and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Silverton (ZIP 45236) is a small city along Montgomery Road on the east side, with established streets of early- and mid-1900s homes. Cooling here means retrofitted systems on the early-1900s houses and aging condensers on the mid-century stock, all of it equipment with plenty of summers behind it.',
      'In a small city with a consistent housing stock, the failures run to a pattern: condensers a couple of decades old shedding capacity, capacitors giving out in the first heat wave, and coils long overdue for cleaning. We carry the common parts those failures call for and aim to have you cooling again the same day.',
    ],
    commonIntro:
      'In Silverton’s older homes, the AC problems we handle most often come from aging condensers and retrofitted systems on early- and mid-century houses.',
    localFaqs: [
      {
        q: 'How fast can you reach Silverton when the AC goes out?',
        a: 'Silverton is well within our east-side service area in Hamilton County, along Montgomery Road. We aim for same-day repair.',
      },
    ],
  },
  'lockland': {
    intro:
      'AC out in Lockland? We service cooling in this historic Mill Creek valley village’s closely spaced homes and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Lockland (ZIP 45215) is a historic village in the Mill Creek valley north of the city, built up around mills and industry, with closely spaced older worker housing. Down in the valley the summer air sits humid and heavy, so cooling systems here run longer to pull both heat and moisture out of a house.',
      'The old, tightly packed worker homes predate central air, so the cooling is retrofitted, and condensers squeezed between closely spaced houses run hot with barely any clearance. An aging unit fighting valley humidity in a cramped gap is a common no-cool call here, and we keep same-day availability to get it back online.',
    ],
    commonIntro:
      'In Lockland’s older valley homes, the AC problems we see most often come from retrofitted systems and crowded condensers working against heavy valley humidity.',
    localFaqs: [
      {
        q: 'How fast can you reach Lockland for AC repair?',
        a: 'Lockland is within our Hamilton County service area in the Mill Creek valley. We aim for same-day arrival.',
      },
    ],
  },
  'groesbeck': {
    intro:
      'AC not cooling in Groesbeck? We service cooling across this northwest Colerain Township community and reach most homes the same day. Call (513) 586-5107.',
    relevance: [
      'Groesbeck (ZIP 45239) is a settled Colerain Township community on the northwest side, made up largely of mid-century single-family homes. A neighborhood built in that mid-1900s wave tends to have a cluster of aging condensers all reaching the end of their service life across the same hot summers.',
      'A mid-century ranch here usually still relies on a condenser that has been replaced once and is overdue again, running long cycles through July that wear out the compressor and fan motor early. We diagnose whether a part will carry you through the season or the unit has aged out, and we respond the same day.',
    ],
    commonIntro:
      'Across Groesbeck’s mid-century homes, the AC problems we handle most often come from aging condensers running long cycles through the summer.',
    localFaqs: [
      {
        q: 'How fast can you reach Groesbeck when the AC quits?',
        a: 'Groesbeck is well within our northwest service area in Colerain Township, Hamilton County. We aim for same-day repair.',
      },
    ],
  },
  'mount-healthy': {
    intro:
      'AC down in Mount Healthy? We service cooling on the older homes around this historic north-side city’s town center and reach most the same day. Call (513) 586-5107.',
    relevance: [
      'Mount Healthy (ZIP 45231) is a historic small city on the north side, with an old town center and streets of early-1900s and mid-century homes. The early-1900s houses around the old center carry retrofitted cooling, while the mid-century homes run aging condensers — either way, systems with a lot of summers on them.',
      'In the older homes near the town center, ductwork was rarely planned for air conditioning, so retrofitted systems struggle to cool the upper floors, and the mid-century condensers elsewhere in the city are well into old age. Where adding ductwork to a historic home isn’t practical, a mini-split is often the better fit, and we can walk through the options on the same visit we make the repair.',
    ],
    commonIntro:
      'In Mount Healthy’s older homes, the AC problems we see most often come from retrofitted cooling and aging condensers on early- and mid-century houses.',
    localFaqs: [
      {
        q: 'How fast can you reach Mount Healthy for an AC repair?',
        a: 'Mount Healthy is well within our north-side service area in Hamilton County. We aim for same-day arrival.',
      },
    ],
  },
};
