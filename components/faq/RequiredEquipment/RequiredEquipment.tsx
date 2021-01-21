import React from "react";
import styles from "./styles.module.scss";

export const RequiredEquipment: React.FC = () => {
  return (
    <div className={styles.required_equipment}>
      <h2 className={styles.header}>What do I need for my session?</h2>
      <p className={styles.text}>
        You only need a few things for your tutoring session:
      </p>
      <ul>
        <li>A webcam and microphone</li>
        <li>
          A quiet location where our full attention can be devoted to the work
        </li>
        <li>A pen and some paper</li>
        <li>A good, reliable internet connection</li>
      </ul>
    </div>
  );
};
