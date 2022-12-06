import styles from "./ProfileInfo.module.css";
import avatar from '../../../assets/img/user.png'
import Preloader from "../../common/Proloader/Preloader";
import {Link, Navigate} from "react-router-dom";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.userId) {
        return <Preloader />
    }

    let notEmptyContacts = () => {
        let arr = []

        for (let contact in props.contacts) {
            props.contacts[contact] && arr.push(
                <Link
                    to={props.contacts[contact]}
                    // replace
                    // reloadDocument
                    target='_blank'
                    rel='noreferrer'
                    key={contact}
                    style={{marginRight: '10px'}}
                    className={styles[contact]}
                >
                    {contact}
                </Link>
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

                    <p>статус из запроса ---- {props.profileStatus}</p>

                    <ProfileStatus
                        userId={props.userId}
                        profileStatus={props.profileStatus}
                        getProfileStatus={props.getProfileStatus}
                        updateProfileStatus={props.updateProfileStatus}
                    />

                    <p>{props.aboutMe}</p>
                    <p>{
                        props.lookingForAJob
                            ? 'В поиске работы'
                            : 'Работу не ищу'
                    }</p>
                    {props.lookingForAJob && <p>Описание работы: {props.lookingForAJobDescription}</p>}
                    {/*<p>писька сантиметр</p>*/}

                    <div>
                        {notEmptyContacts()}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProfileInfo