import style from './FindUserPage.module.css'
import User from "./User/User";
import axios from "axios";
import {Component} from "react";

// const FindUserPage = (props) => {
//     if (props.users.length === 0) {
//         axios
//             .get("https://social-network.samuraijs.com/api/1.0/users")
//             .then(response => {
//                 props.setUsers(response.data.items)
//             })
//     }
//
//     const usersList = props.users.map(user =>
//         <User
//             key={user.id}
//             id={user.id}
//             name={user.name}
//             followed={user.followed}
//             photos={user.photos}
//             location={user.location}
//             status={user.status}
//             follow={props.follow}
//             unfollow={props.unfollow}
//         />
//     )
//
//     return (
//         <ul className={style.users_list}>
//             { usersList }
//         </ul>
//     )
// }

class FindUserPage extends Component {
    render() {
        if (this.props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }

        const usersList = this.props.users.map(user =>
            <User
                key={user.id}
                id={user.id}
                name={user.name}
                followed={user.followed}
                photos={user.photos}
                location={user.location}
                status={user.status}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )

        return (
            <ul className={style.users_list}>
                {usersList}
            </ul>
        )
    }
}

export default FindUserPage