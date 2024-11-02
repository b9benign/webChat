import React from "react";
import { PageProperties } from "./PageProperties";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
    pageWrapper: {
        minHeight: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
    },
    contentWrapper: {
        width: "90%",
        minWidth: "500px",
        minHeight: "100vh",
        border: `1px solid ${tokens.colorBrandForeground1}`,
        margin: "0 auto 0 auto",
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