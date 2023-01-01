import React, {useEffect, useState} from "react";
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profileStatus)

    const toggleEditMode = () => {
        props.isOwner && setEditMode(!editMode)
    }

    const onUpdateStatus = () => {
        props.updateProfileStatus(status)
        // props.getProfileStatus(props.userId) // НЕ РАБОТАЕТ ЕСЛИ В АДРЕСНОЙ СТРОКЕ НИЧЕГО // кажись уже и не надо
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.profileStatus)
    }, [props.profileStatus])

    return (
        <>
            {
                editMode &&
                <div>
                    <div>
                        <input
                            // onBlur={toggleEditMode}
                            autoFocus={true}
                            // readOnly={true} // ПОКА ЧТО ЧТОБ НЕ РУГАЛОСЬ
                            type='text'
                            onChange={onStatusChange}
                            value={status}/>
                    </div>

                    <div className={styles.controls}>
                        <button
                            value='Сохранить'
                            onClick={onUpdateStatus}>
                            Сохранить
                        </button>
                        <button
                            value='Отмена'
                            onClick={toggleEditMode}>
                            Отмена
                        </button>
                    </div>
                </div>
            }
            {
                !editMode &&
                <div>
                    <span
                        onClick={toggleEditMode}>
                        {props.profileStatus || 'статуса нет'}
                    </span>
                </div>
            }
        </>
    )
}

export default ProfileStatus