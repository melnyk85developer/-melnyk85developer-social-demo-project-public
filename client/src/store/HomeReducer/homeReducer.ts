import { usersAPI } from "services/usersAPI";
import { UserType } from "types/types";
import { updateObjectInArray } from "utils/objectHelpers";
import { AppStateType, BaseThunkType, InferActionsType } from "../reduxStore";
import { Dispatch } from "redux";
import { APIResponseType } from "services/api";

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
    }
}
const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case "users/FOLLOW":
            return { 
                ...state, 
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: true} )
            }
        case "users/UNFOLLOW":
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: false} )
            }
        case "users/SET_USERS": 
            return { ...state, users: action.users }
        case "users/SET_CURRENT_PAGE": 
            return { ...state, currentPage: action.currentPage }
        case "users/SET_TOTAL_USERS_COUNT": 
            return { ...state, totalUsersCount: action.count }
        case "users/TOGGLE_IS_FETCHING": 
            return { ...state, isFetching: action.isFetching }
        case 'users/SET_FILTER':
            return {...state, filter: action.payload}
        case "users/TOGGLE_IS_FETCHING_PROGRESS": 
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
    followSuccess: (userId: number) => ({ type: "users/FOLLOW", userId } as const),
    unfollowSuccess: (userId: number) => ({ type: "users/UNFOLLOW", userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: "users/SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) => ({ type: "users/SET_CURRENT_PAGE", currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: "users/SET_FILTER", payload: filter } as const),
    setUsersTotalCount: (totalUsersCount: number) => ({ type: "users/SET_TOTAL_USERS_COUNT", count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "users/TOGGLE_IS_FETCHING", isFetching } as const),
    followingProgress: (isFetching: boolean, userId: number) => ({ type: "users/TOGGLE_IS_FETCHING_PROGRESS", isFetching, userId } as const)
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
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export default usersReducer;