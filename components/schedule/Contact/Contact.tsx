import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.header}>Schedule Your Session!</h1>
      <p className={styles.subheader}>
        Need to speak with me directly?{" "}
        <Link href="/contact">
          <a>Click here!</a>
        </Link>
      </p>
    </div>
  );
};
