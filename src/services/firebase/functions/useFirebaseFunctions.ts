import { signInWithPopup } from "firebase/auth";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseInitializer from "../initializer/useFirebaseInitializer";
import { FirebaseFunctions } from "./FirebaseFunctions";
import { signOut as fireBaseSignOut } from "firebase/auth";

export default function useFirebaseFunctions(): FirebaseFunctions {

    const { firebase, provider } = useFirebaseInitializer();
    const { dispatchSuccess, dispatchError } = useToastContext();

    async function signInWithGooglePopup() {
		try {
			const result = await signInWithPopup(firebase, provider);
			dispatchSuccess({ primaryContent: `Signed in as ${result.user.displayName}`, title: undefined });
		} catch (e: any) {
			dispatchError({ primaryContent: "The login attempt has failed. Code 155dfa48-6339-47e0-96f7-f28205a3a866", title: undefined });
		}
	};

    async function signOut() {
        try {
            await fireBaseSignOut(firebase);
            window.location.reload();
        } catch (e: any) {
            dispatchError({ primaryContent: `An error occured signing you out. Error code: ${e}`, title: undefined });
        }
    }

    return {
        signInWithGooglePopup,
        signInWithEmailAndPassword: async () => {},
        signOut,
        signUpWithEmailAndPassword: async () => {},
      
    };
}