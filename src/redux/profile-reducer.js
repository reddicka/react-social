import {authAPI, profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

let initialState = {
    profileInfo: null,
    profileStatus: '',
    posts: [
        {
            id: 1,
            text: 'Пост про письки 1',
            likes: 12
        },
        {
            id: 2,
            text: 'Пост про сиськи 2',
            likes: 15
        },
        {
            id: 3,
            text: 'Пост про жопки 3',
            likes: 5
        },
    ],
    newPostText: '',
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPostText = action.newPostText

            if (newPostText) {
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        {
                            id: state.posts.length + 1,
                            text: action.newPostText,
                            likes: 0
                        },
                    ],
                    newPostText: ''
                }
            }
            return state
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            }
        default:
            return state
    }
}

export default profileReducer

// --- action-creators ---
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo})
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus})
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

// --- thunk-creators ---
// получить данные для страницы профиля пользователя
export const getUserProfile = (userId) => async (dispatch) => {
    // ИСПРАВИТЬ

    // поидее здесь должен быть просто запрос, а какой ID брать - решается в месте вызова
    // так же и со статусом
    // если id в адресе есть, то запрос с ID, если нет, то взять ID в стейте и сделать запрос

    let responseMe = await authAPI.me()
    if (!userId) {
        userId = responseMe.data.data.id
    }

    let responseProfile = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(responseProfile.data))

    // тестовая
    // let responseTest = await profileAPI.getProfileStatus(userId)
    // dispatch(setProfileStatus(responseTest.data))
}

// Получить статус какого-то пользователя
export const getProfileStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(response.data))
}

// Отправить свой статус на сервер и, если все ок, то задиспатчить его в стейт
export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateProfileStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}
