import { FieldProps, InputProps } from "@fluentui/react-components";

export type InputProperties =
    & Pick<InputProps,
        | "appearance"
        | "contentAfter"
        | "contentBefore"
        | "type"
        | "value">
    & Pick<FieldProps, "label">