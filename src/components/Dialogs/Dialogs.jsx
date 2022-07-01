import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs.map(d => {
        return (
            <div className={s.hrItem}>
                <div className={s.dialogsItem}>
                    <img
                        src={d.img}
                        alt="avatar"
                        className={s.avatar}
                    />
                    <DialogItem name={d.name} id={d.id} />
                </div>
                <hr />
            </div>


        )
    }
    )
    let messagesElements = props.dialogsPage.messages.map(m => {
        return (

            <div className={s.messageItem}>
                <img
                    src={m.img}
                    alt="avatar"
                    className={m.avatar}
                />
                <Message message={m.message} />
            </div>

        )
    }
    )

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to="/login" />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems} >{dialogsElements}</div>
            <div className={s.messages}>
                <div className={s.realMessages}>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field id={s.messageTextArea} component="textarea" name="newMessageBody" placeholder="Write your message here..."></Field>
            <button id={s.messageButton} > Send</button>
        </form >
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;