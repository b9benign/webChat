import { User, UserCredential } from "firebase/auth"
import { FirestoreUser } from "../utility/FirestoreUser"
import { FirestoreChat } from "../utility/FirestoreChat"

export type FirebaseFunctions = {
    //auth
    signInWithEmailAndPassword(args: { email: string, password: string }): Promise<void>,
    signInWithGooglePopup(): Promise<void>,
    signUpWithEmailAndPassword(args: { email: string, displayName: string, password: string }): Promise<void>,
    signOut(): Promise<void>
    
    //db -> users
    createUserDocument(args: { userCredential: UserCredential, displayName?: string }): Promise<void>,
    getUserDocument(args: { uid: User["uid"] }): Promise<null | FirestoreUser>

    //db -> chats & messages
    addUserToChat(args: { chatId: string, uid: User["uid"]} ): Promise<void>,
    getChatDocument(args: {chatId: FirestoreChat["id"] }): Promise<null | FirestoreChat>,

}