// Company / informational pages reached from the About Us and Specials menus.
// Rendered through app/[slug]/page.tsx.

export type CompanyPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string[];
  bullets?: string[];
  faqs?: { q: string; a: string }[];
};

export const companyPages: CompanyPage[] = [];

export const getCompanyPage = (slug: string) => companyPages.find((p) => p.slug === slug);
