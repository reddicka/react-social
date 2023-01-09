import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {

}
type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<PropsType> {
        render () {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'} />
            }

            return <Component {...this.props} />
        }
    }

    return connect<MapStateToPropsType,
        MapDispatchToPropsType,
        OwnPropsType, AppStateType>(mapStateToProps)(RedirectComponent)
}
