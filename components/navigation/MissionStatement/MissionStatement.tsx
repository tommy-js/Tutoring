import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const MissionStatement: React.FC = () => {
  return (
    <Link href="/mission">
      <a className={styles.mission}>Mission</a>
    </Link>
  );
};
