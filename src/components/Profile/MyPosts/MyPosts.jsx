import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from "./NewPost";

function MyPosts(props) {
    let postsElements = props.posts.map(item =>
        <Post text={item.text} likes={item.likes} key={item.id} />
    )

    return (
        <div>
            My posts

            <NewPost addPost={props.addPost} />

            <div className={styles.posts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;
