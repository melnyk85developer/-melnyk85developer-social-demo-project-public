import { ProfileType } from "types/types";
import { instance } from "./api";


export const userProfileAPI = {
    getUserProfile(userId: number | null | string | undefined){
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data);
    },
    getUserStatus(userId: number | null | string | undefined){
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
    }
}