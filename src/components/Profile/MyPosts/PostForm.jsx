import React from "react";
import s from "./MyPosts.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"

function PostForm(props) {

    let onAddPost = () => {
        let text = s.postTextArea.value;
        let RegExp1 = /^(?!\s*$).+/;
        let result = RegExp1.test(text);
        if (result) { props.addPost(); }
        //if (result) { props.dispatch(addPostActionCreator()); }
    }

    let onPostChange = () => {
        let text = s.postTextArea.value;
        props.updateNewPostText(text);
        //props.dispatch(updateNewPostTextActionCreator(text));
    }

    const initialValues = {
        postText: "",
    };

    const onSubmit = values => {
        console.log("Form data", values)
    };

    return (

        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={s.myPosts}>My posts</div>
                <div className={s.postCreate}>

                    <Field type="text" id={s.postTextArea} name="postText" placeholder="Write your post here..." value={props.newPostText} onChange={onPostChange} />
                    <ErrorMessage name="postText" />


                    <button id={s.postButton} type="submit" onClick={onAddPost}>Post</button>
                </div>
            </Form>
        </Formik>
    )
}

export default PostForm;
