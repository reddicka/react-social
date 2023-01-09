import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersSelector = (state: AppStateType) => {
    return state.findUsersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true)
})

export const setCurrentPageNumber = (state: AppStateType) => {
    return state.findUsersPage.currentPageNumber
}

export const setTotalUsersCount = (state: AppStateType) => {
    return state.findUsersPage.totalUsersCount
}

export const setPageSize = (state: AppStateType) => {
    return state.findUsersPage.pageSize
}

export const setIsLoading = (state: AppStateType) => {
    return state.findUsersPage.isLoading
}

export const setIsLockedButtons = (state: AppStateType) => {
    return state.findUsersPage.followingInProgress
}

export const setUserId = (state: AppStateType) => {
    return state.auth.userId
}
