import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    };
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,

    avatarUrl: state.avatarUrl
})

export default connect(mapStateToProps, {
    logout
})(HeaderContainer);
