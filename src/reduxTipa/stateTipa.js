import {rerenderEntireTree} from "../render";

let stateTipa = {
    profilePageData: {
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
    },
    dialogsPageData: {
        dialogs: [
            {
                id: 1,
                name: 'Стасян'
            },
            {
                id: 2,
                name: 'Василка'
            },
            {
                id: 3,
                name: 'Данилбка'
            },
            {
                id: 4,
                name: 'Танюха'
            }
        ],
        messages: [
            {
                id: 1,
                message: 'Вам песьмо такое',
                type: 'inbox'
            },
            {
                id: 2,
                message: 'А я ему такое',
                type: 'outbox'
            },
            {
                id: 3,
                message: 'Привет',
                type: 'inbox'
            },
            {
                id: 4,
                message: 'Привет писька',
                type: 'outbox'
            }
        ]
    }
}

export let addPost = () => {
    let newPostText = stateTipa.profilePageData.newPostText

    if (newPostText !== '') {
        let newPost = {
            id: stateTipa.profilePageData.posts.length + 1,
            text: newPostText,
            likes: 0
        }

        stateTipa.profilePageData.posts.push(newPost)
        stateTipa.profilePageData.newPostText = ''

        rerenderEntireTree(stateTipa)
    }
}

export let updateNewPostText = (newText) => {
    stateTipa.profilePageData.newPostText = newText
    rerenderEntireTree(stateTipa)
}

export default stateTipa
