import React from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
// import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar/index";
import "./styles.scss";
import { useSelector } from "react-redux";
import { getFriends } from "store/FriendsReducer/friendsSelectors";
import { getMessage } from "store/MessagesReducer/messagesSelectors";
import CompanionItemDialog from "./CompanionItemDialog/companionItemDialog";
import MessageItemDialog from "./MessageItemDialog/messageItemDialog";
import MessageListDialog from "./MessageListDialog/messageListDialog";


const Dialog: React.FC = () => {
    const friends = useSelector(getFriends)
    const messages = useSelector(getMessage)

    let companion = friends.map( companion => <CompanionItemDialog
                                 key={companion.id}
                                 id={companion.id}
                                 photos={companion.photos}
                                 name={companion.name}
                                 surname={companion.surname} 
                            />)

    let cmc = messages.map( message => <MessageItemDialog
                            key={message.id}
                            id={message.id}
                            message={message.message}
                            photos={message.photos}
                            im={message.im}
                        />)

    return (
        <section>
            <div className="wrapContent">
                <LSidebar 
                    content={
                        <div className="companions">{companion}</div>
                    }
                />
                <div className="contentProfiles">
                    <p>Диалог с пользователем</p>
                    {messages.length > 0 && <MessageListDialog messages={cmc}/>}
                </div>
                <RSidebar 
                    content={
                        <>
                            {/* <WidgetYofamiliar /> */}
                        </>
                    }
                />
            </div>
        </section>
    )
}
export {routeMain};
export default Dialog;