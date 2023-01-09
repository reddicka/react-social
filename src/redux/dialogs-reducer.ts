const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
    type: 'inbox' | 'outbox'
}

const initialState = {
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
    ] as Array<DialogType> | [],
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
    ] as Array<MessageType> | []
}
type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            if (action.newMessageText) {
                return {
                    ...state,
                    messages: [
                        ...state.messages,
                        {
                            id: state.messages.length + 1,
                            message: action.newMessageText,
                            type: 'outbox'
                        }
                    ]
                }
            }
            return state
        }
        default: return state
    }
}

export default dialogsReducer



// ====== ACTION-CREATORS ======
type ActionsTypes = SendMessageActionType

// добавить новое сообщение в стейт
type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export const setNewMessage = (newMessageText: string):SendMessageActionType => ({
    type: SEND_MESSAGE,
    newMessageText
})



// ====== THUNK-CREATORS ======

// -
