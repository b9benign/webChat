import { makeStyles } from "@fluentui/react-components";
import React from "react";
import useFirebaseFunctions from "../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreMessage } from "../../services/firebase/utility/FirestoreMessage";
import { ChatProperties } from "./ChatProperties";

export default function Chat(properties: ChatProperties): React.JSX.Element {

    const { chatWrapper } = useStyles();
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

        </div>
    )
}

const useStyles = makeStyles({
    chatWrapper: {
        minHeight: "100px",
        width: "100%",
        border: "1px solid red"
    }
})