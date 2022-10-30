import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {
        id: 1,
        name: 'Стасян'
    },
    {
        id: 2,
        name: 'Василка'
    },
    {
        id: 3,
        name: 'Данилбка'
    },
    {
        id: 4,
        name: 'Танюха'
    }
]

let messages = [
    {
        id: 1,
        message: 'Вам песьмо такое',
        type: 'inbox'
    },
    {
        id: 2,
        message: 'А я ему такое',
        type: 'outbox'
    },
    {
        id: 3,
        message: 'Привет',
        type: 'inbox'
    },
    {
        id: 4,
        message: 'Привет писька',
        type: 'outbox'
    }
]

let dialogsPageData = {
    'dialogs': dialogs,
    'messages222': messages
}

let posts = [
    {
        id: 1,
        text: 'Пост про письки',
        likes: 12
    },
    {
        id: 2,
        text: 'Пост про сиськи',
        likes: 15
    },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App dialogsPageData={dialogsPageData} posts={posts} />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
