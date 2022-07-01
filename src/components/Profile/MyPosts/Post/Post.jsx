import React from "react";
import s from "./Post.module.css"

function Post(props) {
  return (
      <div className={s.item}>
        <img
          src="img/avatar.jpg"
          alt="avatar"/>
      <div className={s.postText}>{props.postText}</div>
        
      <button id={s.likeButton}>
        Like
      <br/>
        {props.likesCount}
      </button>
        
      </div>
    )
}

export default Post;
