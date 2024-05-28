import React, { useState } from "react";
import styles from "./Catagories.module.css";
import { Fa0 } from "react-icons/fa6";
import {
  PiCat,
  PiPaintBrushLight,
  PiHamburger,
  PiUser,
  PiCamera,
  PiSun,
  PiTShirt,
  PiPaintBrushHousehold,
  PiSkull,
} from "react-icons/pi";
import { SiTravisci } from "react-icons/si";

const Catagories = () => {
  const [selectedCatagory, setSelectedCatagory] = useState(-1);

  // ============= Function to select the Catagory =============
  const activeCatagory = (index) => {
    setSelectedCatagory(index);
    console.log(selectedCatagory);
  };

  const imgCatagories = [
    {
      name: "Animals",
      icon: <PiCat />,
    },
    {
      name: "Art",
      icon: <PiPaintBrushLight />,
    },
    {
      name: "Characters",
      icon: <PiUser />,
    },
    {
      name: "Food & Drinks",
      icon: <PiHamburger />,
    },
    {
      name: "Photography",
      icon: <PiCamera />,
    },
    {
      name: "Nature",
      icon: <PiSun />,
    },
    {
      name: "Sci-Fi",
      icon: <SiTravisci />,
    },
    {
      name: "T-Shirt Design",
      icon: <PiTShirt />,
    },
    {
      name: "Paintings",
      icon: <PiPaintBrushHousehold />,
    },
    {
      name: "Horror",
      icon: <PiSkull />,
    },
  ];
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Catagories</p>
      {imgCatagories.map((catagory, index) => (
        <div
          className={`${styles.catagory_item} ${
            selectedCatagory === index ? styles.active : ""
          }`}
          key={index}
          onClick={() => activeCatagory(index)}
        >
          <span className={styles.icon}>{catagory.icon}</span>
          <span>{catagory.name}</span>
        </div>
      ))}
      <hr className={styles.bottom_line} />
    </div>
  );
};

export default Catagories;
