import './App.css';
import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialog from './components/Dialog/Dialog';
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/dialogs' element={<Dialog />} />
                    <Route path='/friends' element={<Friends />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/video' element={<Video />} />
                    {/*<Route path='*' element={<NotFound />} />*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
