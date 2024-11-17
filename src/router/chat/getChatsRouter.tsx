import React from "react";
import { Outlet, Route } from "react-router-dom";
import ChatPage from "../../pages/chats/ChatPage";
import { CHATS_CHAT_ID, CHATS_OVERVIEW, CHATS_ROOT } from "./chatRouterConstants";
import NotFoundPage from "../../pages/not-found/NotFoundPage";
import ChatsOverviewPage from "../../pages/chats/ChatsOverviewPage";

export default function getChatsRouter(): React.JSX.Element {
    return (
        <Route path={CHATS_ROOT} element={<Outlet />}>
            <Route path={CHATS_OVERVIEW} element={<ChatsOverviewPage />} />
            <Route path={CHATS_CHAT_ID} element={<ChatPage />} />
            <Route path="" element={<NotFoundPage />} />
        </Route>
    )
}