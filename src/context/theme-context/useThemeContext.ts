import React from "react";
import { themeContext, ThemeContext } from "./ThemeContext";

export default function useThemeContext(): ThemeContext {
    const context = React.useContext(themeContext);
    if (!context) throw new Error("e3ead4e7-a8ad-4f11-846d-4db796107b88");
    return context;
}