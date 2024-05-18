import React from "react";
import styles from "./SideBar.module.css";
import logo from "../../assets/logo.png";
import Catagories from "../CatagoriesList/Catagories";
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.app_branding}>
        <img src={logo} alt="Pickly_logo" className={styles.logo} />
        <span>Pickly</span>
      </div>
      <Catagories />
    </div>
  );
};

export default SideBar;
