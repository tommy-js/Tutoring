import React from "react";
import styles from "./styles.module.scss";

export const Algebra1: React.FC = () => {
  return (
    <div className={styles.algebra1}>
      <h1 className={styles.header}>Algebra 1</h1>
      <h2 className={styles.subheader}>
        The first of two parts exploring functions, expressions, systems of
        equations, and more!
      </h2>
    </div>
  );
};
