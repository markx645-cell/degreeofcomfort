import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { part1 } from './water-heater-repair-parts/part1';
import { part2 } from './water-heater-repair-parts/part2';
import { part3 } from './water-heater-repair-parts/part3';
import { part4 } from './water-heater-repair-parts/part4';
import { part5 } from './water-heater-repair-parts/part5';
import { part6 } from './water-heater-repair-parts/part6';

// Per-neighborhood, water-heater-repair-specific copy, drafted from each
// neighborhood's real local facts in content/locations.ts.
export const waterHeaterRepairCopy: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};
