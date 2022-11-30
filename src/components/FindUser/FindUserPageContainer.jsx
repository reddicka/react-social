import {connect} from "react-redux";
import FindUserPage from "./FindUserPage";
import {
    follow,
    setCurrentPageNumber,
    setIsLoading,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/find_users-reducer";
import React from "react";
import axios from "axios";
import {setCurrentUserId} from "../../redux/profile-reducer";

class FindUserPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setIsLoading(true)
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPageNumber}`)
                .then(response => {
                    this.props.setIsLoading(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })

        }
    }

    onSetPageClick = (pageNumber) => {
        this.props.setCurrentPageNumber(pageNumber)
        this.props.setIsLoading(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
            })

    }

    render() {
        return (
            <FindUserPage
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPageNumber={this.props.currentPageNumber}
                onSetPageClick={this.onSetPageClick}
                isLoading={this.props.isLoading}

                currentUserId={this.props.currentUserId}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.findUserPageData.users,
    currentPageNumber: state.findUserPageData.currentPageNumber,
    totalUsersCount: state.findUserPageData.totalUsersCount,
    pageSize: state.findUserPageData.pageSize,
    isLoading: state.findUserPageData.isLoading,

    // currentUserId: state.profilePageData.currentUserId
})

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPageNumber,
    setTotalUsersCount,
    setIsLoading,

    // setCurrentUserId
})(FindUserPageContainer)