import React from "react";
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
   const activeLink = ({isActive}) => isActive ? style.activeLink : '';
    return (
        <nav className={style.menu}>
            <ul>
                <li><NavLink to='/Profile' className={activeLink}>Profile</NavLink></li>
                <li><NavLink to='/Dialogs' className={activeLink}>Messages</NavLink></li>
                <li><NavLink to='/Users' className={activeLink}>Users</NavLink></li>
                <li><NavLink to='/Music' className={activeLink}>Music</NavLink></li>
                <li><NavLink to='/Books' className={activeLink}>Books</NavLink></li>
                <li><NavLink to='/Settings' className={activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;