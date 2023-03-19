import React from "react";
//import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, dispatch}) => {
    return (
        <article>
            <ProfileInfo/>
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                dispatch={dispatch}
            />
        </article>
    );
}

export default Profile;