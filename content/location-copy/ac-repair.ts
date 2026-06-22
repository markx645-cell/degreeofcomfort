import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { part1 } from './ac-repair-parts/part1';
import { part2 } from './ac-repair-parts/part2';
import { part3 } from './ac-repair-parts/part3';
import { part4 } from './ac-repair-parts/part4';
import { part5 } from './ac-repair-parts/part5';
import { part6 } from './ac-repair-parts/part6';

// Per-neighborhood, AC-repair-specific copy (sections 2/4/6/10 of the playbook).
// Drafted from each neighborhood's real local facts in content/locations.ts.
export const acRepairCopy: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};
