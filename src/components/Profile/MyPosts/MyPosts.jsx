import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({posts, addPost}) => {
let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

let newPostElement = React.createRef();

let addNewPost = ()=> {
    let text = newPostElement.current.value;
    addPost(text);
}

    return <div className={style.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button className={style.btn} onClick={addNewPost}>Add post</button>
            </div>
        </div>
        <div className={style.posts}>
            { postsElements }
        </div>
    </div>
}

export default MyPosts;