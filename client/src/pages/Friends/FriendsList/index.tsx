import React from "react";
import FriendsItem from "../FriendsItem";
import "./styles.scss";
import { FriendsType } from "types/types";
import { Col } from "antd";

type PropsType = {
    friends: Array<FriendsType>
}

const FriendsList: React.FC<PropsType> = (props) => {
    return (
        <Col className="wrapFriendsList">
            {props.friends.map( item => (
                <FriendsItem key={item.id} friends={item}/>
            ))}
        </Col> 
    )
}
export default FriendsList;