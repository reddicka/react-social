import React, {memo} from "react";
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from "./NewPost";

const MyPosts = memo(props => {

    let postsElements = [...props.posts]
        .reverse()
        .map(item =>
            <Post text={item.text} likes={item.likes} key={item.id}/>
        )

    return (
        <div>
            <hr/>
            <NewPost addPost={props.addPost}/>

            <hr/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;
