import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { part1 } from './ac-installation-replacement-parts/part1';
import { part2 } from './ac-installation-replacement-parts/part2';
import { part3 } from './ac-installation-replacement-parts/part3';
import { part4 } from './ac-installation-replacement-parts/part4';
import { part5 } from './ac-installation-replacement-parts/part5';
import { part6 } from './ac-installation-replacement-parts/part6';

// Per-neighborhood, AC-installation-&-replacement-specific copy, drafted from
// each neighborhood's real local facts in content/locations.ts.
export const acInstallationCopy: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};
