export const CHATS_ROOT = "/chats" as const;
export const CHATS_OVERVIEW = "" as const;
export const CHATS_CHAT_ID = ":chatId" as const;    //atrocious naming

export const CHATS_OVERVIEW_ROUTE_PATH = `${CHATS_ROOT}/${CHATS_OVERVIEW}`;
export const CHATS_CHAT_ROUTE_PATH = `${CHATS_ROOT}/${CHATS_CHAT_ID}`;