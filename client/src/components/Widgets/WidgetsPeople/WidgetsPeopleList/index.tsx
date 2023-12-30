import React from "react";
import WidgetPeopleItem  from "../WidgetPeopleItem";
import { UserType } from "types/types";

export type PropsType = {
    users: Array<UserType>
}

const WidgetsPeopleList: React.FC<PropsType> = (props) => {

    return (
        <div>
            {props.users.map( (user) => (
                <WidgetPeopleItem 
                    key={user.id}
                    user={user}
                />
            ))}
        </div> 
    )
}
export default WidgetsPeopleList;