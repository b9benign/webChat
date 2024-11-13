import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import useAuthenticationContext from "../context/authentication/useAuthenticationContext";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import getChatsRouter from "./chats/getChatsRouter";
import HomePage from "../pages/home/HomePage";

export default function Router(): React.JSX.Element {

    const { userCredentials } = useAuthenticationContext();

    return (
        <BrowserRouter>
            <Routes>
                {!userCredentials && <Route path="*" element={<LoginPage />}/>}
                {getChatsRouter()}
                {userCredentials && <Route path="/" element={<HomePage />} />}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}