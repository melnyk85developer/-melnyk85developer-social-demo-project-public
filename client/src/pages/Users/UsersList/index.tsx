import React from "react";
import UsersItem from "../UsersItem";
import { UserType } from "types/types";

export type PropsType = {
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const UsersList: React.FC<PropsType> = (props) => {

    return (
        <div className="wrapFriendsList">
            {props.users.map( (user) => (
                <UsersItem 
                    key={user.id}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    user={user}
                    followingInProgress={props.followingInProgress} 
                    userDetailPage={undefined} 
                />
            ))}
        </div> 
    )
}
export default UsersList;