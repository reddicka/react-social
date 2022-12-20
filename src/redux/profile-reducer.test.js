import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
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

// add new post
it('after adding length of posts should be incremented', () => {
    // 1. test data
    let action = addPost('текст нового поста')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
})

it('text of new post should be correct', () => {
    // 1. test data
    let action = addPost('текст нового поста')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[3].text).toBe('текст нового поста')
})

// delete post
it('after deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(3)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(2)
})

it("after deleting length shouldn't be decrement if ID is incorrect", () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
})