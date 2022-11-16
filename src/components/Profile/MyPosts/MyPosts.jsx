import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElement = React.createRef()
    let addPost = () => {
        props.stateProfilePage.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.stateProfilePage.updateNewPostText(text)
    }

    let postsList = props.stateProfilePage.posts.map(item =>
        <Post text={item.text} likes={item.likes} key={item.id} />
    )

    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={ newPostElement }
                    onChange={ onPostChange }
                    value={ props.stateProfilePage.newPostText }
                />
                <button onClick={ addPost } >Опубликовать</button>
            </div>
            <div className={styles.posts}>
                { postsList }
            </div>
        </div>
    );
}

export default MyPosts;
