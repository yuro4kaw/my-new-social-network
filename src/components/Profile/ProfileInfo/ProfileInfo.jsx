import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../assets/img/profileImg.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.profile}>
        <img
          src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}

          alt="avatar"
          className={s.avatar}
        />
        <div className={s.profileInfo}>
          <ul>
            <li>{props.profile.fullName}</li>
            <li>{props.profile.aboutMe}</li>
            <li>{props.profile.twitter}</li>
            <li>Music/Art</li>
            <li><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
