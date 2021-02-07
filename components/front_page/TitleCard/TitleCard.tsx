import React from "react";
import styles from "./styles.module.scss";

export const TitleCard: React.FC = () => {
  return (
    <div className={styles.title_card}>
      <h1 className={styles.header}>
        Hi! My name is <span className={styles.name}>Tyler Blovat</span>
      </h1>
      <h2 className={styles.subscript}>
        I am a{" "}
        <span className={styles.tutor_flair}>
          professional mathematics tutor{" "}
        </span>
        with a passion for{" "}
        <span className={styles.developer_flair}>web development</span>,{" "}
        <span className={styles.climber_flair}>rock climbing</span>, and{" "}
        <span className={styles.learner_flair}>learning new things</span>.
      </h2>
    </div>
  );
};
