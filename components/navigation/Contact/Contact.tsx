import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Contact: React.FC = () => {
  return (
    <Link href="/contact">
      <a className={styles.contact}>Contact</a>
    </Link>
  );
};
