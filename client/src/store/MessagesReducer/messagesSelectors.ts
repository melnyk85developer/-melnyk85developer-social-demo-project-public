import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';
import { ActionsType, actions } from './messagesReducer';

const getUsersSelector = (state: AppStateType) => {
    return state.messagesPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

const getMessagesSelector = (state: AppStateType) => {
    return state.messagesPage.messages
}

export const getMessage = createSelector(getMessagesSelector, (messages) => {
    return messages
})

export const getPageSize = (state: AppStateType) => {
    return state.messagesPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.messagesPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.messagesPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.messagesPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.messagesPage.followingInProgress
}
export const getUsersFilter = (state: AppStateType) => {
    return state.messagesPage.filter
}

export const getSendMessage = (actions: ActionsType) => {
    // type: 'messages/SEND_MESSAGE', newMessageBody
    return actions.type
}