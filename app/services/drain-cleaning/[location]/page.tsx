import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { drainCleaningCopy } from '@/content/location-copy/drain-cleaning';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'drain-cleaning',
  serviceName: 'Drain Cleaning',
  eyebrow: 'Plumbing · Drains',
  hubLabel: 'Drain Cleaning',
  parentCrumb: { label: 'Drains', href: '/services/drains' },
  businessType: 'Plumber',
  schemaServiceType: 'Drain Cleaning',
  ctaLine: 'Drain backing up in {neighborhood}? Call for same-day service',
  heroImage: '/services/drain-cleaning-hero.jpg',
  introHeading: 'Drain Cleaning in {neighborhood}',
  introParagraphs: [
    'A slow or backed-up drain rarely fixes itself. {brand} provides professional drain cleaning for homeowners in {place} — snaking, hydro jetting, and camera inspection to clear stubborn clogs for good.',
    'Whether it is a single slow sink or a main line backing up the whole house, our licensed plumbers find the real cause and clear it completely, with upfront, flat-rate pricing and same-day service on most calls.',
  ],
  sidebarSections: [
    {
      title: 'Drains We Clean in {neighborhood}',
      body: [
        'From a single slow sink to a main line backing up the whole house, we clear every drain in {neighborhood} homes — main sewer lines that every fixture feeds into, bathroom and toilet drains where hair and soap scum build up fastest, and kitchen lines clogged with grease and food scraps.',
        'A drain backing up right now is an emergency, and we answer 24/7 with same-day service on most calls.',
      ],
    },
    {
      title: 'The Benefits of Professional Drain Cleaning',
      body: [
        'A proper cleaning clears the entire clog instead of poking a hole through it, removes the buildup that causes the next backup, and skips the harsh chemicals that corrode pipes over time. You get full flow restored, no more drain odors, and lower long-term cost than an emergency repair after a full blockage.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'drains', title: 'Drain Services' },
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
    { slug: 'leak-detection', title: 'Leak Detection' },
    { slug: 'emergency-plumbing', title: 'Emergency Plumbing' },
  ],
  band1Image: '/services/drain-cleaning.jpg',
  band1Heading: 'Signs You Need Drain Cleaning in {neighborhood}',
  commonSituations: [
    'Slow drainage at one or more fixtures',
    'Standing water in a sink, tub, or shower',
    'Clogs that keep coming back after you clear them',
    'Gurgling sounds from drains or toilets',
    'Foul odors coming up from the drain',
    'Water or sewage backing up into fixtures',
    'Several drains acting up at the same time',
  ],
  trustedBanner: 'Your Local & Trusted Drain Cleaning Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Drain Service in {neighborhood}',
  band2Paragraphs: [
    'Every drain call starts with finding the real cause. We inspect the problem and, when needed, run a camera down the line to pinpoint the exact location and type of clog before we touch anything.',
    'Then we clear it with the right tool — a drain snake for a localized clog, or hydro jetting for stubborn, grease-heavy, or recurring blockages — confirm everything flows freely, and leave you with simple tips to keep it from coming back.',
  ],
  proseSections: [
    { title: 'Snaking vs. Hydro Jetting', body: 'For a localized clog, a drain snake breaks through and clears the line quickly. For stubborn, grease-heavy, or recurring blockages — and for main lines — hydro jetting uses high-pressure water to scour the pipe walls clean, which removes far more buildup than a snake alone. We choose the right method for your {neighborhood} home’s situation rather than forcing one tool on every job.' },
    { title: 'Why We Skip Chemical Drain Cleaners', body: 'Store-bought chemical cleaners usually clear only a small channel through a clog rather than removing it, and they corrode pipes over time — especially the older lines common in many {neighborhood} homes. Professional cleaning is safer for your plumbing and far more thorough.' },
    { title: 'Recurring Clogs and Camera Inspection', body: 'A clog that keeps coming back often points to a deeper issue — grease and buildup, root intrusion, or a damaged, sagging line. A camera inspection shows us exactly what is happening inside the pipe, so we fix the real problem instead of clearing the same clog again next month.' },
    { title: 'Emergency & Same-Day Drain Cleaning in {neighborhood}', body: 'A drain backing up into your sinks, tub, or floor drains cannot wait. Our team answers 24/7 and reaches most {neighborhood} homes the same day to clear the blockage and get your plumbing working again.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'Camera Inspection', text: 'We find the real cause of the clog instead of guessing, so it stays fixed.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
    { icon: 'check', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day Service', text: 'Most drain calls are handled the same day you reach out.' },
  ],
  proofQuote:
    'Kitchen sink backed up the night before a family dinner. They came out same day, jetted the grease out of the line, and ran a camera to show me it was clear.',
  sharedFaqs: [
    { q: 'How often should I schedule professional drain cleaning?', a: 'For most homes, about once a year keeps drains flowing freely. Schedule more often if you have an older home, a large household, big trees near the sewer line, or a history of recurring clogs.' },
    { q: 'Can I use chemical drain cleaners instead of hiring professionals?', a: 'We advise against them. Chemical cleaners can corrode pipes over time and usually only clear a small channel through the clog rather than removing it. Professional cleaning is safer and far more thorough.' },
    { q: 'What causes recurring drain clogs?', a: 'Usually grease, hair, soap, and food debris building up over time — but a clog that keeps coming back can point to a deeper issue like root intrusion or a damaged, sagging line. A camera inspection tells us which it is.' },
    { q: 'What should I do if my shower drain is clogged?', a: 'Start by removing hair from the strainer and trying a plunger. Skip the chemical cleaners. If it stays slow, keeps clogging, or other drains are affected too, it is time to call a plumber to clear it properly.' },
  ],
  related: [
    { label: 'Drain Services (overview)', href: '/services/drains' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => drainCleaningCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Drain Cleaning in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day drain cleaning in ${place}. Slow drains, recurring clogs, and main-line backups cleared with snaking or hydro jetting. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/drain-cleaning/${loc.slug}` },
    openGraph: {
      title: `Drain Cleaning in ${place} | ${site.name}`,
      description: `Licensed, same-day drain cleaning serving ${place} and nearby areas.`,
    },
  };
}

export default async function DrainCleaningLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = drainCleaningCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
