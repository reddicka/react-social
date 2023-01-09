import {profileAPI, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE_AVATAR = 'profile/SET_PROFILE_AVATAR'


const initialState = {
    profileInfo: null as ProfileType | null,
    profileStatus: '',
    posts: [
        {
            id: 1,
            text: 'Пост про одно 1',
            likes: 12
        },
        {
            id: 2,
            text: 'Пост про другое 2',
            likes: 15
        },
        {
            id: 3,
            text: 'Пост про третье 3',
            likes: 5
        },
    ] as Array<PostType> | [],
    newPostText: '',
}
type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPostText = action.newPostText

            if (newPostText) {
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        {
                            id: state.posts.length + 1,
                            text: action.newPostText,
                            likes: 0
                        },
                    ],
                    newPostText: ''
                }
            }
            return state
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            }
        case SET_PROFILE_AVATAR:
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    photos: {
                        ...action.photos
                    }
                } as ProfileType // затычка, чтоб не ругалось, исправить и убрать (или нет)
            }
        default:
            return state
    }
}

export default profileReducer



// ====== ACTION-CREATORS ======
type ActionsTypes = SetUserProfileActionType | SetProfileStatusActionType | AddPostActionType | DeletePostActionType | SetProfileAvatarActionType

// установка информации о пользователе
export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profileInfo: ProfileType | null
}
export const setUserProfile = (profileInfo: ProfileType | null): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profileInfo
})

// установка статуса пользователя
export type SetProfileStatusActionType = {
    type: typeof SET_PROFILE_STATUS
    profileStatus: string
}
export const setProfileStatus = (profileStatus: string): SetProfileStatusActionType => ({
    type: SET_PROFILE_STATUS,
    profileStatus
})

// добавить пост
type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({
    type: ADD_POST,
    newPostText
})

// удалить пост
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({
    type: DELETE_POST,
    postId
})

// установка нового аватара
type SetProfileAvatarActionType = {
    type: typeof SET_PROFILE_AVATAR
    photos: PhotosType
}
export const setProfileAvatar = (photos: PhotosType): SetProfileAvatarActionType => ({
    type: SET_PROFILE_AVATAR,
    photos
})



// ====== THUNK-CREATORS ======
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

// получить данные для страницы профиля пользователя
export const getUserProfile = (userId: number): ThunkType => async (dispatch, getStore) => {
    // ИСПРАВИТЬ

    // поидее здесь должен быть просто запрос, а какой ID брать - решается в месте вызова
    // так же и со статусом
    // если id в адресе есть, то запрос с ID, если нет, то взять ID в стейте и сделать запрос

    // const meId = getStore().userId

    // let responseMe = await authAPI.me()
    // if (!userId) {
    //     userId = responseMe.data.data.id
    // }

    let profileData = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(profileData))

    // тестовая
    // let responseTest = await profileAPI.getProfileStatus(userId)
    // dispatch(setProfileStatus(responseTest.data))
}

// получить статус какого-то пользователя
export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
    let profileStatus = await profileAPI.getProfileStatus(userId)
    dispatch(setProfileStatus(profileStatus))
}

// отправить свой статус на сервер и, если все ок, то задиспатчить его в стейт
export const updateProfileStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateProfileStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setProfileStatus(status))
        }
    } catch (error) {
        // если поймается ошибка, то она обработается тут и не попадет в глобальную
        console.log('Шота не так')
        console.log(error)
    }
}

// отправить новый аватар на сервер и задиспатчить в стейт
export const updateProfileAvatar = (file: any): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateProfileAvatar(file)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setProfileAvatar(data.data.photos))
    }
}

// отправить объект с новыми данными профиля на сервер целиком (пустые сервер перетрет)
// и запросить новые данные снова
export const updateProfileData = (userData: ProfileType): ThunkType => async (dispatch, getStore) => {
    let data = await profileAPI.updateProfileData(userData)

    if (data.resultCode === ResultCodesEnum.Success) {
        const userId = getStore().auth.userId
        // @ts-ignore
        await dispatch(getUserProfile(userId)) // проблема, в стейте id может не быть, но запрос null в API - хрень
    } else {
        // @ts-ignore
        dispatch(stopSubmit("editProfile", {_error: data.messages[0]}))
        // выплюнет ошибку если надо ее обработать
        return Promise.reject(data.messages[0])
    }
}
