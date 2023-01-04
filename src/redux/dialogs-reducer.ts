const SEND_MESSAGE: string = 'dialogs/SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
    type: 'inbox' | 'outbox'
}

export type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

let initialState: InitialStateType = {
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

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case typeof SEND_MESSAGE: {
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

// --- actions ---
type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}
export const setNewMessage = (newMessageText: string):SendMessageActionType => ({type: SEND_MESSAGE, newMessageText})

// --- thunk-creators ---
// -

export default dialogsReducer

// export type InitialStateType = typeof initialState