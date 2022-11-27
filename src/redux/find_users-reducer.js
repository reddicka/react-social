const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'

const initialState = {
    users: [],
    currentPage: 1,
    totalUsers: 0,
    pageSize: 20
}

const findUserReducer = (state = initialState, action) => {
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

    const setUsers = (users) => {
        return {
            ...state,
            users
        }
    }

    const setCurrentPage = (currentPage) => {
        return {
            ...state,
            currentPage
        }
    }

    const setTotalUsers = (totalUsers) => {
        return {
            ...state,
            totalUsers
        }
    }
    window.state = state
    switch (action.type) {
        case FOLLOW:
            return toFollow(action.userId)
        case UNFOLLOW:
            return toUnfollow(action.userId)
        case SET_USERS:
            return setUsers(action.users)
        case SET_CURRENT_PAGE:
            return setCurrentPage(action.currentPage)
        case SET_TOTAL_USERS:
            return setTotalUsers(action.totalUsers)
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersAC = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })

export default findUserReducer