# Local Service-Page Playbook
### Strategy + content-structure spec for [service] × [neighborhood] pages
*Example used throughout: Emergency Plumbing × Sedamsville · Degree of Comfort*

---

## Part 1 — Strategy

### 1. The wedge: win on granularity the metro players don't have
Your main competitor (Arlinghaus) ranks at the **metro level** — one emergency-plumbing page for all of Cincinnati / Northern KY. They have no neighborhood-level pages. Your one real advantage is **hyper-local depth**: a genuinely specific page for Sedamsville, Sayler Park, Riverside, etc. That granularity is your moat — but only if three conditions are met:

1. The technical foundation is fixed (correct self-referencing canonical, indexable, ideally a production custom domain — not `*.vercel.app`).
2. The content is **original**, not cloned from a competitor's template.
3. The page carries **real local trust signals** (address, license numbers, Google Business Profile, real reviews).

Without all three, neighborhood pages stay invisible no matter how many you publish.

### 2. The #1 risk to manage: scaled duplicate content
Every page currently shares the same boilerplate *and* mirrors a competitor. Google's "scaled content" and "helpful content" stance penalizes large sets of near-identical, low-value pages. The fix is to **invert the content ratio**: lead with unique, neighborhood-specific content and minimize repeated boilerplate. Target **≥50% of visible body text unique** to each neighborhood. If you can't write that much that's genuinely specific to a neighborhood, don't publish a page for it yet.

### 3. Site architecture (the programmatic model)
Three page types, each with one job and one primary keyword:

| Page type | URL pattern | Primary keyword owned | Job |
|---|---|---|---|
| Service hub | `/services/emergency-plumbing/` | emergency plumber Cincinnati | Rank metro-wide; link down to neighborhoods |
| Location + service | `/services/emergency-plumbing/sedamsville/` | emergency plumber Sedamsville | Capture geo + "near me" in that area |
| (Optional) Area hub | `/areas/sedamsville/` | plumber / HVAC Sedamsville | List all services for one neighborhood |

**One primary keyword per URL.** The hub owns the broad term; each neighborhood page owns its geo-modified term. Never let two pages chase the same phrase — that's self-cannibalization.

### 4. Internal-linking mesh
- Hub page links **down** to every neighborhood page (with anchor "emergency plumber in [Neighborhood]").
- Each neighborhood page links **up** to its hub, **sideways** to 2–3 adjacent neighborhoods, and **across** to related services (burst pipe → leak repair, sewer backup → sewer repair).
- This is how a new neighborhood page gets discovered and inherits authority.

### 5. Prioritize — don't launch 500 thin pages at once
Score each [service × neighborhood] combo on **demand × winnability × serviceability**:
- **Demand:** population / household density, age of housing stock (older = more plumbing emergencies).
- **Winnability:** how thin the current top results are for that area.
- **Serviceability:** can you actually reach it fast? (Don't claim same-day where you can't deliver.)

**Roll out in phases:** publish 10–20 strong pages first (highest-intent services like emergency/repair × best neighborhoods), get them indexed and ranking, confirm the pattern works, *then* scale. A small set of strong pages beats hundreds of thin ones every time.

### 6. Trust / E-E-A-T layer (strategy, not decoration)
For local + emergency intent, ranking and conversion both depend on trust:
- Consistent **NAP** (name, address, phone) sitewide and matching your Google Business Profile.
- **License numbers** in the footer (a major signal for trades).
- A **claimed, optimized Google Business Profile** — this, plus proximity, is what actually wins "near me" and the map pack.
- **Real reviews** — never copy a competitor's review count or awards.

### 7. Measure and prune
Track per-cohort in Search Console: impressions/clicks by neighborhood, map-pack visibility, and calls. Pages that gain zero traction after a few months are thin-content liabilities — improve, merge, or remove them.

---

## Part 2 — Content-structure spec (per page)

Order sections so **unique content sits high** and boilerplate sits low. For each section below: U = unique per page, R = reusable (write once in brand voice, reuse), S = semi-unique (template + swapped local details).

