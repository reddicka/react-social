import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from "./App";
import stateTipa, {addPost, sendMessage, updateNewMessageText, updateNewPostText, subscribe} from "./reduxTipa/stateTipa";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={stateTipa}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    sendMessage={sendMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>,
    );
}

rerenderEntireTree(stateTipa)

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
