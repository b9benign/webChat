import { makeStyles, tokens } from "@fluentui/react-components";
import GlobalChatCard from "../../components/example-cards/GlobalChatCard";
import Page from "../../components/page/Page";

export default function ChatsOverviewPage(): React.JSX.Element {

    const { componentWrapper, sectionWrapper } = useStyles();

    return (
        <Page documentTitle="Overview of Chats">
            <div className={componentWrapper}>
                <div className={sectionWrapper}>
                    <h1>Global Chats</h1>
                    <div style={{ maxWidth: "500px" }}>
                        <GlobalChatCard />
                    </div>
                </div>
                <div className={sectionWrapper}>
                    <h1>Group Chats</h1>
                </div>
                <div className={sectionWrapper}>
                    <h1>Individual Chats</h1>
                </div>
            </div>
        </Page>
    )
}

const useStyles = makeStyles({
    componentWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingHorizontalXXL
    },
    sectionWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingHorizontalM
    }
})