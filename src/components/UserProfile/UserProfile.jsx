import React from "react";
import styles from "./UserProfile.module.css";
import Profile from "../../assets/profile.png";
import SocialLinks from "../SocialLinks/SocialLinks";

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src={Profile} alt="prifile_img" className={styles.user_img} />
        <span className={styles.user_name}>Umar Farooq</span>
      </div>
    </div>
  );
};

export default UserProfile;
