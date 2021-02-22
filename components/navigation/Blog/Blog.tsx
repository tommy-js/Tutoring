import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Blog: React.FC = () => {
  return (
    <Link href="/blog">
      <a className={styles.blog}>Blog</a>
    </Link>
  );
};
