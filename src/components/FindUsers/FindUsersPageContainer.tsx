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
    setTotalUsersCount, setUserId
} from "../../redux/users-selectors";
import {AppStateType} from "../../redux/redux-store";
import {UserType} from "../../types/types";

type MapStateToPropsType = {
    users: Array<UserType>
    currentPageNumber: number
    totalUsersCount: number
    pageSize: number
    isLoading: boolean
    isLockedButtons: Array<number>
    authorizedUserId: number | null
}
type MapDispatchToPropsType = {
    requestUsers: (currentPageNumber: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


class FindUsersPageContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPageNumber, pageSize} = this.props
        this.props.requestUsers(currentPageNumber, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <FindUsersPage {...this.props} onPageChanged={this.onPageChanged}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: getUsers(state),
    currentPageNumber: setCurrentPageNumber(state),
    totalUsersCount: setTotalUsersCount(state),
    pageSize: setPageSize(state),
    isLoading: setIsLoading(state),
    isLockedButtons: setIsLockedButtons(state),
    authorizedUserId: setUserId(state)
})


export default compose(
    connect<MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType, AppStateType>(mapStateToProps, {
        requestUsers,
        follow,
        unfollow
    }),
    WithAuthRedirect
    // @ts-ignore
)(FindUsersPageContainer)