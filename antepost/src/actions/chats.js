export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';

export const chatsLoad = () => ({
    type: CHATS_LOAD,
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

/*export const chatsAdd = (chatName) => ({
    type: CHATS_ADD,
    payload: chatName,
});*/

export const chatsAdd = (chatName) => {
    return {
        type: CHATS_ADD,
        payload: chatName,
    }
};
