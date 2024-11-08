import { BrandVariants } from "@fluentui/react-components";
import { blueVariant, greenVariant, orangeVariant, purpleVariant } from "./brandVariants";
import { BrandVariantValue } from "./brandVariantValues";

export default function getBrandVariantByThemeValue(themeValue: BrandVariantValue): BrandVariants {
    switch (themeValue) {
        case "blue": return blueVariant;
        case "green": return greenVariant;
        case "orange": return orangeVariant;
        case "purple": return purpleVariant;
        default: return purpleVariant;
    }
}