import React from "react";
import { Button as FluentButton, makeStyles, mergeClasses } from "@fluentui/react-components";
import { ButtonProperties } from "./ButtonProperties";

export default function Button(properties: React.PropsWithChildren<ButtonProperties>): React.JSX.Element {

    const { buttonStyles } = useStyles();

    return (
        <FluentButton
            appearance={properties.appearance}
            className={mergeClasses(buttonStyles, properties.className)}
            icon={properties.icon}
            iconPosition={properties.iconPosition}
            disabled={properties.disabled}
            onClick={properties.onClick}
            size={properties.size}
            type={properties.isSubmitButton ? "submit" : "button"}
        >
            {properties.children}
        </FluentButton>
    )
}

const useStyles = makeStyles({
    buttonStyles: {
        width: "100%",
    }
})