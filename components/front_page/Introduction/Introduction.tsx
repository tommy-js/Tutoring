import React from "react";
import styles from "./styles.module.scss";

export const Introduction: React.FC = () => {
  return (
    <div className={styles.introduction}>
      <h2 className={styles.header}>About Functional Tutoring</h2>
      <p className={styles.text}>
        After taking a brief hiatus from tutoring, I've returned to the practice
        with the intention of providing high quality tutoring for less. Having
        begun my tutoring career as a peer tutor and teaching assistant at
        Dutchess Community College, I believe high quality instruction should be
        accessible to those who need it, in a timeframe that's reasonable.
      </p>
      <p className={styles.text}>
        For this reason, I created Functional Tutoring, which is my way of
        giving back to the community of mathematics students I learned with only
        a few short years ago.
      </p>
    </div>
  );
};
