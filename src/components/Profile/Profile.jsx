import React from "react";
//import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state, addPost}) => {
    return (
        <article>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost}/>
        </article>
    );
}

export default Profile;