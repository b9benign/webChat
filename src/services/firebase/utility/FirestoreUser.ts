import { User } from "firebase/auth"

export type FirestoreUser = {
    createdAt: User["metadata"]["creationTime"],
    displayName: User["displayName"],
    email: User["email"],
    photoUrl: User["photoURL"],
    uid: User["uid"]
}