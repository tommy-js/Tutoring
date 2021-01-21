import React from "react";
import styles from "./styles.module.scss";

export const TitleCard: React.FC = () => {
  return (
    <div className={styles.title_card}>
      <h1 className={styles.header}>
        Hi! My name is <span className={styles.name}>Tyler Blovat</span>
      </h1>
      <h2 className={styles.subscript}>
        I am a <span className={styles.tutor_flair}>professional tutor</span>,{" "}
        <span className={styles.developer_flair}>web developer</span>,{" "}
        <span className={styles.climber_flair}>rock climber</span>, and{" "}
        <span className={styles.learner_flair}>perpetual learner</span>.
      </h2>
    </div>
  );
};
