import React, { useState } from "react";
import styles from "./Home.module.css";
import SideBar from "../../components/SideBar/SideBar";
import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import SearchTags from "../../components/SearchTags/SearchTags";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const handleChange = (event) => {
    if (event.target.value) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.main_content}>
        <div className={styles.search_container}>
          <div
            className={`${styles.text_input} ${
              isTyping ? styles.focsued_input : ""
            }`}
          >
            <input
              type="text"
              placeholder="Search over 10,000 Images"
              className={styles.input}
            />
            <button className={styles.btn_search}>
              <FiSearch className={styles.icon}></FiSearch>
            </button>
          </div>
          <button className={styles.btn_upload}>
            <span className={styles.upload_icon}>
              <BsStars />
            </span>
            Upload Image
          </button>
        </div>
        <div>
          <SearchTags />
        </div>
      </div>
    </div>
  );
};

export default Home;
