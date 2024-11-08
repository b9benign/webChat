export const brandVariantValues = ["blue", "green", "orange", "purple"] as const;

export type BrandVariantValue = (typeof brandVariantValues)[number];