import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendChatMessage } from "store/ChatReducer/chatReducer";
import { AppStateType, TypedDispatch } from "store/reduxStore";

const AddMessageFormChat: React.FC<{}> = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const [message, setMessage] = useState('')    
    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if(!message){
            return
        }
        dispatch(sendChatMessage(message))
        setMessage('')
    }
    return (
        <>
            <textarea onChange={(e)=> setMessage(e.currentTarget.value)} value={message}></textarea>
            <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Отправить</button>
        </>
    )
}
export default AddMessageFormChat;