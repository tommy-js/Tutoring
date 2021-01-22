import React from "react";
import styles from "./styles.module.scss";

export const Phone: React.FC = () => {
  return (
    <div className={styles.phone}>
      Phone:{" "}
      <a href="tel:845-372-2933" className={styles.link}>
        #845-372-2933
      </a>
    </div>
  );
};
