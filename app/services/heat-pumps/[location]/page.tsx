import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { heatPumpsCopy } from '@/content/location-copy/heat-pumps';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'heat-pumps',
  serviceName: 'Heat Pumps',
  eyebrow: 'Heating',
  hubLabel: 'Heat Pumps',
  parentCrumb: { label: 'Heating', href: '/services/heating' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Heat Pump Repair & Installation',
  ctaLine: 'Heat pump trouble in {neighborhood}? Call for service',
  heroImage: '/services/heat-pumps.jpg',
  introHeading: 'Heat Pumps in {neighborhood}',
  introParagraphs: [
    'A heat pump is one efficient system that heats your home in winter and cools it in summer. {brand} repairs, installs, and replaces heat pumps for homeowners in {place} — ductless mini-split and traditional systems alike.',
    'Whether your existing unit needs a repair or you are weighing a high-efficiency upgrade, our licensed technicians have the specialized heat pump know-how to get it right, with free estimates on installs and financing available.',
  ],
  sidebarSections: [
    {
      title: 'Heat Pump Repair, Installation & Replacement',
      body: [
        'We service the whole life of the system in {neighborhood} homes — diagnosing and repairing units that have stopped heating or cooling, installing new high-efficiency systems, and replacing aging equipment that is no longer keeping up. We work on both ductless mini-splits and conventional, ducted heat pumps.',
        'Because a heat pump runs year-round, small problems wear it out faster than a system used only half the year, so a prompt repair or a timely replacement protects your comfort in both seasons.',
      ],
    },
    {
      title: 'Repair or Replace Your Heat Pump?',
      body: [
        'Repair is usually best for units under 10 years old with a minor issue — a thermostat, clogged filters, or a small electrical fault. Replacement is worth considering once a system is 10–15 years old, repair costs are climbing, or comfort and efficiency have clearly dropped. We give you an honest read either way.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'furnace-installation-replacement', title: 'Furnace Installation & Replacement' },
    { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement' },
    { slug: 'mini-splits', title: 'Ductless Mini-Splits' },
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
  ],
  band1Image: '/services/ac-repair.jpg',
  band1Heading: 'Signs Your {neighborhood} Heat Pump Needs Service',
  commonSituations: [
    'Inconsistent temperatures or rooms that will not heat or cool',
    'Reduced airflow from the vents',
    'Grinding, rattling, or buzzing noises',
    'The system running constantly or short-cycling',
    'Rising energy bills with no change in usage',
    'Ice buildup on the outdoor unit',
    'Air that is not warm or cool enough',
  ],
  trustedBanner: 'Your Local & Trusted Heat Pump Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Heat Pump Service in {neighborhood}',
  band2Paragraphs: [
    'For a repair, a licensed technician diagnoses the exact cause — refrigerant, a dirty coil, a stuck reversing valve, a thermostat, or an iced-up outdoor unit — and explains the flat-rate price before any work begins.',
    'For an installation, we start with a free estimate, size the system to your {neighborhood} home, install it to code, and test both heating and cooling end to end so you have year-round comfort from day one.',
  ],
  proseSections: [
    { title: 'Heat Pump vs. Furnace', body: 'A furnace burns fuel to create heat, while a heat pump moves heat instead of making it — and cools in summer too — which makes it very efficient in our region’s milder cold. Many {neighborhood} homes pair the two in a dual-fuel setup that runs the heat pump most of the season and switches to the furnace on the coldest days.' },
    { title: 'Understanding SEER and HSPF Efficiency', body: 'SEER measures cooling efficiency and HSPF measures heating efficiency — higher numbers mean the system uses less energy to do the same work, which means lower utility bills. We help you weigh efficiency against budget when choosing a system for your home.' },
    { title: 'Mini-Split & Dual-Fuel Options', body: 'For older {neighborhood} homes without ductwork, a ductless mini-split heat pump heats and cools specific rooms without tearing into walls. For homes that already have a furnace, a dual-fuel heat pump is often the most efficient path to year-round comfort.' },
    { title: 'Financing Your Heat Pump in {neighborhood}', body: 'A high-efficiency heat pump is a meaningful upgrade, so we offer financing with flexible terms to make it affordable now — and a free estimate so you understand the cost and the long-term savings before you decide.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'check', title: 'Year-Round Comfort', text: 'One system that heats in winter and cools in summer, serviced for both.' },
    { icon: 'badge', title: 'Mini-Split & Traditional', text: 'We install and repair ductless mini-splits and conventional heat pump systems.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians with the specialized heat pump know-how it takes.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible plans so an energy-efficient upgrade is affordable now.' },
  ],
  proofQuote:
    'We replaced an old AC and furnace with a dual-fuel heat pump. The house is comfortable year-round now and our winter bills dropped noticeably.',
  sharedFaqs: [
    { q: 'What is the difference between a heat pump and a furnace?', a: 'A furnace burns fuel (usually gas) to create heat. A heat pump moves heat instead of making it — and it cools your home in summer too — which makes it very efficient in our milder cold. Many homes pair the two in a dual-fuel setup.' },
    { q: 'How often should I schedule heat pump maintenance?', a: 'Because a heat pump runs year-round, twice a year is ideal — once before heating season and once before cooling season — though at least one annual tune-up keeps it efficient.' },
    { q: 'What are SEER and HSPF ratings, and why do they matter?', a: 'SEER measures cooling efficiency and HSPF measures heating efficiency. Higher numbers mean the system uses less energy to do the same work — which means lower utility bills. We help you weigh efficiency against budget when choosing a system.' },
    { q: 'Why is my heat pump not heating or cooling properly?', a: 'Common causes are low refrigerant, a dirty filter or coils, a stuck reversing valve, a thermostat issue, or an iced-up outdoor unit. Our technicians diagnose the exact cause rather than guessing.' },
    { q: 'What warranty options are available for heat pumps?', a: 'New equipment carries a manufacturer warranty (often 10 years when registered), and our workmanship is guaranteed. We review the specific coverage on your system before installation.' },
  ],
  related: [
    { label: 'Heat Pumps (overview)', href: '/services/heat-pumps' },
    { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
    { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
    { label: 'Ductless Mini-Splits', href: '/services/mini-splits' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => heatPumpsCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Heat Pumps in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Heat pump repair, installation, and replacement in ${place} — ductless mini-split and traditional systems, year-round comfort, financing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/heat-pumps/${loc.slug}` },
    openGraph: {
      title: `Heat Pumps in ${place} | ${site.name}`,
      description: `Heat pump repair and installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function HeatPumpsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = heatPumpsCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
