import React from "react"
import { reduxForm } from "redux-form";
import { CreateField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileDataForm.module.css";
import userPhoto from "../../../assets/img/profileImg.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import facebook from "../../../assets/img/facebook.png"
import instagram from "../../../assets/img/instagram.png"
import github from "../../../assets/img/github.png"
import myApp from "../../../assets/img/myApp.png"
import socialNetworkIcon from "../../../assets/img/socialNetworkIcon.png"
import twitter from "../../../assets/img/twitter.png"
import youtube from "../../../assets/img/youtube.png"
import vkontakte from "../../../assets/img/vkontakte.png"

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
                    <button disabled={props.isFetching} className={s.editProfileButton}>Save 💾</button>
                    {props.error && <div className={s.error}>
                        {props.error}
                    </div>}

                </div>

                <div className={s.secondPart}>
                    <div >
                        <b className={s.topicHeader}>Status: </b><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    </div>
                    <br />
                    <div className={s.mainTextarea}>
                        <b className={s.topicHeader}>About Me:</b> {CreateField("textarea", "Write something interesting about yourself", "aboutMe", { className: s.topicText })}
                    </div>
                    <br />
                    <div className={s.mainTextarea}>
                        <b className={s.topicHeader}>My professional skills:</b>{CreateField("textarea", "Write your professional skills", "lookingForAJobDescription", { className: s.topicText })}
                    </div>



                </div>
            </div>

            <div className={s.contacts}>
                {Object.keys(props.profile.contacts).map(key => {
                    return <div className={s.fullLink}>
                        <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />{CreateField("input", key, "contacts." + key, { className: s.linkInput })}
                    </div>
                })}
            </div>
        </form >
    )

}

const Contact = ({ contactTitle, contactValue }) => {

    const renderSwitch = () => {
        switch (contactTitle) {
            case 'facebook':
                return <img className={s.socialNetworkIcon} src={facebook} alt="social-network-img" />;
            case 'website':
                return <img className={s.socialNetworkIcon} src={myApp} alt="social-network-img" />;
            case 'vk':
                return <img className={s.socialNetworkIcon} src={vkontakte} alt="social-network-img" />;
            case 'twitter':
                return <img className={s.socialNetworkIcon} src={twitter} alt="social-network-img" />;
            case 'instagram':
                return <img className={s.socialNetworkIcon} src={instagram} alt="social-network-img" />;
            case 'youtube':
                return <img className={s.socialNetworkIcon} src={youtube} alt="social-network-img" />;
            case 'github':
                return <img className={s.socialNetworkIcon} src={github} alt="social-network-img" />;
            case 'mainLink':
                return <img className={s.socialNetworkIcon} src={socialNetworkIcon} alt="social-network-img" />;
            default:
                return null;
        }
    }

    return (
        <a href={contactValue} rel="noreferrer" target="_blank">{renderSwitch({ contactTitle })}<br /></a>
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;