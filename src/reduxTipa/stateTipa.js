let rerenderEntireTree = () => {
    console.log('rerender')
}

let store = {
    stateTipa: {
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
            newPostText: '',
            addPost() {
                const newPostText = store.stateTipa.profilePageData.newPostText

                if (newPostText !== '') {
                    let newPost = {
                        id: store.stateTipa.profilePageData.posts.length + 1,
                        text: newPostText,
                        likes: 0
                    }

                    store.stateTipa.profilePageData.posts.push(newPost)
                    store.stateTipa.profilePageData.newPostText = ''

                    rerenderEntireTree(store.stateTipa)
                }
            },
            updateNewPostText(newText) {
                store.stateTipa.profilePageData.newPostText = newText
                rerenderEntireTree(store.stateTipa)
            }
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
            ],
            newMessageText: '',
            sendMessage() {
                const newMessageText = store.stateTipa.dialogsPageData.newMessageText

                if (newMessageText !== '') {
                    let myNewMessage = {
                        id: store.stateTipa.dialogsPageData.messages.length + 1,
                        message: newMessageText,
                        type: 'outbox'
                    }

                    store.stateTipa.dialogsPageData.messages.push(myNewMessage)
                    store.stateTipa.dialogsPageData.newMessageText = ''

                    rerenderEntireTree(store.stateTipa)
                }
            },
            updateNewMessageText(newText) {
                store.stateTipa.dialogsPageData.newMessageText = newText
                rerenderEntireTree(store.stateTipa)
            }
        },
    },
    subscribe(observer) {
        rerenderEntireTree = observer
    }
}

window.store = store

export default store
