export const themeValue = ["blue", "green", "orange", "purple"] as const;

export type ThemeValue = (typeof themeValue)[number];