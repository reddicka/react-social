import style from './FindUserPage.module.css'
import User from "./User/User";

const FindUserPage = (props) => {

    const usersList = props.users.map(user =>
        <User
            key={user.id}
            id={user.id}
            fullname={user.fullname}
            followed={user.followed}
            avatarUrl={user.avatarUrl}
            location={user.location}
            status={user.status}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    )

    return (
        <ul className={style.users_list}>
            { usersList }
        </ul>
    )
}

export default FindUserPage