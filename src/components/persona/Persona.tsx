import { Persona as FluentPersona, makeStyles, mergeClasses } from "@fluentui/react-components";
import React from "react";
import { PersonaProperties } from "./PersonaProperties";

export default function Persona(properties: PersonaProperties): React.JSX.Element {

    const { personaStyles } = useStyles();

    return (
        <FluentPersona
            avatar={{
                image: { src: properties.photoUrl ?? undefined, role: "img" },
                color: "colorful",
                size: properties.size ?? 32
            }}
            className={mergeClasses(personaStyles, properties.className)}
            name={properties.name}
            onClick={properties.onClick}
            presence={properties.presence}
            secondaryText={properties.secondaryText}
            textAlignment="center"
            textPosition={properties.textPosition ?? "after"}
        />
    )
}

const useStyles = makeStyles({
    personaStyles: {
        cursor: "pointer",
        position: "relative",
    }
})