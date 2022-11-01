import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts posts={props.data.posts} newPostText={props.data.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;
