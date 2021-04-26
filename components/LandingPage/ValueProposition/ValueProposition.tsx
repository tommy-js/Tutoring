import React from "react";
import styles from "./styles.module.scss";

const checkmark = require("../../../public/gold_checkmark.png");

export const ValueProposition: React.FC = () => {
  return (
    <div className={styles.value_proposition}>
      <div className={styles.left_container}>
        <p className={styles.flair}>The only math tutoring you'll ever need</p>
      </div>
      <div className={styles.right_container}>
        <p className={styles.right_header}>What you can expect from us:</p>
        <div className={styles.bullet}>
          <div className={styles.check_image}>
            <img src={checkmark} className={styles.image} />
          </div>
          <p className={styles.bullet_text}>
            Free first session with no commitment
          </p>
        </div>
        <div className={styles.bullet}>
          <div className={styles.check_image}>
            <img src={checkmark} className={styles.image} />
          </div>
          <p className={styles.bullet_text}>
            Qualified tutor with 3 years experience
          </p>
        </div>
        <div className={styles.bullet}>
          <div className={styles.check_image}>
            <img src={checkmark} className={styles.image} />
          </div>
          <p className={styles.bullet_text}>Highly available</p>
        </div>
        <div className={styles.bullet}>
          <div className={styles.check_image}>
            <img src={checkmark} className={styles.image} />
          </div>
          <p className={styles.bullet_text}>
            Determined to see you or your child succeed!
          </p>
        </div>
        <div className={styles.bullet}>
          <div className={styles.check_image}>
            <img src={checkmark} className={styles.image} />
          </div>
          <p className={styles.bullet_text}>1-on-1 personalized sessions</p>
        </div>
      </div>
    </div>
  );
};
