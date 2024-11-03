import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import useAuthenticationContext from "../context/authentication/useAuthenticationContext";
import NotFoundPage from "../pages/not-found/NotFoundPage";

export default function Router(): React.JSX.Element {

    const { userCredentials } = useAuthenticationContext();

    return (
        <BrowserRouter>
            <Routes>
                {
                    userCredentials
                        ? <Route path="*" element={<NotFoundPage />} />
                        : <Route path="*" element={<LoginPage />} />
                }
            </Routes>
        </BrowserRouter>
    )
}