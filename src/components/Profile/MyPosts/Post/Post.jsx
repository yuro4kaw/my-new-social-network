import React from "react";
import s from "./Post.module.css"
import userPhoto from "../../../../assets/img/profileImg.png";
import Preloader from "../../../common/Preloader/Preloader";

function Post(props) {
  if (!props.profile) {
    return (<></>)
  }
  return (
    <div className={s.item}>

      <img src={props.profile.photos.large || userPhoto} className={s.avatar} alt="img" />
      <div className={s.postText}>{props.postText}</div>

      <button id={s.likeButton}>
        Like
        <br />
        {props.likesCount}
      </button>

    </div>
  )
}

export default Post;
