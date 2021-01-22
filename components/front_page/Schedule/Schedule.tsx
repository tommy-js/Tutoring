import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Schedule: React.FC = () => {
  return (
    <div className={styles.schedule}>
      <h1 className={styles.header}>Schedule Your Session</h1>
      <Link href="/schedule">
        <a className={styles.link}>Schedule a session here</a>
      </Link>
    </div>
  );
};
