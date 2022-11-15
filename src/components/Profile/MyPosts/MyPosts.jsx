import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElement = React.createRef()
    let addPost = () => {
        props.state.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.state.updateNewPostText(text)
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
                <button onClick={ addPost } >Опубликовать</button>
            </div>
            <div className={styles.posts}>
                { postsList }
            </div>
        </div>
    );
}

export default MyPosts;
