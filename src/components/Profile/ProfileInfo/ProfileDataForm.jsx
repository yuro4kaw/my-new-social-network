import React from "react"
import { reduxForm } from "redux-form";
import { CreateField } from "../../common/FormsControls/FormsControls";
import s from "./ProfileDataForm.module.css";


const ProfileDataForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={s.error}>
                {props.error}
            </div>}

            <div><button>Save</button></div>

            <b>Full name:</b> {CreateField("input", "Full Name", "fullName")}

            <div>
                <b>Looking for a job:</b>
                {CreateField("input", null, "lookingForAJob", null, "checkbox")}

            </div>

            <div>
                <b>My professional skills:</b>
                {CreateField("textarea", "Write your professional skills", "lookingForAJobDescription")}
            </div>


            <div>
                <b>About Me:</b>
                {CreateField("textarea", "Write something interesting about yourself", "aboutMe")}

            </div>

            <div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}: {CreateField("input", key, "contacts." + key)}</b>
                    </div>
                })}
            </div>
        </form>
    )

}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;