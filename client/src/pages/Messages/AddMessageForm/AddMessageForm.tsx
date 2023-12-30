import React from "react";
import {Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea, createFild } from "components/FormsControls/FormsControls";
import { maxLengthCreator, required } from "utils/validators/validators";
import { NewMessageFormValuesType } from "..";

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesTypeKeys = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <div className="textareaMessages">
            <form onSubmit={props.handleSubmit}  >
                { createFild<NewMessageFormValuesTypeKeys>("Написать сообщение", "newMessageBody", [required, maxLength50], Textarea )}
                <button className="buttonMessage">Отправить</button>
            </form>
        </div>
    )
}
export default reduxForm<NewMessageFormValuesType>({form: "MessagesAddMessageForm"})(AddMessageForm)