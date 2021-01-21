import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Pricing: React.FC = () => {
  return (
    <Link href="/pricing">
      <a className={styles.pricing}>Pricing</a>
    </Link>
  );
};
