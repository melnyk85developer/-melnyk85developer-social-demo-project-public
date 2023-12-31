import React from "react";
import { NavLink } from "react-router-dom";
import { routeUserProfile } from "pages/UserProfile";
import userPhoto from "../../../assets/user.png";
import { FriendsType } from "types/types";
import "./styles.scss";
import { Col } from "antd";

type PropsType = {
    friends: FriendsType
}

const friendItem: React.FC<PropsType> = (props) => {
    return (
        <Col className="wrapFriendsItem">
            <NavLink to={routeUserProfile(props.friends.id)}>
                <div className="friendsItem">
                    <img  
                        src={props.friends.photos.small != null 
                            ? props.friends.photos.small 
                            : userPhoto} 
                        alt="ava"
                        className="friendsAvatar"
                    />
                    <li className="friendsItem"><p>{props.friends.name}</p></li>
                    <li className="friendsSurname"><p>{props.friends.surname}</p></li>
                    <div className="messageText">
                        <p>Написать Сообшение</p>
                    </div>
                </div>
            </NavLink>
        </Col>
    )
}
export default friendItem;