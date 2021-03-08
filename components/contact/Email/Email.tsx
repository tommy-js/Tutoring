import React from "react";
import styles from "./styles.module.scss";

const email = require("../../../public/email.png");

export const Email: React.FC = () => {
  return (
    <div className={styles.email}>
      <div className={styles.image_block}>
        <img src={email} className={styles.image} />
      </div>
      <a href="mailto:Tyler@FunctionalTutoring.com" className={styles.link}>
        Tyler@FunctionalTutoring.com
      </a>
    </div>
  );
};
