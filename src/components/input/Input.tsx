import React from "react";
import { Input as FluentInput, Field } from "@fluentui/react-components";
import { InputProperties } from "./InputProperties";

export default function Input(properties: InputProperties): React.JSX.Element {

    return (
        <Field
            label={properties.label}
            validationMessage={properties.validationMessage}
            validationState={properties.validationState}
            required={properties.required}
        >
            <FluentInput 
                appearance={properties.appearance}
                contentAfter={properties.contentAfter}
                contentBefore={properties.contentBefore}
                name={properties.name}
                onBlur={properties.onBlur}
                onChange={properties.onChange}
                placeholder={properties.placeholder}
                required={properties.required}
                type={properties.type ?? "text"}
                value={properties.value}
            />
        </Field>
    )
}