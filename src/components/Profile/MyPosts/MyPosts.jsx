import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post"/>
        </div>
    </div>
}

export default MyPosts;