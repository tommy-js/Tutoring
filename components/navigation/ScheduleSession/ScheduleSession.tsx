import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const ScheduleSession: React.FC = () => {
  return (
    <div className={styles.schedule_session}>
      <Link href="/schedule">
        <a>Schedule a Session</a>
      </Link>
    </div>
  );
};
