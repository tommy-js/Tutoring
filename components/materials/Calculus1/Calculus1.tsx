import React from "react";
import styles from "./styles.module.scss";

export const Calculus1: React.FC = () => {
  return (
    <div className={styles.calculus1}>
      <h1 className={styles.header}>Calculus 1</h1>
      <h2 className={styles.subheader}>
        Limits, derivatives, discontinuities, basics of integration, L’Hôpital’s
        rule, etc...
      </h2>
    </div>
  );
};
