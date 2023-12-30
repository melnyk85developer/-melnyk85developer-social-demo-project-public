import { Col } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ChatMessagItem from "../ChatMessagItem";
import { useSelector } from "react-redux";
import './styles.scss'
import { AppStateType } from "store/reduxStore";

const ChatMessages: React.FC = React.memo((props) => {

    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if(Math.abs( (element.scrollHeight - element.scrollTop) - element.clientHeight ) < 300){
            !isAutoScroll && setIsAutoScroll(true)
        }else{
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if(isAutoScroll){
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <Col className="chatMessages wrapFriendsList" onScroll={scrollHandler}>
            {messages.map((m, index) => <ChatMessagItem key={m.id} message={m}/> )}
            <div ref={messagesAnchorRef}></div>
        </Col>
    )
})
export default ChatMessages;