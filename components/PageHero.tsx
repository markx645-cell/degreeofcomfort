import Link from 'next/link';
import Icon from './Icon';

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient-deep">
      <div className="absolute inset-0 bg-hero-radial opacity-70" />
      <div className="container-page relative py-14 sm:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-brand-100">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <Icon name="arrow" className="h-3 w-3 text-brand-300" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <span className="eyebrow mt-5 bg-white/10 text-brand-100">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{description}</p>
        )}
      </div>
    </section>
  );
}
