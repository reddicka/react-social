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
    const stateCopy = {...state}

    let sendMessage = () => {
        stateCopy.dialogs = [...state.dialogs]
        stateCopy.messages = [...state.messages]

        const newMessageText = stateCopy.newMessageText

        if (newMessageText !== '') {
            let myNewMessage = {
                id: stateCopy.messages.length + 1,
                message: newMessageText,
                type: 'outbox'
            }

            stateCopy.messages.push(myNewMessage)
            stateCopy.newMessageText = ''
        }
    }

    let updateNewMessageText = (newText) => {
        stateCopy.newMessageText = newText
    }

    switch (action.type) {
        case 'SEND_MESSAGE':
            sendMessage()
            return stateCopy
        case 'UPDATE_NEW_MESSAGE_TEXT':
            updateNewMessageText(action.newText)
            return stateCopy
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (newText) => (
    { type: UPDATE_NEW_MESSAGE_TEXT, newText: newText }
)

export default dialogsReducer