import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { acInstallationCopy } from '@/content/location-copy/ac-installation-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'ac-installation-replacement',
  serviceName: 'AC Installation & Replacement',
  eyebrow: 'Air Conditioning',
  hubLabel: 'AC Installation & Replacement',
  parentCrumb: { label: 'Air Conditioning', href: '/services/air-conditioning' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'AC Installation & Replacement',
  ctaLine: 'Ready for a new AC in {neighborhood}? Get a free estimate',
  heroImage: '/services/ac-installation-replacement.jpg',
  introHeading: 'AC Installation & Replacement in {neighborhood}',
  introParagraphs: [
    'When an air conditioner is past its prime, repairs stop making sense and a replacement is the better value. {brand} installs and replaces air conditioning systems for homeowners in {place} — properly sized, energy-efficient, and built to deliver reliable cooling from day one.',
    'Whether you are replacing a worn-out unit or adding cooling to a {neighborhood} home that never had it, we help you choose the right system, install it to code, and back it with a free estimate and financing options.',
  ],
  sidebarSections: [
    {
      title: 'Our AC Installation Services',
      body: [
        'We handle new AC installation for new homes and additions, replacement of existing systems, and careful system sizing based on your {neighborhood} home’s layout and cooling needs. We install energy-efficient units and test every system to confirm proper airflow and operation before we leave.',
        'A right-sized system is the whole game — too small and it never keeps up, too large and it short-cycles and wastes energy. We size it to your home, not a rule of thumb.',
      ],
    },
    {
      title: 'Benefits of a New AC System',
      body: [
        'A properly installed, modern system delivers more consistent cooling throughout the home, improved energy efficiency, lower monthly bills, better airflow and indoor air quality, quieter operation, and a far lower risk of the unexpected breakdowns that plague an aging unit.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'ac-repair', title: 'AC Repair' },
    { slug: 'ac-maintenance', title: 'AC Maintenance' },
    { slug: 'mini-splits', title: 'Ductless Mini-Splits' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
  ],
  band1Image: '/services/ac-repair.jpg',
  band1Heading: 'Signs It’s Time to Replace Your AC in {neighborhood}',
  commonSituations: [
    'Uneven temperatures from room to room',
    'Reduced cooling during hot weather',
    'Higher energy bills over time',
    'Increased humidity or poor comfort indoors',
    'An aging system that no longer performs consistently',
  ],
  trustedBanner: 'Your Local & Trusted AC Installation Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your AC Installation in {neighborhood}',
  band2Paragraphs: [
    'We start with a free in-home estimate. A technician evaluates your home’s size, layout, ductwork, and cooling needs, then recommends a properly sized, energy-efficient system and explains your options and pricing before you decide.',
    'On installation day, our licensed team removes the old equipment, installs the new system to code, and tests airflow and operation end to end — then walks you through the thermostat and care so your {neighborhood} home is comfortable from the first cycle.',
  ],
  proseSections: [
    { title: 'Choosing the Right AC System', body: 'The right system depends on your home’s size and layout, your energy-efficiency goals, your existing ductwork and equipment, and your comfort needs — and for some {neighborhood} homes, a heat pump that both cools and heats is the smarter choice. We walk you through the options instead of pushing one product.' },
    { title: 'Repair or Replace?', body: 'Most air conditioners last about 12–15 years. If your unit still uses old R-22 refrigerant, needs frequent repairs, or keeps driving up your energy bills, replacement is usually the better long-term value — and we will tell you honestly when a repair would get you by instead.' },
    { title: 'AC Installation Cost', body: 'Cost depends on the cooling capacity your home needs, the type of system, its efficiency features, and any ductwork or electrical updates — plus whether it is a straight replacement or a new install. We provide a free estimate and offer financing to spread the cost of an energy-efficient upgrade over time.' },
    { title: 'Heat Pump Options for {neighborhood} Homes', body: 'A heat pump cools in summer and heats efficiently in the milder parts of winter, and it can pair with a furnace for the coldest stretches. For many {neighborhood} homes it is an efficient, all-in-one option worth considering when you replace your AC.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'check', title: 'Proper Sizing', text: 'We size every system to your home so it cools evenly without wasting energy.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Certified technicians and careful, code-compliant installation and testing.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible plans to spread the cost of an energy-efficient upgrade over time.' },
    { icon: 'badge', title: 'Free Estimates', text: 'Clear recommendations and a free estimate before you decide anything.' },
  ],
  proofQuote:
    'Our 18-year-old AC finally died. They sized a new high-efficiency system for the house, installed it in a day, and our upstairs is finally as cool as the first floor.',
  sharedFaqs: [
    { q: 'How long does AC installation take?', a: 'A standard system replacement usually takes most of a day — roughly 4–8 hours. New installations that involve ductwork or electrical upgrades take longer, and we give you a clear time estimate up front.' },
    { q: 'How often should AC systems be replaced?', a: 'Most air conditioners last about 12–15 years. It is worth replacing sooner if your unit uses old R-22 refrigerant, needs frequent repairs, or is driving up your energy bills.' },
    { q: 'Will a new air conditioner lower energy bills?', a: 'Usually, yes. Modern high-efficiency systems use significantly less energy than older units, so a properly sized replacement often pays back part of its cost in lower monthly bills.' },
    { q: 'Are heat pumps a good option for my home?', a: 'Often, yes — a heat pump cools in summer and heats in winter efficiently, and it can pair with a furnace for the coldest days. We help you decide based on your home and goals.' },
    { q: 'Do you offer free estimates for AC installation?', a: 'Yes. We provide free estimates and clear recommendations so you understand your options before moving forward.' },
  ],
  related: [
    { label: 'AC Installation & Replacement (overview)', href: '/services/ac-installation-replacement' },
    { label: 'AC Repair', href: '/services/ac-repair' },
    { label: 'AC Maintenance', href: '/services/ac-maintenance' },
    { label: 'Ductless Mini-Splits', href: '/services/mini-splits' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => acInstallationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `AC Installation & Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `AC installation and replacement in ${place} — properly sized, energy-efficient systems with free estimates and financing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/ac-installation-replacement/${loc.slug}` },
    openGraph: {
      title: `AC Installation & Replacement in ${place} | ${site.name}`,
      description: `Properly sized, energy-efficient AC installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function AcInstallationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = acInstallationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
