import { Avatar, makeStyles, tokens } from "@fluentui/react-components";
import React from "react";
import useAuthenticationContext from "../../context/authentication/useAuthenticationContext";

export default function Navigation(): React.JSX.Element {

    const { navigationWrapper, contentWrapper } = useStyles();
    const { userCredentials } = useAuthenticationContext();

    console.log(userCredentials);

    return (
        <div className={navigationWrapper}>
            <div className={contentWrapper}>
                <div>
                    {/* <NavigationMenu /> */}
                </div>
                <div>
                    {userCredentials
                        ? <Avatar
                            name={userCredentials.displayName ?? ""}
                            color="colorful"
                            size={32}
                            badge={{ status: "available" }}
                            image={{ src: userCredentials.photoURL ?? "", alt: "Your profile picture" }}
                        />
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    navigationWrapper: {
        height: "50px",
        backgroundColor: tokens.colorNeutralBackground3,
        boxShadow: tokens.shadow16
    },
    contentWrapper: {
        width: "90%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%"
    }
});