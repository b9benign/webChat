import firebase from "firebase/compat/app";
import { FirestoreUser } from "./FirestoreUser";

export type FirestoreMessage = {
    authorId: FirestoreUser["uid"],
    content: string,
    createdAt: firebase.firestore.Timestamp,
    id: string,
}