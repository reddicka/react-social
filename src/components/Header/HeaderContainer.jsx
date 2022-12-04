import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData(this.props.isAuth)
    }

    render() {
        return (
            <Header {...this.props} />
        )
    };
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    resultCode: state.auth.resultCode,
    avatarUrl: state.avatarUrl
})

export default connect(mapStateToProps, {
    getAuthUserData
})(HeaderContainer);
