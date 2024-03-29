import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Music from "./components/Music/Music";
import Books from "./components/Books/Books";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = ({store}) => {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <Header/>
                <div className='grid-container-content'>
                    <Routes>
                        <Route path="/Profile"
                               element={<Profile/>}
                        />
                        <Route path="/Users"
                               element={<UsersContainer />}
                        />
                        <Route path="/Dialogs/*"
                               element={<DialogsContainer/>}
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
