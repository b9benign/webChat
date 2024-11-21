import { CHATS_CHAT_ID, CHATS_CHAT_ROUTE_PATH } from "../chatRouterConstants";

export default function generateChatRoutePath(chatId: string): string {
    return CHATS_CHAT_ROUTE_PATH.replace(CHATS_CHAT_ID, chatId);
}