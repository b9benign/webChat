import { makeStyles } from "@fluentui/react-components";
import React from "react";


const useStyles = makeStyles({
    navigationWrapper: {
        border: "1px solid green"
    }
});

export default function Navigation(): React.JSX.Element {

    const { navigationWrapper } = useStyles();

    //implement Firebase & noSQL Firestore
    //TODO: leverage useAuthenticationContext() for User, isAuthenticated etc.
    //implement FluentUI Nav (settings, logout, OV of user-props)

    return (
        <div className={navigationWrapper}>
            nav
        </div>
    )
}