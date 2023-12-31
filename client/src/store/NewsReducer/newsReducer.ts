import { newsAPI } from "services/newsAPI";
import { UserType } from "types/types";
import { updateObjectInArray } from "utils/objectHelpers";
import { AppStateType, BaseThunkType, InferActionsType } from "../reduxStore";
import { Dispatch } from "redux";
import { APIResponseType } from "services/api";

let initialState = {
    news: [] as Array<UserType>,
    newsList: [] as Array<UserType>,
    pageSize: 100,
    totalNewsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: undefined as undefined | boolean
    },
    scrollLength: 8386
}
const newsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case "news/FOLLOW":
            return { 
                ...state, 
                news: updateObjectInArray(state.news, action.userId, "id",  {followed: true} )
            }
        case "news/UNFOLLOW":
            return { 
                ...state,
                news: updateObjectInArray(state.news, action.userId, "id",  {followed: false} )
            }
        case "news/SET_NEWS": 

            // for(let i = 0; i < state.news.length; i++){
                
            //     return { 
            //         ...state, 
            //         news: [...state.news, ...action.news.filter( item => item.id !== state.news[i].id)]
            //     }
            // }
            return { 
                ...state, 
                news: action.news }

        case "news/SET_NEWSLIST": 
            return { 
                ...state, 
                newsList: action.newsList }

        case "news/SET_SCROLL": 
            return { ...state, scrollLength: action.scrollLength }

        case "news/SET_CURRENT_PAGE": 
            return { ...state, currentPage: action.currentPage }
        case "news/SET_TOTAL_NEWS_COUNT": 
            return { ...state, totalNewsCount: action.count }
        case "news/TOGGLE_IS_FETCHING": 
            return { ...state, isFetching: action.isFetching }
        case 'news/SET_FILTER':
            return {...state, filter: action.payload}
        case "news/TOGGLE_IS_FETCHING_PROGRESS": 
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
    followSuccess: (userId: number) => ({ type: "news/FOLLOW", userId } as const),
    unfollowSuccess: (userId: number) => ({ type: "news/UNFOLLOW", userId } as const),
    setNews: (news: Array<UserType>) => ({ type: "news/SET_NEWS", news } as const),
    setNewsList: (newsList: Array<UserType>) => ({ type: "news/SET_NEWSLIST", newsList } as const),
    setScroll: (scrollLength: number) => ({ type: "news/SET_SCROLL", scrollLength } as const),
    setCurrentPage: (currentPage: number) => ({ type: "news/SET_CURRENT_PAGE", currentPage } as const),
    setFilter: (filter: FilterType) => ({ type: "news/SET_FILTER", payload: filter } as const),
    setNewsTotalCount: (totalUsersCount: number) => ({ type: "news/SET_TOTAL_NEWS_COUNT", count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "news/TOGGLE_IS_FETCHING", isFetching } as const),
    followingProgress: (isFetching: boolean, userId: number) => ({ type: "news/TOGGLE_IS_FETCHING_PROGRESS", isFetching, userId } as const)
}
export const requestNews = (page: number, 
                             pageSize: number,
                             filter: FilterType): ThunkType => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setFilter(filter));

        const data = await newsAPI.getNews(page, pageSize, filter.term, filter.friend);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setNews(data.items));
        dispatch(actions.setNewsTotalCount(data.totalCount));
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
       await _followUnfollowFlow(dispatch, userId, newsAPI.follow.bind(newsAPI), actions.followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
       await _followUnfollowFlow(dispatch, userId, newsAPI.unfollow.bind(newsAPI), actions.unfollowSuccess);
    }
}
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export default newsReducer;