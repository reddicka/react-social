import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";
import DialogsPageContainer from "./components/Dialogs/DialogsPageContainer";
import FindUserPageContainer from "./components/FindUser/FindUserPageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path='/profile/*' element={
                        <ProfileContainer />
                    }/>

                    <Route path='/dialogs/*' element={
                        <DialogsPageContainer />}
                    />

                    <Route path='/friends' element={
                        <Friends />}
                    />

                    <Route path='/music' element={
                        <Music />}
                    />

                    <Route path='/video' element={
                        <Video />}
                    />

                    <Route path='/search' element={
                        <FindUserPageContainer />}
                    />

                    {/*<Route path='*' element={<NotFound />} />*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
