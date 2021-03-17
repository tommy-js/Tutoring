import React from "react";
import styles from "./styles.module.scss";

export const Cancellations: React.FC = () => {
  return (
    <div className={styles.cancellations}>
      <h2 className={styles.header}>
        What should I do if I need to cancel my session?
      </h2>
      <p className={styles.text}>
        No worries! Just let me know that you need to cancel at least a full day
        ahead of time. This helps me find another student to fill your spot,
        which allows me to make the money I need to keep doing what I love. If
        an emergency comes up and you need to cancel sooner, please give me a
        call when you have a moment so that I know not to wait on you.
      </p>
    </div>
  );
};
