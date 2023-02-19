import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZvKLG2DVdIGFLwLy0U-dsesmG2t361SPMQ&usqp=CAU"
                alt=""/>
            {props.message} <br/>
            <div>
              Like:  {props.likeCount}
            </div>

        </div>
    )
}

export default Post;