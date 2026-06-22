import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { acRepairCopy } from '@/content/location-copy/ac-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'ac-repair',
  serviceName: 'AC Repair',
  eyebrow: 'Air Conditioning',
  hubLabel: 'AC Repair',
  parentCrumb: { label: 'Air Conditioning', href: '/services/air-conditioning' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Air Conditioning Repair',
  ctaLine: 'AC not cooling in {neighborhood}? Call for immediate service',
  heroImage: '/services/ac-repair-hero.jpg',
  promo: 'Save $75 on same-day AC repairs in {neighborhood} — book now, offer ends soon',
  introHeading: 'AC Repair in {neighborhood}',
  introParagraphs: [
    'When an air conditioning system stops working, comfort changes quickly — and during hot weather, a broken AC can create real safety concerns inside the home. {brand} provides professional AC repair for homeowners in {place}.',
    'Homeowners in {neighborhood} call us for many reasons — a unit that stops producing cool air, strange sounds, or a system that shuts down without warning. Our technicians take the time to identify the root cause and complete the repair to restore cooling and ensure safe operation.',
  ],
  sidebarSections: [
    {
      title: 'Expert AC Repair for Today’s Home Cooling Systems',
      body: [
        'Modern HVAC systems are built for efficiency, but even minor issues can affect performance. Trouble with airflow, electrical parts, or refrigerant levels reduces comfort and strains the system. Our technicians repair central air conditioners, heat pumps, and mini-split systems commonly used in {neighborhood} homes.',
        'Our AC repair covers the entire cooling system — we inspect airflow, check electrical connections, and confirm the refrigerant level. That approach helps us fix the problem correctly and reduce the chance it comes back.',
      ],
    },
    {
      title: '24/7 Emergency AC Repair Available',
      body: [
        'Air conditioning problems do not follow a schedule. {brand} offers 24/7 emergency AC repair for urgent issues affecting comfort or safety in {place}, with technicians available nights, weekends, and holidays.',
        'Emergency service focuses on restoring cooling as quickly as possible while protecting the AC unit from further damage. Fast repairs reduce safety risks and bring your home back to a comfortable temperature.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement' },
    { slug: 'ac-maintenance', title: 'AC Maintenance' },
    { slug: 'mini-split-repair', title: 'Mini-Split Repair' },
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
  ],
  band1Image: '/services/ac-repair.jpg',
  band1Heading: 'Most Common AC Problems in {neighborhood} Homes',
  commonSituations: [
    'Warm air coming from the vents',
    'Weak or uneven airflow between rooms',
    'The system short-cycling on and off',
    'Frozen evaporator coils',
    'Water pooling around the indoor unit',
    'Strange noises or burning smells when it runs',
    'A sudden spike in the electric bill',
  ],
  trustedBanner: 'Your Local & Trusted AC Repair Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect When We Arrive in {neighborhood}',
  band2Paragraphs: [
    'When you call for AC repair, a licensed technician arrives promptly, diagnoses the cause, and explains the recommended repair and the flat-rate price before any work begins — you approve it first.',
    'We carry common parts on the truck to fix most issues in one visit, then test the system end to end and clean up before we leave, so your {neighborhood} home is cool and comfortable again as fast as possible.',
  ],
  proseSections: [
    { title: 'AC Repair in {place}', body: 'Cooling problems call for fast action, and our team is ready to help {neighborhood} homeowners. Whether it is warm air, weak airflow, or a system that quit entirely, we deliver professional diagnosis and repair and focus on restoring comfort as quickly as possible.' },
    { title: 'All Cooling Systems and Major Brands', body: 'We repair central air conditioners, heat pumps, and ductless mini-splits from all major brands. Our technicians handle refrigerant safely and certify every repair, so your system runs efficiently and reliably long after we leave.' },
    { title: 'Same-Day Service to Beat the Heat', body: 'During a heat wave, a broken AC is more than an inconvenience. We provide same-day service whenever possible, reduce disruption, and complete every job with care and attention to detail so your cooling keeps working through the hottest stretch of summer.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: 'Same-Day Service', text: 'We answer fast and reach most homes the same day, often within hours.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed HVAC techs you can trust in your home.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no surprises or overtime fees.' },
    { icon: 'check', title: 'Repairs That Last', text: 'We fix the root cause, not just the symptom, so your home stays cool.' },
  ],
  proofQuote:
    'Our AC quit during the first heat wave. They came out the same day, found a failed capacitor, and had us cool again within the hour.',
  sharedFaqs: [
    { q: 'How much does an AC repair cost?', a: 'It depends on the problem, but we use flat-rate pricing you approve before any work begins — no hourly surprises or overtime fees.' },
    { q: 'Should I repair or replace my AC?', a: 'If your system is under about 10–12 years old and the repair is minor, a repair usually makes sense. For older units with a major failure or rising bills, we lay out the cost of repair vs. replacement so you can decide.' },
    { q: 'Why is my AC blowing warm air?', a: 'Common causes include a tripped breaker, a clogged filter, low refrigerant from a leak, or a failed capacitor or compressor. We diagnose the exact cause before quoting a fix.' },
    { q: 'How often should I have my AC serviced?', a: 'Once a year, ideally in spring before the cooling season — regular maintenance catches small issues before they become breakdowns.' },
  ],
  related: [
    { label: 'AC Repair (overview)', href: '/services/ac-repair' },
    { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
    { label: 'AC Maintenance', href: '/services/ac-maintenance' },
    { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => acRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `AC Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day AC repair in ${place}. Warm air, frozen coils, or an AC that won’t turn on — licensed HVAC techs, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/ac-repair/${loc.slug}` },
    openGraph: {
      title: `AC Repair in ${place} | ${site.name}`,
      description: `Licensed, same-day air conditioning repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function AcRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = acRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
