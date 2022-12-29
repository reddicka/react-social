import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "29201f9b-a84b-4824-840c-6ad5dd868031"
    }
})

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    updateProfileAvatar(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`)
    }
}


