import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import useAuthenticationContext from "../context/authentication/useAuthenticationContext";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import getChatsRouter from "./chat/getChatsRouter";

export default function Router(): React.JSX.Element {

    const { user: userCredentials } = useAuthenticationContext();

    return (
        <BrowserRouter>
            <Routes>
                {!userCredentials && <Route path="*" element={<LoginPage />}/>}
                {getChatsRouter()}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}