import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import NavigationMenu from "./navigation-menu/NavigationMenu";
import UserMenu from "./user-menu/UserMenu";

export default function Navigation(): React.JSX.Element {

    const { navigationWrapper, contentWrapper } = useStyles();
    
    return (
        <div className={navigationWrapper}>
            <div className={contentWrapper}>
                <NavigationMenu />
                <UserMenu />
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    navigationWrapper: {
        height: "50px",
        backgroundColor: tokens.colorNeutralBackground1,
        boxShadow: tokens.shadow16,
        position: "fixed",
        width: "100vw"
    },
    contentWrapper: {
        width: "98%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    }
});