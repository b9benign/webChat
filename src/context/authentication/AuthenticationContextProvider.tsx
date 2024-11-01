import { UserCredential } from "firebase/auth";
import React from "react";
import { authenticationContext } from "./AuthenticationContext";


export default function AuthenticationContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const [user, setUser] = React.useState<UserCredential | null>(null);
    
    //TODO: create Firebase ServiceLayer
    //only register currentAuth in this context
    //implement authStateChangedListener ->>> here, via useEffect
    //tailwind??

    const value = {
        user
    };
    
    return (
        <authenticationContext.Provider value={value}>
            {properties.children}
        </authenticationContext.Provider>
    )
}