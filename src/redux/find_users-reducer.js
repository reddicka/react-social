import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE_NUMBER = 'SET_CURRENT_PAGE_NUMBER'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_IS_FOLLOWING_PROGRESS = 'SET_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    currentPageNumber: 1,
    totalUsersCount: 0,
    pageSize: 20,
    isLoading: false,
    isLockedButtons: [],
}

const findUserReducer = (state = initialState, action) => {
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

export default findUserReducer

// actions
export const followAccept = (userId) => ({type: FOLLOW, userId})
export const unfollowAccept = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPageNumber = (currentPageNumber) => ({type: SET_CURRENT_PAGE_NUMBER, currentPageNumber})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setIsFollowingProgress = (isFetching, userId) => ({type: SET_IS_FOLLOWING_PROGRESS, isFetching, userId})

// thunk-creators
export const getUsers = (currentPageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        dispatch(setCurrentPageNumber(currentPageNumber))
        usersAPI.getUsers(currentPageNumber, pageSize)
            .then(data => {
                dispatch(setIsLoading(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(data => {
                data.resultCode === 0 &&
                dispatch(followAccept(userId))
                dispatch(setIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(data => {
                data.resultCode === 0 &&
                dispatch(unfollowAccept(userId))
                dispatch(setIsFollowingProgress(false, userId))
            })
    }
}