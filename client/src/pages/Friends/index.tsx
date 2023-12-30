import React, { useEffect } from "react";
import routeMain from "./routes";
import FriendsList from "./FriendsList/index";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, 
         getFriends, 
         getFriendsFilter,
         getPageSize} from "store/FriendsReducer/friendsSelectors";
import { TypedDispatch } from "store/reduxStore";
import { requestFriends } from "store/FriendsReducer/friendsReducer";
import "./styles.scss";
import { Col } from "antd";
import LSidebar from "components/LSidebar";
import WidgetYofamiliar from "components/Widgets/WidgetYofamiliar";
import WidgetPeople from "components/Widgets/WidgetsPeople";
import RSidebar from "components/RSidebar";

const Friends: React.FC = () => {
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
        <>
            <LSidebar
                content={
                    <>
                        <WidgetYofamiliar />
                        <div className="wrapFriendsWidgetPeople">
                            <WidgetPeople />
                        </div>
                    </>
                }
            />
            <Col span={12} className="contentFriends">
                {friends.length > 0 
                    &&  <FriendsList friends={friends}/>}
            </Col>
            <RSidebar content={<div></div>} />
        </>
    )
}
export {routeMain};
export default Friends;