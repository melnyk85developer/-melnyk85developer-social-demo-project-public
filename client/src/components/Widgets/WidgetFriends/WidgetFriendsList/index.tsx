import React from "react";
import WidgetFriendsItem from "../WidgetFriendsItem";
import { FriendsType } from "types/types";

type PropsType = {
    friends: Array<FriendsType>
}

const WidgetFriendsList: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.friends.map( item => (
                <WidgetFriendsItem key={item.id} friends={item}/>
            ))}
        </>
    )
}
export default WidgetFriendsList;