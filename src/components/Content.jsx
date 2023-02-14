import React from "react";
import s from './Content.module.css';

const Content = () => {
  return <article className={s.content}><h3>Content</h3>
  <div className={s.posts}>
    <div className={s.item}>post 1</div>
  </div>
  </article>;
}

export default Content;