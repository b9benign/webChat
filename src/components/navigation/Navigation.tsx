import { makeStyles } from "@fluentui/react-components";
import React from "react";


const useStyles = makeStyles({
    navigationWrapper: {
        border: "1px solid green"
    }
});

export default function Navigation(): React.JSX.Element {

    const { navigationWrapper } = useStyles();

    //implement FluentUI Nav (settings [mode, theme, perhaps font for the boomers], logout, OV of user-props)

    return (
        <div className={navigationWrapper}>
            nav
        </div>
    )
}