import React from "react";
import Page from "../../components/page/Page";
import { makeStyles, tokens } from "@fluentui/react-components";

export default function UnderConstructionPage(): React.JSX.Element {

    const { notFoundWrapper, textStyles } = useStyles();

    return (
        <Page documentTitle="Under construction">
            <div className={notFoundWrapper}>
                <div className={textStyles}>
                    This page is current under construction
                </div>
            </div>
        </Page>
    )
}

const useStyles = makeStyles({
    notFoundWrapper: {
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    textStyles: {
        fontSize: tokens.fontSizeHero900,
        fontWeight: tokens.fontWeightRegular,
        margin: "auto",
        color: tokens.colorNeutralForeground2
    }
})