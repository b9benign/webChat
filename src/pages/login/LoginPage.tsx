import React from "react";
import Page from "../../components/page/Page";
import { Button, Persona } from "@fluentui/react-components";
import useToastContext from "../../context/toast/useToastContext";
import useAuthenticationContext from "../../context/authentication/useAuthenticationContext";

export default function LoginPage(): React.JSX.Element {
  const { userCredentials, signInWithGooglePopup } = useAuthenticationContext();
  const { dispatchInfo } = useToastContext();

  const src = React.useMemo(() => userCredentials?.photoURL ?? undefined, [userCredentials?.photoURL]);

  return (
    <Page documentTitle="Welcome">
      <Button appearance="transparent" onClick={() => signInWithGooglePopup()}>
        Google
      </Button>
      <Button
        appearance="transparent"
        onClick={() =>
          dispatchInfo({
            primaryContent: userCredentials?.photoURL ?? "",
            title: undefined,
          })
        }
      >
        Toast-Test
      </Button>
      {userCredentials ? (
        <Persona
          name={userCredentials.displayName ?? undefined}
          secondaryText="Available"
          presence={{ status: "available" }}
          avatar={{
            color: "colorful",
            image: { src },
          }}
        />
      ) : null}
    </Page>
  );
}
