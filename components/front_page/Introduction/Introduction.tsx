import React from "react";
import styles from "./styles.module.scss";

export const Introduction: React.FC = () => {
  return (
    <div className={styles.introduction}>
      <h2 className={styles.header}>What Is Functional Tutoring?</h2>
      <p className={styles.text}>
        I began my career in tutoring as a peer tutor and teaching assistant at
        Dutchess Community College back in 2016. I absolutely fell in love with
        tutoring and now want nothing more than to share what I've learned with
        others. After taking a short break to work on my web-development
        skills(I built this site!), I've returned to the practice with the
        intention of providing high quality tutoring for less. I believe quality
        instruction should be accessible to all those who need it, in a
        timeframe and at a price-point that is reasonable.
      </p>
      <p className={styles.text}>
        To fill this niche, I created Functional Tutoring, which is my way of
        giving back to the community of mathematics students I learned with and
        helped only a few short years ago.
      </p>
    </div>
  );
};
