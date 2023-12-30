import React from "react";
import routeMain from "./routes";
import { NavLink } from 'react-router-dom';
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import { routeMain as routeHome } from '../../pages/Home';
import { routeMain as routeNews } from '../../pages/News';
import { routeMain as routeContacts } from '../Contacts';
import "./styles.scss";
import { Col } from "antd";

const Contacts = () => {
    return (
        <>
            <LSidebar 
                content={
                    <></>
                }
            />
            <Col span={12} className="contentContacts">
                <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to={routeHome()}>Home</NavLink></li>
                            <li><NavLink to={routeNews()}>News</NavLink></li>
                            <li><NavLink to={routeContacts()}>Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <h1> This is Contacts</h1>
            </Col>
            <RSidebar 
                content={
                    <></>
                }
            />
        </>
    )
}
export {routeMain};
export default Contacts;