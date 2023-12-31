import React from "react";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { routeMain as routeMessages }  from '../../pages/Messages';
import { routeMain as routeMusic } from '../../pages/Music';
import { routeMain as routeShops } from '../../pages/Shops';
import { routeMain as routeVideo } from '../../pages/Video';
import { routeMain as routeFriends } from '../../pages/Friends/index';
import { routeMain as routeUsers } from '../../pages/Users';
import { routeMain as routeChat } from '../../pages/ChatPage';
import { AppStateType } from "store/reduxStore";
import { routeMyProfile }  from '../../pages/MyProfile';
import { getAuth } from "store/AuthReducer/authSelectors";
import "./styles.scss";

const LeftNav: React.FC = () => {
    const authorizedUserId = useSelector(getAuth)
    let userId = authorizedUserId.id

    return (
        <nav className="Left_nav">
            <div className="Left_menu">
                <div className="LSidebar_Nav">
                    <ul>
                        <li><NavLink to={routeMyProfile(userId)} >Profile</NavLink></li>
                        <li><NavLink to={routeMessages()} >Message</NavLink></li>
                        <li><NavLink to={routeFriends()} >Friends</NavLink></li>
                        <li><NavLink to={routeMusic()} >Music</NavLink></li>
                        <li><NavLink to={routeVideo()} >Video</NavLink></li>
                        <li><NavLink to={routeShops()} >Shops</NavLink></li>
                        <li><NavLink to={routeUsers()} >Users</NavLink></li>
                        <li><NavLink to={routeChat()} >Chat</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
let mapStateToProps = (state: AppStateType) => ({
    authorizedUserId: state.auth.id,
})
export default compose(connect(mapStateToProps))(LeftNav);;