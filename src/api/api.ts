import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../types/types";
import {getFollowingStatus} from "../redux/profile-reducer";

// коды ответа сервера
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

// инстанс запроса
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "29201f9b-a84b-4824-840c-6ad5dd868031"
    }
})

// api для взаимодействия с другими пользователями
type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

type FollowResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type UnfollowResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
    },
    getFollowingStatus(userId: number) {
        return instance.get<boolean>(`follow/${userId}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<FollowResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<UnfollowResponseType>(`follow/${userId}`).then(res => res.data)
    }
}

// api для получения профилей, статусов, обновления информации
type UpdateProfileStatusResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type UpdateProfileAvatarResponseType = {
    data: {
        photos: PhotosType
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type UpdateProfileDataResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getProfileStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return instance.put<UpdateProfileStatusResponseType>(`profile/status`, {status}).then(res => res.data)
    },
    updateProfileAvatar(photoFile: any) {
        let formData = new FormData()

        formData.append('image', photoFile)
        return instance.put<UpdateProfileAvatarResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfileData(userData: ProfileType) {
        return instance.put<UpdateProfileDataResponseType>(`profile`, userData).then(res => res.data)
    }
}

// api для авторизации
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

type LogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`).then(res => res.data)
    }
}

// api для безопасности
type GetCaptchaResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaResponseType>(`/security/get-captcha-url`).then(res => res.data)
    }
}
