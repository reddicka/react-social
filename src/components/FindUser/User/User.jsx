import style from './User.module.css'

const User = (props) => {
    const follow = () => {
        props.follow(props.id)
    }

    const unfollow = () => {
        props.unfollow(props.id)
    }

    return (
        <li className={style.user_item}>
            <div className={style.user_avatar}>
                <img src={props.avatarUrl} alt={props.fullname} title={props.fullname} />
            </div>
            <div className={style.user_info}>
                <p className={style.user_name}>
                    {props.fullname}
                </p>
                <p className={style.user_location}>
                    {`${props.location.country}, ${props.location.city}`}
                </p>
                <p className={style.user_status}>
                    {props.status}
                </p>
            </div>
            <div className={style.user_buttons}>
                {
                    props.followed
                    ? <button onClick={ unfollow }>unfollow</button>
                    : <button onClick={ follow } >follow</button>
                }
            </div>
        </li>
    )
}

export default User