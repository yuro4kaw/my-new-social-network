import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} />
      <hr />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
