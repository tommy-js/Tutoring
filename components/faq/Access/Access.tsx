import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Access: React.FC = () => {
  return (
    <div className={styles.access}>
      <h2 className={styles.header}>
        How do I get access to your practice problems and documents?
      </h2>
      <p className={styles.text}>
        Everyone has access to these practice problems and documents for free.
        Just go to{" "}
        <Link href="/materials">
          <a className={styles.link}>our library</a>
        </Link>{" "}
        and get started!
      </p>
    </div>
  );
};
