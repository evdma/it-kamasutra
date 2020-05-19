import { InferActionsTypes } from "./redux-store";

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Masha' },
        { id: 2, name: 'Sonya' }
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Bye' },
        { id: 3, message: 'Nope' }
    ] as Array<MessageType>,
    newMessageBody: ''
}

export type InitialStateType = typeof initialState;

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({ type: 'SN/Dialogs/SEND_MESSAGE', newMessageBody })
}

type ActionsType = InferActionsTypes<typeof actions>;

const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SN/Dialogs/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            };
        default: return state;
    }
}

export default dialogsReducer;