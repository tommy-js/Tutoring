import React from "react";
import styles from "./styles.module.scss";

export const Geometry: React.FC = () => {
  return (
    <div className={styles.geometry}>
      <h1 className={styles.header}>Geometry</h1>
      <h2 className={styles.subheader}>
        The study of shapes and their properties
      </h2>
    </div>
  );
};
