import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';


export const setInitializeAppContent= (state: AppStateType) => {
    return state.app.initialized
}
export const getInitialized = createSelector(setInitializeAppContent, (initialized) => {
    return initialized
})


