import { Avatar, makeStyles, Menu, MenuItem, MenuPopover, MenuTrigger } from "@fluentui/react-components";
import { ArrowExit20Regular, Person20Regular } from "@fluentui/react-icons";
import React from "react";
import useAuthenticationContext from "../../../context/authentication/useAuthenticationContext";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";

export default function UserMenu(): React.JSX.Element {

    const { userCredentials } = useAuthenticationContext();
    const { menuTriggerStyles } = useStyles();
    const { signOut } = useFirebaseFunctions();
    const { dispatchInfo } = useToastContext();

    return (
        <Menu>
            <MenuTrigger disableButtonEnhancement>
                {userCredentials
                    ? <Avatar
                        name={userCredentials.displayName ?? ""}
                        color="colorful"
                        className={menuTriggerStyles}
                        size={32}
                        badge={{ status: "available" }}
                        image={{ src: userCredentials.photoURL ?? "", alt: "Your profile picture" }}
                    />
                    : null
                }
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

const useStyles = makeStyles({
    menuTriggerStyles: {
        cursor: "pointer",
    }
})