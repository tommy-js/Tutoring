import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const MaterialsNav: React.FC = () => {
  return (
    <div className={styles.materials_nav}>
      <Link href="/materials">
        <a>Materials</a>
      </Link>
    </div>
  );
};
