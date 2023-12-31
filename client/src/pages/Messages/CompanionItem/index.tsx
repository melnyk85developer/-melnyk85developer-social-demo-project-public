import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeDialog} from "pages/Dialog";
import { PhotosType } from "types/types";
import userPhoto from "../../../assets/user.png";
import "./styles.scss";

type PropsType = {
    id: number
    photos: PhotosType
    name: string
    surname: string
}

const CompanionItem: React.FC<PropsType> = (props) => {
    return (
        <div className="companion">
            <NavLink to={routeDialog(props.id)}> 
                <div className="companionItem">
                    <img 
                         src={ props.photos.small != null 
                         ? props.photos.small 
                         : userPhoto}
                         className="miniAvatarMsg" 
                    />
                    <div className="wrapLi">
                        <li className="liName">{props.name}</li>
                        <li className="liSurName">{props.surname}</li>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CompanionItem;