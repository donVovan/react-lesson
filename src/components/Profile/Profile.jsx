import React from "react";
//import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, updateNewPostText}) => {
    return (
        <article>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </article>
    );
}

export default Profile;