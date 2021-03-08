import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.header}>Contact Me</h2>
      <h3 className={styles.subheader}>Want to get in touch?</h3>
      <div className={styles.button_block}>
        <Link href="/contact">
          <button className={styles.button}>Call or Email</button>
        </Link>
      </div>
    </div>
  );
};
