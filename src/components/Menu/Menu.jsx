import React from "react";
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
   const activeLink = ({isActive}) => isActive ? s.activeLink : s.item;
    return (
        <nav className={s.menu}>
            <ul className={s.list}>
                <li className={s.item}><NavLink to='/Profile' className={activeLink}>Profile</NavLink></li>
                <li className={s.item}><NavLink to='/Dialogs' className={activeLink}>Messages</NavLink></li>
                <li className={s.item}><NavLink to='/Music' className={activeLink}>Music</NavLink></li>
                <li className={s.item}><NavLink to='/Books' className={activeLink}>Books</NavLink></li>
                <li className={s.item}><NavLink to='/Settings' className={activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;