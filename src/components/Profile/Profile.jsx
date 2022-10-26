import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

function Profile() {
    return (
        <div className={styles.profile}>
            <img
                className={styles.profile__background_image}
                src="https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg"
                alt="Задний фон"
            />

            <div className={styles.profile__about}>
                <div className={styles.profile__about_avatar}>
                    <img
                        className={styles.profile__avatar_image}
                        src="https://pbs.twimg.com/media/DMiQk1SWkAEDF0G.jpg"
                        alt="Аватар"
                    />
                </div>

                <div className={styles.profile__about_description}>
                    <p>звать наилька</p>
                    <p>шкила такая</p>
                    <p>кунивера такая</p>
                    <p>писька стока</p>
                </div>
            </div>

            <MyPosts />
        </div>
    );
}

export default Profile;
