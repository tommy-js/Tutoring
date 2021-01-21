import React, { useState } from "react";
import styles from "./styles.module.scss";

export const WelcomeHeader: React.FC = () => {
  const [name, setName] = useState("Karen");

  return (
    <div className={styles.welcome_header}>
      <h1 className={styles.header}>
        Welcome <span className={styles.name_flair}>{name}</span>!
      </h1>
    </div>
  );
};
