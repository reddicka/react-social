import React from "react";
import {connect} from "react-redux";
import {addPost, updateNewPostText, getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.router.params.userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    // currentUserId: state.currentUserId
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
})

// костыль, сейчас делается через хуки
let WithUrlContainer = withRouter(ProfileContainer)
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

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText,
    getUserProfile
})(WithUrlContainer)