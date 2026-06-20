// Sub-service pages reached from the header dropdowns.
// Each renders through app/services/[slug]/page.tsx with a templated layout.

export type Category = 'Cooling' | 'Heating' | 'Plumbing' | 'Electrical';

export type ServicePage = {
  slug: string;
  title: string;
  category: Category;
  parentSlug: string; // the main category page
  blurb: string; // one-line summary used in intro + meta
};

export const servicePages: ServicePage[] = [
  // ── Plumbing ──
  { slug: 'drain-cleaning', title: 'Drain Cleaning', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Fast, thorough drain cleaning with camera inspection to find the real cause.' },
  { slug: 'emergency-plumbing', title: 'Emergency Plumbing', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Burst pipes and major leaks handled fast, before water damage spreads.' },
  { slug: 'faucet-repair-replacement', title: 'Faucet Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Stop the drip and upgrade tired fixtures with a clean, lasting install.' },
  { slug: 'leak-detection', title: 'Leak Detection', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Pinpoint hidden leaks without tearing up your home.' },
  { slug: 'leak-repair', title: 'Leak Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Lasting repairs for supply lines, drains, and fixtures.' },
  { slug: 'plumbing-installation', title: 'Plumbing Installation', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'New fixtures, lines, and appliances installed to code.' },
  { slug: 'plumbing-repair', title: 'Plumbing Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'From a running toilet to a failing valve, fixed right the first time.' },
  { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Camera-diagnosed sewer line repair and replacement.' },
  { slug: 'sump-pumps', title: 'Sump Pumps', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Sump pump installation and repair to keep your basement dry.' },
  { slug: 'tankless-water-heater', title: 'Tankless Water Heater', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Endless hot water and lower bills with a tankless system.' },
  { slug: 'water-heater-installation', title: 'Water Heater Installation', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Tank and tankless water heater installation, old unit hauled away.' },
  { slug: 'water-heater-maintenance', title: 'Water Heater Maintenance', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Annual flushes and checks to extend the life of your water heater.' },
  { slug: 'water-heater-repair', title: 'Water Heater Repair', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'No hot water? Same-day water heater diagnosis and repair.' },
  { slug: 'water-quality', title: 'Water Quality', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Testing, softeners, and filtration for cleaner home water.' },

  // ── Heating ──
  { slug: 'furnace-installation-replacement', title: 'Furnace Installation & Replacement', category: 'Heating', parentSlug: 'heating', blurb: 'Right-sized furnace installs that lower bills and even out comfort.' },
  { slug: 'furnace-maintenance', title: 'Furnace Maintenance', category: 'Heating', parentSlug: 'heating', blurb: 'Annual tune-ups with a carbon monoxide safety check included.' },
  { slug: 'furnace-repair', title: 'Furnace Repair', category: 'Heating', parentSlug: 'heating', blurb: '24/7 emergency no-heat repair for every make and model.' },
  { slug: 'heat-pumps', title: 'Heat Pumps', category: 'Heating', parentSlug: 'heating', blurb: 'Efficient year-round heating and cooling from one system.' },
  { slug: 'indoor-air-quality', title: 'Indoor Air Quality', category: 'Heating', parentSlug: 'heating', blurb: 'Filtration, humidity control, and purification for healthier air.' },
  { slug: 'furnace-filters', title: 'Furnace Filters', category: 'Heating', parentSlug: 'heating', blurb: 'The right filters delivered and installed, so your system breathes easy.' },

  // ── Air Conditioning ──
  { slug: 'ac-repair', title: 'AC Repair', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Same-day cooling repair on every major brand.' },
  { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Properly sized AC systems with financing and upfront pricing.' },
  { slug: 'ac-maintenance', title: 'AC Maintenance', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'A 21-point tune-up that catches problems before summer.' },
  { slug: 'mini-splits', title: 'Mini-Splits', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Ductless comfort for additions, garages, and tricky rooms.' },
  { slug: 'air-filters', title: 'Air Filters', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Quality AC filters that protect your system and your air.' },

  // ── Electrical ──
  { slug: 'lighting', title: 'Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Indoor and outdoor lighting design, install, and repair.' },
  { slug: 'outdoor-lighting', title: 'Outdoor Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Landscape, patio, and security lighting that lasts.' },
  { slug: 'indoor-lighting', title: 'Indoor Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Recessed, accent, and fixture lighting for every room.' },
  { slug: 'recessed-lighting', title: 'Recessed Lighting Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Clean, modern recessed lighting installed to code.' },
  { slug: 'lighting-fixture-installation', title: 'Lighting Fixture Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Chandeliers, vanities, and fixtures hung safely.' },
  { slug: 'holiday-lighting', title: 'Holiday Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Festive lighting installed, maintained, and taken down for you.' },
  { slug: 'hot-tub-wiring', title: 'Hot Tub Wiring', category: 'Electrical', parentSlug: 'electrical', blurb: 'Safe, code-compliant circuits for hot tubs and spas.' },
  { slug: 'landscape-lighting', title: 'Landscape Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Highlight your yard with durable low-voltage lighting.' },
  { slug: 'patio-lighting', title: 'Patio Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Set the mood and extend your evenings outdoors.' },
  { slug: 'led-lighting', title: 'LED Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Energy-saving LED upgrades throughout your home.' },
  { slug: 'basement-lighting', title: 'Basement Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Brighten and finish your basement the right way.' },
  { slug: 'garage-lighting', title: 'Garage Lighting', category: 'Electrical', parentSlug: 'electrical', blurb: 'Bright, even lighting for work and storage.' },
  { slug: 'exhaust-fan-installation-repair', title: 'Exhaust Fan Installation & Repair', category: 'Electrical', parentSlug: 'electrical', blurb: 'Bath and kitchen exhaust fans that move air and cut moisture.' },
  { slug: 'surge-protector-installation', title: 'Whole-Home Surge Protector Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Protect every device from spikes with whole-home surge protection.' },
  { slug: 'ceiling-fan-installation', title: 'Ceiling Fan Installation', category: 'Electrical', parentSlug: 'electrical', blurb: 'Balanced, quiet ceiling fan installs and replacements.' },
  { slug: 'electrical-inspections', title: 'Electrical Inspections', category: 'Electrical', parentSlug: 'electrical', blurb: 'Code-compliant safety inspections for peace of mind.' },
  { slug: 'home-rewiring', title: 'Home Rewiring', category: 'Electrical', parentSlug: 'electrical', blurb: 'Update aging wiring for a safer, modern home.' },
  { slug: 'ev-chargers', title: 'EV Chargers', category: 'Electrical', parentSlug: 'electrical', blurb: 'Level 2 EV charger installation sized to your panel.' },

  // Additional services surfaced in the sidebar services menu
  { slug: 'whole-house-repiping', title: 'Whole-House Repiping', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Replace old, failing pipes throughout your home with durable modern plumbing.' },
  { slug: 'gas-line-repair-replacement', title: 'Gas Line Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Safe gas line installation, repair, and leak detection by licensed pros.' },
  { slug: 'pipe-repair-replacement', title: 'Pipe Repair & Replacement', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Fix leaks and corrosion with lasting pipe repair and replacement.' },
  { slug: 'garbage-disposals', title: 'Garbage Disposals', category: 'Plumbing', parentSlug: 'plumbing', blurb: 'Garbage disposal repair and installation for a smoother kitchen.' },
  { slug: 'mini-split-repair', title: 'Mini-Split Repair', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Fast repair for ductless mini-split systems.' },
  { slug: 'mini-split-installation', title: 'Mini-Split Installation', category: 'Cooling', parentSlug: 'air-conditioning', blurb: 'Ductless mini-split installation for additions, garages, and tricky rooms.' },
  { slug: 'electrical-panel-replacement', title: 'Electrical Panel Replacement', category: 'Electrical', parentSlug: 'electrical', blurb: 'Upgrade an aging or overloaded electrical panel to safely power your home.' },
  { slug: 'switches-outlets', title: 'Switches & Outlets', category: 'Electrical', parentSlug: 'electrical', blurb: 'Outlet and switch installation, repair, and upgrades, including GFCI and USB.' },
  { slug: 'electrical-mast-repair', title: 'Electrical Mast Repair', category: 'Electrical', parentSlug: 'electrical', blurb: 'Repair a damaged electrical service mast to safely restore power.' },
];

export const getServicePage = (slug: string) => servicePages.find((s) => s.slug === slug);

// Grouped services list for the sidebar accordion. Items without a dedicated
// page link to their category page.
export const serviceMenu: { category: string; href: string; items: { label: string; href: string }[] }[] = [
  {
    category: 'Plumbing Services',
    href: '/services/plumbing',
    items: [
      { label: 'Whole-House Repiping', href: '/services/whole-house-repiping' },
      { label: 'Gas Line Repair & Replacement', href: '/services/gas-line-repair-replacement' },
      { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
      { label: 'Garbage Disposals', href: '/services/garbage-disposals' },
      { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
      { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
      { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
      { label: 'Leak Detection', href: '/services/leak-detection' },
      { label: 'Leak Repair', href: '/services/leak-repair' },
      { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
      { label: 'Drains', href: '/services/drain-cleaning' },
      { label: 'Sump Pumps', href: '/services/sump-pumps' },
      { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
      { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
      { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
      { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
      { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
      { label: 'Tankless Water Heater', href: '/services/tankless-water-heater' },
      { label: 'Water Quality', href: '/services/water-quality' },
    ],
  },
  {
    category: 'Heating Services',
    href: '/services/heating',
    items: [
      { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
      { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
      { label: 'Furnace Repair', href: '/services/furnace-repair' },
      { label: 'Heat Pumps', href: '/services/heat-pumps' },
    ],
  },
  {
    category: 'Air Conditioning Services',
    href: '/services/air-conditioning',
    items: [
      { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
      { label: 'AC Maintenance', href: '/services/ac-maintenance' },
      { label: 'Mini-Split Installation', href: '/services/mini-split-installation' },
      { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
      { label: 'AC Repair', href: '/services/ac-repair' },
      { label: 'Mini-Splits', href: '/services/mini-splits' },
    ],
  },
  {
    category: 'Electrical Services',
    href: '/services/electrical',
    items: [
      { label: 'Home Rewiring', href: '/services/home-rewiring' },
      { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
      { label: 'Surge Protector Installation', href: '/services/surge-protector-installation' },
      { label: 'Lighting', href: '/services/lighting' },
      { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
      { label: 'Exhaust Fan Installation & Repair', href: '/services/exhaust-fan-installation-repair' },
      { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation' },
      { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
      { label: 'Garage Lighting', href: '/services/garage-lighting' },
      { label: 'Basement Lighting', href: '/services/basement-lighting' },
      { label: 'Recessed Lighting Installation', href: '/services/recessed-lighting' },
      { label: 'LED Lighting', href: '/services/led-lighting' },
      { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
      { label: 'Patio Lighting', href: '/services/patio-lighting' },
      { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
      { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
      { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
      { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
      { label: 'EV Chargers', href: '/services/ev-chargers' },
      { label: 'Switches & Outlets', href: '/services/switches-outlets' },
      { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
    ],
  },
];
