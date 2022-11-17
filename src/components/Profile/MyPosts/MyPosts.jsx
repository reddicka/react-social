import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../reduxTipa/profile-reducer";

function MyPosts(props) {
    let newPostElement = React.createRef()
    let onAddPostClick = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(newText));
    }

    let postsList = props.state.posts.map(item =>
        <Post text={item.text} likes={item.likes} key={item.id} />
    )

    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={ newPostElement }
                    onChange={ onPostChange }
                    value={ props.state.newPostText }
                />
                <button onClick={ onAddPostClick } >Опубликовать</button>
            </div>
            <div className={styles.posts}>
                { postsList }
            </div>
        </div>
    );
}

export default MyPosts;
