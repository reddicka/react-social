import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR'

const initialState = {
    initialized: false,
    globalError: null as string | null
}
type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
type ActionsTypes = SetInitializedSuccessActionType | SetGlobalErrorActionType

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
type InitializeAppThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes> // без async

// начальная инициализация приложения
export const initializeApp = (): InitializeAppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then( () => {
            dispatch(setInitializedSuccess())
        })
}

// запуск таймера для очистки поля глобальной ошибки
type GlobalErrorHandlerThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes> // без async
export const globalErrorHandler = (error: any): GlobalErrorHandlerThunkType => (dispatch) => {
    // установка поля ошибки
    dispatch(setGlobalError(error.reason.message))
    // очистка поля ошибки
    // setTimeout(() => {
    //     dispatch(setGlobalErrorSuccess(null))
    // }, 500)
}