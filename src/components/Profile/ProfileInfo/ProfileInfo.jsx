import styles from "./ProfileInfo.module.css";
import avatar from '../../../assets/img/user.png'
import Preloader from "../../common/Proloader/Preloader";
import {Link} from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {updateProfileData} from "../../../redux/profile-reducer";

const ProfileInfo = ({profileInfo, ...props}) => {
    const [editMode, setEditMode] = useState(false)

    if (!profileInfo) {
        return <Preloader/>
    }

    const onNewAvatarSelected = (e) => {
        props.updateProfileAvatar(e.target.files[0])
    }

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onSubmit = (formData) => {
        console.log(formData)
        props.updateProfileData(formData)
            .then(
                () => {
                    // не самое лучшее решение с точки зрения "задиспатчил-забыл"
                    // лучше сделать глобальный флаг статуса загрузки (none, success, error)
                    setEditMode(false)
                }
            )
    }

    return (
        <div className={styles.about}>
            <div className={styles.avatar}>
                <img
                    className={styles.avatar_image}
                    src={profileInfo.photos?.large || avatar}
                    alt="Аватар"
                />

                {
                    props.isOwner &&
                    <div className={styles.btn_uploadAvatar}>
                        <input type='file' onChange={onNewAvatarSelected}/>
                        <span>Загрузить</span>
                    </div>
                }
            </div>

            <div className={styles.description}>
                <h2>{profileInfo.fullName}</h2>

                <ProfileStatus
                    isOwner={props.isOwner}
                    userId={profileInfo.userId}
                    profileStatus={props.profileStatus}
                    getProfileStatus={props.getProfileStatus}
                    updateProfileStatus={props.updateProfileStatus}
                />

                {
                    editMode
                        ? <ProfileDataForm profileInfo={profileInfo} onSubmit={onSubmit} initialValues={profileInfo} />
                        : <ProfileData profileInfo={profileInfo}/>
                }

                {props.isOwner && <button onClick={toggleEditMode}>Редактировать</button>}

            </div>
        </div>
    )
}

// данные о пользователе (ищет ли работу, о его работе, "обо мне", список контактов)
const ProfileData = ({profileInfo}) => {
    if (!profileInfo) {
        return <Preloader/>
    }

    return (
        <>
            <p>Ищу работу: {profileInfo.lookingForAJob ? 'Да' : 'Нет'}</p>
            {profileInfo.lookingForAJobDescription && <p>О моей работе: {profileInfo.lookingForAJobDescription}</p>}
            {profileInfo.aboutMe && <p>Обо мне: {profileInfo.aboutMe}</p>}

            <ul>
                {
                    Object.keys(profileInfo.contacts).map(contact => {
                        if (profileInfo.contacts[contact]) {
                            return <Contact key={contact} contacts={profileInfo.contacts} contact={contact} />
                        }
                    })
                }
            </ul>

        </>
    )
}

// компонент контакта
const Contact = ({contacts, contact}) => {
    return(
        <li>
            <Link
                to={contacts[contact]}
                // replace
                // reloadDocument
                target='_blank'
                rel='noreferrer'
                style={{marginRight: '10px'}}
                className={styles[contact]}
            >
                {contact}
            </Link>
        </li>
    )
}

export default ProfileInfo