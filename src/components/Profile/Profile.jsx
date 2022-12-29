import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import React from "react";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo
                {...props.profileInfo}
                isOwner={props.isOwner}
                profileStatus={props.profileStatus}
                getProfileStatus={props.getProfileStatus}
                updateProfileStatus={props.updateProfileStatus}
                updateProfileAvatar={props.updateProfileAvatar}
            />

            <MyPosts
                addPost={props.addPost}
                posts={props.posts}
            />
        </div>
    )
}

export default Profile