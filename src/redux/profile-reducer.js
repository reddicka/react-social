import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

let initialState = {
    profileInfo: null,
    posts: [
        {
            id: 2,
            text: 'Пост про сиськи',
            likes: 15
        },
        {
            id: 1,
            text: 'Пост про письки',
            likes: 12
        },
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPostText = state.newPostText

            if (newPostText !== '') {
                return {
                    ...state,
                    posts: [
                        {
                            id: state.posts.length + 1,
                            text: newPostText,
                            likes: 0
                        },
                        ...state.posts,
                    ],
                    newPostText: ''
                }
            }
            break
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        default:
            return state
    }
}

export default profileReducer

// actions
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (newText) => (
    {type: UPDATE_NEW_POST_TEXT, newText}
)
export const setProfileInfo = (profileInfo) => (
    {type: SET_PROFILE_INFO, profileInfo}
)

// thunk-creators
export const getProfileData = (userId = 2) => {
    return (dispatch) => {
        // ПО ХОРОШЕМУ СДЕЛАТЬ ФЛАГ ЗАГРУЗКИ И СЕТАТЬ ЕГО ДО/ПОСЛЕ

        // let userId = id
        // if (!userId) {userId = 2}
        // if (this.props.currentUserId) {

        usersAPI.isAuthorized()
            .then(data => {
                (data.resultCode === 0) &&
                (userId = data.data)
            })

        usersAPI.getProfileData(userId)
            .then(data => {
                dispatch(setProfileInfo(data))
                // this.props.setProfileInfo(response.data.userId)
                // console.log(response.data.userId)
            })
        // }
    }
}

