import React, { useEffect } from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import WidgetFriends from "components/Widgets/WidgetFriends/index";
import WidgetPeople from "components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "components/Widgets/WidgetYofamiliar";
import { Col, message } from "antd";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { startChatMessagesListening, stopChatMessagesListening } from "store/ChatReducer/chatReducer";
import { AppStateType, TypedDispatch } from "store/reduxStore";
import "./styles.scss";

const ChatPage: React.FC = () => {

    const dispatch = useDispatch<TypedDispatch>()
    const status = useSelector((state: AppStateType) => state.chat.status)


    useEffect(() => {
        dispatch(startChatMessagesListening())
        return () => {
            dispatch(stopChatMessagesListening())
        }
    }, [])

    return (
        <>
            <LSidebar 
                content={
                    <>
                        <div className="wrapWidgetFriendsProfile">
                            <WidgetYofamiliar/>
                            <WidgetPeople />
                            <WidgetFriends />
                        </div>
                    </>
                }
            />
            <Col span={12} className="contentMusic">
                <h1>This is Chat</h1>
                {status === 'error' && <div>Some error occured. Please refresh the page</div>}
                <Chat />
            </Col>
            <RSidebar 
                content={
                    <>
                        <div className="wrapWidgetFriendsProfile">
                            <WidgetYofamiliar/>
                            <WidgetPeople />
                            <WidgetFriends />
                        </div>
                    </>
                }
            />
        </>
    )
}
export {routeMain};
export default ChatPage;