import { ButtonProps } from "@fluentui/react-components";

export type ButtonProperties = Pick<ButtonProps,
    | "appearance"
    | "className"
    | "disabled"
    | "icon"
    | "iconPosition"
    | "size"
> & {
    onClick?(): void,
}