import React from "react";
import styles from "./ImageModal.module.css";
import { LuImagePlus } from "react-icons/lu";
const ImageModal = ({ show, handleClose, handleSubmit }) => {
  return (
    show && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <form action="">
            <div className={styles.image_Input_container}>
              <LuImagePlus className={styles.image_upload_icon} />
              <h4>Select an Image</h4>
            </div>
            <div className={styles.image_details_container}>
              <div className={styles.input_element}>
                <label htmlFor="title">Title</label>
                <input type="text" />
              </div>
              <div className={styles.input_element}>
                <label htmlFor="title">Select Catagory</label>
                <select name="" id="">
                  <option value="animal">Animal</option>
                  <option value="animal">Art</option>
                  <option value="animal">Characters</option>
                  <option value="animal">Food & drinks</option>
                  <option value="animal">Animal</option>
                </select>
              </div>
              <div className={styles.input_element}>
                <label htmlFor="title">Description</label>
                <textarea name="" id=""></textarea>
              </div>
            </div>
          </form>
          <button className={styles.close_btn} onClick={handleClose}>
            close
          </button>
        </div>
      </div>
    )
  );
};

export default ImageModal;
