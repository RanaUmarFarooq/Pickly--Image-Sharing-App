import React, { useState, useRef } from "react";
import styles from "./Home.module.css";
import SideBar from "../../components/SideBar/SideBar";
import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

import SearchTags from "../../components/SearchTags/SearchTags";
import ImageModal from "../../components/Image Modal/ImageModal";

const Home = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [blurBackground, setBlurBackground] = useState(false);

  // =============== Function to show Modal  ===============
  const handleOpenModal = () => {
    setShowModal(true);
    setBlurBackground(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setBlurBackground(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    alert("Form submitted!");
    setShowModal(false);
    setBlurBackground(false); // Remove blur effect after form submission
  };
  return (
    <div className={`${styles.container} ${showModal ? styles.blur : ""}`}>
      {/* // =============== Side Bar =============== */}

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
          <button className={styles.btn_upload} onClick={handleOpenModal}>
            <span className={styles.upload_icon}>
              <BsStars />
            </span>
            Upload Image
          </button>

          <ImageModal
            show={showModal}
            handleClose={handleCloseModal}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* // =============== Search Tags =============== */}

        <div className={styles.search_tags}>
          <SearchTags show={showModal} />
        </div>

        {/* // =============== Show Images =============== */}
      </div>
    </div>
  );
};

export default Home;
