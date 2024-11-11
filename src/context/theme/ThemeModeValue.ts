export const themeModeValues = ["dark", "light", "high-contrast"] as const;

export type ThemeModeValue = (typeof themeModeValues)[number];