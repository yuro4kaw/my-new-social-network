import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import s from "./Login.module.css"
import { login } from "../../Redux/authReducer"
import { Navigate } from "react-router-dom";
import { CreateField } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} id={s.loginForm}>

            {CreateField("input", "Email", "email")}

            {CreateField("input", "Password", "password")}

            {CreateField("input", null, "rememberMe", { id: s.checkbox }, "checkbox", "Remember me")}

            {props.error && <div className={s.formError}>
                {props.error}
            </div>}
            <div>
                <button className={s.submit}>Login</button>
            </div>
        </form >)
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);