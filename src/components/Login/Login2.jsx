import React from "react";
import s from "./login2.module.css"
import { useFormik } from "formik";

const Login2 = () => {

    const validate = values => {
        const errors = {}

        if (!values.email) {
            errors.email = "Required!"
        } else if (values.email.length < 4) {
            errors.email = "Email must be longer than 4 characters"
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(values.email)
        ) {
            errors.email = "Invalid Email address!"
        }

        if (!values.password) {
            errors.password = "Reguired!"
        } else if (values.password.length < 7) {
            errors.password = "Password should be longer than 8 symbols!"
        }

        if (!values.repassword) {
            errors.repassword = "Reguired!"
        } else if (values.repassword.length < 7) {
            errors.repassword = "Password should be longer than 8 symbols!"
        } else if (values.repassword !== values.password) {
            errors.repassword = "Passwords are not same"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repassword: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    console.log('Form values', formik.values)

    return (
        <div className={s.main}>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <br />
                    <input
                        onBlur={formik.handleBlur}
                        id="email"
                        name="email" onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <br />
                    {formik.touched.email && formik.errors.email
                        ? <span className={s.error}>{formik.errors.email}</span>
                        : <span className={s.errorOpacity}>1</span>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <br />
                    <input
                        onBlur={formik.handleBlur}
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <br />
                    {formik.touched.password && formik.errors.password
                        ? <span className={s.error}>{formik.errors.password}</span>
                        : <span className={s.errorOpacity}>1</span>}
                </div>
                <div>
                    <label htmlFor="repassword">Password again:</label>
                    <br />
                    <input
                        onBlur={formik.handleBlur}
                        type="password"
                        id="repassword"
                        name="repassword"
                        onChange={formik.handleChange}
                        value={formik.values.repassword}
                    />
                    <br />
                    {formik.touched.repassword && formik.errors.repassword
                        ? <span className={s.error}>{formik.errors.repassword}</span>
                        : <span className={s.errorOpacity}>1</span>}
                </div>
                <button type="submit" className={s.submit}>Register</button>
            </form>
        </div>
    )
}

export default Login2;