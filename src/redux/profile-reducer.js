import {authAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const DELETE_POST = 'DELETE_POST'

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

// actions
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo})
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus})

// thunk-creators
export const getUserProfile = (userId = 2) => {
    return (dispatch) => {
        // ПО ХОРОШЕМУ СДЕЛАТЬ ФЛАГ ЗАГРУЗКИ И СЕТАТЬ ЕГО ДО/ПОСЛЕ

        // let userId = id
        // if (!userId) {userId = 2}
        // if (this.props.currentUserId) {

        authAPI.me()
            .then(data => {
                (data.resultCode === 0) && (userId = data.data)
            })

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
                // this.props.setUserProfile(response.data.userId)
                // console.log(response.data.userId)
            })
        // }
    }
}

// Получить статус какого-то пользователя
export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(status => {
                dispatch(setProfileStatus(status))
            })
    }
}

// Отправить свой статус на сервер и, если все ок, то задиспатчить его в стейт
export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}
