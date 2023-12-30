import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';

const getAuthUserData = (state: AppStateType) => {
    return state.auth
}

export const getAuth = createSelector(getAuthUserData, ({id, login, email, isAuth}) => {
    return {id, login, email, isAuth}
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
