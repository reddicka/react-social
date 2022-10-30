import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
}

export default Profile;
