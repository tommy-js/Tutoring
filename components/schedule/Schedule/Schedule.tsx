import React from "react";
import { Contact } from "../Contact/Contact";
import { OnlineScheduling } from "../OnlineScheduling/OnlineScheduling";
import styles from "./styles.module.scss";

export const Schedule: React.FC = () => {
  return (
    <div className={styles.schedule}>
      <Contact />
      <OnlineScheduling />
    </div>
  );
};
