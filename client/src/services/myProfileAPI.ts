import { PhotosType, ProfileType } from "types/types";
import { APIResponseType, instance } from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const myProfileAPI = {
    getMyProfileAPI(userId: number | null | string | undefined){
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data);
    },
    getMyStatusAPI(userId: number | null | string | undefined){
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
    },
    updateMyStatusAPI(status: string){
        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data);
    },
    saveMyPhoto(photoFile: File){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data);
    },
    saveMyProfileAPI(profile: ProfileType){
        return instance.put<APIResponseType>(`profile`, profile).then(res => res.data);
    }
}