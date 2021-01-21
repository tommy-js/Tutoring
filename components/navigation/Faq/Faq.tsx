import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <div className={styles.faq}>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
    </div>
  );
};
