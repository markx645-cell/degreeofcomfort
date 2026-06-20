// Full FAQ, grouped by category. Answers are written in our own words — edit
// freely, and add your real pricing / response-time specifics where noted.

export const faqGroups: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: 'AC Repair',
    items: [
      { q: 'How much does AC repair cost?', a: 'It depends on the part and the problem — small fixes like a capacitor are inexpensive, while a compressor or coil costs more. We quote a flat rate before any work starts, so call for a free estimate.' },
      { q: "Does homeowner's insurance cover AC repair?", a: 'Most policies cover damage from sudden events (like a power surge or storm) but not normal wear or breakdowns. Check your policy and ask your insurer.' },
      { q: 'How long does it take to cool the house after AC repair?', a: 'Most homes drop a few degrees within an hour of a completed repair, though reaching full comfort on a hot day can take several hours.' },
      { q: 'How much does it cost to repair an AC unit?', a: 'It varies by the failed component — a contactor or capacitor is modest, a compressor is much more. You always get an upfront, flat-rate price first.' },
      { q: 'How much does emergency AC repair cost?', a: 'Our pricing is flat-rate with no overtime or weekend surcharges, so an emergency visit is priced the same as a regular one.' },
      { q: 'How fast can technicians come out for emergency AC repair?', a: 'We staff for demand and handle most repair calls the same day you reach out.' },
      { q: 'What are the common issues in an AC requiring repair?', a: 'Low refrigerant from leaks, failed capacitors or contactors, dirty or frozen coils, clogged condensate lines, and worn fan motors are the most common.' },
      { q: 'What are the signs that my AC needs to be repaired?', a: 'Warm air, weak airflow, strange noises, frequent cycling, rising energy bills, or water and ice around the unit all point to a problem.' },
    ],
  },
  {
    category: 'AC Maintenance',
    items: [
      { q: 'What does AC maintenance include?', a: 'A tune-up typically covers cleaning the coils, checking the refrigerant charge, tightening electrical connections, clearing the condensate line, and measuring the temperature split.' },
      { q: 'How often should I do AC maintenance?', a: 'Once a year, ideally in spring before the cooling season begins.' },
      { q: 'How much does it cost for AC maintenance?', a: 'A standard tune-up is an affordable flat rate. Ask about our seasonal cooling checkup offer.' },
      { q: 'Does the home warranty cover AC maintenance?', a: 'Most home warranties cover repairs rather than routine maintenance — check the terms of your specific plan.' },
      { q: 'Is an annual AC maintenance plan necessary?', a: 'It is not required, but annual service keeps efficiency high, prevents breakdowns, and often keeps the manufacturer warranty valid.' },
      { q: 'What is considered regular maintenance on AC?', a: 'Changing filters every 60–90 days, keeping the outdoor unit clear of debris, and getting a professional tune-up once a year.' },
    ],
  },
  {
    category: 'AC Installation',
    items: [
      { q: "What's the cost of installing an AC system?", a: 'Cost depends on system size, efficiency rating, and your home. We provide a free written estimate and financing options.' },
      { q: "What's the cost of installing a central air conditioning system?", a: 'Central AC pricing varies with tonnage and any ductwork needs. We size it properly and quote upfront.' },
      { q: 'Is installing a new air conditioning unit more complex in an old home?', a: 'It can be, if ductwork or electrical needs updating. We assess all of that during the free estimate.' },
      { q: 'What size air conditioning unit do I need for my home?', a: 'Size is based on a load calculation — square footage, insulation, windows, and layout — not a guess. We run that calculation for you.' },
      { q: 'How long does it take to install a new air conditioning unit?', a: 'A straightforward replacement is usually completed in a single day.' },
    ],
  },
  {
    category: 'Ductless Mini-Splits',
    items: [
      { q: 'What is a ductless mini split?', a: 'A heating and cooling system with an outdoor compressor connected to one or more indoor units — with no ductwork required.' },
      { q: 'How do you install a ductless mini split?', a: 'A technician mounts the indoor unit, sets the outdoor condenser, and runs refrigerant and electrical lines through a small wall opening. It should always be installed by a pro.' },
      { q: 'How much is a ductless mini split?', a: 'Price depends on the number of zones and capacity you need. We quote your specific setup.' },
      { q: 'Are ductless mini splits efficient?', a: 'Very — they avoid the energy losses of ductwork and let you condition only the rooms you actually use.' },
      { q: 'Are ductless mini splits loud?', a: 'No. The indoor units are quiet, typically quieter than a window AC.' },
      { q: 'Are ductless mini splits good for heating?', a: 'Yes. Most are heat pumps that heat efficiently, even in cold weather.' },
      { q: 'How much electricity does a ductless mini split use?', a: 'Far less than electric baseboard heat or older systems. Exact usage depends on the size and how much you run it.' },
    ],
  },
  {
    category: 'Indoor Air Quality',
    items: [
      { q: 'How does indoor air quality affect my health?', a: 'Poor air can trigger allergies, asthma, headaches, and fatigue. Cleaner air supports easier breathing and better sleep.' },
      { q: 'What is indoor air quality?', a: "It is the condition of the air inside your home — how clean it is, its humidity level, and how free it is of pollutants." },
      { q: 'How do you measure indoor air quality?', a: 'Monitors track particulates, humidity, CO2, and VOCs. We can test your home’s air and recommend solutions.' },
      { q: 'How do I know if my indoor air quality is good?', a: 'Frequent dust, stuffiness, lingering odors, or allergy symptoms that ease when you leave the house all suggest poor air quality.' },
      { q: 'Do indoor plants help with air quality?', a: 'A little, but they are not a substitute for proper filtration and ventilation.' },
      { q: 'What causes poor indoor air quality?', a: 'Dust, pet dander, mold, excess humidity, off-gassing from materials, and poor ventilation.' },
    ],
  },
  {
    category: 'Heating',
    items: [
      { q: 'What are the most common types of heating problems?', a: 'No heat, uneven heating, short cycling, strange noises, and an unresponsive thermostat.' },
      { q: 'How much does it cost to repair my heating system?', a: 'It varies by the failed part. You get a flat-rate price before we start.' },
      { q: "What do I do if my heat isn't working?", a: 'Check the thermostat, breaker, and air filter first. If it still will not run, call us — no-heat calls are handled around the clock.' },
      { q: 'What does heating maintenance mean?', a: 'A seasonal inspection and tune-up that keeps your furnace or heat pump safe, efficient, and reliable.' },
      { q: 'How often should I service my heating?', a: 'Once a year, in the fall before the first cold snap.' },
      { q: 'What happens during heating maintenance?', a: 'We inspect and clean key components, test safety controls, check the heat exchanger, and run a carbon monoxide test.' },
      { q: 'What is the average life expectancy of a heating system?', a: 'A furnace typically lasts 15–20 years; a heat pump about 10–15.' },
      { q: 'How long does heating maintenance take?', a: 'Usually about an hour.' },
      { q: 'What is heating maintenance vs a heating service?', a: 'Maintenance is scheduled preventive care; a service call repairs a specific problem.' },
    ],
  },
  {
    category: 'Furnaces',
    items: [
      { q: 'What is a furnace?', a: 'A heating system that warms air and distributes it through your ducts, powered by gas, propane, or electricity.' },
      { q: 'What are the most common parts to fail on a furnace?', a: 'Igniters, flame sensors, blower motors, capacitors, and control boards.' },
      { q: "What's the average lifespan of a furnace?", a: 'About 15–20 years with regular maintenance.' },
      { q: 'What are the signs my furnace needs repair or replacement?', a: 'Short cycling, rising bills, uneven heat, odd noises, a yellow burner flame, or frequent repairs on an aging unit.' },
      { q: 'What are the most common repairs?', a: 'Replacing igniters, flame sensors, and blower components, and correcting airflow problems.' },
    ],
  },
  {
    category: 'Heat Pumps',
    items: [
      { q: 'What is a heat pump?', a: 'A system that both heats and cools your home by moving heat instead of burning fuel.' },
      { q: 'How does a heat pump work?', a: 'It transfers heat — drawing warmth from outdoor air into your home in winter, and reversing in summer to cool.' },
      { q: 'What does a heat pump look like?', a: 'Like an AC condenser outside, paired with an indoor air handler.' },
      { q: 'How long do heat pumps last?', a: 'About 10–15 years with regular maintenance.' },
      { q: 'How do I know if my heat pump is working?', a: 'It should deliver steady warm or cool air. Weak output, ice buildup, or constant running signal a problem.' },
      { q: 'What are the advantages and disadvantages of a heat pump?', a: 'Pros: efficient year-round comfort and lower bills. Cons: higher upfront cost and reliance on backup heat in extreme cold.' },
      { q: 'What is emergency heat on a heat pump?', a: 'A backup heating mode — usually electric — that runs when the heat pump cannot keep up or has failed.' },
      { q: 'How long can you run emergency heat?', a: 'Only as needed. It is less efficient and costlier, so use it temporarily and call for service.' },
      { q: 'How much more expensive is emergency heat?', a: 'Noticeably more, since it typically uses electric resistance heat. Expect higher bills while it runs.' },
      { q: 'At what temperature should I run emergency heat?', a: 'Generally only when the heat pump cannot maintain your set temperature or has stopped working — not as a default setting.' },
    ],
  },
  {
    category: 'Plumbing',
    items: [
      { q: 'What are the most common plumbing repairs?', a: 'Leaky faucets, running toilets, clogged drains, water heater issues, and pipe leaks.' },
      { q: 'What issues do plumbers fix?', a: 'Leaks, clogs, fixture and water heater installs, sewer and drain problems, and more.' },
      { q: 'What are the signs of plumbing issues?', a: 'Low water pressure, slow drains, water stains, higher bills, odors, or discolored water.' },
      { q: 'How often should the pipes in a house be replaced?', a: 'It depends on the material — copper and PEX last for decades, while older galvanized or polybutylene pipe may need replacing sooner.' },
      { q: 'What does plumbing maintenance include?', a: 'Inspecting for leaks, testing water pressure, checking the water heater, and clearing slow drains.' },
    ],
  },
  {
    category: 'Water Quality & Reverse Osmosis',
    items: [
      { q: 'Is it healthy to drink reverse osmosis water?', a: 'Yes, RO water is safe and very clean. Some people add a remineralization stage for taste.' },
      { q: 'Is it better to drink tap water or reverse osmosis water?', a: 'RO removes more contaminants than most tap water, though good-quality tap water is fine for many homes.' },
      { q: 'What are the pros and cons of reverse osmosis?', a: 'Pros: it removes a wide range of contaminants. Cons: some water waste, and it also removes beneficial minerals.' },
      { q: 'What contaminants does reverse osmosis remove?', a: 'Lead, arsenic, nitrates, fluoride, chlorine byproducts, and many other dissolved solids.' },
      { q: 'Does drinking reverse osmosis water remove minerals from your body?', a: 'No — you get the minerals your body needs mainly from food, not from water.' },
      { q: 'Is reverse osmosis the best way to purify water?', a: 'It is one of the most thorough methods for drinking water. The best choice depends on your water’s specific issues.' },
    ],
  },
  {
    category: 'Sump Pumps',
    items: [
      { q: 'What is a sump pump?', a: 'A pump set in a basement pit that removes collected groundwater to keep the area dry.' },
      { q: 'How does a sump pump work?', a: 'A float switch turns the pump on when water rises, sending it out and away from your foundation.' },
      { q: 'How long do sump pumps last?', a: 'About 7–10 years on average.' },
      { q: 'How long can a sump pump run continuously?', a: 'It can run for a stretch during heavy water, but constant running shortens its life and may mean it is undersized or failing.' },
      { q: 'How much does it cost to install a sump pump?', a: 'It varies by pump type and pit work. We quote it upfront.' },
      { q: 'What should I check if my sump pump is not working?', a: 'Power to the unit, the float switch, the discharge line for clogs, and the pit for debris.' },
      { q: 'How much does it cost to replace a sump pump?', a: 'Usually less than a full new installation. Ask for a flat-rate quote.' },
    ],
  },
  {
    category: 'Tankless Water Heaters',
    items: [
      { q: 'What is a tankless water heater?', a: 'A unit that heats water on demand as you use it, instead of storing it in a tank.' },
      { q: 'How does a tankless water heater work?', a: 'When you open a hot tap, it heats the water instantly as it flows through, so you do not run out.' },
      { q: 'Are tankless water heaters better than tank water heaters?', a: 'They are more efficient and provide endless hot water, but cost more upfront.' },
      { q: 'What are the advantages and disadvantages of tankless water heaters?', a: 'Pros: efficiency, endless hot water, long life, and space savings. Cons: higher install cost and possible gas or venting upgrades.' },
      { q: 'How much is a tankless water heater?', a: 'Price depends on capacity and fuel type. We quote your home specifically.' },
      { q: 'How much does it cost to install a tankless water heater?', a: 'More than a simple tank swap, because of venting and gas line work. You get an upfront price.' },
      { q: 'How do you flush a tankless water heater?', a: 'Once a year, by circulating a descaling solution through the unit. We offer this as a maintenance service.' },
      { q: 'What size tankless water heater do I need?', a: 'It is based on your peak hot-water demand and incoming water temperature. We size it for you.' },
      { q: 'Can you run out of hot water with a tankless water heater?', a: 'Not by time, but exceeding its flow rate — too many fixtures at once — can reduce output.' },
      { q: 'Can you take a long shower with a tankless water heater?', a: 'Yes. It provides continuous hot water as long as demand stays within its capacity.' },
      { q: 'What is the typical lifespan of a tankless water heater?', a: 'About 20 years with maintenance — longer than a tank unit.' },
    ],
  },
  {
    category: 'Water Heaters',
    items: [
      { q: 'How many years do water heaters last?', a: 'Tank units last about 8–12 years; tankless units about 20.' },
      { q: 'What type of water heater is best?', a: 'It depends on your needs — tankless for efficiency and endless hot water, a tank for a lower upfront cost.' },
      { q: 'What is the most efficient way to heat house water?', a: 'Heat-pump (hybrid) and tankless water heaters are among the most efficient options available.' },
      { q: 'Are electric water heaters better than gas water heaters?', a: 'Electric is simpler and often cheaper to install; gas usually costs less to operate. The best fit depends on local utility rates.' },
      { q: 'Is it cheaper to use a gas or electric water heater?', a: 'Operating cost usually favors gas where gas is affordable, though electric heat-pump models can be the cheapest to run.' },
    ],
  },
  {
    category: 'Water Treatment',
    items: [
      { q: 'How do water treatment systems work?', a: 'They filter, soften, or purify your water through stages that remove contaminants and excess minerals.' },
      { q: 'What is a water treatment system?', a: "Equipment that improves your home's water — softeners, filters, and purification systems." },
      { q: 'Are water treatment systems worth it?', a: 'If you have hard water or contaminants, yes — they protect your appliances and improve taste and safety.' },
      { q: 'How much does a water treatment system cost?', a: 'It varies by system type and home. We test your water and quote the options.' },
      { q: 'What is the best method of water treatment?', a: 'It depends on your water — softening for hardness, filtration for sediment and chlorine, and reverse osmosis for drinking water.' },
      { q: 'What are the different types of water filtration systems?', a: 'Sediment filters, carbon filters, water softeners, reverse osmosis, and whole-home filtration.' },
    ],
  },
];

export const faqCount = faqGroups.reduce((n, g) => n + g.items.length, 0);
