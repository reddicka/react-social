import styles from './Post.module.css';

function Post(props) {
    return (
        <div className={styles.item}>
            {props.text}
            <br />
            likes: <span>{props.likes}</span>
            <br />
            qweqweqwe
            qwe
        </div>
    );
}

export default Post;
