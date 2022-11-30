import styles from "./ProfileInfo.module.css";
import avatar from '../../../assets/img/user.png'
import Preloader from "../../common/Proloader/Preloader";

function ProfileInfo(props) {
    if (Object.entries(props).length === 0) {
        return <Preloader />
    }

    let notEmptyContacts = () => {
        let arr = []

        for (let contact in props.contacts) {
            props.contacts[contact] && arr.push(
                <a
                    href={props.contacts[contact]}
                    target='_blank'
                    rel='noreferrer'
                    key={contact}
                    style={{marginRight: '10px'}}
                    className={styles[contact]}
                >
                    {contact}
                </a>
            )
        }
        return arr
    }

    return (
        <div>
            <img
                className={styles.profile__background_image}
                src="https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg"
                alt="Задний фон"
            />

            <div className={styles.profile__about}>
                <div className={styles.profile__avatar}>
                    <img
                        className={styles.profile__avatar_image}
                        src={props.photos?.large || avatar}
                        alt="Аватар"
                    />
                </div>

                <div className={styles.profile__about_description}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{props.fullName}</p>
                    <p>{props.aboutMe}</p>
                    <p>{
                        props.lookingForAJob
                            ? 'В поиске работы'
                            : 'Работу не ищу'
                    }</p>
                    <p>Описание работы: {props.lookingForAJobDescription}</p>
                    <p>писька сантиметр</p>

                    <div>
                        {notEmptyContacts()}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProfileInfo