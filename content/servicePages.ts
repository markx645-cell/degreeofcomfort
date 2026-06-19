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
];

export const getServicePage = (slug: string) => servicePages.find((s) => s.slug === slug);
