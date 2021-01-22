import React from "react";
import styles from "./styles.module.scss";

export const PreCalc: React.FC = () => {
  return (
    <div className={styles.precalc}>
      <h1 className={styles.header}>Pre-Calc</h1>
      <h2 className={styles.subheader}>
        A review of functions, trigonometry, basic geometry, and more!
      </h2>
    </div>
  );
};
