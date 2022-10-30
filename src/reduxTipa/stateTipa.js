let stateTipa = {
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
        ]
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
        ]
    }
}

export default stateTipa
