import React from "react";
import { ThemeValue } from "./ThemeValue";

export type ThemeContext = {
    mode: "dark" | "light",
    setMode(mode: ThemeContext["mode"]): void,
    setTheme(theme: ThemeValue): void
}

export const themeContext = React.createContext<ThemeContext | null>(null);