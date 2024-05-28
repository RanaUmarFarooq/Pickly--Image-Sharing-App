import React, { useState } from "react";
import styles from "./MenuBar.module.css";
import { HiOutlineHome } from "react-icons/hi2";
import { MdFavoriteBorder, MdWindow } from "react-icons/md";

const MenuBar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClicked = (index) => {
    setSelectedItem(index);
    console.log(index);
  };
  const menuBar = [
    {
      name: "Home",
      icon: <HiOutlineHome />,
    },
    {
      name: "Favorite",
      icon: <MdFavoriteBorder />,
    },
    {
      name: "Personal Feed",
      icon: <MdWindow />,
    },
  ];
  return (
    <div>
      {menuBar.map((item, index) => (
        <div
          key={index}
          className={`${styles.menu_item} ${
            selectedItem === index ? styles.active : ""
          }`}
          onClick={() => handleItemClicked(index)}
        >
          <span
            className={`${styles.item_icon} ${
              selectedItem === index ? styles.activeIcon : ""
            }`}
          >
            {item.icon}
          </span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
