import React from "react";
import * as fbq from "../../FacebookPixel/fpixel";
import Link from "next/link";
import styles from "./styles.module.scss";

export const ScheduleSession: React.FC = () => {
  function handleClick() {
    fbq.event("track", "Schedule");
  }

  return (
    <div className={styles.schedule_session}>
      <h2 className={styles.header}>Sign Up For Your Session!</h2>
      <Link href="/schedule">
        <button onClick={() => handleClick()} className={styles.button}>
          Schedule Me
        </button>
      </Link>
    </div>
  );
};
