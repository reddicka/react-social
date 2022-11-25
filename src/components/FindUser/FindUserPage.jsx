import style from './FindUserPage.module.css'
import User from "./User/User";

const FindUserPage = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: true,
                fullname: 'Василбка',
                // age: 86,
                location: {
                    city: 'Perm',
                    country: 'Russia'
                },
                avatarUrl: 'https://i.pinimg.com/originals/b3/62/d6/b362d6a5e2eb3f359a6f2995726cb308.jpg',
                status: 'меня лехко найти'
            },
            {
                id: 2,
                followed: false,
                fullname: 'Данилбка',
                // age: 14,
                location: {
                    city: 'Гримячька',
                    country: 'Russia'
                },
                avatarUrl: 'https://sun9-45.userapi.com/c836427/v836427325/11edb/zZP8vm5Lh3s.jpg',
                status: 'иглаюсь в комьпик'
            },
            {
                id: 3,
                followed: false,
                fullname: 'Чубурашка',
                // age: 20,
                location: {
                    city: 'Чубурашкинск',
                    country: 'Russia'
                },
                avatarUrl: 'https://pbs.twimg.com/media/FCR8aARVEAEixhl.jpg',
                status: 'челик'
            },
        ])
    }

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