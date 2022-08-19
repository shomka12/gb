import React from "react";
import Myposts from "./Myposts/Myposts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="http://www.almazfea.com/upload/items/3720_s.jpg" />
      </div>
      <div>ava + desc</div>
      <Myposts />
    </div>
  );
};

export default Profile;
