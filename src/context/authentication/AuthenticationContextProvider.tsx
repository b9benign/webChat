import React from "react";
import { authenticationContext } from "./AuthenticationContext";


export default function AuthenticationContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const value = {};
    
    return (
        <authenticationContext.Provider value={value}>
            {properties.children}
        </authenticationContext.Provider>
    )
}