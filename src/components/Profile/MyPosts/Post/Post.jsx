import styles from './Post.module.css';

function Post(props) {
    return <div className={styles.item}>{props.message}</div>;
}

export default Post;
