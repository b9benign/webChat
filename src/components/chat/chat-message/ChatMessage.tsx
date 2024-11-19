import { Avatar, Divider, makeStyles, MenuDivider, mergeClasses, tokens } from "@fluentui/react-components";
import React from "react";
import useAuthenticationContext from "../../../context/authentication/useAuthenticationContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreUser } from "../../../services/firebase/utility/FirestoreUser";
import { ChatMessageProperties } from "./ChatMessageProperties";
import Persona from "../../persona/Persona";
import { FirestoreMessage } from "../../../services/firebase/utility/FirestoreMessage";
import useToastContext from "../../../context/toast/useToastContext";
import useThemeContext from "../../../context/theme/useThemeContext";

export default function ChatMessage(properties: ChatMessageProperties & { authorIsCurrentUser: boolean }): React.JSX.Element {

    const { messageWrapper, withAvatarStyles, withoutAvatarStyles, adjustedDarkText, adjustedLightText } = useStyles();
    const { mode } = useThemeContext();
    const { dispatchInfo } = useToastContext();
    const { getUserDocument } = useFirebaseFunctions();
    const [author, setAuthor] = React.useState<FirestoreUser | null>(null);


    React.useEffect(() => {
        if (properties.authorIsCurrentUser) return;
        const fetchUserDocument = async () => {
            const result = await getUserDocument({ uid: properties.message.authorId });
            setAuthor(result);
        }
        fetchUserDocument();
    }, [properties.message.authorId]);

    const formatDate = (date: FirestoreMessage["createdAt"]): string => {
        const formattedDate = date.toDate();
        return formattedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    }

    return (
        <React.Fragment>
            {
                properties.authorIsCurrentUser
                    ? <div className={mergeClasses(messageWrapper, withoutAvatarStyles, mode === "dark" ? adjustedDarkText : adjustedLightText)}>
                        {properties.message.content}
                    </div>
                    : <div className={mergeClasses(messageWrapper, withAvatarStyles)}>
                        <React.Fragment>
                            {author
                                ? <React.Fragment>
                                    <Persona
                                        photoUrl={author.photoUrl}
                                        size={28}
                                        name={author.displayName ?? undefined}
                                        textPosition="after"
                                        secondaryText={formatDate(properties.message.createdAt)}
                                        onClick={() => dispatchInfo({ primaryContent: "User profiles are coming soon!" })}
                                    />
                                    <Divider />
                                </React.Fragment>

                                : <Avatar size={28} />
                            }
                        </React.Fragment>
                        {properties.message.content}
                    </div>
            }
        </React.Fragment>

    )
}

const useStyles = makeStyles({
    messageWrapper: {
        backgroundColor: tokens.colorNeutralBackground2, 
        width: "auto",
        maxWidth: "85%",
        textWrap: "wrap",
        boxShadow: tokens.shadow2,
        borderRadius: tokens.borderRadiusLarge,
        color: tokens.colorNeutralForeground1,
        padding: `${tokens.spacingHorizontalXS} ${tokens.spacingHorizontalM} ${tokens.spacingHorizontalXS} ${tokens.spacingHorizontalM}`
    },
    withAvatarStyles: {
        display: "flex",
        flexDirection: "column",
        gap: tokens.spacingVerticalXS,
        border: `1px solid ${tokens.colorNeutralForeground4}`,
    },
    withoutAvatarStyles: {
        backgroundColor: tokens.colorBrandStroke2Hover,
    },
    adjustedLightText: {
        color: tokens.colorNeutralBackground1
    },
    adjustedDarkText: {
        color: tokens.colorNeutralForeground1
    }
})