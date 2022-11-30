import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import React from "react";


const Profile = (props) => {
  return (
      <div className={styles.profile}>
          <ProfileInfo {...props.profileInfo} />
          <MyPosts
              posts={props.posts}
              newPostText={props.newPostText}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
          />
      </div>
  )
}

export default Profile