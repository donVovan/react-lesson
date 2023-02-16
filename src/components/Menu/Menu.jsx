import React from "react";
import s from './Menu.module.css';

const Menu = () => {
  return <nav className={s.menu}>
    <ul className={s.list}>
      <li className={s.item}><a href='/Profile'>Profile</a></li>
      <li className={s.item}><a href='/Dialogs'>Messages</a></li>
      <li className={s.item}><a href='/Music'>Music</a></li>
      <li className={s.item}><a href='/Books'>Books</a></li>
      <li className={s.item}><a href='/Settings'>Settings</a></li>
    </ul>
  </nav>;
}

export default Menu;