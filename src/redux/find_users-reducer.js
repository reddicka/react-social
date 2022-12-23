import {usersAPI} from "../api/api";

const SET_USERS = 'findUsers/SET_USERS'
const FOLLOW = 'findUsers/FOLLOW'
const UNFOLLOW = 'findUsers/UNFOLLOW'
const SET_CURRENT_PAGE_NUMBER = 'findUsers/SET_CURRENT_PAGE_NUMBER'
const SET_TOTAL_USERS_COUNT = 'findUsers/SET_TOTAL_USERS_COUNT'
const SET_IS_LOADING = 'findUsers/SET_IS_LOADING'
const SET_IS_FOLLOWING_PROGRESS = 'findUsers/SET_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    currentPageNumber: 1,
    totalUsersCount: 0,
    pageSize: 20,
    isLoading: false,
    isLockedButtons: [],
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE_NUMBER:
            return {
                ...state,
                currentPageNumber: action.currentPageNumber
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isLockedButtons: action.isFetching
                    ? [...state.isLockedButtons, action.userId]
                    : state.isLockedButtons.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export default findUsersReducer

// --- action-creators ---
export const followAccept = (userId) => ({type: FOLLOW, userId})
export const unfollowAccept = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPageNumber = (currentPageNumber) => ({type: SET_CURRENT_PAGE_NUMBER, currentPageNumber})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setIsFollowingProgress = (isFetching, userId) => ({type: SET_IS_FOLLOWING_PROGRESS, isFetching, userId})

// --- thunk-creators ---
// запросить список пользователей
export const requestUsers = (currentPageNumber, pageSize) => async (dispatch) => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentPageNumber(currentPageNumber))

    let response = await usersAPI.getUsers(currentPageNumber, pageSize)
    if (!response.data.error) {
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
    }
    dispatch(setIsLoading(false))
}

// follow
export const follow = (userId) => async (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId))

    let response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followAccept(userId))
    }
    dispatch(setIsFollowingProgress(false, userId))
}

// unfollow
export const unfollow = (userId) => async (dispatch) => {
    dispatch(setIsFollowingProgress(true, userId))

    let response = await usersAPI.unfollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowAccept(userId))
    }
    dispatch(setIsFollowingProgress(false, userId))
}