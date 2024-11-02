export type FirebaseFunctions = {
    signInWithEmailAndPassword(): Promise<void>,
    signInWithGooglePopup(): Promise<void>,
    signUpWithEmailAndPassword(): Promise<void>,
    signOut(): Promise<void>
}