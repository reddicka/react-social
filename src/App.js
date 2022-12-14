import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import DialogsPageContainer from "./components/Dialogs/DialogsPageContainer";
import FindUserPageContainer from "./components/FindUser/FindUserPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp, setInitializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Proloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // Если идет инициализация приложения, то отображаем прелодер
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className="content">
                    <Routes>
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
                            <FindUserPageContainer/>}
                        />

                        <Route path='/login' element={
                            <Login/>}
                        />

                        {/*<Route path='*' element={<NotFound />} />*/}
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized
})


export default compose(
    connect(mapStateToProps, {
        initializeApp
    })
)(App);
