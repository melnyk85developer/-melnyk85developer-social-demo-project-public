import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "store/reduxStore";
import { getCurrentPage, getPageSize, getUsers, getUsersFilter } from "store/UsersReducer/usersSelectors";
import { requestUsers } from "store/UsersReducer/usersReducer";
import WidgetsPeopleList from "./WidgetsPeopleList";
import { UserType } from "types/types";
import "./styles.scss";

const WidgetPeople: React.FC = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const users = useSelector(getUsers)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const currentPage = useSelector(getCurrentPage)

    // const [localStateUsers, setLocalStateUsers] = useState<UserType[]>([])

    let people = users.filter( item => {
        return item.photos.small != null && item.followed !== true
    })

    // setLocalStateUsers(people)

    // console.log(users)

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [dispatch])
    
    return (
        <div className="wrapPeople">
            <div className="borderWidgets">
            <div className="wrapH4Widgets">
                <h4>Люди</h4>
            </div>
                <div className="widgetFriends">
                    <WidgetsPeopleList users={people.slice(0,9)} />
                </div>
            </div>
        </div>
    )
}

export default WidgetPeople;