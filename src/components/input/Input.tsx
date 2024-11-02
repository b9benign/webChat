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
                name={properties.name}
                onChange={properties.onChange}
                placeholder={properties.placeholder}
                type={properties.type ?? "text"}
                value={properties.value}
            />
        </Field>
    )
}