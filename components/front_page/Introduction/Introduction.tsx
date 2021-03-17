import React from "react";
import styles from "./styles.module.scss";

export const Introduction: React.FC = () => {
  return (
    <div className={styles.introduction}>
      <h2 className={styles.header}>
        Affordable Math Tutoring When You Need It
      </h2>

      <p className={styles.text}>
        I began my tutoring career at Dutchess Community College back in 2016.
        At the time, I mostly helped struggling new college students with their
        algebra and trigonometry, although I did tutor some calculus. I
        absolutely fell in love with tutoring and now believe that it's my
        calling in life.
      </p>
      <p className={styles.text}>
        I created Functional Tutoring in order to continue doing what I love:
        helping others in a genuine way.
      </p>
    </div>
  );
};
