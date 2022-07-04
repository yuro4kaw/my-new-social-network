import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../assets/img/profileImg.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )


        //


    }

    return (
        <div>
            <div className={s.profile}>
                <img src={props.profile.photos.large || userPhoto} className={s.avatar} alt="img" />
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected} />}
                <div className={s.profileInfo}>
                    <div>
                        <b>Status:</b><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    </div>
                    {editMode
                        ? <ProfileDataForm
                            initialValues={props.profile}
                            profile={props.profile}
                            onSubmit={onSubmit}
                            status={props.status}
                            updateStatus={props.updateStatus} />
                        : < ProfileData
                            isOwner={props.isOwner}
                            profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
                            goToEditMode={() => { setEditMode(true) }} />
                    }
                </div>
            </div>
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            {props.isOwner &&
                <div><button onClick={props.goToEditMode}>Edit profile</button></div>}
            <div>
                {props.profile.fullName}
            </div>



            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
                </div>
            }

            <div>
                <b>About Me:</b> {props.profile.aboutMe}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
            </div>
        </div>)
}



const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;