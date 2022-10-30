import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
    return (
        <div className={styles.profile}>
            <ProfileInfo />
            <MyPosts posts={props.data.posts} />
        </div>
    );
}

export default Profile;
