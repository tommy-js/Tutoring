import React from "react";
import { Calendar } from "../Calendar/Calendar";
import styles from "./styles.module.scss";

export const OnlineScheduling: React.FC = () => {
  return (
    <div className={styles.online_scheduling}>
      <Calendar />
    </div>
  );
};
