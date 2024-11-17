import { createUserWithEmailAndPassword, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, signOut as fireBaseSignOut, signInWithPopup, Unsubscribe } from "firebase/auth";
import { arrayUnion, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseInitializer from "../initializer/useFirebaseInitializer";
import { FirestoreChat } from "../utility/FirestoreChat";
import { FirestoreMessage } from "../utility/FirestoreMessage";
import { FirestoreUser } from "../utility/FirestoreUser";
import { FirebaseFunctions } from "./FirebaseFunctions";

export default function useFirebaseFunctions(): FirebaseFunctions {

    const { firebase, provider, firestore } = useFirebaseInitializer();
    const { dispatchSuccess, dispatchError } = useToastContext();

    //authentication
    const signInWithGooglePopup: FirebaseFunctions["signInWithGooglePopup"] = async () => {
        try {
            const result = await signInWithPopup(firebase, provider);
            createUserDocument({ userCredential: result });
            dispatchSuccess({ primaryContent: `Signed in as ${result.user.displayName}` });
        } catch (e: unknown) {
            dispatchError({ primaryContent: "Login has failed. Code 155dfa48-6339-47e0-96f7-f28205a3a866" });
            console.error(e);
        }
    };

    const signOut: FirebaseFunctions["signOut"] = async () => {
        try {
            await fireBaseSignOut(firebase);
            window.location.reload();
        } catch (e: unknown) {
            dispatchError({ primaryContent: "Login has failed. Code 23925f57-5467-4ec7-ae60-31e9f7e9cbde" });
            console.error(e);
        }
    }

    const signUpWithEmailAndPassword: FirebaseFunctions["signUpWithEmailAndPassword"] = async ({ email, displayName, password }) => {
        if (!email || !password || !displayName) {
            dispatchError({ primaryContent: "Invalid credentials. Please provide an email and a password. Code 3f00d231-b6f9-4791-bbbe-6d2abdc926df" });
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(firebase, email, password);
            await createUserDocument({ userCredential: result, displayName });
        } catch (e: unknown) {
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
        } catch (e: unknown) {
            dispatchError({ primaryContent: "Login has failed. Code 04da9b24-9d14-4503-a029-11c5b681e7e8" });
            console.error(e);
        }
    }

    //database integration
    //users
    const createUserDocument: FirebaseFunctions["createUserDocument"] = async ({ userCredential, displayName }) => {
        const { user } = userCredential;
        const documentReference = doc(firestore, 'users', user.uid);
        const documentSnapshot = await getDoc(documentReference);

        if (!documentSnapshot.exists()) {
            try {
                await setDoc(documentReference, {
                    createdAt: user.metadata.creationTime,
                    displayName: user.displayName ?? displayName ?? null,
                    email: user.email,
                    photoUrl: user.photoURL,
                    uid: user.uid
                } satisfies FirestoreUser);
                dispatchSuccess({ primaryContent: "Account created successfully!" });
                addUserToChat({ chatId: "global", uid: user.uid });
            } catch (e: unknown) {
                dispatchError({ primaryContent: "Database error upon account creation. Code a9304444-cbc7-4c61-aaa0-9edbf77477fd" });
                console.error(e);
            }
        }
    }

    const getUserDocument: FirebaseFunctions["getUserDocument"] = async ({ uid }) => {
        const documentReference = doc(firestore, 'users', uid);
        const documentSnapshot = await getDoc(documentReference);

        if (!documentSnapshot.exists()) {
            dispatchError({ primaryContent: "An error occured retrieving your user profile. Code c19f6203-c410-4228-9530-75a5747d8ceb" });
            return null;
        }

        return documentSnapshot.data() as FirestoreUser;
    }

    const getChatDocument: FirebaseFunctions["getChatDocument"] = React.useCallback(async ({ chatId }) => {
        const chatReference = doc(firestore, "chats", chatId);
        const chatSnapshot = await getDoc(chatReference);

        if (!chatSnapshot.exists()) {
            dispatchError({ primaryContent: `Chat with id '${chatId}' could not be found. Code 65dbbeb9-8546-4cb7-954f-6eb2ba957d4c` });
            return null;
        }

        return chatSnapshot.data() as FirestoreChat;
    }, [firestore, dispatchError]);

    const addUserToChat: FirebaseFunctions["addUserToChat"] = async ({ chatId, uid }) => {
        const chatReference = doc(firestore, "chats", chatId);
        const chatSnapshot = await getDoc(chatReference);

        if (!chatSnapshot.exists()) {
            dispatchError({ primaryContent: `Chat with id '${chatId}' could not be found. Code c8555154-9d91-407c-97af-3948a9b463c1` });
            return;
        };

        const chatData = chatSnapshot.data() as FirestoreChat;
        const chatMembers: FirestoreChat["members"] = chatData.members;
        if (!chatMembers.includes(uid)) {
            try {
                await updateDoc(chatReference, {
                    members: arrayUnion(uid)
                })
                dispatchSuccess({ primaryContent: `Successfully added user to chat ${chatData.name}` });
            } catch (e: unknown) {
                dispatchError({ primaryContent: `User could not be added to chat ${chatData.name}. Code 835168b8-99c0-469d-b1fd-f9a440278103` });
                console.error(e);
            }
        }
    }

    const monitorChatMessages: FirebaseFunctions["monitorChatMessages"] = React.useCallback(({ chatId, setLoading, setMessages }) => {
        const messagesReference = collection(firestore, "chats", chatId, "messages");
        const queryOptions = query(messagesReference, orderBy("createdAt", "asc"));

        const unsubscribe: Unsubscribe = onSnapshot(queryOptions, (querySnapshot) => {
            const newMessages: FirestoreMessage[] = [];
            querySnapshot.forEach((doc) => {
                newMessages.push(doc.data() as FirestoreMessage);
            });
            setMessages(newMessages);
            setLoading(false);
        },
            (error) => {
                dispatchError({ primaryContent: "Error loading messages. Code 8c08177b-6872-45ac-a8dd-006b3074889e" });
                console.error(error.message);
                setLoading(false);
            }
        );

        return unsubscribe;
    }, [firestore, dispatchError]);



    return {
        signInWithGooglePopup,
        signInWithEmailAndPassword,
        signOut,
        signUpWithEmailAndPassword,

        createUserDocument,
        getUserDocument,

        addUserToChat,
        getChatDocument,
        monitorChatMessages
    };
}