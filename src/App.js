import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogPage from './components/Dialog/DialogPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Video from "./components/Video/Video";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Profile posts={props.posts} />} />
                        <Route path='/dialogs/*' element={
                            <DialogPage
                                dialogsList={props.dialogsPageData.dialogs}
                                messagesList={props.dialogsPageData.messages222}
                            />
                        } />
                        <Route path='/friends' element={<Friends />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/video' element={<Video />} />
                        {/*<Route path='*' element={<NotFound />} />*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
