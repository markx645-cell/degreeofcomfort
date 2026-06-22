import type { LocationServiceCopy } from '@/components/LocationServicePage';
import { part1 } from './heat-pumps-parts/part1';
import { part2 } from './heat-pumps-parts/part2';
import { part3 } from './heat-pumps-parts/part3';
import { part4 } from './heat-pumps-parts/part4';
import { part5 } from './heat-pumps-parts/part5';
import { part6 } from './heat-pumps-parts/part6';

// Per-neighborhood, heat-pump-specific copy, drafted from each neighborhood's
// real local facts in content/locations.ts.
export const heatPumpsCopy: Record<string, LocationServiceCopy> = {
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
  ...part6,
};
