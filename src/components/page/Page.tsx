import { makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import Navigation from "../navigation/Navigation";
import { PageProperties } from "./PageProperties";
import useThemeContext from "../../context/theme/useThemeContext";

import bluePic from "../../assets/kouji-tsuru-blue.jpg";
import orangePic from "../../assets/johannes-plenio-orange.jpg";
import greenPic from "../../assets/paul-green-green.jpg";
import purplePic from "../../assets/nabajyoti-ray-purple.jpg";

export default function Page(properties: React.PropsWithChildren<PageProperties>): React.JSX.Element {

    const { pageWrapper, contentWrapper, backgroundWrapper } = useStyles();
    const { theme } = useThemeContext();

    React.useEffect(() => {
        const unsubscribe = () => {
            document.title = properties.documentTitle;
        }
        return unsubscribe;
    }, [properties.documentTitle]);

    const backgroundSource = React.useMemo<{ src: string, alt: string }>(() => {
        switch (theme) {
            case "blue": return { src: bluePic, alt: "Background picture by Kouji Tsuru" };
            case "green": return { src: greenPic, alt: "Background picture by Paul Green" };
            case "orange": return { src: orangePic, alt: "Background picture by Johannes Plenio" };
            case "purple": return { src: purplePic, alt: "background picture by Nabajyoti Ray" };
        }
    }, [theme]);

    return (
        <div className={pageWrapper}>
            <Navigation />
            <img src={backgroundSource.src} alt={backgroundSource.alt} className={backgroundWrapper} />
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
        background: tokens.colorNeutralBackgroundAlpha2,
        padding: tokens.spacingHorizontalL,
        borderRadius: tokens.borderRadiusLarge,
        boxShadow: tokens.shadow16Brand
    },
    backgroundWrapper: {
        height: "37vh",
        width: "100%",
        position: "fixed",
        zIndex: 0,
        objectFit: "cover"
    }
})