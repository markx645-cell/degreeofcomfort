import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { waterHeaterRepairCopy } from '@/content/location-copy/water-heater-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'water-heater-repair',
  serviceName: 'Water Heater Repair',
  eyebrow: 'Plumbing',
  hubLabel: 'Water Heater Repair',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Water Heater Repair',
  ctaLine: 'No hot water in {neighborhood}? Call for immediate service',
  heroImage: '/services/water-heater-repair.jpg',
  introHeading: 'Water Heater Repair in {neighborhood}',
  introParagraphs: [
    'A water heater that quits is one of those problems you notice immediately. {brand} provides fast water heater repair for homeowners in {place} — gas, electric, and tankless — and our licensed technicians diagnose the cause and restore reliable hot water quickly.',
    'From no hot water to a leak near the tank, we carry common parts to fix most issues the same day, with upfront, flat-rate pricing you approve before we start.',
  ],
  sidebarSections: [
    {
      title: 'Common Water Heater Problems We Repair',
      body: [
        'The issues we fix most often in {neighborhood} homes include failed heating elements in electric units, gas burner or ignition problems, thermostats causing uneven or cold water, pressure-relief-valve issues that lead to leaks, sediment buildup that hurts heating efficiency, and leaks from corrosion or worn fittings. On tankless systems, we handle sensor and flow-rate faults.',
        'Sediment is a recurring culprit in this area’s harder water — it settles in the bottom of the tank, insulates the burner, and forces the unit to work harder until it fails.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'water-heater-maintenance', title: 'Water Heater Maintenance' },
    { slug: 'tankless-water-heater', title: 'Tankless Water Heater' },
    { slug: 'leak-repair', title: 'Leak Repair' },
  ],
  band1Image: '/services/water-heater-installation.jpg',
  band1Heading: 'Signs Your {neighborhood} Water Heater Needs Repair',
  commonSituations: [
    'No hot water or only cold water from the taps',
    'Inconsistent water temperature during use',
    'A leaking tank or moisture around the base',
    'Rusty or discolored hot water',
    'Popping, banging, or rumbling noises',
    'Water that never gets hot enough',
    'Pilot-light issues or frequent shutdowns',
  ],
  trustedBanner: 'Your Local & Trusted Water Heater Repair Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Repair in {neighborhood}',
  band2Paragraphs: [
    'A licensed technician arrives, diagnoses the cause — element, thermostat, burner, valve, or sediment — and explains the repair and the flat-rate price before any work begins, so you approve it first.',
    'We fix most issues in one visit, test the unit for safe operation and consistent temperature, and clean up before we leave, so your {neighborhood} home has reliable hot water again as fast as possible.',
  ],
  proseSections: [
    { title: 'Gas, Electric & Tankless Water Heater Repair', body: 'We repair gas, electric, and tankless water heaters from all major brands. Our technicians handle burners, pilots, igniters, heating elements, thermostats, and relief valves on tank units, and sensor and flow-rate problems on tankless systems — diagnosing the real cause rather than guessing.' },
    { title: 'Repair or Replace?', body: 'If your unit is under about 10 years old and the issue is isolated, a repair makes sense. If it is older, leaking from the tank itself, or failing repeatedly, replacement is usually the better long-term value — and we will tell you honestly which we would do for your {neighborhood} home.' },
    { title: 'Water Heater Repair Cost', body: 'Repair prices depend on the part and the type of unit — a thermostat or element costs less than a gas valve or control board. {brand} provides upfront, flat-rate pricing, so there are no surprises before we begin.' },
    { title: 'Emergency Water Heater Repair in {neighborhood}', body: 'A leak or a total loss of hot water does not wait for business hours. Our team is on call 24/7 to shut off the water, contain the leak, and restore hot water as quickly as possible.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'All Major Brands', text: 'We repair gas, electric, and tankless water heaters from every major brand.' },
    { icon: 'clock', title: '24/7 Emergency Repair', text: 'A leak or no hot water after hours? We respond day or night.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians who diagnose accurately and fix it right.' },
    { icon: 'check', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Woke up to no hot water and a puddle under the tank. They came out the same morning, replaced the valve, and flushed the sediment — hot water back by lunch.',
  sharedFaqs: [
    { q: 'Why is my water heater not producing hot water?', a: 'On an electric unit it is usually a failed heating element or thermostat; on a gas unit it is often a pilot, ignition, or gas-supply issue. A tank thick with sediment can also struggle to heat. We diagnose which it is and fix it.' },
    { q: 'What causes a leaking water heater?', a: 'Leaks come from a failing temperature-and-pressure relief valve, loose fittings, or corrosion inside the tank. A valve or fitting leak is usually a quick repair; a tank that is rusted through means it is time to replace.' },
    { q: 'How fast can you repair a water heater?', a: 'Most repairs are handled the same day — we carry common parts — and we are on call 24/7 for emergencies like a leak or a total loss of hot water.' },
    { q: 'Do you repair gas and electric water heaters?', a: 'Yes — gas, electric, and tankless, on all major brands.' },
    { q: 'How do I know if I should repair or replace?', a: 'If the unit is under about 10 years old and the issue is isolated, a repair makes sense. If it is older, leaking from the tank, or failing repeatedly, replacement is usually the better long-term value — and we will tell you honestly which we would do.' },
  ],
  related: [
    { label: 'Water Heater Repair (overview)', href: '/services/water-heater-repair' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
    { label: 'Tankless Water Heater', href: '/services/tankless-water-heater' },
    { label: 'Leak Repair', href: '/services/leak-repair' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => waterHeaterRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};
  const place = loc.city ? `${loc.neighborhood}, ${loc.city}, ${loc.state}` : `${loc.neighborhood}, ${loc.state}`;
  return {
    title: `Water Heater Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day water heater repair in ${place}. No hot water, leaks, or strange noises — gas, electric, or tankless, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/water-heater-repair/${loc.slug}` },
    openGraph: {
      title: `Water Heater Repair in ${place} | ${site.name}`,
      description: `Licensed, 24/7 water heater repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function WaterHeaterRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = waterHeaterRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
