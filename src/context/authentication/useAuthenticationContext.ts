import React from "react";
import { authenticationContext, AuthenticationContext } from "./AuthenticationContext";

export default function useAuthenticationContext(): AuthenticationContext {
    const context = React.useContext(authenticationContext);
    if (!context) throw new Error("9f32adad-5758-4a88-b429-e1aa34d5960a");
    return context;
}