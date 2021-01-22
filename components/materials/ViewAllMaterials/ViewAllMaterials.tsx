import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const ViewAllMaterials: React.FC = () => {
  return (
    <Link href="/materials/all">
      <a className={styles.view_all_materials}>View all materials</a>
    </Link>
  );
};
