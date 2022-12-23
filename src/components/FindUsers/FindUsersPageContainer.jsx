import {connect} from "react-redux";
import FindUsersPage from "./FindUsersPage";
import {follow, requestUsers, unfollow} from "../../redux/find_users-reducer";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    setCurrentPageNumber,
    setIsLoading,
    setIsLockedButtons, setPageSize,
    setTotalUsersCount
} from "../../redux/users-selectors";

class FindUsersPageContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPageNumber, this.props.pageSize)
    }

    onSetPageClick = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <FindUsersPage {...this.props} onSetPageClick={this.onSetPageClick}/>
        )
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    currentPageNumber: setCurrentPageNumber(state),
    totalUsersCount: setTotalUsersCount(state),
    pageSize: setPageSize(state),
    isLoading: setIsLoading(state),
    isLockedButtons: setIsLockedButtons(state)
})


export default compose(
    connect(mapStateToProps, {
        requestUsers,
        follow,
        unfollow
    }),
    WithAuthRedirect
)(FindUsersPageContainer)