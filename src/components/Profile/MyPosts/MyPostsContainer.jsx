import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../reduxTipa/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
// import StoreContext from "../../../StoreContext";

// function old__MyPostsContainer() {
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 let state = store.getState()
//
//                 let addPost = () => {
//                     let action = addPostActionCreator()
//                     store.dispatch(action);
//                 }
//
//                 let onPostChange = (newText) => {
//                     let action = updateNewPostTextActionCreator(newText)
//                     store.dispatch(action);
//                 }
//
//                 return <MyPosts
//                     addPost={addPost}
//                     updateNewPostText={onPostChange}
//                     posts={state.profilePageData.posts}
//                     newPostText={state.profilePageData.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePageData.posts,
        newPostText: state.profilePageData.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
        },
        updateNewPostText: (newText) => {
            let action = updateNewPostTextActionCreator(newText)
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
