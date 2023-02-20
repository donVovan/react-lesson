import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

let newPostElement = React.createRef();

let appPost = ()=> {
    let text = newPostElement.current.value;
    alert(text)
}
    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button className={s.btn} onClick={appPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;