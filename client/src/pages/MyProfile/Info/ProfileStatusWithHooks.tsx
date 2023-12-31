import React, { useState, useEffect, ChangeEvent } from "react";
import { updateMyStatus } from "store/MyProfileReducer/myProfileReducer";
import { useDispatch } from "react-redux";
import { TypedDispatch } from "store/reduxStore";
import "./styles.scss";

type PropsType = {
    status: string
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch<TypedDispatch>()
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        dispatch(updateMyStatus(status));
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div className="statusBlock">
            { !editMode &&
                <div>
                    <h6>Status : </h6><span onDoubleClick={activateEditMode}>{props.status || "NO STATUS"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <h6>Status : </h6><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;