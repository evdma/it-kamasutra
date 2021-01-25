import { stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { chatAPI, ChatMessageType } from '../api/chat-api';
import { Dispatch } from 'redux';

let initialState = {
    messages: [] as ChatMessageType[]
}

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload]
            };
        default:
            return state;
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) =>
    ({
        type: 'SN/chat/MESSAGES_RECEIVED', payload: messages
    } as const)
};

type ActionsType = InferActionsTypes<typeof actions>;

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = messages => {
            dispatch(actions.messagesReceived(messages));
        }
    }

    return _newMessageHandler;
}

export const startMessagesListening = (): ThunkType => async (dispatch: any) => {
    chatAPI.start();
    chatAPI.subscribe(newMessageHandlerCreator(dispatch));
}

export const stopMessagesListening = (): ThunkType => async (dispatch: any) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch));
    chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch: any) => {
    chatAPI.sendMessage(message);
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>;

export default chatReducer;