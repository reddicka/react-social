import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Navigate to={'/login'} /> // Добавить "!"

            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}