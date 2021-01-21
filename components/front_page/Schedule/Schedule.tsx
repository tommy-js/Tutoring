import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Schedule: React.FC = () => {
  return (
    <div className={styles.schedule}>
      <h2>Schedule Your Session</h2>
      <Link href="/schedule">
        <a>Schedule a session here</a>
      </Link>
    </div>
  );
};
