import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

export default function Router(): React.JSX.Element {

    //TODO: react-router-dom
    //!isAuthenticated ? LoginPage : RequestedPage

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}