| # | Section | Type | Keyword role | Notes |
|---|---|---|---|---|
| 1 | **H1** — `[Service] in [Neighborhood], [City], [State]` | S | Primary | Exactly one H1 |
| 2 | **Intro** (2–3 sentences) | U | Primary + variant in first 100 words | Local hook + same-day promise + phone |
| 3 | **Primary CTA** (call button) | R | — | Above the fold; emergency = "Call now" |
| 4 | **Local relevance block** (1–2 paragraphs) | U | Semantic/entity | THE MOAT. ≥3 verifiable local specifics |
| 5 | **"Emergencies we fix fast in [Neighborhood]"** (list) | S | Secondary (linked anchors) | Each bullet links to its service page |
| 6 | **"Most common emergencies in [Neighborhood] homes"** | S | Secondary + semantic | Tie symptoms to local housing traits |
| 7 | **What to expect / our process** | R | Variant | Rewrite once in your voice |
| 8 | **Why choose us** (trust bullets) | R | Variant | Keep short; real differentiators only |
| 9 | **Local proof** (license #, real review, GBP rating, nearby areas) | U | — | Strongest E-E-A-T signal on the page |
| 10 | **FAQ** (4–6 Q&A) | S | Long-tail questions | ≥1–2 localized; mark up with FAQPage schema |
| 11 | **Closing CTA** | R | Primary | Call now + phone |
| 12 | **Internal-links module** | S | — | Adjacent neighborhoods + related services + hub |

### Variables to swap per page
```
[service]        emergency plumbing
[neighborhood]   Sedamsville
[city] / [state] Cincinnati, OH
[zip]            45204
[adjacent]       Sayler Park, Riverside
[housing_trait]  late-1800s hillside homes, galvanized lines, cast-iron drains
[landmark/road]  River Road, Ohio River
[local_detail]   ≥3 specifics a generic page couldn't have
```

### Cross-cutting rules
- **Uniqueness:** ≥50% of visible body text unique to the neighborhood. Sections 2, 4, 9 must be written fresh per page.
- **Schema (JSON-LD):** `LocalBusiness`/`Plumber` + `Service` + `FAQPage` + `BreadcrumbList` on every page.
- **Headings:** one H1; logical H2s; don't keyword-stuff the neighborhood name into every heading.
- **Keyword density:** natural. Semantic/entity terms (ZIP, streets, housing traits) do more for "near me" than repeating "[Neighborhood]" a dozen times.
- **Boilerplate placement:** if you must reuse big trust/club/financing blocks, push them low or load them as a shared component so the unique-to-boilerplate ratio stays high.
- **CTA discipline:** emergency pages are transactional — call button visible at top, middle, and bottom. No informational filler.

---

## Part 3 — Pre-publish checklist
- [ ] Canonical is self-referencing to the live URL (not a staging/other domain)
- [ ] Page is `index, follow`; in the XML sitemap
- [ ] Title ≤ ~60 chars, primary keyword + brand
- [ ] Meta description: primary + 2 problem terms + phone + CTA
- [ ] One H1; primary keyword in first 100 words
- [ ] Sections 2, 4, 9 written uniquely for this neighborhood (≥3 local specifics)
- [ ] ≥50% unique body text vs. other location pages
- [ ] Secondary keywords link out to matching service pages
- [ ] Links to 2–3 adjacent neighborhoods + parent hub
- [ ] FAQ has ≥1 localized question + FAQPage schema
- [ ] LocalBusiness + Service + BreadcrumbList schema present
- [ ] Real NAP, license #s, GBP link, genuine reviews (nothing copied)
- [ ] Image alt text includes service + neighborhood

---

## Part 4 — Worked example: Emergency Plumbing × Sedamsville

**Title:** Emergency Plumber in Sedamsville, OH | Degree of Comfort
**H1:** Emergency Plumbing in Sedamsville, Cincinnati, OH
**Intro (unique):** Burst pipe, no water, or a sewer backup in Sedamsville? Our licensed plumbers are on call 24/7 and reach most homes along River Road and the hillside above it the same day. Call (513) 586-5107.
**Local relevance (unique):** Sedamsville (ZIP 45204) is one of Cincinnati's historic riverside neighborhoods on the west side between Riverside and Sayler Park. Much of its housing climbs the hillside above River Road and dates to the late 1800s — meaning aging galvanized supply lines, original cast-iron drains, and century-old water mains that tend to fail all at once. *(swap these specifics per neighborhood)*
**Emergencies we fix (linked):** burst pipes → leak repair · sewer backups → sewer repair · water-heater leaks → water heater repair · clogged drains → drain cleaning
**Local proof (unique):** OH license #_____ · "[real Sedamsville/west-side customer review]" · 4.9★ on Google · also serving Sayler Park & Riverside
**FAQ (localized):** "How fast can you reach Sedamsville?" · "What counts as a plumbing emergency?" · "Do you charge extra for nights or weekends?"
**Internal links:** Sayler Park · Riverside · Emergency Plumbing (hub) · Leak Repair · Sewer Repair

---

*Repeat Part 2's structure for every [service × neighborhood] page, swapping the variables and writing sections 2, 4, and 9 fresh each time.*
