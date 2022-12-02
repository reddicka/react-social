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

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, userData: {userId, login, email}})
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})
export const setAvatarUrl = (avatarUrl) => ({type: SET_IS_LOADING, avatarUrl})

export default authReducer