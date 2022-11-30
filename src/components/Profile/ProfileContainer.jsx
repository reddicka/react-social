import React from "react";
import {connect} from "react-redux";
import {addPost, setProfileInfo, updateNewPostText} from "../../redux/profile-reducer";
import axios from "axios";
import Profile from "./Profile";

class ProfileContainer extends React.Component{
    componentDidMount() {
        // if (this.props.currentUserId) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${24}`)
            .then(response => {
                this.props.setProfileInfo(response.data)
                // this.props.setProfileInfo(response.data.userId)
                // console.log(response.data.userId)
            })
        // }
    }

    render () {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePageData.profileInfo,
    // currentUserId: state.currentUserId
    posts: state.profilePageData.posts,
    newPostText: state.profilePageData.newPostText
})

export default connect(mapStateToProps, {
    setProfileInfo,
    addPost,
    updateNewPostText
    // setCurrentUserId
})(ProfileContainer)