import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import s from "./Login.module.css"
import { login } from "../../Redux/authReducer"
import { Navigate } from "react-router-dom";
import { CreateField } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            {props.error && <div className={s.formError}>
                {props.error}
            </div>}
            {CreateField("input", "Email", "email", { id: s.dataInput })}

            {CreateField("input", "Password", "password", { id: s.dataInput })}
            <div className={s.checkboxDiv}>
                {CreateField("input", null, "rememberMe", { id: s.checkbox }, "checkbox", "Remember me")}
            </div>

            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}

            {props.captchaUrl && CreateField("input", "Captcha", "captcha", { id: s.captchaInput })}

            <div>
                <button disabled={props.isFetching} className={s.submit}>Login</button>
            </div>

        </form >)
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to="/profile" />;
    }

    return (
        <div className={s.loginText}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} isFetching={props.isFetching} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})

export default connect(mapStateToProps, { login })(Login);