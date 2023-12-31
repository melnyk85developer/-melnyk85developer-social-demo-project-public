import React, { useEffect, useState } from "react";
import ChatMessages from "../ChatMessages";
import AddMessageFormChat from "../AddMessageFormChat";
import { Col } from "antd";
import './styles.scss'


const Chat: React.FC = (props) => {

    return (
        <Col className="chat">
            <ChatMessages />
            <AddMessageFormChat />
        </Col>
    )
}
export default Chat;