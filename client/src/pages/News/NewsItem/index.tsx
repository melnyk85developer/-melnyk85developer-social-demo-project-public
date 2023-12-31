import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "types/types";
import routeUserProfile from "pages/UserProfile/routes";
import userPhoto from "../../../assets/user.png";
import "./styles.scss";
import { Col } from "antd";

type PropsType = {
    news: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    userDetailPage: MouseEventHandler<HTMLImageElement> | undefined;
}

const UsersItem: React.FC<PropsType> = (props) => {

    return (
        <Col className="wrapNewsItem">
            <Col className="newsItem">
                <Col className="wrapNewsBlock_1">
                    <NavLink to={routeUserProfile(props.news.id)} className="navLink">
                        <div className="wrapNewsAvatar">
                            <img onClick={props.userDetailPage} 
                                 src={ props.news.photos.small != null 
                                    ? props.news.photos.small 
                                    : userPhoto} 
                                 alt="avatar" 
                                 className="newsAvatar"/>
                        </div>
                    </NavLink>
                </Col>
                <Col className="newsData">
                    <div className="wrapNewsBlock_2">
                        <li className="newsName">
                            <p>{props.news.name}{' '}{props.news.surname}</p>
                        </li>
                    </div>
                    <div className="newsFamilyStatus">
                        <p>Status:{' '}{props.news.status}</p>
                    </div>
                </Col>
            </Col>
            <Col className="wrapAllButton">
                <Col className="wrapButton">
                    { props.news.followed ? (
                        <button disabled={props.followingInProgress
                            .some( id => id === props.news.id)} 
                                onClick={ () => {props.unfollow(props.news.id)

                        }} className="btnFriendsTrue">Удалить из Друзей</button>
                        ) : (
                        <button disabled={props.followingInProgress
                            .some( id => id === props.news.id)} 
                                onClick={ () => {props.follow(props.news.id)

                        }} className="btnFriendsTrue">Добавить в Друзья</button>) 
                    }
                </Col>
                <Col className="wrapBtnMsg">
                    <button>Написать Сообшение</button>
                </Col>
            </Col>
        </Col>
    )
}
export default UsersItem;