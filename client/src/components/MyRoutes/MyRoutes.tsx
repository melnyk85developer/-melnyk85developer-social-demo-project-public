import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authorization, { routeLogin } from 'pages/Login/Login';
import MyProfile, { routeMyProfile }  from '../../pages/MyProfile';
import Messages , { routeMain as routeMessages }  from '../../pages/Messages';
import Friends, { routeMain as routeFriends } from '../../pages/Friends';
import Music, { routeMain as routeMusic } from '../../pages/Music';
import Video, { routeMain as routeVideo } from '../../pages/Video';
import Shops, { routeMain as routeShops } from '../../pages/Shops';
import Users, { routeMain as routeUsers } from 'pages/Users';
import ChatPage, { routeMain as routeChat } from 'pages/ChatPage';

import UserProfile, { routeUserProfile }  from 'pages/UserProfile';
import Dialog, { routeMain as routeDialog } from '../../pages/Dialog';
import Home, { routeMain as routeHome } from '../../pages/Home';
import News, { routeMain as routeNews } from '../../pages/News';
import Contacts, { routeMain as routeContacts } from '../../pages/Contacts';

// import { withSuspense } from '../../hoc/withSuspense';
// const Video = React.lazy(() => import('../../pages/Video'))

const MyRoutes: React.FC = () => {
    return (
        <section className="wrapContent">
            <Routes>
                <Route path={routeLogin()} element={<Authorization />}/>
                <Route path={routeMyProfile()} element={<MyProfile />}/>
                <Route path={routeMessages()} element={<Messages /> }/>
                <Route path={routeFriends()} element={<Friends />}/>
                <Route path={routeMusic()} element={<Music/>}/>
                <Route path={routeVideo()} element={<Video/>}/>
                <Route path={routeShops()} element={<Shops/>}/>
                <Route path={routeUsers()} element={<Users />}/>
                <Route path={routeChat()} element={<ChatPage />}/>

                <Route path={routeUserProfile()} element={<UserProfile />}/>
                <Route path={routeDialog()} element={<Dialog />}/>
                <Route path={routeHome()} element={<Home/>}/>
                <Route path={routeNews()} element={<News/>}/>
                <Route path={routeContacts()} element={<Contacts/>}/>
                <Route path="*" element={<Navigate to={routeMyProfile()} />} /> 
                {/* <Route path={routeShops()} element={withSuspense(Shops)}/> */}
                {/* <Route path={routeVideo()} element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Video/>
                        </Suspense>
                }/>  */}
            </Routes>
        </section>
    )
}
export default MyRoutes;