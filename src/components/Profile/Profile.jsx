import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store}) => {
    return (
        <article>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </article>
    );
}

export default Profile;