import { friendsAPI } from "services/friendsAPI";
import { UserType } from "types/types";
import { AppStateType, BaseThunkType, InferActionsType } from "../reduxStore";
import { Dispatch } from "redux";

let initialState = {
    friends: [] as Array<UserType>,
    pageSize: 100,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: undefined as undefined | boolean
    }
}
const friendsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case "friends/SET_USERS": 
            return { ...state, friends: action.users }
        case "friends/SET_CURRENT_PAGE": 
            return { ...state, currentPage: action.currentPage }
        case "friends/TOGGLE_IS_FETCHING": 
            return { ...state, isFetching: action.isFetching }
        case 'friends/SET_FILTER':
            return {...state, filter: action.payload}
        default:
            return state;
    }
}
export const actions = {
    setFriends: (users: Array<UserType>) => ({ type: "friends/SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) => ({ type: "friends/SET_CURRENT_PAGE", currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: "friends/SET_FILTER", payload: filter } as const),
    
    toggleIsFetching: (isFetching: boolean) => ({ type: "friends/TOGGLE_IS_FETCHING", isFetching } as const),
}
export const requestFriends = (page: number, 
                             pageSize: number,
                             filter: FilterType): ThunkType => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));
        const data = await friendsAPI.getUsers(page, pageSize, filter.term, filter.friend);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setFriends(data.items));

    }
}
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export default friendsReducer;