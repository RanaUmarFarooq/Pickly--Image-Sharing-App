import React from "react";
import styles from "./SearchTags.module.css";
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
const SearchTags = () => {
  const imgCatagories = [
    {
      name: "All",
      icon: <PiCat />,
    },
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
      <ul className={styles.list_tags}>
        {imgCatagories.map((catagory, index) => (
          <li key={index} className={styles.tag_list_item}>
            <span className={styles.icon}>{catagory.icon}</span>
            <span className={styles.text_tag}>{catagory.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTags;
