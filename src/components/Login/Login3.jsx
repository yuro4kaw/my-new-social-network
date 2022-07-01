import React from 'react'
import s from "./login3.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const initialValues = {
    login: "",
    password: "",
};

const validationSchema = Yup.object({
    login: Yup.string().required(),
    password: Yup.string().required(),
})

const onSubmit = values => {
    console.log("Form data", values)
};

function Login3() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className={s.formControl}>
                    <label htmlFor="login">Login</label>
                    <Field type="text" id="login" name="login" placeholder="Login" />
                    <ErrorMessage name="login" />
                </div>
                <div className={s.formControl}>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" />
                </div>
                <div>
                    <label htmlFor="password">Remember me</label>
                    <Field type="checkbox" id="checkbox" name="checkbox" />
                </div>
                <br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default Login3;