import React from "react";
import {connect} from "react-redux";
import {
    addPost,
    updateNewPostText,
    getUserProfile,
    getProfileStatus, updateProfileStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,

    myUserId: state.auth.userId,

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
        updateNewPostText,
        getUserProfile,

        getProfileStatus,
        updateProfileStatus
    }),
    // WithAuthRedirect,
    withRouter
)(ProfileContainer)