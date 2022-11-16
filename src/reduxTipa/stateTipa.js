let store = {
    _stateTipa: {
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
            ],
            newMessageText: ''
        },
    },
    getState() {
        return this._stateTipa
    },

    addPost() {
        const newPostText = this._stateTipa.profilePageData.newPostText

        if (newPostText !== '') {
            let newPost = {
                id: this._stateTipa.profilePageData.posts.length + 1,
                text: newPostText,
                likes: 0
            }

            this._stateTipa.profilePageData.posts.push(newPost)
            this._stateTipa.profilePageData.newPostText = ''

            this._callSubscriber(this._stateTipa)
        }
    },
    updateNewPostText(newText) {
        this._stateTipa.profilePageData.newPostText = newText
        this._callSubscriber(this._stateTipa.profilePageData)
    },

    sendMessage() {
        const newMessageText = this._stateTipa.dialogsPageData.newMessageText

        if (newMessageText !== '') {
            let myNewMessage = {
                id: this._stateTipa.dialogsPageData.messages.length + 1,
                message: newMessageText,
                type: 'outbox'
            }

            this._stateTipa.dialogsPageData.messages.push(myNewMessage)
            this._stateTipa.dialogsPageData.newMessageText = ''

            this._callSubscriber(this._stateTipa)
        }
    },
    updateNewMessageText(newText) {
        this._stateTipa.dialogsPageData.newMessageText = newText
        this._callSubscriber(this._stateTipa.dialogsPageData)
    },

    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

window.store = store

export default store
