import React from "react";
import styles from "./styles.module.scss";

export const Signin: React.FC = () => {
  return (
    <div className={styles.signin}>
      <h1 className={styles.header}>Sign in to your account</h1>
      <input
        type="text"
        className={styles.signin_input}
        placeholder="Student ID"
      />
      <button className={styles.button}>Sign in</button>
    </div>
  );
};
