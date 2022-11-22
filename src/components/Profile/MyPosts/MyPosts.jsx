import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.updateNewPostText(newText)
    }

    let postsElements = props.posts.map(item =>
        <Post text={item.text} likes={item.likes} key={item.id} />
    )

    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={ newPostElement }
                    onChange={ onPostChange }
                    value={ props.newPostText }
                />
                <button onClick={ onAddPost }>Опубликовать</button>
            </div>
            <div className={styles.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;
