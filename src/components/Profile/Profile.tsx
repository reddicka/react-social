import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import React, {FC} from "react";
import {PostType, ProfileType} from "../../types/types";


type PropsType = {
    isOwner: boolean

    profileInfo: ProfileType
    updateProfileData: (status: string) => void

    profileStatus: string
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (text: string) => void

    updateProfileAvatar: (file: any) => void

    addPost: (newPostText: string) => void
    posts: Array<PostType>
}

const Profile: FC<PropsType> = (props) => {
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