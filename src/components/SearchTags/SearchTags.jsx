import React, { useRef, useState, useEffect } from "react";
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
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { SiTravisci } from "react-icons/si";
import { MdWindow } from "react-icons/md";
const SearchTags = () => {
  const scrollRef = useRef(null);
  const [isLeftButtonVisible, setLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setRightButtonVisible] = useState(true);
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const atEnd =
          container.scrollLeft >= container.scrollWidth - container.clientWidth;
        setRightButtonVisible(false);
        setLeftButtonVisible(true);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 600; // Adjust the scroll amount as needed
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 600; // Adjust the scroll amount as needed
    }
  };

  const handleTagClick = (index) => {
    setSelectedTagIndex(index);
  };

  const imgCatagories = [
    {
      name: "All",
      icon: <MdWindow />,
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
    <div className={styles.container} ref={scrollRef}>
      <ul className={styles.list_tags}>
        {imgCatagories.map((catagory, index) => (
          <li
            key={index}
            className={`${styles.tag_list_item} ${
              selectedTagIndex === index ? styles.selected : ""
            }`}
            onClick={() => handleTagClick(index)}
          >
            <span className={styles.icon}>{catagory.icon}</span>
            <span className={styles.text_tag}>{catagory.name}</span>
          </li>
        ))}
      </ul>
      {isLeftButtonVisible && (
        <div
          className={`${styles.scroll_button} ${styles.left}`}
          onClick={scrollLeft}
        >
          <span className={styles.scroll_icon}>
            <BsFillCaretLeftFill />
          </span>
        </div>
      )}
      {isRightButtonVisible && (
        <div
          className={`${styles.scroll_button} ${styles.right}`}
          onClick={scrollRight}
        >
          <span className={styles.scroll_icon}>
            <BsFillCaretRightFill />
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchTags;
