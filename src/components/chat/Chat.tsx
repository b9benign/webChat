import { makeStyles, tokens } from "@fluentui/react-components";
import { Send20Regular } from "@fluentui/react-icons";
import React from "react";
import useAuthenticationContext from "../../context/authentication/useAuthenticationContext";
import useToastContext from "../../context/toast/useToastContext";
import useFirebaseFunctions from "../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreMessage } from "../../services/firebase/utility/FirestoreMessage";
import Input from "../input/Input";
import { ChatProperties } from "./ChatProperties";
import ChatMessage from "./chat-message/ChatMessage";

export default function Chat(properties: ChatProperties): React.JSX.Element {

    const { dispatchInfo, dispatchError } = useToastContext();
    const { postMessage } = useFirebaseFunctions();
    const { user } = useAuthenticationContext();

    const { chatWrapper, chatWindowStyles, inputStyles, alignRight, alignLeft } = useStyles();
    const { chatId } = properties;

    const [messages, setMessages] = React.useState<FirestoreMessage[]>([]);
    const { monitorChatMessages } = useFirebaseFunctions();
    const [value, setValue] = React.useState<string>("");
    const [sending, setSending] = React.useState<boolean>(false);

    React.useEffect(() => {
        const unsubscribe = monitorChatMessages({ chatId, setMessages });
        return unsubscribe;
    }, [chatId]);

    const handleSend = async () => {
        if (value.trim().length <= 2) {
            dispatchInfo({ primaryContent: "Messages must be more than 2 characters." });
            return;
        }
        if (!user) {
            dispatchError({ primaryContent: "Error in user logon. Code 4598fa78-a2a1-4c21-84c4-3eaa61f2629f" });
            return;
        }
        try {
            setSending(true);
            await postMessage({ chatId: properties.chatId, message: { authorId: user?.uid, content: value } });
            setValue("");
        } catch (e: unknown) {
            dispatchError({ primaryContent: "Error sending message (FE). Code b28f4d53-91a3-4e06-bf4a-2355d4cf516a" });
            console.error(e);
        } finally {
            setSending(false);
        }
    }

    const authorIsCurrentUser = React.useCallback<(authorId: string) => boolean>((authorId) => authorId === user?.uid, [user]);

    return (
        <div className={chatWrapper}>
            <div className={chatWindowStyles}>
                {messages.map((msg, index) => {
                    return (
                        <div className={authorIsCurrentUser(msg.authorId) ? alignRight : alignLeft} key={index}>
                            <ChatMessage message={msg} authorIsCurrentUser={authorIsCurrentUser(msg.authorId)} />
                        </div>
                    );
                })}
            </div>
            <Input
                contentAfter={<Send20Regular onClick={handleSend} />}
                className={inputStyles}
                appearance="underline"
                placeholder="Say something nice"
                value={value}
                onChange={({ currentTarget }) => setValue(currentTarget.value)}
                disabled={sending}
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
        backgroundColor: tokens.colorNeutralBackground2,
        borderRadius: tokens.borderRadiusLarge,
        overflowY: "auto",
        padding: tokens.spacingHorizontalS,
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingHorizontalS
    },
    inputStyles: {
        height: "auto",
        width: "100%"
    },
    alignRight: {
        width: "100%",
        display: "flex",
        justifyContent: "right"
    },
    alignLeft: {
        width: "100%",
        display: "flex",
        justifyContent: "left"
    },
})