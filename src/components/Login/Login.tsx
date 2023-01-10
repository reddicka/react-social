import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";
import {getCaptchaUrl, login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import React, {FC} from "react";
import styles from "../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/redux-store";

let maxLengthNum = maxLength(30)

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (
    {handleSubmit, error, captchaUrl}
) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label><br/>
                <Field
                    component={FormControl}
                    formElement='input'
                    type='email'

                    name='email'
                    id='email'
                    placeholder='Email'
                    autoComplete='email'
                    validate={[required, maxLengthNum]}
                />
            </div>

            <div>
                <label htmlFor='password'>Пароль</label><br/>
                <Field
                    component={FormControl}
                    formElement='input'
                    type='password'

                    name='password'
                    id='password'
                    placeholder='Пароль'
                    autoComplete='password'
                    validate={[required, maxLengthNum]}
                />
            </div>

            <div>
                <label htmlFor='rememberMe'>Запомнить</label>
                <Field
                    component={FormControl}
                    formElement='input'
                    type='checkbox'

                    name='rememberMe'
                    id='rememberMe'
                />
            </div>

            {
                captchaUrl &&
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
                    <img src={captchaUrl} alt='captcha' />
                </div>
            }

            <div>
                <button type='submit' >Войти</button>
            </div>

            {
                error && <div className={styles.formSummaryError}>{error}</div>
            }
        </form>
    )
}

let LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
}

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export default connect(mapStateToProps, {
    login,
    // getCaptchaUrl
})(Login)