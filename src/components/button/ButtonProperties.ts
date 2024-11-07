import { ButtonProps } from "@fluentui/react-components";

export type ButtonProperties = Pick<ButtonProps,
    | "appearance"
    | "as"
    | "className"
    | "disabled"
    | "icon"
    | "iconPosition"
    | "size"
> & {
    isSubmitButton?: boolean
    onClick?(): void,
}