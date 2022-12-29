import React from "react";
import {connect} from "react-redux";
import {
    addPost,
    getUserProfile,
    getProfileStatus, updateProfileStatus, updateProfileAvatar,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.router.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                // debugger
                return <Navigate to={'/login'} />
                // this.props.router.location({pathname :'/login'})
            }
        }

        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.router.params.userId
                         || (this.props.router.params.userId === this.props.authorizedUserId)}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    posts: state.profilePage.posts,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

    profileStatus: state.profilePage.profileStatus
})

// костыль, сейчас делается через хуки
// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {
        addPost,
        getUserProfile,

        getProfileStatus,
        updateProfileStatus,
        updateProfileAvatar
    }),
    // WithAuthRedirect,
    withRouter
)(ProfileContainer)