import {connect} from "react-redux";
import FindUserPage from "./FindUserPage";
import {followAC, setUsersAC, unfollowAC} from "../../redux/find_users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.findUserPageData.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            let action = setUsersAC(users)
            dispatch(action)
        },
        follow: (userId) => {
            let action = followAC(userId)
            dispatch(action)
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUserPage)