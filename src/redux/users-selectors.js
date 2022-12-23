import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.findUsersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})

export const setCurrentPageNumber = (state) => {
    return state.findUsersPage.currentPageNumber
}

export const setTotalUsersCount = (state) => {
    return state.findUsersPage.totalUsersCount
}

export const setPageSize = (state) => {
    return state.findUsersPage.pageSize
}

export const setIsLoading = (state) => {
    return state.findUsersPage.isLoading
}

export const setIsLockedButtons = (state) => {
    return state.findUsersPage.isLockedButtons
}