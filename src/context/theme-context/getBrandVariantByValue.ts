import { BrandVariants } from "@fluentui/react-components";
import { ThemeValue } from "./ThemeValue";
import { blueVariant, greenVariant, orangeVariant, purpleVariant } from "./brandVariants";

export default function getBrandVariantByThemeValue(themeValue: ThemeValue): BrandVariants {
    switch (themeValue) {
        case "blue": return blueVariant;
        case "green": return greenVariant;
        case "orange": return orangeVariant;
        case "purple": return purpleVariant;
        default: return purpleVariant;
    }
}