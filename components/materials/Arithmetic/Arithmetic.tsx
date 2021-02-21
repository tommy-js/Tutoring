import React from "react";
import { MaterialsLink } from "../MaterialsLink/MaterialsLink";
import styles from "./styles.module.scss";

export const Arithmetic: React.FC = () => {
  return (
    <div className={styles.arithmetic}>
      <h1 className={styles.header}>Arithmetic</h1>
      <h2 className={styles.subheader}>
        Addition, subtraction, division, multiplication, fractions, negative
        numbers and more.
      </h2>
      <p className={styles.flair}>
        Sorry, we haven't added anything to our arithmetic course just yet!
      </p>
    </div>
  );
};
