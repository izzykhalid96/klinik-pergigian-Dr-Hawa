// Single source of truth for Google rating figures. These were duplicated as
// literals across five components and drifted apart, so read them from here.
// Verified against both Google Business Profiles on 30 Jul 2026 — re-check
// before any handover, review counts move every few weeks.
export const nilai = { rating: '4.9', reviews: 336 }
export const shahAlam = { rating: '4.9', reviews: 87 }

export const combinedReviews = nilai.reviews + shahAlam.reviews // 423
export const overallRating = '4.9'
