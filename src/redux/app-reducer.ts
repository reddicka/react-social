import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR'

const initialState = {
    initialized: false,
    globalError: null as string | null
}
type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error
            }
        default:
            return state
    }
}

export default appReducer



// ====== ACTION-CREATORS ======

// инициализация произошла
type SetInitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const setInitializedSuccess = (): SetInitializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS
})

// установка флага глобальной ошибки
type SetGlobalErrorActionType = {
    type: typeof SET_GLOBAL_ERROR
    error: string
}
export const setGlobalError = (error: string): SetGlobalErrorActionType => ({
    type: SET_GLOBAL_ERROR, error
})



// ====== THUNK-CREATORS ======

// начальная инициализация приложения
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then( () => {
            dispatch(setInitializedSuccess())
        })
}

// запуск таймера для очистки поля глобальной ошибки
export const globalErrorHandler = (error: any) => (dispatch: any) => {
    // установка поля ошибки
    dispatch(setGlobalError(error.reason.message))
    // очистка поля ошибки
    // setTimeout(() => {
    //     dispatch(setGlobalErrorSuccess(null))
    // }, 500)
}