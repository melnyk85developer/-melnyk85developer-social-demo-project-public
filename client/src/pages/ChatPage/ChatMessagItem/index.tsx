import React from "react";
import { ChatMessageAPIType } from "services/chatAPI";

const ChatMessagItem: React.FC<{message: ChatMessageAPIType}> = React.memo(({message}) => {

    return (
        <>
            <img src={message.photo} style={{width: '40px', height: '40px'}}/> 
            <h4>{message.userName}</h4>
            <b>{message.message}</b>
            <hr/>
        </>
    )
})
export default ChatMessagItem;