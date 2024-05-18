import React from "react";
import { Fa0 } from "react-icons/fa6";
import styles from "./Catagories.module.css";
const Catagories = () => {
  const imgCatagories = [
    {
      name: "Art",
      icon: <Fa0 />,
    },
    {
      name: "Art",
      icon: <Fa0 />,
    },
    {
      name: "Art",
      icon: <Fa0 />,
    },
    {
      name: "Art",
      icon: <Fa0 />,
    },
    {
      name: "Art",
      icon: <Fa0 />,
    },
    {
      name: "Art",
      icon: <Fa0 />,
    },
    {
      name: "Art",
      icon: <Fa0 />,
    },
  ];
  return (
    <div>
      <p>Catagories</p>
      {imgCatagories.map((catagory, index) => (
        <div className={styles.catagory_item}>
          {catagory.icon}
          <span>{catagory.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Catagories;
