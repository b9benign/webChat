import { User, UserCredential } from "firebase/auth"
import { FirestoreUser } from "../utility/FirestoreUser"

export type FirebaseFunctions = {
    //auth
    signInWithEmailAndPassword(args: { email: string, password: string }): Promise<void>,
    signInWithGooglePopup(): Promise<void>,
    signUpWithEmailAndPassword(args: { email: string, displayName: string, password: string }): Promise<void>,
    signOut(): Promise<void>
    
    //db
    createUserDocument(args: { userCredential: UserCredential, displayName?: string }): Promise<void>,
    getUserDocument(args: { uid: User["uid"] }): Promise<void | FirestoreUser>
}