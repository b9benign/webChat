import { FirestoreChat } from "../../../services/firebase/utility/FirestoreChat"
import { FirestoreMessage } from "../../../services/firebase/utility/FirestoreMessage"

export type ChatMessageProperties = {
    message: FirestoreMessage,
    chatId: FirestoreChat["id"]
}