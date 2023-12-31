import React, { ReactNode } from "react";
import "./styles.scss";

type PropsType = {
    messages: string | ReactNode
}

const MessageList: React.FC<PropsType> = (props) => {

    return (
        <div className="messages">
            {props.messages}
        </div>
    )
}
export default MessageList;