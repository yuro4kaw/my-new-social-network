import React, { useState, useEffect } from "react";
import s from "./ProfileStatusWithHooks.module.css"


let ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status);
    }, [props.status])


    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&

                <div className={s.statusText} onDoubleClick={activateEditMode} >{props.status || "-------"}</div>

            }
            {editMode &&

                <input className={s.statusText} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />

            }

        </>
    )
}


export default ProfileStatusWithHooks;
