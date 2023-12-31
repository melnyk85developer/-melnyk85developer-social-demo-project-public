import React, { useEffect } from "react";
import routeMain from "./routes";
import YouAreFamiliarList from "./YouAreFamiliarList";
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "store/reduxStore";
import { requestFriends } from "store/FriendsReducer/friendsReducer";
import { getCurrentPage, 
         getFriends, 
         getFriendsFilter, 
         getPageSize } from "store/FriendsReducer/friendsSelectors";
import "./styles.scss";

const WidgetYofamiliar: React.FC = () => {

    const dispatch = useDispatch<TypedDispatch>()

    const friends = useSelector(getFriends)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFriendsFilter)

    filter.friend = true 

    useEffect(() => {
        dispatch(requestFriends(currentPage, pageSize, filter))
    }, [dispatch])

    return (
        <div className="wrapYofamiliar">
            <div className="borderWidgets">
            <div className="wrapH4Widgets">
                <h4>Возможно Вы знакомы</h4>
            </div>
                <div className="widgetFriends">
                    {friends.length > 0 && <YouAreFamiliarList friends={friends.slice(0,6)}/>}
                </div>
            </div>
        </div>
    )
}
export {routeMain};
export default WidgetYofamiliar;