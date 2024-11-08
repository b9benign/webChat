export const themeValue = ["dark", "light", "high-contrast"] as const;

export type ThemeValue = (typeof themeValue)[number];