import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const ScheduleSession: React.FC = () => {
  return (
    <div className={styles.schedule_session}>
      <h1 className={styles.header}>Sign Up For Your Session!</h1>
      <Link href="/schedule">
        <button className={styles.button}>Schedule Me</button>
      </Link>
    </div>
  );
};
