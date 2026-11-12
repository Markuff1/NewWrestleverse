// ppvAnchors.ts
//
// PPVShow gives each year's banner and each match in the summary an id, so links can
// jump straight to them: "<link>#<bannerAlt>-<year>" or "<link>#<bannerAlt>-<year>-M<n>".
//
// Kept in its own file with no imports: PPVShow needs these, and importing them from
// ppvPages.ts (which imports every PPV page, which each import PPVShow) would be circular.

export const yearAnchorId = (bannerAlt: string, year: number) => `${bannerAlt}-${year}`;

export const matchAnchorId = (bannerAlt: string, year: number, index: number) =>
  `${yearAnchorId(bannerAlt, year)}-M${index + 1}`;

export const anchorLink = (link: string, id: string) => `${link}#${encodeURIComponent(id)}`;
