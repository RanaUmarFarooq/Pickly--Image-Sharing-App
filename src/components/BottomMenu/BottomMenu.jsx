import React from "react";
import styles from "./BottomMenu.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdOutlinePaid } from "react-icons/md";
import { LuFileTerminal } from "react-icons/lu";
const BottomMenu = () => {
  const menuItems = [
    {
      name: "Premium Plans",
      icon: <MdOutlinePaid />,
    },
    {
      name: "Setting",
      icon: <IoSettingsOutline />,
    },
    {
      name: "Terms & Conditions",
      icon: <LuFileTerminal />,
    },
    {
      name: "Logout",
      icon: <TbLogout />,
    },
  ];
  return (
    <div className={styles.container}>
      {menuItems.map((catagory, index) => (
        <div
          className={`${styles.menu_item} ${
            index === menuItems.length - 1 ? styles.lastItem : ""
          }`}
          key={index}
        >
          <span className={styles.icon}>{catagory.icon}</span>
          <span>{catagory.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomMenu;
