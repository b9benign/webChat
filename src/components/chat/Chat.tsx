import { makeStyles } from "@fluentui/react-components";
import React from "react";
import { ChatProperties } from "./ChatProperties";

export default function Chat(properties: ChatProperties): React.JSX.Element {

    const { chatWrapper } = useStyles();
    const { chatId } = properties;

    React.useEffect(() => console.log("chatId: ", chatId), [chatId]);

    return (
        <div className={chatWrapper}>

        </div>
    )
}

const useStyles = makeStyles({
    chatWrapper: {
        height: "500px",
        width: "100%",
        border: "1px solid red"
    }
})