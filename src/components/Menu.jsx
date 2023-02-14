import React from "react";
import s from './Menu.module.css';

const Menu = () => {
  return <nav className={s.menu}>
    <ul className={s.list}>
      <li className={s.item}><a>Profile</a></li>
      <li className={s.item}><a>Music</a></li>
      <li className={s.item}><a>Books</a></li>
      <li className={s.item}><a>Settings</a></li>
    </ul>
  </nav>;
}

export default Menu;