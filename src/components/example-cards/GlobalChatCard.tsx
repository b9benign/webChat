import { Body1, Caption1, Card, CardFooter, CardHeader, CardPreview, makeStyles, tokens } from "@fluentui/react-components";
import { ArrowReplyRegular, Globe20Regular } from "@fluentui/react-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import globeImage from "../../assets/kyle-glenn-globe.jpg";
import generateChatRoutePath from "../../router/chat/generate-functions/generateChatRoutePath";
import useFirebaseFunctions from "../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreChat } from "../../services/firebase/utility/FirestoreChat";
import Button from "../button/Button";
import formatDate from "../chat/formatDate";

export default function GlobalChatCard(): React.JSX.Element {

    const { getChatDocument } = useFirebaseFunctions();
    const navigate = useNavigate();

    const [chat, setChat] = React.useState<FirestoreChat | null>(null);
    const { cardImageStyles, cardStyles, cardPreviewStyles, lastMessageStyles } = useStyles();


    React.useEffect(() => {
        const fetchChatDocument = async () => {
            const result = await getChatDocument({ chatId: "global" });
            setChat(result);
        }
        fetchChatDocument();
    }, []);

    const confineString = (lengthTo: number, string?: string | null): string => {
        if (!string || string.trim().length === 0) return "";
        if (string.length <= lengthTo) return string;
        const temp = string.substring(0, lengthTo);
        return `${temp}...`;
    }

    return (
        <Card className={cardStyles}>
            <CardHeader
                image={<Globe20Regular />}
                header={<Body1>{chat?.name}</Body1>}
                description={<Caption1> Last message at {formatDate(chat?.lastMessageAt ?? null)} </Caption1>}
            />
            <CardPreview className={cardPreviewStyles}>
                <img className={cardImageStyles} src={globeImage} alt="Image of a globe by Kyle Glenn" />
                <div className={lastMessageStyles}>'{confineString(30, chat?.lastMessage)}'</div>
            </CardPreview>
            <CardFooter>
                <Button icon={<ArrowReplyRegular fontSize={16} />} onClick={() => navigate(generateChatRoutePath("global"))}>Reply</Button>
            </CardFooter>
        </Card>
    )
}

const useStyles = makeStyles({
    cardStyles: {
        width: "100%",
        maxWidth: "500px"
    },
    cardPreviewStyles: {
        position: "relative",
        minHeight: "200px"
    },
    cardImageStyles: {
        objectFit: "cover",
        filter: "saturate(0.3)",
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        opacity: 0.3
    },
    lastMessageStyles: {
        zIndex: 5,
        position: "relative",
        padding: tokens.spacingHorizontalL,
        background: tokens.colorNeutralBackgroundAlpha,
        fontSize: tokens.fontSizeBase500
    }
})