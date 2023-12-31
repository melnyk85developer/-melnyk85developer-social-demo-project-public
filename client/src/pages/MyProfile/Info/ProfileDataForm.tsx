import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createFild, GetStringKeys, Input, Textarea } from 'components/FormsControls/FormsControls';
import { ProfileType } from "types/types";
import ModalWindow from "components/ModalWindow";

type PropsType = {
    profile: ProfileType
    modalActive: any
    setModalActive: any
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error, modalActive, setModalActive}) => {
    return (
        <ModalWindow modalActive={modalActive} setModalActive={setModalActive} handleSubmit={handleSubmit}>
            <form onSubmit={handleSubmit}>

                <button onClick={() => setModalActive(false)}>Сохранить</button>

                { error && <div className={"formSummaryError"}>{error}</div>}
                <div className="name">
                    <h6>Name : {createFild<ProfileTypeKeys>("Full name", "fullName", [], Input)}</h6>
                </div>
                <div className="aboutMe">
                    <h6>About Me : { createFild<ProfileTypeKeys>("About Me", "aboutMe", [], Textarea) }</h6>
                </div>
                <div className="lookingForAJob">
                    <h6>Looking For A Job : { createFild<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"}) }</h6>
                </div>
                <div className="lookingForAJobDescription">
                    <h6>My professional skils : { createFild<ProfileTypeKeys>("My professional skils", "lookingForAJobDescription", [], Textarea) }</h6>
                </div>
                <div className="contacts">
                    <h6>Contacts :</h6>
                    {Object.keys(profile.contacts).map(key => {
                        return(
                            <div key={key}>
                                {key}: {createFild(key, "contacts." + key, [], Input)}
                            </div>
                        )
                    })}
                </div>
            </form>
        </ModalWindow>
    )
}

export default reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);