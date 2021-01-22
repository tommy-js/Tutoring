import React from "react";
import styles from "./styles.module.scss";

export const Email: React.FC = () => {
  return (
    <div className={styles.email}>
      Email:{" "}
      <a href="mailto:Tyler@FunctionalTutoring.com" className={styles.link}>
        Tyler@FunctionalTutoring.com
      </a>
    </div>
  );
};
