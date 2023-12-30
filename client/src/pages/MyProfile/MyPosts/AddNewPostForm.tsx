import React from "react";
import { GetStringKeys, Textarea, createFild, Input } from "components/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "utils/validators/validators";
import "./styles.scss";
import { Col } from "antd";

const maxLength3000 = maxLengthCreator(3000);

type PropsType = {}
export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <Col className="wrapMyPost">
            <form onSubmit={props.handleSubmit}>
                <div className="wrapBtnInputFormPost">
                    { createFild<AddPostFormValuesTypeKeys>("Что у Вас нового?", "newPostText", [required, maxLength3000], Input) }
                    <button className="buttonMyPost">Add Post</button>
                </div>
            </form>
        </Col>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: "ProfileAddNewPostForm"})(AddPostForm);;