const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
// const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID'

let initialState = {
    // currentUserId: null,
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
        // case SET_CURRENT_USER_ID:
        //     return {
        //         ...state,
        //         currentUserId: action.currentUserId
        //     }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (newText) => (
    {type: UPDATE_NEW_POST_TEXT, newText}
)
export const setProfileInfo = (profileInfo) => (
    {type: SET_PROFILE_INFO, profileInfo}
)
// export const setCurrentUserId = (id) => (
//     {type: SET_CURRENT_USER_ID, id}
// )

export default profileReducer