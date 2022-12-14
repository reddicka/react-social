import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";
import {getCaptchaUrl, login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";
import styles from "../common/FormsControls/FormsControls.module.css"

let maxLengthNum = maxLength(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label><br/>
                <Field
                    component={FormControl}
                    formElement='input'

                    name='email'
                    id='email'
                    placeholder='Email'
                    type='email'
                    autoComplete='email'
                    validate={[required, maxLengthNum]}
                />
            </div>

            <div>
                <label htmlFor='password'>Пароль</label><br/>
                <Field
                    component={FormControl}
                    formElement='input'

                    name='password'
                    id='password'
                    placeholder='Пароль'
                    type='password'
                    autoComplete='password'
                    validate={[required, maxLengthNum]}
                />
            </div>

            <div>
                <label htmlFor='rememberMe'>Запомнить</label>
                <Field
                    component={FormControl}
                    formElement='input'

                    name='rememberMe'
                    id='rememberMe'
                    type='checkbox'
                />
            </div>
            {
                props.captchaUrl &&
                <div>
                    <label htmlFor='captcha'>Введите капчу</label>
                    <Field
                        component={FormControl}
                        formElement='input'

                        name='captcha'
                        id='captcha'
                        type='input'
                        validate={[required]}
                    />
                    <img src={props.captchaUrl} alt='captcha' />
                </div>
            }


            <div>
                <button type='submit' >Войти</button>
            </div>

            {
                props.error && <div className={styles.formSummaryError}>{props.error}</div>
            }
        </form>
    )
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) return <Navigate to={'/profile'} />

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {
    login,
    getCaptchaUrl
})(Login)