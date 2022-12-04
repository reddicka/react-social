import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {isAuthorized, setAuthUserData, setAvatarUrl, setIsLoading} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAuthorized(this.props.isAuth)

        // if (!this.props.isAuth) {
        //     setIsLoading(true)
        //
        //     usersAPI.isAuthorized()
        //         .then(data => {
        //
        //             if (data.resultCode === 0) {
        //                 let {id, login, email} = data.data
        //                 this.props.setAuthUserData(id, login, email)
        //
        //                 usersAPI.getProfileData(id)
        //                     .then(data => {
        //                         this.props.setAvatarUrl(data.photos.small)
        //                         setIsLoading(false)
        //                     })
        //             }
        //         })
        // }
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
    isAuthorized
})(HeaderContainer);
