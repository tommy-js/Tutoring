import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Signin: React.FC = () => {
  return (
    <Link href="/signin">
      <a className={styles.signin}>Sign in</a>
    </Link>
  );
};
