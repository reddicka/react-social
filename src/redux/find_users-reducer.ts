import {usersAPI} from "../api/api";
import {UserType} from "../types/types";

const SET_USERS = 'findUsers/SET_USERS'
const FOLLOW = 'findUsers/FOLLOW'
const UNFOLLOW = 'findUsers/UNFOLLOW'
const SET_CURRENT_PAGE_NUMBER = 'findUsers/SET_CURRENT_PAGE_NUMBER'
const SET_TOTAL_USERS_COUNT = 'findUsers/SET_TOTAL_USERS_COUNT'
const SET_IS_LOADING = 'findUsers/SET_IS_LOADING'
const SET_IS_FOLLOWING_PROGRESS = 'findUsers/SET_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [] as Array<UserType>,
    currentPageNumber: 1,
    totalUsersCount: 0,
    pageSize: 20,
    isLoading: false,
    followingInProgress: [] as Array<number> // массив id пользователей пока идет запрос "follow/unfollow"
}
type InitialStateType = typeof initialState

const findUsersReducer = (state = initialState, action: any): InitialStateType => {
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
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export default findUsersReducer



// ====== ACTION-CREATORS ======

// устанавливает true, если подписка на человека прошла успешно
type FollowAcceptActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followAccept = (userId: number): FollowAcceptActionType => ({type: FOLLOW, userId})

// устанавливает false, если отписка от человека прошла успешно
type UnfollowAcceptActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowAccept = (userId: number): UnfollowAcceptActionType => ({type: UNFOLLOW, userId})

// устанавливает список пользователей на странице поиска
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})

// устанавливает текущую страницу поиска
type SetCurrentPageNumberActionType = {
    type: typeof SET_CURRENT_PAGE_NUMBER
    currentPageNumber: number
}
export const setCurrentPageNumber = (currentPageNumber: number): SetCurrentPageNumberActionType => ({
    type: SET_CURRENT_PAGE_NUMBER,
    currentPageNumber
})

// устанавливает общее количество зарегистрированных человек
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

// устанавливает флаг процесса загрузки при получении новой порции человек на странице
type SetIsLoadingActionType = {
    type: typeof SET_IS_LOADING
    isLoading: boolean
}
export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType => ({
    type: SET_IS_LOADING,
    isLoading
})

// добавляет/удаляет id пользователя в массив во время процесса подписки/отписки
type SetIsFollowingProgressActionType = {
    type: typeof SET_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const setIsFollowingProgress = (isFetching: boolean, userId: number): SetIsFollowingProgressActionType => ({
    type: SET_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})



// ====== THUNK-CREATORS ======

// запросить список пользователей
export const requestUsers = (currentPageNumber: number, pageSize: number) => async (dispatch: any) => {
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
export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(setIsFollowingProgress(true, userId))

    let response = await usersAPI.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followAccept(userId))
    }
    dispatch(setIsFollowingProgress(false, userId))
}

// unfollow
export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(setIsFollowingProgress(true, userId))

    let response = await usersAPI.unfollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(unfollowAccept(userId))
    }
    dispatch(setIsFollowingProgress(false, userId))
}