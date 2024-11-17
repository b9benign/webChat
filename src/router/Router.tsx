import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuthenticationContext from "../context/authentication/useAuthenticationContext";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import getChatsRouter from "./chat/getChatsRouter";

export default function Router(): React.JSX.Element {

    const { user } = useAuthenticationContext();

    return (
        <BrowserRouter>
            <Routes>
                {!user && <Route path="*" element={<LoginPage />}/>}
                {getChatsRouter()}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}