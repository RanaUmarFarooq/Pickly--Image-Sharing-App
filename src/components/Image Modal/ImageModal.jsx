import React from "react";
import styles from "./ImageModal.module.css";
const ImageModal = ({ show, handleClose, handleSubmit }) => {
  return (
    show && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <form action="">
            <div className={styles.image_Input_container}>
              <h3>Image</h3>
            </div>
            <div className={styles.image_details_container}>
              <h3>input</h3>
            </div>
          </form>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    )
  );
};

export default ImageModal;
