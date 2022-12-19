import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.profileStatus)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const onUpdateStatus = () => {
        // props.getProfileStatus(props.userId) // НЕ РАБОТАЕТ ЕСЛИ В АДРЕСНОЙ СТРОКЕ НИЧЕГО
        props.updateProfileStatus(status)
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
                <>
                    <div>
                        <input
                            onBlur={toggleEditMode}
                            autoFocus={true}
                            // readOnly={true} // ПОКА ЧТО ЧТОБ НЕ РУГАЛОСЬ
                            type='text'
                            onChange={onStatusChange}
                            value={status}/>
                    </div>
                    {/*<button*/}
                    {/*    style={{width: '50px', height: '50px', margin: '10px'}}*/}
                    {/*    onClick={this.onUpdateStatus}*/}
                    {/*/>*/}
                </>
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
            <button
                style={{width: '50px', height: '50px', margin: '10px'}}
                onClick={onUpdateStatus}
            />
        </>
    )
}

export default ProfileStatus