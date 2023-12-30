import React from "react";
import routeMain from "./routes";
import { NavLink } from 'react-router-dom';
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import { routeMain as routeContacts } from '../../pages/Contacts';
import { routeMain as routeNews } from '../../pages/News';
import { routeMain as routeHome } from '../Home';
import "./styles.scss";

const Home = () => {
    return (
        <section className="wrapContent">
            <LSidebar 
                content={
                    <>
                    </>
                }
            />
            <div className="contentHome">
                <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to={routeHome()}>Home</NavLink></li>
                            <li><NavLink to={routeNews()}>News</NavLink></li>
                            <li><NavLink to={routeContacts()}>Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <h1> This is Home</h1>

                

            </div>
            <RSidebar 
                content={
                    <>
                    </>
                }
            />
        </section>
    )
}
export {routeMain};
export default Home;