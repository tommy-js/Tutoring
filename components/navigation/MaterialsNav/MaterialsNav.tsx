import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const MaterialsNav: React.FC = () => {
  return (
    <Link href="/materials">
      <a className={styles.materials_nav}>Materials</a>
    </Link>
  );
};
