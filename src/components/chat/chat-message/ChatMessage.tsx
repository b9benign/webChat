import { Avatar, Divider, makeStyles, Menu, MenuItem, MenuPopover, MenuTrigger, mergeClasses, tokens } from "@fluentui/react-components";
import { Delete16Regular, Pen16Regular } from "@fluentui/react-icons";
import React from "react";
import useThemeContext from "../../../context/theme/useThemeContext";
import useToastContext from "../../../context/toast/useToastContext";
import useFirebaseFunctions from "../../../services/firebase/functions/useFirebaseFunctions";
import { FirestoreUser } from "../../../services/firebase/utility/FirestoreUser";
import Persona from "../../persona/Persona";
import formatDate from "../formatDate";
import { ChatMessageProperties } from "./ChatMessageProperties";

export default function ChatMessage(properties: ChatMessageProperties & { authorIsCurrentUser: boolean }): React.JSX.Element {

    const { messageWrapper, withAvatarStyles, withoutAvatarStyles, adjustedDarkText, adjustedLightText, menuStyles } = useStyles();
    const { mode } = useThemeContext();
    const { dispatchInfo } = useToastContext();
    const { getUserDocument, deleteMessage } = useFirebaseFunctions();
    const [author, setAuthor] = React.useState<FirestoreUser | null>(null);

    React.useEffect(() => {
        if (properties.authorIsCurrentUser) return;
        const fetchUserDocument = async () => {
            const result = await getUserDocument({ uid: properties.message.authorId });
            setAuthor(result);
        }
        fetchUserDocument();
    }, [properties.message.authorId]);

    return (
        <React.Fragment>
            {
                properties.authorIsCurrentUser
                    ? <div className={mergeClasses(messageWrapper, withoutAvatarStyles, mode === "dark" ? adjustedDarkText : adjustedLightText)}>
                        {properties.message.content}
                        <div className={menuStyles}>
                            <Menu>
                                <MenuTrigger><div>&#8942;</div></MenuTrigger>
                                <MenuPopover>
                                    <MenuItem icon={<Pen16Regular />} onClick={() => dispatchInfo({ primaryContent: "Coming soon!" })}>Edit</MenuItem>
                                    <MenuItem icon={<Delete16Regular />} onClick={() => deleteMessage({ messageId: properties.message.id, chatId: properties.chatId })}>Delete</MenuItem>
                                </MenuPopover>
                            </Menu>
                        </div>
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
        position: "relative",
        paddingRight: "30px"
    },
    adjustedLightText: {
        color: tokens.colorNeutralBackground1
    },
    adjustedDarkText: {
        color: tokens.colorNeutralForeground1
    },
    menuStyles: {
        position: "absolute",
        top: "4px",
        right: "10px",
        cursor: "pointer",
        opacity: 0.7
    }
})