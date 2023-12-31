import { v1 as uuidv1 } from 'uuid';
import PandoraMoks from "../../fixtures/PandoraMoks";
import { AppStateType, BaseThunkType, InferActionsType } from '../reduxStore';
import { UserType } from 'types/types';
import { updateObjectInArray } from 'utils/objectHelpers';
import { Dispatch } from 'redux';
import { APIResponseType } from 'services/api';
import { usersAPI } from 'services/usersAPI';

const messages = PandoraMoks.messages;

export type MessagesType = {
    id: string | undefined
    photos: string
    messages: string
    im: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: undefined as undefined | boolean
    },
    messages: messages as Array<MessagesType | any>
}

const messagesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'messages/SEND_MESSAGE':
            let body = action.newMessageBody;
            return { 
                ...state, 
                messages: [ ...state.messages, {id: uuidv1(), message: body} ]
            }
        case 'messages/SET_MESSAGE': 
            return { ...state, messages: action.messages }

        case "messages/FOLLOW":
            return { 
                ...state, 
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: true} )
            }
        case "messages/UNFOLLOW":
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: false} )
            }
        case "messages/SET_USERS": 
            return { ...state, users: action.users }
        case "messages/SET_CURRENT_PAGE": 
            return { ...state, currentPage: action.currentPage }
        case "messages/SET_TOTAL_USERS_COUNT": 
            return { ...state, totalUsersCount: action.count }
        case "messages/TOGGLE_IS_FETCHING": 
            return { ...state, isFetching: action.isFetching }
        case 'messages/SET_FILTER':
            return {...state, filter: action.payload}
        case "messages/TOGGLE_IS_FETCHING_PROGRESS": 
            return { ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const actions = {
    setMessages: (messages: Array<MessagesType | any>) => ({type: 'messages/SET_MESSAGE', messages} as const),
    sendMessage: (newMessageBody: string) => ({type: 'messages/SEND_MESSAGE', newMessageBody} as const),
    followSuccess: (userId: number) => ({ type: "messages/FOLLOW", userId } as const),
    unfollowSuccess: (userId: number) => ({ type: "messages/UNFOLLOW", userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: "messages/SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) => ({ type: "messages/SET_CURRENT_PAGE", currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: "messages/SET_FILTER", payload: filter } as const),
    setUsersTotalCount: (totalUsersCount: number) => ({ type: "messages/SET_TOTAL_USERS_COUNT", count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "messages/TOGGLE_IS_FETCHING", isFetching } as const),
    followingProgress: (isFetching: boolean, userId: number) => ({ type: "messages/TOGGLE_IS_FETCHING_PROGRESS", isFetching, userId } as const)
} 

export const requestUsers = (page: number, 
                             pageSize: number,
                             filter: FilterType): ThunkType => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));

        const data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));

        dispatch(actions.setMessages(messages));
    }
}
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, 
                                   userId: number, 
                                   apiMethod: (userId: number) => Promise<APIResponseType>, 
                                   actionCreator: (userId: number) => ActionsType) => {
    dispatch(actions.followingProgress(true, userId));
    const data = await apiMethod(userId);
    if(data.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(actions.followingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
export type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export default messagesReducer;