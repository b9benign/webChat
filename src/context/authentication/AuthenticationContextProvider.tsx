import React from "react";
import { AuthenticationContext, authenticationContext } from "./AuthenticationContext";
import useFirebaseInitializer from "../../firebase/initializer/useFirebaseInitializer";
import { signInWithPopup, UserCredential } from "firebase/auth";


export default function AuthenticationContextProvider(properties: React.PropsWithChildren): React.JSX.Element {

    const { firebase, provider } = useFirebaseInitializer();
    const [user, setUser] = React.useState<UserCredential | null>(null);
    
    //TODO: create Firebase ServiceLayer
    //only register currentAuth in this context
    const signInWithProvider: AuthenticationContext["signInWithProvider"] = async () => {
        try {
            const result = await signInWithPopup(firebase, provider);
            console.log("RESULT: ", result)
            setUser(result);
        } catch (e: any) {
            console.log(e, "155dfa48-6339-47e0-96f7-f28205a3a866");
            setUser(null);
        }
    };

    const value = {
        signInWithProvider,
        user
    };
    
    return (
        <authenticationContext.Provider value={value}>
            {properties.children}
        </authenticationContext.Provider>
    )
}