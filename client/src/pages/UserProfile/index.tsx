import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { TypedDispatch } from "store/reduxStore";
import { routeLogin } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setUserStatus, userProfiles } from "store/UserProfileReducer/userProfilesSelectors";
import {  getUserProfile, getUserStatus } from "store/UserProfileReducer/userProfileReducer";
import LSidebar from "../../components/LSidebar";
import Avatar from "./Avatar/index";
import RSidebar from "../../components/RSidebar";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import Info from "./Info/index";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "components/Priloader";
import routeUserProfile from "./routes";
import "./styles.scss";

const UserProfile: React.FC = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const userProfile = useSelector(userProfiles)
    const userProfileStatus = useSelector(setUserStatus)

    const {id} = useParams();
    let userId = id;

    const refreshProfile = (userId: number | null | string | undefined) => {

        if(userId === ":id"){
            <Navigate to={routeLogin()}/>
        }
        if(userId === undefined){
            userId = id
        }
        dispatch(getUserProfile(userId as number))
        dispatch(getUserStatus(userId as number))
    }

    useEffect(() => {
        refreshProfile(userId)
    }, [userId])

    return (
        <>
            {userProfile ? (
                <section className="wrapContent">
                    <LSidebar 
                        content={
                            <> 
                                <Avatar 
                                    key={userProfile.userId}
                                    avatar={userProfile.photos.small} />
                                <div className="wrapWidgetFriendsProfile">
                                    <WidgetFriends />
                                </div>
                                <div className="wrapWidgetPeopleProfile">
                                    <WidgetPeople />
                                </div>
                            </>
                        }
                    />
                    <div className="contentProfiles">
                        <Info   
                            key={userProfile.userId} 
                            status={userProfileStatus} 
                            profile={userProfile}
                        />
                        <MyPostsContainer />
                    </div>
                    <RSidebar 
                        content={
                            <>
                                <WidgetYofamiliar/>
                            </>
                        }
                    />
                </section>
                ) : <Preloader />
            }
        </>
    )
}
export {routeUserProfile};
export default UserProfile;
