import { UserCredential } from "firebase/auth";
import React from "react";

export type AuthenticationContext = {
    signInWithProvider(): Promise<void>,
    user: UserCredential | null
}

export const authenticationContext = React.createContext<AuthenticationContext | null>(null);