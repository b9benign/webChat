import { FieldProps, InputProps } from "@fluentui/react-components";

export type InputProperties =
    & Pick<InputProps,
        | "appearance"
        | "contentAfter"
        | "contentBefore"
        | "name"
        | "onChange"
        | "placeholder"
        | "type"
        | "value">
    & Pick<FieldProps, "label">