import React from "react";
import Post from "./Post";
import AddPostForm, { AddPostFormValuesType } from "./AddNewPostForm";
import { PostsType } from "types/types";
import { Col } from "antd";

export type MapPropsType = {
    posts: Array<PostsType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let posts = [...props.posts].reverse().map( post => <Post
        key={post.id}
        id={post.id} 
        post={post.post} 
        like={post.like} 
        dislike={post.dislike}
    />)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <>
            <AddPostForm onSubmit={onAddPost} />
            <Col className="borderPosts">
                <Col className="posts">{posts}</Col>
            </Col>
        </>
    )
}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized