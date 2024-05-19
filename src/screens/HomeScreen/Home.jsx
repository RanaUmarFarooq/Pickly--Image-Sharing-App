import React from "react";
import styles from "./Home.module.css";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.main_content}>
        <h1>Photos</h1>
      </div>
    </div>
  );
};

export default Home;
