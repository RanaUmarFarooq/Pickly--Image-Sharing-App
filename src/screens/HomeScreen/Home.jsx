import React from "react";
import styles from "./Home.module.css";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <SideBar />
      </div>
      <div>
        <p>Photos</p>
      </div>
    </div>
  );
};

export default Home;
