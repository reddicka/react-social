import styles from "./ProfileInfo.module.css";
import avatar from '../../../assets/img/user.png'
import Preloader from "../../common/Proloader/Preloader";
import {Link} from "react-router-dom";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function ProfileInfo(props) {
    if (!props.userId) {
        return <Preloader/>
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
        <div className={styles.about}>
            <div className={styles.avatar}>
                <img
                    className={styles.avatar_image}
                    src={props.photos?.large || avatar}
                    alt="Аватар"
                />
            </div>

            <div className={styles.description}>
                <h2>{props.fullName}</h2>

                <ProfileStatus
                    userId={props.userId}
                    profileStatus={props.profileStatus}
                    getProfileStatus={props.getProfileStatus}
                    updateProfileStatus={props.updateProfileStatus}
                />

                {props.aboutMe && <p>{props.aboutMe}</p>}

                {
                    props.lookingForAJob && <p>Ищу работу: {props.lookingForAJobDescription}</p>
                }

                {
                    Object.keys(props.contacts).length && <div>{notEmptyContacts()}</div>
                }

            </div>
        </div>
    )
}

export default ProfileInfo