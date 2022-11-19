const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


let initialState = {
    posts: [
        {
            id: 1,
            text: 'Пост про письки',
            likes: 12
        },
        {
            id: 2,
            text: 'Пост про сиськи',
            likes: 15
        },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    let addPost = () => {
        const newPostText = state.newPostText

        if (newPostText !== '') {
            let newPost = {
                id: state.posts.length + 1,
                text: newPostText,
                likes: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
        }
    }

    let updateNewPostText = (newText) => {
        state.newPostText = newText
    }

    switch (action.type) {
        case 'ADD_POST':
            addPost()
            return state
        case 'UPDATE_NEW_POST_TEXT':
            updateNewPostText(action.newText)
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => (
    { type: UPDATE_NEW_POST_TEXT, newText: newText }
)

export default profileReducer