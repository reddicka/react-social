import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

function Profile() {
    return (
        <div className={style.profile}>
            <img
                className={style.profile__background_image}
                src="https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg"
                alt="Задний фон"
            />

            <div className={style.profile__about}>
                <div className={style.profile__about_avatar}>
                    <img
                        className={style.profile__avatar_image}
                        src="https://pbs.twimg.com/media/DMiQk1SWkAEDF0G.jpg"
                        alt="Аватар"
                    />
                </div>

                <div className={style.profile__about_description}>
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
