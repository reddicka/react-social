import {authAPI, profileAPI, ResultCodeForCaptcha, ResultCodesEnum, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {
    setProfileStatus,
    SetProfileStatusActionType,
    setUserProfile,
    SetUserProfileActionType
} from "./profile-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_IS_LOADING = 'auth/SET_IS_LOADING'
const SET_AVATAR_URL = 'auth/SET_AVATAR_URL'
const SET_IS_AUTH = 'auth/SET_IS_AUTH'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

const initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    isLoading: false,
    avatarUrl: null as string | null,
    captchaUrl: null as string | null, // если null, то капча не обязательна
}
type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                captchaUrl: null,
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
    можно использовать payload - упаковываем данные в объект payload и раскукоживаем в редьюсере
    action - ({type: SET_AVATAR_URL, payload: {avatarUrl}})
    action - ({type: SET_AVATAR_URL, payload: {captchaUrl}})

    case SET_AVATAR_URL:
    case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
 */

export default authReducer


// ====== ACTION-CREATORS ======
type ActionsTypes = SetAuthUserDataActionType | SetAvatarUrlActionType | SetCaptchaUrlActionType | SetIsAuthActionType | SetIsLoadingActionType | SetProfileStatusActionType | SetUserProfileActionType

// установить данные об авторизованном пользователе в стейт
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
    // либо
    // payload: { userId: number, login: string, email: string, isAuth: boolean }
}
export const setAuthUserData = (
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})

// установить аватар авторизованного пользователя в стейт
type SetAvatarUrlActionType = {
    type: typeof SET_AVATAR_URL
    avatarUrl: string | null
}
export const setAvatarUrl = (avatarUrl: string | null): SetAvatarUrlActionType => ({
    type: SET_AVATAR_URL,
    avatarUrl
})

// установить полученную капчу
type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string | null
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
})

// установить флаг авторизован пользователь или нет
type SetIsAuthActionType = {
    type: typeof SET_IS_AUTH
    isAuth: boolean
}
export const setIsAuth = (isAuth: boolean): SetIsAuthActionType => ({
    type: SET_IS_AUTH,
    isAuth
})



/* надо вынести это в локальный стейт */
type SetIsLoadingActionType = {
    type: typeof SET_IS_LOADING
    isLoading: boolean
}
export const setIsLoading = (isLoading: boolean): SetIsLoadingActionType => ({
    type: SET_IS_LOADING,
    isLoading
})



// ====== THUNK-CREATORS ======
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// получить данные об авторизованном пользователе
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    // if (!isAuth) {
    dispatch(setIsLoading(true))

    let data = await authAPI.me()
    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, login, email, true))

        // костыль, получающий аватарку для шапки
        let profileData = await profileAPI.getProfile(id)
        dispatch(setAvatarUrl(profileData.photos.small))

        dispatch(setIsLoading(false))
    }
}

// отправить форму для входа в аккаунт
export const login = (
    email: string, password: string, rememberMe: boolean, captcha: string
): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === ResultCodesEnum.Success) {
        // успех
        await dispatch(getAuthUserData())
    } else if (data.resultCode === ResultCodesEnum.Error) {
        // неверный логин/пароль
        // @ts-ignore
        await dispatch(stopSubmit("login", {_error: 'Неверный логин/пароль'}))
    } else if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        // превышен лимит попыток, нужна капча
        await dispatch(getCaptchaUrl())
    }
}

// выйти из аккаунта
export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setUserProfile(null))
        dispatch(setProfileStatus(''))
        dispatch(setAvatarUrl(null))
    }
}

// получить ссылку для капчи
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    dispatch(setCaptchaUrl(data.url))
}