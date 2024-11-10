import { createDarkTheme, createHighContrastTheme, createLightTheme, FluentProvider, Theme } from "@fluentui/react-components";
import React from "react";
import { ThemeContext, themeContext } from "./ThemeContext";
import getBrandVariantByThemeValue from "./getBrandVariantByValue";
import { BrandVariantValue } from "./brandVariantValues";

export default function ThemeContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const [mode, setMode] = React.useState<ThemeContext["mode"]>("dark");
    const [theme, setTheme] = React.useState<BrandVariantValue>("purple");

    const appliedTheme = React.useMemo<Theme>(() => {
        if (mode === "dark") return { ...createDarkTheme(getBrandVariantByThemeValue(theme)) };
        if (mode === "high-contrast") return { ...createHighContrastTheme() };
        return { ...createLightTheme(getBrandVariantByThemeValue(theme)) };
    }, [theme, mode]);

    const value = {
        mode,
        setMode,
        setTheme,
        theme
    };

    return (
        <themeContext.Provider value={value}>
            <FluentProvider theme={appliedTheme}>
                {properties.children}
            </FluentProvider>
        </themeContext.Provider>
    )
}