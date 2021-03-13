import React from "react";
import styles from "./styles.module.scss";

const header = require("../../../public/header.jpg");

export const SubjectHeader: React.FC = () => {
  return (
    <div className={styles.subject_header}>
      <div className={styles.image_block}>
        <div className={styles.header}>
          <p className={styles.header_text}>Functional Tutoring</p>
          <p className={styles.header_subtext}>Understand more & spend less</p>
        </div>
        <img src={header} className={styles.image} />
        <div className={styles.under_header}>
          <p className={styles.under_header_text}>
            Offering Personalized 1-on-1 Tutoring for as Little as $40!
          </p>
        </div>
        <div className={styles.drop_header}></div>
      </div>
    </div>
  );
};
