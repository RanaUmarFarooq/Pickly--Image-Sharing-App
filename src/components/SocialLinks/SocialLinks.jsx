import React from "react";
import styles from "./SocialLinks.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaTiktok, FaInstagram, FaReddit } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Reddit",
      icon: <FaReddit />,
      link: "https://www.facebook.com/umarfarooq.umarfarooq.3551",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.facebook.com/umarfarooq.umarfarooq.3551",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      link: "https://www.facebook.com/umarfarooq.umarfarooq.3551",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/umarfarooq.umarfarooq.3551",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      link: "https://www.facebook.com/umarfarooq.umarfarooq.3551",
    },
  ];
  return (
    <div className={styles.container}>
      {socialLinks.map((item, index) => (
        <span key={index} className={styles.icon}>
          {item.icon}
        </span>
      ))}
    </div>
  );
};

export default SocialLinks;
