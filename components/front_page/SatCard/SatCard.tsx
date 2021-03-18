import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const sat = require("../../../public/sat_header.png");

export const SatCard: React.FC = () => {
  return (
    <Link href="/schedule">
      <div className={styles.sat_card}>
        <img src={sat} className={styles.card} />
      </div>
    </Link>
  );
};
