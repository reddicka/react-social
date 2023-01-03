import React, {Component, Suspense} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp, setGlobalError} from "./redux/app-reducer";
import './App.css';

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar';
import Preloader from "./components/common/Proloader/Preloader";
import NotFound from "./components/NotFound/NotFound";
import Modal from "./components/common/Modal/Modal";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsPageContainer = React.lazy(() => import("./components/Dialogs/DialogsPageContainer"));
const Friends = React.lazy(() => import("./components/Friends/Friends"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Video = React.lazy(() => import("./components/Video/Video"));
const FindUsersPageContainer = React.lazy(() => import("./components/FindUsers/FindUsersPageContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

class App extends Component {
    // отловить все не отловленные ошибки
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        this.props.setGlobalError(promiseRejectionEvent.reason.message)
        console.log(promiseRejectionEvent.reason.message)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        // Если есть глобальная ошибка, выводим модальное окно
        if (this.props.globalError) {
            return <Modal title={'Упс ;('} text={'Что-то пошло не так...'} error={this.props.globalError} />
        }

        // Если идет инициализация приложения, то отображаем прелодер
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile" />} />

                            <Route path='/profile' element={<ProfileContainer/>}>
                                <Route path=':userId' element={<ProfileContainer/>}/>
                            </Route>

                            <Route path='/dialogs/*' element={
                                <DialogsPageContainer/>}
                            />

                            <Route path='/friends' element={
                                <Friends/>}
                            />

                            <Route path='/music' element={
                                <Music/>}
                            />

                            <Route path='/video' element={
                                <Video/>}
                            />

                            <Route path='/search' element={
                                <FindUsersPageContainer/>}
                            />

                            <Route path='/login' element={
                                <Login/>}
                            />

                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
    globalError: state.app.globalError
})


export default compose(
    connect(mapStateToProps, {
        initializeApp,
        setGlobalError
    })
)(App);
