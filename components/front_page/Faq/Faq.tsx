import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <div className={styles.faq}>
      <h1 className={styles.header}>Frequently Asked Questions</h1>
      <Link href="/faq">
        <a>Go here to see my frequently asked questions</a>
      </Link>
    </div>
  );
};
