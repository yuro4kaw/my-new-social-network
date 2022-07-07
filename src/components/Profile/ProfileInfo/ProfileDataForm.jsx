import React from "react"
import { reduxForm } from "redux-form";
import { CreateField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileDataForm.module.css";
import userPhoto from "../../../assets/img/profileImg.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDataForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.basicInfo}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={s.avatar} alt="img" />
                    {props.isOwner && <div className={s.uploadDiv}><label className={s.customFileUpload}>
                        <input classame={s.fileInput} type={"file"} accept="image/png, image/jpg, image/gif, image/jpeg" onChange={props.mainPhotoSelected} />
                        Upload your photo
                    </label></div>}
                    <div className={s.fullName}>
                        {CreateField("input", "Full Name", "fullName", { className: s.nameInput })}
                    </div>
                    <br />
                    <div className={s.lookingForAJob}>
                        <b>Looking for a job:</b> {CreateField("input", null, "lookingForAJob", null, "checkbox")}
                    </div>
                    <br />
                    <button className={s.editProfileButton}>Save</button>


                </div>

                <div className={s.secondPart}>
                    <div>
                        <b className={s.topicHeader}>Status: </b><br /><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    </div>
                    <br />
                    <div >
                        <b className={s.topicHeader}>About Me:</b> <div >{CreateField("textarea", "Write something interesting about yourself", "aboutMe", { className: s.topicText })}</div>
                    </div>
                    <br />

                    <div>
                        <b className={s.topicHeader}>My professional skills:</b> <div>{CreateField("textarea", "Write your professional skills", "lookingForAJobDescription", { className: s.topicText })}</div>
                    </div>
                    {props.error && <div className={s.error}>
                        {props.error}
                    </div>}


                </div>
            </div>

            <div className={s.contacts}>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{CreateField("input", key, "contacts." + key, { className: s.linkInput })}</b>
                    </div>
                })}
            </div>
        </form >
    )

}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;