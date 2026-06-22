import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'LED Light Installation',
  description: `LED light installation across ${site.serviceArea} from ${site.name} — recessed, under-cabinet, and strip LED lighting installed by licensed electricians for efficiency and comfort.`,
  alternates: { canonical: '/services/led-lighting' },
};

const signs = [
  'High energy bills caused by inefficient lighting',
  'Bulbs that burn out frequently',
  'Rooms that feel dim or unevenly lit',
  'Outdated fixtures that limit lighting performance',
  'Kitchens or workspaces that need brighter lighting',
  'Basements or garages with poor visibility',
];

const process = [
  'Reviewing room layout and lighting needs',
  'Recommending LED lighting solutions and fixture placement',
  'Planning safe electrical connections',
  'Installing LED fixtures, recessed lights, or strip lighting',
  'Testing brightness levels and system performance',
  'Confirming the system meets electrical safety codes',
];

const designOptions = [
  'LED recessed lighting installation for ceilings',
  'Under-cabinet LED light installation in kitchens',
  'Installing LED strip lights for accent lighting',
  'LED lighting upgrades for basements and garages',
  'LED lighting for hallways and living spaces',
];

const whyChoose = [
  'Licensed electricians with LED installation experience',
  'High-quality LED lighting products',
  'Safe and code-compliant electrical work',
  'Custom lighting recommendations',
  'Transparent pricing and reliable scheduling',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Experienced pros who install LED systems safely and correctly.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Every install meets current electrical safety codes.' },
  { icon: 'badge' as const, title: 'Quality LED Products', text: 'Long-lasting, energy-efficient fixtures and lighting.' },
  { icon: 'house' as const, title: 'Custom Recommendations', text: 'Brightness and color temperature tuned to each room.' },
];

const faqs = [
  { q: 'What is LED lighting, and how does it work?', a: 'LED stands for light-emitting diode. These lights use advanced technology to produce bright illumination while using less electricity than traditional bulbs.' },
  { q: 'How does LED lighting save energy?', a: 'LED lights convert more electricity into light rather than heat. This makes them more efficient and helps reduce energy consumption.' },
  { q: 'Where do you install LED lights?', a: 'LED lighting can be installed in kitchens, living rooms, hallways, basements, garages, and other indoor spaces. They are also commonly used for recessed lighting and under-cabinet lighting.' },
  { q: 'How much do LED lights cost?', a: 'Costs vary depending on the number of fixtures, installation complexity, and lighting type. Many homeowners find the long-term energy savings make LED lighting a worthwhile investment.' },
  { q: 'How can I customize LED lighting for my home?', a: 'LED lighting can be customized through fixture style, brightness levels, and color temperature. Our electricians help design lighting systems that match the layout and style of your home.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'LED Light Installation',
  description: 'LED lighting installation, including recessed, under-cabinet, and strip lighting for residential interiors.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Electrical', item: `${site.url}/services/electrical` },
    { '@type': 'ListItem', position: 4, name: 'Lighting', item: `${site.url}/services/lighting` },
    { '@type': 'ListItem', position: 5, name: 'Indoor Lighting', item: `${site.url}/services/indoor-lighting` },
    { '@type': 'ListItem', position: 6, name: 'LED Light Installation', item: `${site.url}/services/led-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function LedLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`LED Light Installation in ${site.serviceArea}`}
        description="Recessed, under-cabinet, and strip LED lighting installed by licensed electricians — energy-efficient systems built for steady brightness and long-term performance."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
          { label: 'LED Light Installation' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Cut energy use with LED lighting.
          </h2>
          <a
            href={site.primaryPhone.href}
            className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/led-hero.jpg)' }}
            role="img"
            aria-label="Under-cabinet LED lighting in a modern kitchen"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional LED Light Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            LED lighting has become one of the most popular upgrades for modern homes. Compared to
            traditional lighting, LEDs last longer, use less electricity, and provide steady brightness
            throughout the home.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional LED light installation across {site.serviceArea}. Our
            licensed electricians install reliable lighting systems designed to improve energy efficiency
            and everyday comfort.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you want LED{' '}
            <Link href="/services/recessed-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              recessed lighting installation
            </Link>{' '}
            in a kitchen, under-cabinet LED light installation for better workspace visibility, or LED
            strip light installation for accent lighting, our team installs systems that are safe and
            built for long-term performance.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            LED lighting also offers flexibility for modern homes. Many LED systems let homeowners adjust
            brightness and color temperature to match the room. That makes LED a good option for
            kitchens, living rooms, basements, and other{' '}
            <Link href="/services/indoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              indoor spaces
            </Link>{' '}
            where consistent lighting is important.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Professional installation ensures that LED lights are properly connected to your electrical
            system and positioned to deliver balanced, effective lighting.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need LED lighting (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/led-signs.jpg)' }}
            role="img"
            aria-label="Room with modern LED recessed lighting"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need LED Lighting
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Many homeowners switch to LED lighting when older fixtures no longer meet their needs.
              Traditional lighting often uses more energy and requires frequent bulb replacements. You
              may benefit from LED lighting installation if you notice:
            </p>
            <ul className="mt-4 grid gap-1.5">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Upgrading to LED lighting can improve brightness while reducing electricity use across your
              home.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted LED Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Our LED Light Installation Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Every LED light installation begins with understanding your lighting goals and evaluating
              your existing fixtures. Our installation process includes:
            </p>
            <ul className="mt-4 grid gap-1.5">
              {process.map((p) => (
                <li key={p} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Our electricians ensure every LED lighting installation works safely and delivers
              consistent illumination.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.jpg)' }}
            role="img"
            aria-label="Electrician planning an LED lighting layout"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Benefits of LED Lighting</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            LED lighting offers several advantages over traditional bulbs and fixtures.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Energy-Efficient Lighting</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            LED lights use significantly less electricity than incandescent or fluorescent bulbs. Many
            homeowners upgrade to LED lighting to improve energy efficiency while maintaining bright,
            reliable lighting.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Because LEDs produce less heat, they waste less energy. This helps reduce overall power
            consumption while still delivering strong illumination. LED lights also last much longer than
            traditional bulbs, which means fewer replacements and less maintenance over time.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Custom Design Options</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            LED lighting provides flexible design options for modern homes. These lights are available in
            different brightness levels, fixture styles, and color temperatures. Common LED lighting
            solutions include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {designOptions.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            These lighting solutions help homeowners create comfortable and visually balanced interiors.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for LED Light Installation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Homeowners throughout {site.serviceArea} trust {site.name} for professional lighting
            installation services. When you work with our electricians, you receive:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {w}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="card flex gap-3.5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{w.title}</h3>
                  <p className="text-sm text-ink/70">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            Our team focuses on installing LED lighting systems that improve comfort, efficiency, and
            long-term performance.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">LED Lighting FAQs</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your LED Light Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Ready to upgrade to LED? {site.name} installs energy-efficient LED lighting across{' '}
              {site.serviceArea}. Call now or request a free estimate.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.primaryPhone.href} className="btn-pink text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/free-estimate" className="btn-outline border-white text-white hover:bg-white/10">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageSections />
    </>
  );
}
