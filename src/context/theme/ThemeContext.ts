import React from "react";
import { ThemeValue } from "./ThemeValue";
import { BrandVariantValue } from "./brandVariantValues";

export type ThemeContext = {
  mode: ThemeValue;
  setMode(mode: ThemeContext["mode"]): void;
  setTheme(theme: BrandVariantValue): void;
};

export const themeContext = React.createContext<ThemeContext | null>(null);
