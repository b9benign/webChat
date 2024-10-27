import React from "react"

export type AuthenticationContext = {}

export const authenticationContext = React.createContext<AuthenticationContext | null>(null);