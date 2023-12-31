export type ProfileType = {
    userId: string | number | null | undefined
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}
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
export type PhotosType = {
    small: string | null
    large: string | null
}
export type PostsType = {
    id: number | string | null | undefined
    post: string
    like: number
    dislike: number
}
export type UserType = {
    id: number
    name: string
    surname: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type FriendsType = {
    id: number
    name: string
    surname: string
    status: string
    photos: PhotosType
    followed: boolean
}