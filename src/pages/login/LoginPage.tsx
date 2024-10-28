import React from "react";
import Page from "../../components/page/Page";
import useAuthenticationContext from "../../context/authentication/useAuthenticationContext";


export default function LoginPage(): React.JSX.Element {

    //Sign up
    //for now only email + password
    //Sign in
    //Google account (Poup, not redirect)
    //email + password
    //demo account setup via email + password

    const { signInWithProvider, user } = useAuthenticationContext();

    const u = React.useMemo(() => {
        console.log("USER: ", user)
        return user;
    }, [user])
    
    return (
        <Page documentTitle="Welcome">
            <button onClick={() => signInWithProvider()}>
                Google
            </button>
            <h1>{JSON.stringify(u)}</h1>
        </Page>
    )
}