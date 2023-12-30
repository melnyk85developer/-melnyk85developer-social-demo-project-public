import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { TypedDispatch } from "store/reduxStore";
import { routeLogin } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfiles, setMyStatus } from "store/MyProfileReducer/myProfilesSelectors";
import { getAuth } from "store/AuthReducer/authSelectors";
import { 
    getMyProfile, 
    getMyStatus, 
    updateMyStatus, 
    savePhoto,
    saveMyProfile } from "store/MyProfileReducer/myProfileReducer";
import LSidebar from "../../components/LSidebar";
import Avatar from "./Avatar/index";
import RSidebar from "../../components/RSidebar";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import Info from "./Info/index";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "components/Priloader";
import routeMyProfile from "./routes";
import "./styles.scss";
import { Col, Row } from "antd";

const MyProfile: React.FC = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const myProfile = useSelector(getMyProfiles)
    const myProfileStatus = useSelector(setMyStatus)
    const authorizedUserId = useSelector(getAuth)

    let userId: number | null | string | undefined = authorizedUserId.id
    
    if(userId === undefined){
        <Navigate to={routeLogin()}/>
    }
    if(userId === ":id"){
        userId = authorizedUserId.id
        console.log(userId)
    }

    // const refreshProfile = (userId: string | undefined | number | null) => {
    //     // const {profileId} = useParams()

    //     if(userId === ":id"){

    //     }else{
    //         dispatch(getProfile(userId as number))
    //         dispatch(getStatus(userId as number))
    //     }
    // }

    useEffect(() => {
        dispatch(getMyProfile(userId as number))
        dispatch(getMyStatus(userId as number))
        // refreshProfile(userId)
    }, [userId])

    return (
        <>
            {myProfile ? (
                <>
                    <LSidebar 
                        content={
                            <> 
                                <Avatar 
                                    key={myProfile.userId}
                                    isOwner={userId === authorizedUserId.id ? true : false}
                                    savePhoto={savePhoto}
                                    avatar={myProfile.photos.small} />
                                <div className="wrapWidgetFriendsProfile">
                                    <WidgetFriends />
                                </div>
                                <div className="wrapWidgetPeopleProfile">
                                    <WidgetPeople />
                                </div>
                            </>
                        }
                    />
                    <Col span={12} className="contentProfiles">
                        <Info   
                            key={myProfile.userId} 
                            isOwner={userId === authorizedUserId.id ? true : false} 
                            status={myProfileStatus} 
                            updateStatus={updateMyStatus} 
                            profile={myProfile}
                        />
                        <MyPostsContainer />
                    </Col>
                    <RSidebar 
                        content={
                            <>
                                <WidgetYofamiliar/>
                            </>
                        }
                    />
                </>
                ) : <Preloader />
            }
        </>
    )
}
export {routeMyProfile};
export default MyProfile;