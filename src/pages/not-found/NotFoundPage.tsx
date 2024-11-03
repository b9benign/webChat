import { makeStyles, tokens } from "@fluentui/react-components";
import Page from "../../components/page/Page";

export default function TestPage(): React.JSX.Element {

    const { notFoundWrapper, textStyles } = useStyles();

    return (
        <Page
            documentTitle="Page not found"
        >
            <div className={notFoundWrapper}>
                <div className={textStyles}>
                    404 | Page not found
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