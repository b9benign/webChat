import React from "react";
import { useParams } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import Page from "../../components/page/Page";

export default function ChatPage(): React.JSX.Element {

    const { chatId } = useParams();
    if (!chatId) throw new Error("51f90f3c-c782-4914-9726-cc0b855f9de4");

    return (
        <Page documentTitle={"Chat"}>
            <Chat chatId={chatId} />
        </Page>
    )
}