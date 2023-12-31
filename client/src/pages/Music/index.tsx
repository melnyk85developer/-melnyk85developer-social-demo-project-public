import React from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import WidgetFriends from "components/Widgets/WidgetFriends/index";
import WidgetPeople from "components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "components/Widgets/WidgetYofamiliar";
import "./styles.scss";
import { Col } from "antd";

const Music: React.FC = () => {
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
            <Col span={12} className="contentMusic">
                <h1>This is Music</h1>
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
export default Music;