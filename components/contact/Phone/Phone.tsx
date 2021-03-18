import React from "react";
import styles from "./styles.module.scss";

const phone = require("../../../public/phone.png");

export const Phone: React.FC = () => {
  return (
    <div className={styles.phone}>
      <h2 className={styles.header}>Don't want to wait? Call me</h2>
      <div className={styles.image_link_tie}>
        <div className={styles.image_block}>
          <img src={phone} className={styles.image} />
        </div>
        <a href="tel:845-372-2933" className={styles.link}>
          #845-372-2933
        </a>
      </div>
    </div>
  );
};
