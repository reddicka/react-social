import styles from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Опубликовать</button>
            </div>
            <div className={styles.posts}>
                <Post message="Сообщение 1" />
                <Post message="Сообщение 2" />
            </div>
        </div>
    );
}

export default MyPosts;
