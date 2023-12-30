import React from "react";
import { NavLink } from "react-router-dom";
import { routeUserProfile } from "pages/UserProfile";
import userPhoto from "../../../../assets/user.png";
import { UserType } from "types/types";
import "./styles.scss";

type PropsType = {
    user: UserType
}
const WidgetPeopleItem: React.FC<PropsType>  = (props) => {
    return (
        <div className="wrapFriendsWidget">
            <NavLink to={routeUserProfile(props.user.id)}>
                <div className="friendItem">
                    <img 
                        src={ props.user.photos.small != null 
                        ? props.user.photos.small 
                        : userPhoto} 
                        className="miniAvatarFriend" 
                        alt="ava"/>
                    <li className="friendLiItem"><p>{props.user.name}</p></li>
                </div>
            </NavLink>
        </div>
    )
}

export default WidgetPeopleItem;