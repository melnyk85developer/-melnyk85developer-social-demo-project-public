import React from "react";
import NewsItem from "../NewsItem";
import { UserType } from "types/types";
import { Col } from "antd";

export type PropsType = {
    news: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const NewsList: React.FC<PropsType> = (props) => {

    return (
        <Col className="wrapFriendsList">
            {props.news.map( (news) => (
                <NewsItem 
                    key={news.id}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    news={news}
                    followingInProgress={props.followingInProgress} 
                    userDetailPage={undefined} 
                />
            ))}
        </Col> 
    )
}
export default NewsList;