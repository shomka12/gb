import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="s.item"></div>
            <Post message="Post1" like="15"/>
            <Post message="Post2" like="5"/>
        </div>
    );
};

export default Myposts;
