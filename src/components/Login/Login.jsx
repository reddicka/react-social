import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

let maxLengthNum = maxLength(10)

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
                    formElement='checkbox'

                    name='rememberMe'
                    id='rememberMe'
                    type='checkbox'
                    validate={[required]}
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