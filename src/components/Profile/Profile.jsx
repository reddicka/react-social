import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import React from "react";
import {updateProfileData} from "../../redux/profile-reducer";

const Profile = (props) => {
    // console.log(props)
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

            <MyPosts
                addPost={props.addPost}
                posts={props.posts}
            />
        </div>
    )
}

export default Profile