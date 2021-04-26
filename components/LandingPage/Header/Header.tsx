import React from "react";
import styles from "./styles.module.scss";

const image = require("../../../public/cap.jpg");

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>
        <h1 className={styles.heading}>
          Affordable Online Math Tutoring at Every Level
        </h1>
        <h2 className={styles.subheader}>Get your first session free!</h2>
      </div>
      <div className={styles.image_block}>
        <img src={image} className={styles.image} />
      </div>
      <div className={styles.drop_header}></div>
    </div>
  );
};
