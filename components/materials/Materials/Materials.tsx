import React from "react";
import { FullCourseList } from "../FullCourseList/FullCourseList";
import styles from "./styles.module.scss";

export const Materials: React.FC = () => {
  return (
    <div className={styles.materials}>
      <FullCourseList />
    </div>
  );
};
