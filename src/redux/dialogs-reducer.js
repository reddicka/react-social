const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    let sendMessage = () => {
        const newMessageText = state.newMessageText

        if (newMessageText !== '') {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length + 1,
                        message: newMessageText,
                        type: 'outbox'
                    }
                ],
                newMessageText: ''
            }
        }
    }

    let updateNewMessageText = (newText) => {
        return {
            ...state,
            newMessageText: newText
        }
    }

    switch (action.type) {
        case SEND_MESSAGE:
            return sendMessage()
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(action.newText)
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (newText) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: newText }
)

export default dialogsReducer