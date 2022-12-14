import {connect} from "react-redux";
import FindUserPage from "./FindUserPage";
import {follow,getUsers,unfollow} from "../../redux/find_users-reducer";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class FindUserPageContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPageNumber, this.props.pageSize)
    }

    onSetPageClick = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <FindUserPage {...this.props} onSetPageClick={this.onSetPageClick}/>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.findUserPage.users,
    currentPageNumber: state.findUserPage.currentPageNumber,
    totalUsersCount: state.findUserPage.totalUsersCount,
    pageSize: state.findUserPage.pageSize,
    isLoading: state.findUserPage.isLoading,
    isLockedButtons: state.findUserPage.isLockedButtons
})


export default compose(
    connect(mapStateToProps, {
        getUsers,
        follow,
        unfollow
    }),
    // WithAuthRedirect
)(FindUserPageContainer)