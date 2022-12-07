import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor='email'>Email</label><br/>
                <Field
                    name='email'
                    id='email'
                    placeholder='Email'
                    component='input'
                    type='email'
                    autoComplete="email"
                />
            </div>

            <div>
                <label htmlFor='password'>Пароль</label><br/>
                <Field
                    name='password'
                    id='password'
                    placeholder='Пароль'
                    component='input'
                    type='password'
                    autoComplete="password"
                />
            </div>

            <div>
                <label htmlFor='rememberMe'>Запомнить</label>
                <Field
                    name='rememberMe'
                    id='rememberMe'
                    component='input'
                    type='checkbox'
                />
            </div>

            <div>
                <button type='submit' >Войти</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)

        authAPI.login(formData.email, formData.password, formData.rememberMe)
            .then(res =>
                console.log(res)
            )
    }

    return <>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </>
}

export default Login