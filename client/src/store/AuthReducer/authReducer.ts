import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "services/api";
import { securityAPI } from "services/securityAPI";
import { stopSubmit } from "redux-form";
import { authAPI } from "services/authAPI";
import { BaseThunkType, InferActionsType } from "../reduxStore";

let initialState = {
    id: null as number | null | string | undefined,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}
const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return { 
                // id: "kjnu",
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const actions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA',
        payload: {id, login, email, isAuth}} as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS', 
        payload: {captchaUrl}} as const)
}
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    
    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodeEnum.Success) {
        const { id, login, email } = meData.data;
        dispatch(actions.setAuthUserData(id, login, email, true));
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if(loginData.resultCode === ResultCodeEnum.Success){
        dispatch(getAuthUserData())
    } else {
        if(loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired){
            dispatch(getCaptchaUrl());
        }
        const messageError = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: messageError}));
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;    
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));

}
export const logout = (): ThunkType => async (dispatch) => {

    const response = await authAPI.logout()

    if(response.data.resultCode === 0){
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export default authReducer;