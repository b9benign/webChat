import { Unsubscribe, User, UserCredential } from "firebase/auth"
import { FirestoreUser } from "../utility/FirestoreUser"
import { FirestoreChat } from "../utility/FirestoreChat"
import { FirestoreMessage } from "../utility/FirestoreMessage"

export type FirebaseFunctions = {
    //auth
    signInWithEmailAndPassword(args: { email: string, password: string }): Promise<void>,
    signInWithGooglePopup(): Promise<void>,
    signUpWithEmailAndPassword(args: { email: string, displayName: string, password: string }): Promise<void>,
    signOut(): Promise<void>
    
    //db -> users
    createUserDocument(args: { userCredential: UserCredential, displayName?: string }): Promise<void>,
    getUserDocument(args: { uid: User["uid"] }): Promise<FirestoreUser | null>

    //db -> chats & messages
    addUserToChat(args: { chatId: string, uid: User["uid"]} ): Promise<void>,
    getChatDocument(args: {chatId: FirestoreChat["id"] }): Promise<FirestoreChat | null>,
    monitorChatMessages(args: { chatId: FirestoreChat["id"], setMessages: React.Dispatch<React.SetStateAction<FirestoreMessage[]>> }): Unsubscribe
    postMessage(args: { chatId: FirestoreChat["id"], message: Omit<FirestoreMessage, "createdAt" | "id"> }): Promise<void>,
    deleteMessage(args: { chatId: FirestoreChat["id"], messageId: FirestoreMessage["id"] }): Promise<void>
}