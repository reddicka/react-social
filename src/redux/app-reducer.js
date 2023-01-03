import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'
const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR'

const initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
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

// --- action-creators ---
// инициализация произошла
export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS})
// установка флага глобальной ошибки
export const setGlobalError = (message) => ({type: SET_GLOBAL_ERROR, error: message})

// --- thunk-creators ---
// начальная инициализация приложения
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then( () => {
            dispatch(setInitializedSuccess())
        })
}