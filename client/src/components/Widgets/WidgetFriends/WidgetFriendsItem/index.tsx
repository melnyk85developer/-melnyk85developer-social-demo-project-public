import React from "react";
import { NavLink } from "react-router-dom";
import { routeUserProfile } from "pages/UserProfile";
import { FriendsType } from "types/types";
import userPhoto from "../../../../assets/user.png";
import "./styles.scss";

type PropsType = {
    friends: FriendsType
}

const WidgetFriendsItem: React.FC<PropsType> = (props) => {

    return (
        <div className="wrapFriendsWidget">
            <NavLink to={routeUserProfile(props.friends.id)}>
                <div className="friendItem">
                    <img  
                        src={props.friends.photos.small != null 
                        ? props.friends.photos.small 
                        : userPhoto} 
                        alt="ava"
                        className="miniAvatarFriend"
                    />
                    <li className="friendLiItem"><p>{props.friends.name}</p></li>
                </div>
            </NavLink>
        </div>
    )
}
export default WidgetFriendsItem;