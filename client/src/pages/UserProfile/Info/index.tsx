import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { ContactsType, ProfileType } from "types/types";
import "./styles.scss";

type PropsType = {
    profile: ProfileType
    status: string
}
const Info: React.FC<PropsType> = (props) => {
    return (
        <div className="description">
            <h3>Подробная информация</h3>
            <ProfileData profile={props.profile}/>
            <ProfileStatusWithHooks status={props.status} />
        </div>
    )
}
type ProfileDataPropsType = {
    profile: ProfileType
}
const ProfileData: React.FC<ProfileDataPropsType> = ({profile}) => {
    return (
        <>
            <div className="name">
                <h6>Name :</h6>
                <p>{profile.fullName}</p>
            </div>
            <div className="aboutMe">
                <h6>AboutMe :</h6>
                <p>{profile.aboutMe}</p>
            </div>
            <div className="lookingForAJob">
                <h6>Looking For A Job :</h6>
                <p>{profile.lookingForAJob ? "yes" : "От работы кони дохнут"}</p>
            </div>
            <div className="lookingForAJobDescription">
                <h6>My professional skils :</h6>
                <p>{profile.lookingForAJobDescription}</p>
            </div>
            
            <div className="contacts">
                <h6>Contacts :</h6>
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
                })}
            </div>
        </>
    )
}
type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <h6>{contactTitle}:</h6>
                {contactValue}
        </div>
    )
}
export default Info;