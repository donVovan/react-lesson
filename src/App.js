import React from "react";
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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
