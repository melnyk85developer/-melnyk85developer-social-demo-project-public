import React from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import WidgetFriends from "components/Widgets/WidgetFriends";
import WidgetPeople from "components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "components/Widgets/WidgetYofamiliar";
import { Col } from "antd";
import "./styles.scss";

const Shops = () => {
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
            <Col span={12} className="contentShops">
                <h1>This is Shops</h1>
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
export default Shops;