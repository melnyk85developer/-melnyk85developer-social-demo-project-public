import React, { useEffect } from "react";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import MessageItem from "./MessageItem/index";
import CompanionItem from "./CompanionItem/index";
import MessageList from "./MessageList/index";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import WidgetFriends from "../../components/Widgets/WidgetFriends/index";
import WidgetPeople from "../../components/Widgets/WidgetsPeople/index";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar/index";
import { requestUsers, actions } from "store/MessagesReducer/messagesReducer";
import { getCurrentPage, 
         getMessage, 
         getPageSize, 
         getUsers, 
         getUsersFilter} from "store/MessagesReducer/messagesSelectors";
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "store/reduxStore";
import routeMain from "./routes";
import "./styles.scss";

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Messages: React.FC= () => {

    const dispatch = useDispatch<TypedDispatch>()

    const users = useSelector(getUsers)
    const messages = useSelector(getMessage)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    filter.friend = true 

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])
    
    let companions = users.map( companions => <CompanionItem
                                key={companions.id}
                                id={companions.id}
                                photos={companions.photos}
                                name={companions.name}
                                surname={companions.surname} 
                            />)
    let cmc = messages.map( message => <MessageItem
                            key={message.id}
                            id={message.id}
                            message={message.message}
                            photos={message.photos}
                            im={message.im}
                        />)

    let addNewMessage = (values: NewMessageFormValuesType) => {
            dispatch(actions.sendMessage(values.newMessageBody))
    }
    return (
        <>
            <LSidebar 
                content={
                    <div className="companions">{companions}</div>
                }
            />
            {messages.length > 0 && <MessageList messages={cmc}/>}
            <div className="wrapTextareaMessages">
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>

            <RSidebar 
                content={
                    <>
                        <div className="wrapMessageWidgetYofamiliar">
                            <WidgetYofamiliar />
                        </div>
                        <div className="wrapMessgeWidgetPeople">
                            <WidgetPeople />
                        </div>
                        <WidgetFriends />
                    </>
                }
            />
        </>
    )
}
export {routeMain};
export default Messages;