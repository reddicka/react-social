const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => (
    { type: UPDATE_NEW_POST_TEXT, newText: newText }
)
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (newText) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: newText }
)



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
    _callSubscriber() {},
    getState() {
        return this._stateTipa
    },

    _addPost() {
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
    _updateNewPostText(newText) {
        this._stateTipa.profilePageData.newPostText = newText
        this._callSubscriber(this._stateTipa.profilePageData)
    },

    _sendMessage() {
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
    _updateNewMessageText(newText) {
        this._stateTipa.dialogsPageData.newMessageText = newText
        this._callSubscriber(this._stateTipa.dialogsPageData)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost()
                break
            case 'UPDATE-NEW-POST-TEXT':
                this._updateNewPostText(action.newText)
                return
            case 'SEND-MESSAGE':
                this._sendMessage()
                break
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._updateNewMessageText(action.newText)
                return
            default:
                break
        }
    }
}

window.store = store

export default store
