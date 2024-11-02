import React from "react";
import { Input as FluentInput, Field } from "@fluentui/react-components";
import { InputProperties } from "./InputProperties";

export default function Input(properties: InputProperties): React.JSX.Element {

    return (
        <Field
            label={properties.label}
        >
            <FluentInput 
                appearance={properties.appearance}
                contentAfter={properties.contentAfter}
                contentBefore={properties.contentBefore}
                type={properties.type ?? "text"}
                value={properties.value}
            />
        </Field>
    )
}