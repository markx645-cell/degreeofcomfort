import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { part1 } from './furnace-repair-parts/part1';
import { part2 } from './furnace-repair-parts/part2';
import { part3 } from './furnace-repair-parts/part3';
import { part4 } from './furnace-repair-parts/part4';
import { part5 } from './furnace-repair-parts/part5';
import { part6 } from './furnace-repair-parts/part6';

// Per-neighborhood, furnace-repair-specific copy, drafted from each
// neighborhood's real local facts in content/locations.ts.
export const furnaceRepairCopy: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};
