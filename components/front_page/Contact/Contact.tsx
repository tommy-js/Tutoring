import React from "react";

import { Email } from "../../contact/Email/Email";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <p>Currently, the best way to contact me is through email:</p>
      <Email />
    </div>
  );
};
