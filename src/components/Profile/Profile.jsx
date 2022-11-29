import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

function Profile() {
    return (
        <div className={styles.profile}>
            <ProfileInfoContainer />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
