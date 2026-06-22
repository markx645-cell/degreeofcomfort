import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { furnaceRepairCopy } from '@/content/location-copy/furnace-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'furnace-repair',
  serviceName: 'Furnace Repair',
  eyebrow: 'Heating',
  hubLabel: 'Furnace Repair',
  parentCrumb: { label: 'Heating', href: '/services/heating' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Furnace Repair',
  ctaLine: 'No heat in {neighborhood}? Call for immediate service',
  heroImage: '/services/furnace-repair-hero.jpg',
  introHeading: 'Furnace Repair in {neighborhood}',
  introParagraphs: [
    'When cold weather settles over {neighborhood}, a broken furnace is not just a problem — it is an emergency. {brand} is your trusted choice for furnace repair, and our licensed HVAC technicians respond quickly, fix the problem right the first time, and restore comfort to your home.',
    'From sudden breakdowns to routine repairs, our team delivers fast, reliable service when you need it most — with upfront, flat-rate pricing you approve before we start.',
  ],
  sidebarSections: [
    {
      title: 'Most Common Furnace Problems',
      body: [
        'Furnaces can fail for many reasons, especially during the harsh Ohio River Valley winters {neighborhood} sees. The issues our technicians fix most often include dirty or clogged filters that choke airflow, faulty thermostats causing uneven heating, ignition or pilot-control problems in gas furnaces, blower-motor issues that hurt warm-air circulation, and unusual noises from loose or broken components.',
        'If your heating system is struggling, do not wait — small issues become expensive failures fast.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'furnace-installation-replacement', title: 'Furnace Installation & Replacement' },
    { slug: 'furnace-maintenance', title: 'Furnace Maintenance' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
  ],
  band1Image: '/services/furnace-repair.jpg',
  band1Heading: 'Most Common Furnace Problems in {neighborhood} Homes',
  commonSituations: [
    'Uneven heating or cold rooms throughout the home',
    'Strange noises such as banging, rattling, or squealing',
    'The furnace turning on and off frequently',
    'Weak airflow from the vents',
    'Rising energy bills with no change in usage',
    'Burning smells or unusual odors during operation',
    'The furnace blowing cool or lukewarm air',
  ],
  trustedBanner: 'Your Local & Trusted Furnace Repair Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect During a Furnace Repair in {neighborhood}',
  band2Paragraphs: [
    'A furnace repair begins with a thorough inspection to identify the cause of the problem. The technician evaluates system components, tests performance, and pinpoints any faulty parts or safety concerns.',
    'Once the issue is identified, the recommended repair is explained before work begins. After the repair, the furnace is tested to confirm it is operating properly and safely, and we review next steps to help prevent future issues.',
  ],
  proseSections: [
    { title: 'Gas & Electric Furnace Repair', body: 'Gas furnaces are valued for their efficiency and power, but trouble with burners, pilot lights, or gas valves can put your comfort at risk — our certified experts handle burners, pilots, igniters, and valves with precision and safety. Electric furnaces are common in {neighborhood} homes too, and we find electrical problems, repair heating parts, and make sure your system runs safely and efficiently.' },
    { title: 'Repair or Replace?', body: 'Most furnaces last 10–15 years with regular maintenance. If your unit is older, breaking down often, or driving up your energy bills, replacement may be the smarter choice. We walk you through the decision and provide options that fit your budget.' },
    { title: 'Furnace Repair Cost', body: 'Repair prices depend on the issue, the type of furnace, and the parts required — a simple thermostat calibration costs less, while replacing a motor or igniter costs more. {brand} provides upfront, flat-rate pricing, so there are no surprises, and we will tell you honestly whether a repair or a replacement is the better long-term value.' },
    { title: 'Emergency Furnace Repair in {neighborhood}', body: 'When your furnace fails without warning and temperatures drop below freezing, every minute without heat matters. Our rescue team is on standby with 24/7 service to restore heat quickly so your family stays safe and warm.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: '24/7 Emergency Repair', text: 'When the heat goes out below freezing, our team is on standby day or night.' },
    { icon: 'check', title: 'Gas & Electric', text: 'Certified repair for gas and electric furnaces on all major brands.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and safe, code-compliant work.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Furnace died on the coldest night of the year. They answered late, walked me through staying warm, and had a tech out first thing with the part to fix it.',
  sharedFaqs: [
    { q: 'What does a furnace repair service include?', a: 'We start with a full inspection to diagnose the cause, then make the fix — igniter, thermostat, blower motor, control board, gas valve, and so on — and test operation and safety before we leave.' },
    { q: 'How much does furnace repair cost?', a: 'It depends on the issue, the type of furnace, and the parts required. Simple fixes like thermostat calibration cost less, while replacing a motor or igniter costs more. We provide upfront, flat-rate pricing so there are no surprises.' },
    { q: 'Do you service all kinds of furnaces?', a: 'Yes — gas and electric furnaces on all major brands. Our certified technicians handle burners, pilots, igniters, valves, electrical components, and more.' },
    { q: 'How often should you schedule maintenance?', a: 'Once a year, ideally in the fall before heating season. Regular maintenance is the best way to prevent the breakdowns that lead to repairs.' },
    { q: 'How often does a furnace filter need to be changed?', a: 'Every 1–3 months for a standard 1-inch filter — more often with pets or heavy use. A clean filter protects airflow and efficiency.' },
  ],
  related: [
    { label: 'Furnace Repair (overview)', href: '/services/furnace-repair' },
    { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
    { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => furnaceRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Furnace Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day furnace repair in ${place}. No heat, weak airflow, or strange noises — licensed HVAC techs, gas or electric, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/furnace-repair/${loc.slug}` },
    openGraph: {
      title: `Furnace Repair in ${place} | ${site.name}`,
      description: `Licensed, 24/7 furnace repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function FurnaceRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = furnaceRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
