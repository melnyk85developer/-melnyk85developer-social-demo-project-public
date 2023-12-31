import React from "react";
import { NavLink } from "react-router-dom";
import { routeUserProfile } from "pages/UserProfile";
import userPhoto from "../../../../assets/user.png";
import { FriendsType } from "types/types";
import "./styles.scss";

type PropsType = {
    friends: FriendsType
}

const YouAreFamiliarItem: React.FC<PropsType> = (props) => {
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

export default YouAreFamiliarItem;