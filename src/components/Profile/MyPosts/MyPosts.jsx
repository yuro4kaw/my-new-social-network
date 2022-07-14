import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

function MyPosts(props) {
  let postElements = props.postsArray.map(p => <Post key={p.id} likesCount={p.likesCount} postText={p.message} profile={props.profile} />)

  let onAddPost = (values) => {
    props.addPost(values.postText);
  }

  return (
    <div>

      {props.isOwner
        ? <>
          <div className={s.myPosts}>My posts</div>
          <div className={s.postCreate}>
            <AddPostFormRedux onSubmit={onAddPost} />
          </div>
          <div>{postElements}</div>
        </>

        : <>
          <div className={s.myPosts}>Posts</div>
          <div>{postElements}</div>
        </>


      }


    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} id={s.postForm}>
      <Field id={s.postTextArea} component="textarea" name="postText" placeholder="Write your post here..." />
      <button id={s.postButton}>Post</button>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: "AddNewPostForm" })(AddPostForm)

export default MyPosts;
