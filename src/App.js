import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialog from './components/Dialog/Dialog';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className="content">
                {/* <Profile /> */}
                <Dialog />
            </div>
        </div>
    );
}

export default App;
