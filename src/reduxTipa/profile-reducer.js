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
    const stateCopy = {...state} // Создаём копию для иммутабельности

    let addPost = () => {
        stateCopy.posts = [...state.posts]

        const newPostText = stateCopy.newPostText

        if (newPostText !== '') {
            let newPost = {
                id: stateCopy.posts.length + 1,
                text: newPostText,
                likes: 0
            }

            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
        }
    }

    let updateNewPostText = (newText) => {
        stateCopy.newPostText = newText
    }

    switch (action.type) {
        case 'ADD_POST':
            addPost()
            return stateCopy
        case 'UPDATE_NEW_POST_TEXT':
            updateNewPostText(action.newText)
            return stateCopy
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => (
    { type: UPDATE_NEW_POST_TEXT, newText: newText }
)

export default profileReducer