import { v1 as uuidv1 } from 'uuid';
import { myProfileAPI } from 'services/myProfileAPI';
import { stopSubmit } from "redux-form";
import PandoraMoks from "../../fixtures/PandoraMoks";
import { PhotosType, PostsType, ProfileType } from 'types/types';
import { BaseThunkType, InferActionsType } from '../reduxStore';

const posts = PandoraMoks.posts;

let initialState = {
    myProfile: null as ProfileType | null,
    posts: posts as Array<PostsType>,
    status: ''
}
const myProfileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch(action.type){
        case 'myProfile/ADD_POST': {
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
        case 'myProfile/SET_STATUS': {
            return { 
                ...state,
                status: action.status
            };
        }
        case 'myProfile/SET_PROFILE': {
            return {
                ...state,
                myProfile: action.myProfile
            }
        }
        case 'myProfile/DELETE_POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'myProfile/SAVE_PHOTO_SUCCESS':
                return {...state, myProfile: {...state.myProfile, photos: action.photos} as ProfileType}
            default:
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'myProfile/ADD_POST', newPostText} as const),
    setMyProfile: (myProfile: ProfileType) => ({type: 'myProfile/SET_PROFILE', myProfile} as const),
    setMyStatus: (status: string) => ({type: 'myProfile/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'myProfile/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'myProfile/SAVE_PHOTO_SUCCESS', photos} as const)
} 
export const getMyProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await myProfileAPI.getMyProfileAPI(userId);
    dispatch(actions.setMyProfile(data));
}
export const getMyStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await myProfileAPI.getMyStatusAPI(userId);
    dispatch(actions.setMyStatus(data))
}
export const updateMyStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await myProfileAPI.updateMyStatusAPI(status);
        if(data.resultCode === 0){
            dispatch(actions.setMyStatus(status))
        }
    } catch(error){
        console.error("Erorr Update Status");
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await myProfileAPI.saveMyPhoto(file);
    if(data.resultCode === 0){
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}
export const saveMyProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await myProfileAPI.saveMyProfileAPI(profile);
    if(data.resultCode === 0){
        if(userId !== null){
            dispatch(getMyProfile(userId as number));
        }else{
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
export type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export default myProfileReducer;