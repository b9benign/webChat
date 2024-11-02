import React from "react";
import { PageProperties } from "./PageProperties";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
    pageWrapper: {
        minHeight: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        background: tokens.colorNeutralBackground2,
        paddingBottom: tokens.spacingVerticalXXXL
    },
    contentWrapper: {
        width: "90%",
        minWidth: "300px",
        minHeight: "100vh",
        margin: "0 auto 0 auto",
        position: "relative",
    }
})

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
            {/* <Navigation /> */}
            <div className={contentWrapper}>
                 {properties.children}
            </div>
        </div>
    )
}