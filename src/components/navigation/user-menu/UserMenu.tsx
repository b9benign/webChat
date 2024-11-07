import { Menu, MenuItem, MenuPopover, MenuTrigger } from "@fluentui/react-components";
import { ArrowExit20Regular, Person20Regular } from "@fluentui/react-icons";
import React from "react";
import useAuthenticationContext from "../../../context/authentication/useAuthenticationContext";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import Persona from "../../persona/Persona";

export default function UserMenu(): React.JSX.Element {

    const { userCredentials } = useAuthenticationContext();
    const { signOut } = useFirebaseFunctions();
    const { dispatchInfo } = useToastContext();

    return (
        <Menu>
            <MenuTrigger disableButtonEnhancement>
                <div>
                    {userCredentials
                        ? <Persona
                            name={userCredentials.displayName ?? undefined}
                            secondaryText="Available"
                            presence={{ status: "available" }}
                            textPosition="before"
                            photoUrl={userCredentials.photoURL}
                        />
                        : null
                    }
                </div>
            </MenuTrigger>
            <MenuPopover>
                <MenuItem icon={<Person20Regular />} onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })}>
                    Profile
                </MenuItem>
                <MenuItem icon={<ArrowExit20Regular />} onClick={() => signOut()}>
                    Sign out
                </MenuItem>
            </MenuPopover>
        </Menu>
    )
}
