import { AvatarProps, PersonaProps } from "@fluentui/react-components";

export type PersonaProperties = Pick<PersonaProps, 
    | "className"
    | "name"
    | "presence"
    | "secondaryText"
    | "textPosition"
> & Pick<AvatarProps, 
    | "size"
> & {
    photoUrl: string | null
}