import { AvatarProps, PersonaProps } from "@fluentui/react-components";

export type PersonaProperties = Pick<PersonaProps, 
    | "className"
    | "name"
    | "onClick"
    | "presence"
    | "secondaryText"
    | "textPosition"
> & Pick<AvatarProps, 
    | "size"
> & {
    photoUrl: string | null
}