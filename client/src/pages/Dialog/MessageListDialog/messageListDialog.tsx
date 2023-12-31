import React, { ReactNode } from "react";

type PropsType = {
    messages: string | ReactNode
}

const MessageListDialog: React.FC<PropsType> = (props) => {
    return (
        <div className="messages">
            {props.messages}
        </div>
    )
}

export default MessageListDialog;