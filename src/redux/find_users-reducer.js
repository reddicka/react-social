const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullname: 'Василбка',
            // age: 86,
            location: {
                city: 'Perm',
                country: 'Russia'
            },
            avatarUrl: 'https://i.pinimg.com/originals/b3/62/d6/b362d6a5e2eb3f359a6f2995726cb308.jpg',
            status: 'меня лехко найти'
        },
        {
            id: 2,
            followed: false,
            fullname: 'Данилбка',
            // age: 14,
            location: {
                city: 'Гримячька',
                country: 'Russia'
            },
            avatarUrl: 'https://sun9-45.userapi.com/c836427/v836427325/11edb/zZP8vm5Lh3s.jpg',
            status: 'иглаюсь в комьпик'
        },
        {
            id: 3,
            followed: false,
            fullname: 'Чубурашка',
            // age: 20,
            location: {
                city: 'Чубурашкинск',
                country: 'Russia'
            },
            avatarUrl: 'https://pbs.twimg.com/media/FCR8aARVEAEixhl.jpg',
            status: 'челик'
        },
    ]
}

const findUserReducer = (state = initialState, action) => {
    const setUsers = (users) => {
        return {
            ...state,
            users: [...state.users, ...users]
        }
    }

    const toFollow = (userId) => {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === userId) {
                    return {...user, followed: true }
                }
                return user
            })
        }
    }

    const toUnfollow = (userId) => {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === userId) {
                    return {...user, followed: false}
                }
                return user
            })

        }
    }

    switch (action.type) {
        case SET_USERS:
            return setUsers(action.users)
        case FOLLOW:
            return toFollow(action.userId)
        case UNFOLLOW:
            return toUnfollow(action.userId)
        default:
            return state
    }
}

export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export default findUserReducer