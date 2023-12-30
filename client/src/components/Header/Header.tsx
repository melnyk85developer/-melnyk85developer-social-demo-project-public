import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'components/providers/themeProvider';
import { logout } from 'store/AuthReducer/authReducer';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TypedDispatch } from 'store/reduxStore';
import { getAuth } from 'store/AuthReducer/authSelectors';
import { getMyProfiles } from 'store/MyProfileReducer/myProfilesSelectors';
import { getMyProfile } from 'store/MyProfileReducer/myProfileReducer';
import { routeLogin } from 'pages/Login/Login';
import userPhoto from "../../assets/fon_avatars.png"
import "./styles.scss"
import { Col, Row } from 'antd';
import { routeMyProfile } from 'pages/MyProfile';

const Header: React.FC = () => {
    const dispatch = useDispatch<TypedDispatch>()
    const authorizedUserId = useSelector(getAuth)
    const profile = useSelector(getMyProfiles)
    const userId = authorizedUserId.id

    const [theme, setTheme] = useContext(ThemeContext) as any

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        dispatch(getMyProfile(userId as number))
    }, [userId])

    const logouting = () => {
        dispatch(logout())
    }
    
    return (
        <header>
            <Row gutter={20}>
                <Col span={20} className="wrapper_logo_search">
                    <Col span={8} className="logo">
                        <Link to={routeMyProfile(userId)}>
                            <span className="hi">
                            </span>
                            <span className="mars">
                                Pandora
                            </span>
                        </Link>
                    </Col>
                    <Col span={8} className="poisk">
                        <input className="search cursor" type="text" name="search"/>
                    </Col>
                    <Col span={8} className="loginBlock">
                        { authorizedUserId.isAuth  
                            ?   <div className="blockProfile">
                                    <button onClick={changeTheme} className='login-logaut'>Тема</button>
                                    <button onClick={logouting} className='login-logaut'>Выход</button>
                                    <strong className='nameHeader'>{authorizedUserId.login}</strong>
                                    <img 
                                        src={profile?.photos.small != null ? profile.photos.small : userPhoto}
                                        alt={"avatar"}
                                        className='img'
                                    />
                                </div>
                            :   <div className='wrap-login'><NavLink to={routeLogin()}>Вход</NavLink></div>
                        }
                    </Col>
                </Col>
            </Row>
            <Col span={24} className="wrapper_b_sroka_header">
                <Col span={24} className="stroka_header">.::: Тут могла быть твоя реклама ! :::.</Col>	
            </Col>
        </header>
    )
}
export default Header;