import { makeStyles } from "@fluentui/react-components";
import React from "react";


const useStyles = makeStyles({
    applicationWrapper: {
        minHeight: "100vh",
        minWidth: "100vw",
    }
})

export default function ApplicationContentWrapper(properties: React.PropsWithChildren): React.JSX.Element {

    const { applicationWrapper } = useStyles();

    return (
        <div className={applicationWrapper}>
            {properties.children}
        </div>
    )
}