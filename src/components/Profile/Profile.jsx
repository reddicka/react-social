import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import React from "react";

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo
                isOwner={props.isOwner}

                profileInfo={props.profileInfo}
                updateProfileData={props.updateProfileData}

                profileStatus={props.profileStatus}
                getProfileStatus={props.getProfileStatus}
                updateProfileStatus={props.updateProfileStatus}

                updateProfileAvatar={props.updateProfileAvatar}
            />

            <ProfilePosts
                addPost={props.addPost}
                posts={props.posts}
            />
        </div>
    )
}

export default Profile