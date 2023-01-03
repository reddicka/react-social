import {authAPI, profileAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {setProfileStatus, setUserProfile} from "./profile-reducer";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_IS_LOADING = 'auth/SET_IS_LOADING'
const SET_AVATAR_URL = 'auth/SET_AVATAR_URL'

const SET_IS_AUTH = 'auth/SET_IS_AUTH'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

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

/*
    можно использовать payload
    action - ({type: SET_AVATAR_URL, payload: avatarUrl})
    action - ({type: SET_AVATAR_URL, payload: captchaUrl})

    case SET_AVATAR_URL:
    case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
 */

export default authReducer

// --- action-creators ---
export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})
export const setAvatarUrl = (avatarUrl) => ({type: SET_AVATAR_URL, avatarUrl})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})
/* вынести в локальный стейт */
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})

// --- thunk-creators ---
// получить данные об авторизованном пользователе
export const getAuthUserData = () => async (dispatch) => {
    // if (!isAuth) {
    dispatch(setIsLoading(true))

    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))

        // костыль, получающий аватарку для шапки
        let responseProfile = await profileAPI.getProfile(id)
        dispatch(setAvatarUrl(responseProfile.data.photos.small))

        dispatch(setIsLoading(false))
    }
}

// отправить форму для входа в аккаунт
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        // успех
        dispatch(getAuthUserData())
    } else if (response.data.resultCode === 1) {
        // неверный логин/пароль
        dispatch(stopSubmit("login", {_error: 'Неверный логин/пароль'}))
    } else if (response.data.resultCode === 10) {
        // превышен лимит попыток
        dispatch(getCaptchaUrl())
    }
}

// выйти из аккаунта
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setUserProfile(null))
        dispatch(setProfileStatus(''))
        dispatch(setAvatarUrl(null))
    }
}

// получить ссылку для капчи
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    dispatch(setCaptchaUrl(response.data.url))
}