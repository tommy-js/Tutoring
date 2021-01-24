import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const ScheduleSession: React.FC = () => {
  return (
    <Link href="/schedule">
      <a className={styles.schedule_session}>Schedule</a>
    </Link>
  );
};
