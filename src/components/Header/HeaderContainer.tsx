import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
    isLoading: boolean
    avatarUrl: string | null
}

type MapDispatchToPropsType = {
    logout: () => void
}

type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header {...this.props} />
        )
    };
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    avatarUrl: state.auth.avatarUrl
})

export default connect<MapStateToPropsType,
    MapDispatchToPropsType,
    OwnPropsType, AppStateType>(mapStateToProps, {
    logout
})(HeaderContainer);
