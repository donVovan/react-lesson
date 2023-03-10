import React from "react";
import style from './Post.module.css';

const Post = ({message, likeCount}) => {
    return (
        <div className={style.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZvKLG2DVdIGFLwLy0U-dsesmG2t361SPMQ&usqp=CAU"
                alt=""/>
            {message} <br/>
            <div>
              Like:  {likeCount}
            </div>

        </div>
    )
}

export default Post;