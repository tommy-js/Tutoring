import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Policy: React.FC = () => {
  return (
    <Link href="/policy">
      <a className={styles.policy}>Policy</a>
    </Link>
  );
};
