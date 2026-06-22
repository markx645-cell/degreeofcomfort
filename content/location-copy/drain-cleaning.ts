import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { part1 } from './drain-cleaning-parts/part1';
import { part2 } from './drain-cleaning-parts/part2';
import { part3 } from './drain-cleaning-parts/part3';
import { part4 } from './drain-cleaning-parts/part4';
import { part5 } from './drain-cleaning-parts/part5';
import { part6 } from './drain-cleaning-parts/part6';

// Per-neighborhood, drain-cleaning-specific copy, drafted from each
// neighborhood's real local facts in content/locations.ts.
export const drainCleaningCopy: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};
