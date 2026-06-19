import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { servicePages } from '@/content/servicePages';
import { companyPages } from '@/content/companyPages';
import { posts } from '@/content/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');

  const staticRoutes = ['', '/services', '/blog', '/areas', '/specials', '/free-estimate', '/comfort-club', '/heat-pump-incentives'].map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const subServiceRoutes = servicePages.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const companyRoutes = companyPages.map((p) => ({
    url: `${base}/${p.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes, ...companyRoutes, ...postRoutes];
}
