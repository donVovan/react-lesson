import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = ({posts, newPostText, addPost, updateNewPostText}) => {
    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return <div className={style.postsBlock}>
        <h2>My posts</h2>
        <div>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={newPostText}
                />
            </div>
            <div>
                <button className={style.btn} onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;