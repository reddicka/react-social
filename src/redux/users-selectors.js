import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.findUserPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})

export const setCurrentPageNumber = (state) => {
    return state.findUserPage.currentPageNumber
}

export const setTotalUsersCount = (state) => {
    return state.findUserPage.totalUsersCount
}

export const setPageSize = (state) => {
    return state.findUserPage.pageSize
}

export const setIsLoading = (state) => {
    return state.findUserPage.isLoading
}

export const setIsLockedButtons = (state) => {
    return state.findUserPage.isLockedButtons
}