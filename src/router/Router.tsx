import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import useAuthenticationContext from "../context/authentication/useAuthenticationContext";
import TestPage from "../pages/test/TestPage";

export default function Router(): React.JSX.Element {

    const { userCredentials } = useAuthenticationContext();

    return (
        <BrowserRouter>
            <Routes>
                {
                    userCredentials
                        ? <Route path="*" element={<TestPage />} />
                        : <Route path="*" element={<LoginPage />} />
                }
            </Routes>
        </BrowserRouter>
    )
}