import React from "react";
import Page from "../../components/page/Page";
import useAuthenticationContext from "../../context/authentication/useAuthenticationContext";
import useFirebaseService from "../../firebase/service/useFirebaseService";
import { Button } from "@fluentui/react-components";
import useToastContext from "../../context/toast/useToastContext";

export default function LoginPage(): React.JSX.Element {
  //Sign up
  //for now only email + password
  //Sign in
  //Google account (Poup, not redirect)
  //email + password
  //demo account setup via email + password

  const { user } = useAuthenticationContext();
  const { signInWithGooglePopup } = useFirebaseService();
  const { dispatchInfo } = useToastContext();

  const u = React.useMemo(() => {
    console.log("USER: ", user);
    return user;
  }, [user]);

  return (
    <Page documentTitle="Welcome">
      <Button appearance="transparent" onClick={() => signInWithGooglePopup()}>
        Google
      </Button>
      <Button
        appearance="transparent"
        onClick={() => dispatchInfo({ primaryContent: "TEST", title: undefined })}
      >
        Toast-Test
      </Button>
      <h1>{JSON.stringify(u)}</h1>
    </Page>
  );
}
