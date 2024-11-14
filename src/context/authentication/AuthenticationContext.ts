import React from "react";
import { FirestoreUser } from "../../services/firebase/utility/FirestoreUser";

export type AuthenticationContext = {
    user: FirestoreUser | null,
}

export const authenticationContext = React.createContext<AuthenticationContext | null>(null);