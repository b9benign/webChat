import { Field, Input as FluentInput, makeStyles } from "@fluentui/react-components";
import React from "react";
import { InputProperties } from "./InputProperties";

export default function Input(properties: InputProperties): React.JSX.Element {

    const { nodeStyles } = useStyles();

    const nodeAfter = React.useMemo(() => {
        if (!properties.contentAfter) return null;
        return (
            <div className={nodeStyles}>
                <>{properties.contentAfter}</>
            </div>
        )
    }, [properties.contentAfter]);

    const nodeBefore = React.useMemo(() => {
        if (!properties.contentBefore) return null;
        return (
            <div className={nodeStyles}>
                <>{properties.contentBefore}</>
            </div>
        )
    }, [properties.contentBefore]);

    return (
        <Field
            label={properties.label}
            validationMessage={properties.validationMessage}
            validationState={properties.validationState}
            required={properties.required}
            className={properties.className}
        >
            <FluentInput
                appearance={properties.appearance}
                contentAfter={nodeAfter}
                contentBefore={nodeBefore}
                name={properties.name}
                onBlur={properties.onBlur}
                onChange={properties.onChange}
                placeholder={properties.placeholder}
                required={properties.required}
                type={properties.type ?? "text"}
                value={properties.value}
                autoComplete="on"
            />
        </Field>
    )
}

const useStyles = makeStyles({
    nodeStyles: {
        cursor: "pointer",
        paddingTop: "4px"
    }
})