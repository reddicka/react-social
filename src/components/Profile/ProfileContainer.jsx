import React from "react";
import {connect} from "react-redux";
import {
    addPost,
    getUserProfile,
    getProfileStatus, updateProfileStatus, updateProfileAvatar, updateProfileData, getFollowingStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {follow, unfollow} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    refreshProfile() {
        // берем ID из адресной строки
        let userId = this.props.router.params.userId
        // если в адресной строке пусто, то берем свой id
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        // если в адресе пусто и нет своего id, значит не залогинены
        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserProfile(userId)
            this.props.getProfileStatus(userId)
            this.props.getFollowingStatus(userId)
        }
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
            <Profile {...this.props} isOwner={!this.props.router.params.userId
                || (this.props.router.params.userId === this.props.authorizedUserId)}/>

        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    posts: state.profilePage.posts,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,

    profileStatus: state.profilePage.profileStatus,

    followingStatus: state.profilePage.followingStatus
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
        getUserProfile,
        updateProfileData,
        getProfileStatus,

        getFollowingStatus,
        follow,
        unfollow,

        updateProfileStatus,
        updateProfileAvatar,

        addPost
    }),
    WithAuthRedirect,
    withRouter
)(ProfileContainer)