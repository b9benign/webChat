import React from "react";
import { ThemeModeValue } from "./ThemeModeValue";
import { BrandVariantValue } from "./brandVariantValues";

export type ThemeContext = {
  mode: ThemeModeValue,
  setMode(mode: ThemeContext["mode"]): void,
  setTheme(theme: BrandVariantValue): void,
  theme: BrandVariantValue
};

export const themeContext = React.createContext<ThemeContext | null>(null);
