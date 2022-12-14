import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_AVATAR_URL = 'SET_AVATAR_URL'

const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false,
    avatarUrl: null,

    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                captchaUrl: null
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
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export default authReducer

// action-creators
export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setAvatarUrl = (avatarUrl) => ({type: SET_AVATAR_URL, avatarUrl})

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

// thunk-creators
export const getAuthUserData = () => dispatch => {
    // if (!isAuth) {
    dispatch(setIsLoading(true))

    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))

                // мое говно
                dispatch(setIsLoading(true))
                profileAPI.getProfile(id)
                    .then(data => {
                        dispatch(setAvatarUrl(data.photos.small))
                        dispatch(setIsLoading(false))
                    })
            }
        })
    // }

}

export const login = (email, password, rememberMe, captcha) => dispatch => {
    authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else if (response.data.resultCode === 1) {
                dispatch(stopSubmit("login", {_error: 'Неверный логин/пароль'}))
            } else if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
        })
}

export const logout = () => dispatch => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })

}

export const getCaptchaUrl = () => (dispatch) => {
    authAPI.getCaptchaUrl()
        .then(response => {
            dispatch(setCaptchaUrl(response.data.url))
        })
}