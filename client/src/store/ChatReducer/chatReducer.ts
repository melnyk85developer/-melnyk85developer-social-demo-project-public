import { v1 as uuidv1 } from 'uuid';
import { stopSubmit } from "redux-form";
import { BaseThunkType, InferActionsType } from "../reduxStore";
import { ChatMessageAPIType, StatusType, chatAPI } from "services/chatAPI";
import { Dispatch } from "redux";

type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}
const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'chat/SET_CHAT_MESSAGES':
            return { 
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: uuidv1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case 'chat/STATUS_CHANGED':
            return { 
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}
export const actions = {
    setChatMessages: (messages: ChatMessageAPIType[]) => ({
        type: 'chat/SET_CHAT_MESSAGES',
        payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'chat/STATUS_CHANGED',
        payload: {status}
    } as const),
}
let _newChatMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;
const newChatMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newChatMessageHandler === null){
        _newChatMessageHandler = (messages) => {
            dispatch(actions.setChatMessages(messages))
        }
    }
    return _newChatMessageHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null;
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if(_statusChangedHandler === null){
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startChatMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newChatMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changet', statusChangedHandlerCreator(dispatch))
}
export const stopChatMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.stop()
    chatAPI.unsubscribe('messages-received', newChatMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changet', statusChangedHandlerCreator(dispatch))
}
export const sendChatMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendChatMessage(message)
}
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export default chatReducer;