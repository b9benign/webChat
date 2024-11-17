import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Navigation from "../navigation/Navigation";
import { PageProperties } from "./PageProperties";

export default function Page(properties: React.PropsWithChildren<PageProperties>): React.JSX.Element {

    const { pageWrapper, contentWrapper } = useStyles();

    React.useEffect(() => {
        const unsubscribe = () => {
            document.title = properties.documentTitle;
        }
        return unsubscribe;
    }, [properties.documentTitle]);

    return (
        <div className={pageWrapper}>
            <Navigation />
            <div className={contentWrapper}>
                {properties.children}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    pageWrapper: {
        minHeight: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        background: tokens.colorNeutralBackground1,
    },
    contentWrapper: {
        width: "90%",
        minWidth: "300px",
        minHeight: "calc(100vh - 70px)",
        margin: "70px auto 0 auto",
        position: "relative",
    }
})