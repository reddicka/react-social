import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./reduxTipa/stateTipa";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (stateTipa) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={stateTipa}
                    ddPost={addPost}
                    updateNewPostText={updateNewPostText}
                    sendMessage={sendMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
    );
}
