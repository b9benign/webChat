import React from "react";
import { Outlet, Route } from "react-router-dom";
import GlobalChatPage from "../../pages/chats/GlobalChatPage";
import GroupChatsPage from "../../pages/chats/GroupChatsPage";
import IndividualChatsPage from "../../pages/chats/IndividualChatsPage";
import { CHATS_GLOBAL, CHATS_GROUPS, CHATS_INDIVIDUALS, CHATS_ROOT } from "./chatRouterConstants";

export default function getChatsRouter(): React.JSX.Element {
    return (
        <Route path={CHATS_ROOT} element={<Outlet />}>
            <Route path={CHATS_GLOBAL} element={<GlobalChatPage />} />
            <Route path={CHATS_GROUPS} element={<GroupChatsPage />} />
            <Route path={CHATS_INDIVIDUALS} element={<IndividualChatsPage />} />
        </Route>
    )
}