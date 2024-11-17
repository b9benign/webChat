import firebase from "firebase/compat/app"

export type FirestoreChat = {
    createdAt: firebase.firestore.Timestamp,
    id: string,
    lastMessage: string | null,
    lastMessageAt: firebase.firestore.Timestamp | null,
    members: string[],
    name: string
}