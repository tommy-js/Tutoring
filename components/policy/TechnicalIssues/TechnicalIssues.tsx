import React from "react";
import styles from "./styles.module.scss";

export const TechnicalIssues: React.FC = () => {
  return (
    <div className={styles.techical_issues}>
      <h2 className={styles.header}>Technical Issues</h2>
      <p className={styles.text}>
        Unfortunately, technical issues do sometimes happen. Whether they occur
        on my end or yours, the steps will be the same:
      </p>
      <ol className={styles.text}>
        <li>
          We will attempt to diagnose and solve these issues within a reasonable
          frame of time [~5-10 mins].
        </li>
        <li>
          If we cannot find a solution, we will reschedule to a later date and
          the student will be accredited any time lost.
        </li>
      </ol>
    </div>
  );
};
