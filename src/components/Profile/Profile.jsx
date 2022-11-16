import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts
                state={props.state}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;
