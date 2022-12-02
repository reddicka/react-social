import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAvatarUrl, setIsLoading} from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        if (!this.props.isAuth) {
            setIsLoading(true)
            axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
                {withCredentials: true})
                .then(response => {
                    setIsLoading(false)
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
                        this.props.setAuthUserData(id, login, email)

                        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                            .then(response => {
                                this.props.setAvatarUrl(response.data.photos.small)
                            })
                    }
                })
        }
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
    setAuthUserData,
    setIsLoading,
    setAvatarUrl
})(HeaderContainer);
