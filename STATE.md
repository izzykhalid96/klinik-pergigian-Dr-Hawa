# STATE — Klinik Pergigian Dr Hawa

Last updated: 2026-07-30

## Done
- Commit `05d8a26`, deployed to production, verified.
  - Removed the before/after gallery, the before/after pair on all 5 pricing
    carousel panels, and 14 image files. MAB/KKM prohibits before/after patient
    photos on a clinic site regardless of consent.
  - Removed 3 AI-generated hero images (fake dentist, fake patients, fake
    waiting room) left over from the Oracare template clone. Same rule.
  - Added 3 real owner-uploaded photos from the clinic's GBP. Reception shot is
    cropped to exclude a whitening banner carrying before/after panels.
  - Hero photo moved out of the full-bleed background into a fixed-aspect frame
    inside the social proof card (desktop) and its own block (mobile). Portrait
    phone sources lose ~2/3 of the frame in a landscape hero.
  - Review figures centralised in `src/data/stats.ts`. Nilai 4.9/336,
    Shah Alam 4.9/87, combined 423. Shah Alam had been wrong at 5.0/81.
  - Added the required KKM/MAB footer line.
  - `check-assets.cjs` guards the pre-push rule (referenced assets must exist
    on disk AND be tracked by git). It caught 3 untracked photos this run.

## Prod QA (2026-07-30)
Root 200. favicon.ico / favicon.svg / favicon-32 / apple-touch-icon all 200.
All 4 images 200 with expected byte sizes. Zero before/after assets in bundle.
423 / 336 / "across both branches" / KKM-MAB footer line all present in bundle.
Mobile 375x812 checked on the local build of this commit (browser tool timed
out loading the prod URL directly).

## Next
Outreach email is SCHEDULED to auto-send **2026-07-31 09:05 MYT**.
Then, manually, ~10:15 the same morning: WhatsApp 012-241 2034 asking them to
forward it to Dr Hawa, framed as "jawapan ya atau tidak sebelum 6 Ogos".

Email carries a hard deadline of **6 Aug 2026** and a two-option close. If 6 Aug
passes with no reply, actually take the demo down:

```bash
npx vercel remove klinik-pergigian-dr-hawa --yes
```

## Open, needs the clinic to confirm
1. Opening hours. Door: Mon-Sat 10-6, Sun 10-3. GBP: Mon-Fri 10-7, Sat-Sun 10-6.
   Site currently follows GBP.
2. Main phone. GBP 06-856 0600, door 012-386 2412, site WhatsApp 012-241 2034.
3. Shah Alam WhatsApp number.
4. Original photos (doctor treating, interior, team). Asked 2026-07-08, they
   said "nanti kami cuba cari". GBP photos are the fallback, not the answer.

## Known, not fixed
- `design.md` still has the header "Klinik Pergigian Oracare" and references
  `WhyIris.tsx` from the template clone. Cosmetic, internal doc only.
- `src/data/reviews.ts` contains a real Google review reading "The best service
  from Dr Fatimah". Verbatim third-party quote, not clinic copy. Flagged under
  ops/12 superlatives; editing a real review would be worse. Imran's call.
- Hero runs ~1134px against a 900px desktop viewport, so the stats row and
  review marquee sit below the fold. Trimming the two branch addresses from the
  hero card fixes it; they already appear in full under Find Us.
