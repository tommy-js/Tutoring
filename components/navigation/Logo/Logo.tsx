import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>Tyler Blovat</a>
      </Link>
    </div>
  );
};
