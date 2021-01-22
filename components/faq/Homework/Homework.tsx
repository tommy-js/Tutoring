import React from "react";
import styles from "./styles.module.scss";

export const Homework: React.FC = () => {
  return (
    <div>
      <h2 className={styles.header}>Will you do my homework for me?</h2>
      <p className={styles.text}>
        I will gladly walk you through similar problems to the ones on your
        homework. I will not, however, do your homework for you. The most
        important thing for me is that you properly understand the material.
      </p>
    </div>
  );
};
