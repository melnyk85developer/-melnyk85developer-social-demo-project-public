import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';

const getNewsSelector = (state: AppStateType) => {
    return state.newsPage.news
}

export const getNews = createSelector(getNewsSelector, (news) => {
    return news.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.newsPage.pageSize
}
export const getTotalNewsCount = (state: AppStateType) => {
    return state.newsPage.totalNewsCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.newsPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.newsPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.newsPage.followingInProgress
}
export const getNewsFilter = (state: AppStateType) => {
    return state.newsPage.filter
}
export const scrollLength = (state: AppStateType) => {
    return state.newsPage.scrollLength
}
export const setNewsList = (state: AppStateType) => {
    return state.newsPage.newsList
}