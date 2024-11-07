export type FirebaseFunctions = {
    signInWithEmailAndPassword(args: { email: string, password: string }): Promise<void>,
    signInWithGooglePopup(): Promise<void>,
    signUpWithEmailAndPassword(args: { email: string, password: string }): Promise<void>,
    signOut(): Promise<void>
}