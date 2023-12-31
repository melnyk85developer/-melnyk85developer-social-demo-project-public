import React from "react";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import WidgetFriends from "components/Widgets/WidgetFriends/index";
import WidgetPeople from "components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "components/Widgets/WidgetYofamiliar";
import { NavLink } from 'react-router-dom';
import { routeMain as routeHome } from '../Home';
import { routeMain as routeNews } from '../News';
import { routeMain as routeContacts } from '../Contacts';
import routeMain from "./routes";
import "./styles.scss";
import { Col } from "antd";

const Video = () => {
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
            <Col span={12} className="contentVideo">
                <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to={routeHome()}>Home</NavLink></li>
                            <li><NavLink to={routeNews()}>News</NavLink></li>
                            <li><NavLink to={routeContacts()}>Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <h1> This is Video</h1>
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
export default Video;