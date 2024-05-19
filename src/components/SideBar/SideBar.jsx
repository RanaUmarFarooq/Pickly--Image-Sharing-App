import React from "react";
import styles from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import Catagories from "../CatagoriesList/Catagories";
import MenuBar from "../MenuBar/MenuBar";
import BottomMenu from "../BottomMenu/BottomMenu";
import UserProfile from "../UserProfile/UserProfile";
import SocialLinks from "../SocialLinks/SocialLinks";
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.app_branding}>
        <img src={logo} alt="Pickly_logo" className={styles.app_logo} />
        <span className={styles.app_name}>Pickly</span>
      </div>
      <MenuBar />
      <Catagories />
      <BottomMenu />
      <UserProfile />
      <SocialLinks />
    </div>
  );
};

export default SideBar;
