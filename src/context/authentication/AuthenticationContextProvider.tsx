import React from "react";
import useFirebaseInitializer from "../../firebase/initializer/useFirebaseInitializer";
import { onAuthStateChanged, signInWithPopup, User } from "firebase/auth";
import useToastContext from "../toast/useToastContext";
import { authenticationContext } from "./AuthenticationContext";

export default function AuthenticationContextProvider(properties: React.PropsWithChildren): React.JSX.Element {
    
    const { firebase, provider } = useFirebaseInitializer();
    const { dispatchError, dispatchSuccess } = useToastContext();
    const [userCredentials, setUserCredentials] = React.useState<User | null>(null);

    async function signInWithGooglePopup() {
        try {
          const result = await signInWithPopup(firebase, provider);
          dispatchSuccess({ primaryContent: `Signed in as ${result.user.displayName}`, title: undefined });
        } catch (e: any) {
          dispatchError({ primaryContent: "The login attempt has failed. Code 155dfa48-6339-47e0-96f7-f28205a3a866", title: undefined });
        }
      };

      React.useEffect(() => {
        const unsubscribe = () => {
            return onAuthStateChanged(firebase, (userCredentials) => {
                if (userCredentials) setUserCredentials(userCredentials);
            });
        }
        unsubscribe();
      }, [userCredentials]);

    const value = {
        userCredentials,
        signInWithGooglePopup
    };
    
    return (
        <authenticationContext.Provider value={value}>
            {properties.children}
        </authenticationContext.Provider>
    )
}