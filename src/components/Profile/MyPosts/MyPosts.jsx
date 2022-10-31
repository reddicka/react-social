import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text);
    }

    let postsList = props.posts.map(item =>
        <Post text={item.text} likes={item.likes} key={item.id} />
    )

    return (
        <div>
            My posts
            <div>
                <textarea ref={ newPostElement } ></textarea>
                <button onClick={ addPost } >Опубликовать</button>
            </div>
            <div className={styles.posts}>
                { postsList }
            </div>
        </div>
    );
}

export default MyPosts;
