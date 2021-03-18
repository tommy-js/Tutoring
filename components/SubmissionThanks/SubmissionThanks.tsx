import React from "react";
import styles from "./styles.module.scss";

export const SubmissionThanks: React.FC = () => {
  return (
    <div className={styles.submission_thanks}>
      <h1 className={styles.header}>Thanks for contacting us!</h1>
      <h2 className={styles.subheader}>We'll get back to you soon!</h2>
    </div>
  );
};
