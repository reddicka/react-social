import style from './User.module.css'
import avatar from '../../../assets/img/user.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const User = (props) => {
    let follow = () => {
        usersAPI.follow(props.id)
            .then(data => {
                data.resultCode === 0 &&
                    props.follow(props.id)
            })
    }

    let unfollow = () => {
        usersAPI.unfollow(props.id)
            .then(data => {
                data.resultCode === 0 &&
                    props.unfollow(props.id)
            })
    }

    return (
        <li className={style.user_item}>
            <div className={style.user_avatar}>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small || avatar } alt={props.name} title={props.name} />
                </NavLink>
            </div>
            <div className={style.user_info}>
                <p className={style.user_name}>
                    {props.name}
                </p>
                <p className={style.user_location}>
                    {/*{`${props.location.country}, ${props.location.city}`}*/}
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