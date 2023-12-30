import {  GetItemsType, instance, APIResponseType } from "./api";

export const newsAPI = {
    getNews(currentPage = 1, pageSize = 10, term: string = '', friend: undefined | boolean = undefined){
        return (
            instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === undefined ? '' : `&friend=${friend}`))
            .then(res => {
                return res.data;
            })
        )
    },
    follow(id: number){
        return instance.post<APIResponseType>(`follow/${id}`).then(res => res.data) as Promise<APIResponseType>},
    unfollow(id: number){
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<APIResponseType>}
}