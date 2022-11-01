import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./reduxTipa/stateTipa";

export let rerenderEntireTree = (stateTipa) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={stateTipa} addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>,
    );
}
