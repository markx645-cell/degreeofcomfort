import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { leakRepairCopy } from '@/content/location-copy/leak-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'leak-repair',
  serviceName: 'Leak Repair',
  eyebrow: 'Plumbing',
  hubLabel: 'Leak Repair',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Leak Repair',
  ctaLine: 'Leak in {neighborhood}? Call for same-day service',
  heroImage: '/services/leak-repair.jpg',
  introHeading: 'Leak Repair in {neighborhood}',
  introParagraphs: [
    'A leak rarely fixes itself, and the longer it runs the more it costs. {brand} provides professional leak repair for homeowners in {place} — pipe, slab, toilet, kitchen, and bathroom leaks fixed at the source, not just patched at the surface.',
    'Our licensed plumbers locate the real problem with leak-detection equipment, explain the repair and the flat-rate price up front, and back it with same-day and emergency service.',
  ],
  sidebarSections: [
    {
      title: 'Leaks We Repair in {neighborhood}',
      body: [
        'We fix the full range of leaks in {neighborhood} homes — water leaking into the basement, slab leaks under the foundation, kitchen and bathroom leaks, running or leaking toilets, and water-line and supply-pipe leaks. If water is showing up where it should not be, we track it down.',
        'We repair the actual cause, not just the visible damage, so the same leak does not come back a month later.',
      ],
    },
    {
      title: 'How We Find Hidden Leaks',
      body: [
        'Many leaks hide inside walls, ceilings, basements, and even under slabs. We use moisture and acoustic detection equipment to pinpoint the source without intrusive demolition, which saves time, cost, and your home’s finishes.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'leak-detection', title: 'Leak Detection' },
    { slug: 'pipe-repair-replacement', title: 'Pipe Repair & Replacement' },
    { slug: 'water-heater-repair', title: 'Water Heater Repair' },
    { slug: 'emergency-plumbing', title: 'Emergency Plumbing' },
  ],
  band1Image: '/services/leak-detection.jpg',
  band1Heading: 'Signs of a Hidden Leak in Your {neighborhood} Home',
  commonSituations: [
    'A sudden or unexplained jump in your water bill',
    'Water stains, bubbling paint, or discoloration on walls and ceilings',
    'Damp spots, warped flooring, or soft areas around fixtures',
    'Musty odors or visible mold and mildew',
    'Running or dripping sounds when no plumbing is in use',
    'An ongoing loss of water pressure',
  ],
  trustedBanner: 'Your Local & Trusted Leak Repair Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Leak Repair in {neighborhood}',
  band2Paragraphs: [
    'We start with a thorough assessment, checking visible plumbing and the spots that are easy to overlook — crawl spaces, basement walls, behind appliances — then use leak-detection equipment to pinpoint the source without unnecessary demolition.',
    'Once the leak is located, we explain the repair plan, timeline, and flat-rate price before we begin. Our licensed plumbers complete the repair, confirm the leak is fully resolved, and share tips to help prevent the next one.',
  ],
  proseSections: [
    { title: 'Common Causes of Leaks in Older {neighborhood} Homes', body: 'Corroded galvanized or cast-iron pipe, worn joints and fittings, water pressure set too high, and ground shifting around the line are the usual culprits — and the older homes common in {neighborhood} are especially prone to corrosion-related leaks. We point out aging lines worth watching while we are there.' },
    { title: 'Slab & Hidden Leaks', body: 'Leaks under a slab or inside walls can run for weeks before you see a stain. Our moisture and acoustic tools locate them precisely, so we open up only what we have to and fix the leak at the source rather than guessing.' },
    { title: 'Why Fixing a Leak Fast Matters', body: 'A small leak wastes water every hour and quietly feeds mold, rot, and structural damage. Catching it early almost always means a smaller, cheaper repair than the damage it would cause if left alone — which is why we offer same-day service.' },
    { title: 'Emergency & Same-Day Leak Repair in {neighborhood}', body: 'An active leak cannot wait. If water is spreading, shut off the main supply and call us — our team responds fast and reaches most {neighborhood} homes the same day to stop the leak and make the repair.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'We Fix the Source', text: 'We repair the actual cause of the leak, not just the visible damage, so it does not return.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day & Emergency', text: 'We respond fast and reach most homes the same day you call.' },
  ],
  proofQuote:
    'Water bill doubled with no explanation. They found a slab leak under the kitchen with acoustic gear, fixed it without tearing up the whole floor, and the bill went right back to normal.',
  sharedFaqs: [
    { q: 'What should I do if I suspect a water leak in my home?', a: 'If the leak is active, shut off the main water supply and avoid using the affected fixtures, then call us. The sooner we locate the source, the less damage it can do — and the smaller the repair tends to be.' },
    { q: 'What does a pipe leak repair involve?', a: 'We locate the leak, then repair or replace the damaged section of pipe or the failed joint, pressure-test the line, and confirm everything is sealed and flowing properly before we finish.' },
    { q: 'How do I prevent future leaks in my home?', a: 'Keep an eye on your water pressure, insulate exposed pipes before winter, address small drips early, and have aging galvanized or cast-iron lines inspected. We are happy to point out anything worth watching while we are there.' },
    { q: 'How can I tell if a leak is coming from inside my walls or from the roof?', a: 'Roof leaks usually appear after rain and show up high on ceilings or upper walls, while plumbing leaks persist regardless of the weather and often track back to a fixture or supply line. Our moisture and acoustic tools confirm the source quickly.' },
    { q: 'What are the most common causes of pipe leaks in older homes?', a: 'Corroded galvanized or cast-iron pipe, worn joints and fittings, water pressure that is set too high, and ground shifting around the line. Older homes in the area are especially prone to corrosion-related leaks.' },
  ],
  related: [
    { label: 'Leak Repair (overview)', href: '/services/leak-repair' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
    { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
    { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => leakRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Leak Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day leak repair in ${place} — pipe, slab, toilet, and fixture leaks found and fixed at the source. Upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/leak-repair/${loc.slug}` },
    openGraph: {
      title: `Leak Repair in ${place} | ${site.name}`,
      description: `Licensed, same-day leak repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function LeakRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = leakRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
