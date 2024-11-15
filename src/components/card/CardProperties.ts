import { CardHeaderProps } from "@fluentui/react-components";

export type CardProperties = {
    header: CardHeaderProps["header"],
    description: CardHeaderProps["description"],
    onClick(): void,
    image?: CardHeaderProps["image"],
    backgroundImage?: string,
}