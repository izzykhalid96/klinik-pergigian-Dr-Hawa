# design.md — Klinik Pergigian Oracare

## Color brief
- Constraints: none (free spec-demo, no client brand guidelines)
- Existing guidance: real data only — 5.0★/187 Google reviews, Dr. Amalina, family clinic, scaling/polishing focus
- Viewer action: WhatsApp to book appointment
- Viewer feeling: trust, calm, approachable — NOT luxury/hospitality (clinic is a neighborhood family practice, not a 5-star spa; overclaiming hurts credibility with locals who know the real place)

Palette: 1 hue (teal) + black/white + one accent.
- `--color-brand: #008080` (primary, CTAs, icons)
- `--color-brand-light: #006565` (hover state)
- `--color-brand-muted: #F0FAFA` (backgrounds, icon chips)
- `#5EEAD4` mint accent — kept, used sparingly on dark hero only (highlight word, stat numbers)
- Body text `#1A1A2E` near-black on white — readability rule, no saturated colored type
- Dropped: gold "Now Booking" hotel-badge treatment — replaced with plain teal trust badge

## Font brief
- Mood: warm, clean, local-trustworthy (not 5-star-hotel)
- Use: web only
- Sizes needed: H1 hero, H2 section, body, CTA button
- `--font-sans: Inter` (body/UI), `--font-display: Montserrat` (headlines) — kept, humanist-sans pairing already correct, no change

## Signature effect (ONE per demo — anti-slop rule)
Auto-rotating hero photo crossfade + auto-scroll review marquee (pause on hover). Already distinct. Do not add more effects — adding a second signature dilutes it.

## Copy rule
"Words close deals" — copy must match what a Kota Warisan family clinic actually is. No "premium," "high-end," "hospitality-inspired" language. Lead with real proof (5.0★/187 reviews, real dentist name, real services) over aspirational adjectives.

## Known cleanup
- `WhyIris.tsx` — leftover component name from the Iris template clone, never renamed. Rename to `WhySection.tsx` or similar when touching that file.
