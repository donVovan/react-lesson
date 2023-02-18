import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <article>
            <ProfileInfo/>
            <MyPosts/>
        </article>
    );
}

export default Profile;