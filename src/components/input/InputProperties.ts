import { FieldProps, InputProps } from "@fluentui/react-components";

export type InputProperties =
    & Pick<InputProps,
        | "appearance"
        | "className"
        | "contentAfter"
        | "contentBefore"
        | "name"
        | "onBlur"
        | "onChange"
        | "placeholder"
        | "required"
        | "type"
        | "value">
    & Pick<FieldProps, "label" | "validationMessage" | "validationState">