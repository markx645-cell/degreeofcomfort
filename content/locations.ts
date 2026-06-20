// Location data for programmatic service × location pages.
// Each entry produces one page per service. `about` holds 2 unique paragraphs
// of genuinely local copy so each page is not thin/duplicate content.
//
// Start small — add entries here to scale up later. `slug` is the URL segment.

export type Location = {
  slug: string;
  neighborhood: string; // e.g. "Sedamsville"
  city: string; // e.g. "Cincinnati"
  state: string; // e.g. "OH"
  zip?: string;
  about: string[]; // 2 short, factual paragraphs about the place
};

export const locations: Location[] = [
  {
    slug: 'sedamsville',
    neighborhood: 'Sedamsville',
    city: 'Cincinnati',
    state: 'OH',
    zip: '45204',
    about: [
      "Sedamsville is one of Cincinnati's historic riverside neighborhoods, tucked along the Ohio River on the city's west side between Riverside and Sayler Park (ZIP 45204). Many of its homes climb the hillside above River Road and date to the late 1800s and early 1900s. That older housing stock is full of character — and often full of aging galvanized supply lines, original cast-iron drains, and water mains that were never built to last a century. When those systems finally give out, they tend to do it all at once.",
      "That is exactly why fast emergency plumbing matters in Sedamsville. A burst supply line or a backed-up sewer in a century-old home can flood a finished basement or ruin original woodwork before you even find the shutoff valve. We keep licensed plumbers on call 24/7 for Sedamsville and the surrounding west-side neighborhoods, reaching most homes the same day — so a small leak on River Road never has the time to turn into a major repair.",
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
