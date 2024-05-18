import React from "react";
import styles from "./MenuBar.module.css";
import { FaHome } from "react-icons/fa";
const MenuBar = () => {
  const menuBar = [
    {
      name: "Home",
      icon: <FaHome />,
    },
    {
      name: "Favorite",
      icon: <FaHome />,
    },
    {
      name: "Personal Feed",
      icon: <FaHome />,
    },
  ];
  return (
    <div>
      {menuBar.map((item, index) => (
        <div key={index} className={styles.menu_item}>
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
