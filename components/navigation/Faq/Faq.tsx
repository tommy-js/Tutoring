import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <Link href="/faq">
      <a className={styles.faq}>FAQ</a>
    </Link>
  );
};
