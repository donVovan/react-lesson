import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Books from "./components/Books/Books";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = ({addPost, state, updateNewPostText, addMessage, updateNewMessageText}) => {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <Header/>
                <div className='grid-container-content'>
                    <Routes>
                        <Route path="/Profile"
                               element={<Profile
                                   addPost={addPost}
                                   updateNewPostText={updateNewPostText}
                                   profilePage={state.profilePage}/>}
                        />
                        <Route path="/Dialogs/*"
                               element={<Dialogs
                                   state={state.dialogsPage}
                                   addMessage={addMessage}
                                   updateNewMessageText={updateNewMessageText}
                                   dialogsPage={state.dialogsPage}
                                   newMessageText={state.newMessageText}
                               />}
                        />
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Books" element={<Books/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
                <Menu/>
                <Sidebar/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
