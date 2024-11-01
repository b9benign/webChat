import { User } from "firebase/auth";
import React from "react";

export type AuthenticationContext = {
    userCredentials: User | null,
    signInWithGooglePopup(): Promise<void>
}

export const authenticationContext = React.createContext<AuthenticationContext | null>(null);