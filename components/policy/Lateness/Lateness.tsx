import React from "react";
import styles from "./styles.module.scss";

export const Lateness: React.FC = () => {
  return (
    <div className={styles.lateness}>
      <h2 className={styles.header}>Lateness</h2>
      <p className={styles.text}>
        When a student signs up for a session, there is an expectation that they
        will arrive on time for the session. This is their assigned time. As
        such, I will not reduce the price of the session if the student arrives
        late, nor will I extend our time past what was agreed upon.
      </p>
    </div>
  );
};
