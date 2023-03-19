import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from "./redux/state";

export function rerenderEntireTree(state) {
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