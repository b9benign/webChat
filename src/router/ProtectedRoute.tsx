import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthenticationContext from "../context/authentication/useAuthenticationContext";

export default function ProtectedRoute(): React.JSX.Element | null {

    const { user } = useAuthenticationContext();
    const navigate = useNavigate();
    if (!user) {
        navigate("", { replace: true });
    }

    return (
        <Outlet />
    );
}