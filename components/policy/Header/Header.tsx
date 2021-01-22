import React from "react";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Policy</h1>
      <h2 className={styles.subtitle}>
        This is the policy students agree to when receiving tutoring from me. I
        prefer to have a very clear policy so that expectations are set and
        there are no surprises for either party.
      </h2>
    </div>
  );
};
