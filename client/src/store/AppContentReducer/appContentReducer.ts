import { Dispatch } from "redux";
import { getAuthUserData } from "../AuthReducer/authReducer";
import { BaseThunkType, InferActionsType } from "../reduxStore";

let initialState = {
    initialized: false,
}

const appContentReducer = (state = initialState, action: ActionsType): InitialStateType  => {
    switch(action.type){
        case 'INITIALIZED_SUCCESS':
            return { 
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

export const initializeAppContent = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions> 
type ThunkType = BaseThunkType<ActionsType>
export default appContentReducer;