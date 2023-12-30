import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';

const getProfilesSelector = (state: AppStateType) => {
    return state.myProfilePage.myProfile
}

export const getMyProfiles = createSelector(getProfilesSelector, (myProfile) => {
    return myProfile
})

export const setMyStatus = (state: AppStateType) => {
    return state.myProfilePage.status
}
