// тип профиля пользователя
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

// контакты пользователя
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

// фото пользователя
export type PhotosType = {
    small: string | null
    large: string | null
}

// посты пользователя
export type PostType = {
    id: number
    text: string | null
    likes: number
}

// пользователь (из списка пользователей)
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}