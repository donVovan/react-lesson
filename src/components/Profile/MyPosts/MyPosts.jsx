import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 73},
    ]
let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
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
            { postsElements }
        </div>
    </div>
}

export default MyPosts;