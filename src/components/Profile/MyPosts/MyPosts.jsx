import React from "react";
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({posts, newPostText, dispatch}) => {
    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addNewPost = () => {
        dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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
                <button className={style.btn} onClick={addNewPost}>Add post</button>
            </div>
        </div>
        <div className={style.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;