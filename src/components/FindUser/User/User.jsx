import style from './User.module.css'
import avatar from '../../../assets/img/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

const User = (props) => {
    let follow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "29201f9b-a84b-4824-840c-6ad5dd868031"
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(props.id)
                }

            })
    }

    let unfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "29201f9b-a84b-4824-840c-6ad5dd868031"
                }
            })
            .then(response => {
                response.data.resultCode === 0 &&
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