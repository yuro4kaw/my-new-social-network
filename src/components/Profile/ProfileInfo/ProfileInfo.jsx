import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../assets/img/profileImg.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm";
import no from "../../../assets/img/no.png"
import yes from "../../../assets/img/yes.png"
import facebook from "../../../assets/img/facebook.png"
import instagram from "../../../assets/img/instagram.png"
import github from "../../../assets/img/github.png"
import myApp from "../../../assets/img/myApp.png"
import socialNetworkIcon from "../../../assets/img/socialNetworkIcon.png"
import twitter from "../../../assets/img/twitter.png"
import youtube from "../../../assets/img/youtube.png"
import vkontakte from "../../../assets/img/vkontakte.png"


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

        <div className={s.profile}>



            {editMode
                ? <ProfileDataForm
                    mainPhotoSelected={mainPhotoSelected}
                    isOwner={props.isOwner}
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

    )
}

const ProfileData = (props) => {
    return (
        <div className={s.profileData}>
            <div className={s.basicInfo}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} className={s.avatar} alt="img" />

                    <div className={s.fullName}>
                        {props.profile.fullName}
                    </div>
                    <br />
                    <div className={s.lookingForAJob}>
                        <b>Looking for a job:</b> {props.profile.lookingForAJob ? <img className={s.checkbox} src={yes} alt="yes" /> : <img className={s.checkbox} src={no} alt="no" />}
                    </div>
                    <br />
                    {props.isOwner &&
                        <div><button className={s.editProfileButton} onClick={props.goToEditMode}>Edit profile</button></div>}
                </div>

                <div className={s.secondPart}>
                    <div>
                        <b className={s.topicHeader}>Status: </b>   <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    </div>
                    <br />
                    <div >
                        <b className={s.topicHeader}>About Me:</b> <div className={s.topicText}>{props.profile.aboutMe}</div>
                    </div>
                    <br />
                    {props.profile.lookingForAJob &&
                        <div>
                            <b className={s.topicHeader}>My professional skills:</b> <div className={s.topicText}>{props.profile.lookingForAJobDescription}</div>
                        </div>
                    }
                </div>
            </div>
            <div>



                <div className={s.title}>{Object.keys(props.profile.contacts).map(key => {
                    if (props.profile.contacts[key])
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                })}
                </div>

            </div>
        </div>)
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
                return 'foo';
        }
    }

    return (
        <a href={contactValue} rel="noreferrer" target="_blank">{renderSwitch({ contactTitle })}<br /></a>
    )
}
export default ProfileInfo;