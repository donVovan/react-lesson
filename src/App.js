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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <Header/>
                <div className='grid-container-content'>
                    <Routes>
                        <Route path="/Profile"
                               addPost={props.addPost}
                               element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/Dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
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
