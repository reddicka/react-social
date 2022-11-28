import {connect} from "react-redux";
import FindUserPage from "./FindUserPage";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC
} from "../../redux/find_users-reducer";
import React from "react";
import axios from "axios";

class FindUserPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsers(response.data.totalCount)
                })
        }
    }

    onSetPageClick = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <FindUserPage
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onSetPageClick={this.onSetPageClick}
            />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(FindUserPageContainer)