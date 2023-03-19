import React from 'react';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import {addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe} from "./redux/state";

let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

reportWebVitals();
