import React from "react";
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
   const activeLink = ({isActive}) => isActive ? style.activeLink : style.item;
    return (
        <nav className={style.menu}>
            <ul className={style.list}>
                <li className={style.item}><NavLink to='/Profile' className={activeLink}>Profile</NavLink></li>
                <li className={style.item}><NavLink to='/Dialogs' className={activeLink}>Messages</NavLink></li>
                <li className={style.item}><NavLink to='/Music' className={activeLink}>Music</NavLink></li>
                <li className={style.item}><NavLink to='/Books' className={activeLink}>Books</NavLink></li>
                <li className={style.item}><NavLink to='/Settings' className={activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;