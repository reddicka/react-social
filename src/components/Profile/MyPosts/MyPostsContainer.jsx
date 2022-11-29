import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePageData.posts,
        newPostText: state.profilePageData.newPostText
    }
}

export default connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts)
