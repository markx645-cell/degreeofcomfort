import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { servicePages } from '@/content/servicePages';
import { companyPages } from '@/content/companyPages';
import { locations, DEPLOYED_LOCATION_SLUGS } from '@/content/locations';
import { acRepairCopy } from '@/content/location-copy/ac-repair';
import { furnaceRepairCopy } from '@/content/location-copy/furnace-repair';
import { waterHeaterRepairCopy } from '@/content/location-copy/water-heater-repair';
import { drainCleaningCopy } from '@/content/location-copy/drain-cleaning';
import { acInstallationCopy } from '@/content/location-copy/ac-installation-replacement';
import { heatPumpsCopy } from '@/content/location-copy/heat-pumps';
import { leakRepairCopy } from '@/content/location-copy/leak-repair';
import { posts } from '@/content/posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');

  const staticRoutes = ['', '/services', '/blog', '/areas', '/specials', '/free-estimate', '/comfort-club', '/heat-pump-incentives', '/about', '/careers', '/financing', '/difference', '/customer-success-stories', '/reviews', '/referrals', '/university', '/faq'].map((path) => ({
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

  const locationRoutes = locations
    .filter((l) => DEPLOYED_LOCATION_SLUGS.includes(l.slug))
    .map((l) => ({
      url: `${base}/services/emergency-plumbing/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const acRepairLocationRoutes = locations
    .filter((l) => acRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ac-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const furnaceRepairLocationRoutes = locations
    .filter((l) => furnaceRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/furnace-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const waterHeaterRepairLocationRoutes = locations
    .filter((l) => waterHeaterRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/water-heater-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const drainCleaningLocationRoutes = locations
    .filter((l) => drainCleaningCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/drain-cleaning/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const acInstallationLocationRoutes = locations
    .filter((l) => acInstallationCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/ac-installation-replacement/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const heatPumpsLocationRoutes = locations
    .filter((l) => heatPumpsCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/heat-pumps/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const leakRepairLocationRoutes = locations
    .filter((l) => leakRepairCopy[l.slug])
    .map((l) => ({
      url: `${base}/services/leak-repair/${l.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes, ...companyRoutes, ...locationRoutes, ...acRepairLocationRoutes, ...furnaceRepairLocationRoutes, ...waterHeaterRepairLocationRoutes, ...drainCleaningLocationRoutes, ...acInstallationLocationRoutes, ...heatPumpsLocationRoutes, ...leakRepairLocationRoutes, ...postRoutes];
}
