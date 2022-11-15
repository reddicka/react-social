let store = {
    stateTipa: {
        profilePage: {
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
                const newPostText = store.stateTipa.profilePage.newPostText

                if (newPostText !== '') {
                    let newPost = {
                        id: store.stateTipa.profilePage.posts.length + 1,
                        text: newPostText,
                        likes: 0
                    }

                    store.stateTipa.profilePage.posts.push(newPost)
                    store.stateTipa.profilePage.newPostText = ''

                    store.rerenderEntireTree(store.stateTipa)
                }
            },
            updateNewPostText(newText) {
                store.stateTipa.profilePage.newPostText = newText
                store.rerenderEntireTree(store.stateTipa)
            }
        },
        dialogsPage: {
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
                const newMessageText = store.stateTipa.dialogsPage.newMessageText

                if (newMessageText !== '') {
                    let myNewMessage = {
                        id: store.stateTipa.dialogsPage.messages.length + 1,
                        message: newMessageText,
                        type: 'outbox'
                    }

                    store.stateTipa.dialogsPage.messages.push(myNewMessage)
                    store.stateTipa.dialogsPage.newMessageText = ''

                    store.rerenderEntireTree(store.stateTipa)
                }
            },
            updateNewMessageText(newText) {
                store.stateTipa.dialogsPage.newMessageText = newText
                store.rerenderEntireTree(store.stateTipa)
            }
        },
    },
    rerenderEntireTree() {},
    subscribe(observer) {
        store.rerenderEntireTree = observer
    }
}

window.store = store

export default store
