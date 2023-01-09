import React, {FC, memo} from "react";
import styles from './ProfilePosts.module.css';
import NewPost from "./NewPost";
import {PostType} from "../../../types/types";

type PropsType = {
    addPost: (newPostText: string) => void
    posts: Array<PostType>
}

const ProfilePosts: FC<PropsType> = memo(props => {

    let postsElements = [...props.posts]
        .reverse()
        .map(item =>
            <Post id={item.id} text={item.text} likes={item.likes} key={item.id}/>
        )

    return (
        <div className={styles.posts}>
            <NewPost addPost={props.addPost}/>

            <ul className={styles.postsList}>
                {postsElements}
            </ul>
        </div>
    );
})


const Post: FC<PostType> = (props) => {
    return (
        <li className={styles.item}>
            {props.text}
            <br />
            likes: <span>{props.likes}</span>
            <br />
            qweqweqwe
            qwe
        </li>
    );
}

export default ProfilePosts;
