import {Field, reduxForm} from "redux-form";
import React from "react";
import Login from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {getLogin} from "../../redux/auth-reducer";

// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <label htmlFor='username'>Имя пользователя</label><br/>
//                 <Field
//                     name='username'
//                     id='username'
//                     placeholder='Имя пользователя'
//                     component='input'
//                     type='input'
//                     autoComplete="username"
//                 />
//             </div>
//
//             <div>
//                 <label htmlFor='password'>Пароль</label><br/>
//                 <Field
//                     name='password'
//                     id='password'
//                     placeholder='Пароль'
//                     component='input'
//                     type='password'
//                     autoComplete="password"
//                 />
//             </div>
//
//             <div>
//                 <label htmlFor='rememberMe'>Запомнить</label>
//                 <Field
//                     name='rememberMe'
//                     id='rememberMe'
//                     component='input'
//                     type='checkbox'
//                 />
//             </div>
//
//             <div>
//                 <button type='submit' >Войти</button>
//             </div>
//         </form>
//     )
// }

export class LoginContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Login {...this.props}/>
    }
}

// let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

// const Login = (props) => {
//     const onSubmit = (formData) => {
//         console.log(formData)
//     }
//
//     return <>
//         <h1>LOGIN</h1>
//         <LoginReduxForm onSubmit={onSubmit} />
//     </>
// }

const mapStateToProps = ({

})

export default compose(
    connect(mapStateToProps, { getLogin })()
)()