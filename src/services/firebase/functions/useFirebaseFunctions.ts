import { createUserWithEmailAndPassword, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signOut as fireBaseSignOut, signInWithPopup } from "firebase/auth";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseInitializer from "../initializer/useFirebaseInitializer";
import { FirebaseFunctions } from "./FirebaseFunctions";

export default function useFirebaseFunctions(): FirebaseFunctions {

    const { firebase, provider } = useFirebaseInitializer();
    const { dispatchSuccess, dispatchError } = useToastContext();

    const signInWithGooglePopup: FirebaseFunctions["signInWithGooglePopup"] = async () => {
        try {
            const result = await signInWithPopup(firebase, provider);
            dispatchSuccess({ primaryContent: `Signed in as ${result.user.displayName}` });
        } catch (e: any) {
            dispatchError({ primaryContent: "Login has failed. Code 155dfa48-6339-47e0-96f7-f28205a3a866" });
            console.error(e);
        }
    };

    const signOut: FirebaseFunctions["signOut"] = async () => {
        try {
            await fireBaseSignOut(firebase);
            window.location.reload();
        } catch (e: any) {
            dispatchError({ primaryContent: "Login has failed. Code 23925f57-5467-4ec7-ae60-31e9f7e9cbde" });
            console.error(e);
        }
    }

    const signUpWithEmailAndPassword: FirebaseFunctions["signUpWithEmailAndPassword"] = async ({ email, password }) => {
        if (!email || !password) {
            dispatchError({ primaryContent: "Invalid credentials. Please provide an email and a password. Code 3f00d231-b6f9-4791-bbbe-6d2abdc926df" });
            return;
        }
        try {
            await createUserWithEmailAndPassword(firebase, email, password);
            dispatchSuccess({ primaryContent: "Account created successfully!" });
        } catch (e: any) {
            dispatchError({ primaryContent: "Account creation has failed. Code 9768677f-382c-472f-be1e-7e5f97c6aac2" });
            console.error(e);
        }
    }

    const signInWithEmailAndPassword: FirebaseFunctions["signInWithEmailAndPassword"] = async ({ email, password }) => {
        if (!email || !password) {
            dispatchError({ primaryContent: "Invalid credentials. Please provide an email and a password. Code 04da9b24-9d14-4503-a029-11c5b681e7e8" });
            return;
        }
        try {
            const result = await firebaseSignInWithEmailAndPassword(firebase, email, password);
            dispatchSuccess({ primaryContent: `Signed in as ${result.user.displayName}` });
        } catch (e: any) {
            dispatchError({ primaryContent: "Login has failed. Code 04da9b24-9d14-4503-a029-11c5b681e7e8" });
            console.error(e);
        }
    }

    //TODO: firestore integration for sign-ups and user-doc creation

    return {
        signInWithGooglePopup,
        signInWithEmailAndPassword,
        signOut,
        signUpWithEmailAndPassword,
    };
}