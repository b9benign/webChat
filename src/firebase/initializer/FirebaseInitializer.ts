import { Auth, GoogleAuthProvider } from "firebase/auth"
import { Firestore } from "firebase/firestore"

export type FirebaseInitializer = {
    firebase: Auth,
    firestore: Firestore,
    provider: GoogleAuthProvider,
}