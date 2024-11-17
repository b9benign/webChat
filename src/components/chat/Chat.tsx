import { makeStyles, tokens } from "@fluentui/react-components";
import { Send20Regular } from "@fluentui/react-icons";
import React from "react";
import useFirebaseFunctions from "../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreMessage } from "../../services/firebase/utility/FirestoreMessage";
import Input from "../input/Input";
import { ChatProperties } from "./ChatProperties";

export default function Chat(properties: ChatProperties): React.JSX.Element {

    const { chatWrapper, chatWindowStyles, inputStyles } = useStyles();
    const { chatId } = properties;

    const [messages, setMessages] = React.useState<FirestoreMessage[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const { monitorChatMessages } = useFirebaseFunctions();

    React.useEffect(() => {
        const unsubscribe = monitorChatMessages({ chatId, setMessages, setLoading });
        return unsubscribe;
    }, [chatId]);

    React.useEffect(() => {
        console.log("messages: ", messages)
        console.log("loading: ", loading)
    }, [messages]);

    return (
        <div className={chatWrapper}>
            <div className={chatWindowStyles}></div>
            <Input
                contentAfter={<Send20Regular />}
                className={inputStyles}
                appearance="underline"
                placeholder="Say something nice"
            />
        </div>
    )
}

const useStyles = makeStyles({
    chatWrapper: {
        minHeight: "calc(100vh - 90px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: tokens.colorNeutralBackground3,
        gap: tokens.spacingHorizontalS,
        padding: tokens.spacingHorizontalS,
        borderRadius: tokens.borderRadiusLarge,
        boxShadow: tokens.shadow8Brand
    },
    chatWindowStyles: {
        minHeight: "76%",
        flexGrow: 1,
        backgroundColor: tokens.colorNeutralBackground1,
        borderRadius: tokens.borderRadiusLarge
    },
    inputStyles: {
        height: "auto",
        width: "100%"
    }
})