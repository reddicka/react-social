import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Опубликовать</button>
            </div>
            <div className={style.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;
