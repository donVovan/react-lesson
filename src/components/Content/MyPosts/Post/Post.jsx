import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZvKLG2DVdIGFLwLy0U-dsesmG2t361SPMQ&usqp=CAU"
                alt=""/>
            post 1 <br/>
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post;