import React, { useState } from "react";
import "./styles.scss";

type PropsType = {
    status: string
}
const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    return (
        <div className="statusBlock">
            <div>
                <h6>Status : </h6><span>{props.status || "NO STATUS"}</span>
            </div>
        </div>
    )
}
export default ProfileStatusWithHooks;