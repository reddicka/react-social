import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export default appReducer

// action-creators
export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS})

// thunk-creators
export const initializeApp = () => dispatch => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then( () => {
            dispatch(setInitializedSuccess())
        })
}