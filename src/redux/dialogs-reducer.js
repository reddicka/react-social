const SEND_MESSAGE = 'dialogs/SEND_MESSAGE'

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
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

// --- actions ---
export const setNewMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

// --- thunk-creators ---
// -

export default dialogsReducer