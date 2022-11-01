import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./reduxTipa/stateTipa";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (stateTipa) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={stateTipa} addPost={addPost} updateNewPostText={updateNewPostText} />
            </BrowserRouter>
        </React.StrictMode>,
    );
}
