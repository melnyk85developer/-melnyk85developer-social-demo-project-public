import { v1 as uuidv1 } from 'uuid';
import { userProfileAPI } from 'services/userProfileAPI';
import { stopSubmit } from "redux-form";
import PandoraMoks from "../../fixtures/PandoraMoks";
import { PostsType, ProfileType } from 'types/types';
import { BaseThunkType, InferActionsType } from '../reduxStore';

const posts = PandoraMoks.posts;

let initialState = {
    userProfile: null as ProfileType | null,
    posts: posts as Array<PostsType>,
    status: ''
}
const userProfileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch(action.type){
        case 'userProfile/ADD_POST': {
            let newPost = {
                id: uuidv1(),
                post: action.newPostText,
                like: 0,
                dislike: 0
            };
            return { 
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case 'userProfile/SET_STATUS': {
            return { 
                ...state,
                status: action.status
            };
        }
        case 'userProfile/SET_PROFILE': {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case 'userProfile/DELETE_POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'userProfile/ADD_POST', newPostText} as const),
    setUserProfile: (userProfile: ProfileType) => ({type: 'userProfile/SET_PROFILE', userProfile} as const),
    setUserStatus: (status: string) => ({type: 'userProfile/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'userProfile/DELETE_POST', postId} as const)
} 
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await userProfileAPI.getUserProfile(userId);
    dispatch(actions.setUserProfile(data));
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await userProfileAPI.getUserStatus(userId);
    dispatch(actions.setUserStatus(data))
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
export type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export default userProfileReducer;