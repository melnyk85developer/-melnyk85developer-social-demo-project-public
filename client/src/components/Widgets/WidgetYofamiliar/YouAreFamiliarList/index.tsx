import React from "react";
import YouAreFamiliarItem from "../YouAreFamiliarItem";
import { FriendsType } from "types/types";

type PropsType = {
    friends: Array<FriendsType>
}

const YouAreFamiliarList: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.friends.map( item => (
                <YouAreFamiliarItem key={item.id} friends={item}/>
            ))}
        </>
    )
}
export default YouAreFamiliarList;