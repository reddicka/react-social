let store = {
    _stateTipa: {
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
                const newPostText = this._stateTipa.profilePage.newPostText

                if (newPostText !== '') {
                    let newPost = {
                        id: this._stateTipa.profilePage.posts.length + 1,
                        text: newPostText,
                        likes: 0
                    }

                    this._stateTipa.profilePage.posts.push(newPost)
                    this._stateTipa.profilePage.newPostText = ''

                    this._callSubscriber(this._stateTipa)
                }
            },
            updateNewPostText(newText) {
                this._stateTipa.profilePage.newPostText = newText
                this._callSubscriber(this._stateTipa.profilePage)
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
                const newMessageText = this._stateTipa.dialogsPage.newMessageText

                if (newMessageText !== '') {
                    let myNewMessage = {
                        id: this._stateTipa.dialogsPage.messages.length + 1,
                        message: newMessageText,
                        type: 'outbox'
                    }

                    this._stateTipa.dialogsPage.messages.push(myNewMessage)
                    this._stateTipa.dialogsPage.newMessageText = ''

                    this._callSubscriber(this._stateTipa)
                }
            },
            updateNewMessageText(newText) {
                this._stateTipa.dialogsPage.newMessageText = newText
                this._callSubscriber(this._stateTipa.dialogsPage)
            }
        },
    },
    getState() {
       return this._stateTipa
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

window.store = store

export default store
