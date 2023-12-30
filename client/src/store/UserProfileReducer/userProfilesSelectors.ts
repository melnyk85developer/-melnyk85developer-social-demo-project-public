import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';

const getUserProfilesSelector = (state: AppStateType) => {
    return state.userProfilePage.userProfile
}

export const userProfiles = createSelector(getUserProfilesSelector, (userProfile) => {
    return userProfile
})

export const setUserStatus = (state: AppStateType) => {
    return state.userProfilePage.status
}