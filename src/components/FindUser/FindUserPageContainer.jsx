import {connect} from "react-redux";
import FindUserPage from "./FindUserPage";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC
} from "../../redux/find_users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.findUserPageData.users,
        currentPage: state.findUserPageData.currentPage,
        totalUsers: state.findUserPageData.totalUsers,
        pageSize: state.findUserPageData.pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId)
            dispatch(action)
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId)
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersAC(users)
            dispatch(action)
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage)
            dispatch(action)
        },
        setTotalUsers: (totalUsers) => {
            let action = setTotalUsersAC(totalUsers)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUserPage)