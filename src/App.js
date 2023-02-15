import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="grid-container">
            <Header />
            <Content />
            <Menu />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
