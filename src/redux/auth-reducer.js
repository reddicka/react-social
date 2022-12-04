import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_AVATAR_URL = 'SET_AVATAR_URL'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false,
    avatarUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_AVATAR_URL:
            return {
                ...state,
                avatarUrl: action.avatarUrl
            }
        default:
            return state
    }
}

export default authReducer

// actions
export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, userData: {userId, login, email}})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setAvatarUrl = (avatarUrl) => ({type: SET_IS_LOADING, avatarUrl})

// thunk-creators
export const isAuthorized = (isAuth) => {
    return (dispatch) => {
        if (!isAuth) {
            dispatch(setIsLoading(true))

            usersAPI.isAuthorized()
                .then(data => {

                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        dispatch(setAuthUserData(id, login, email))

                        usersAPI.getProfileData(id)
                            .then(data => {
                                dispatch(setAvatarUrl(data.photos.small))
                                dispatch(setIsLoading(false))
                            })
                    }
                })
        }
    }
}
